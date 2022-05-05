---
emoji: 🙃
title: (TIL) React - 에러메시지를 띄우기 위한 re-render 어떻게?
date: '2022-05-05 23:59:59'
author: 코딩쿠니
tags: TIL REACT
categories: TIL REACT
---

## 에러메시지를 띄우기 위한 re-render 어떻게?
### 개요
스파르타 공모전에 참여하여 되었다. 지금은 `로그인 페이지`를 만들고 있다. 아직 서버로 요청하는 부분은 작업하지 않았고 custom hook을 만들어 이메일과 패스워드 정보에 대한 유효성검사를 하는 부분까지 작업하였다. 이메일 형식에 맞지 않는 값을 입력하거나 비밀번호를 공란으로 둔 채 로그인 버튼을 누르면 에러메시지가 나와야하는데, 이게 `re-render`를 할 경우 짜여진 코드에 의해서 에러메시지가 나올 텐데 어떻게 해야할 지 고민이 되었다. [더미 state를 만들어 그 state를 변화시키는 방식으로 re-render를 하는 글](https://db2dev.tistory.com/entry/React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B0%95%EC%A0%9C-Re-render%ED%95%98%EA%B8%B0-re-render-%EC%9B%90%EB%A6%AC%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9D%B4%ED%95%B4)을 보았으나 이는 좋지 않은 구조라고 글쓴이가 얘기를 해서 고민 끝에 아래와 같이 코드를 작성하여 해결하였다.

### 나의코드
```javascript
import React from "react";
import { Link } from "react-router-dom";
import useInput from "../../hooks/use-input";

import classes from "./Login.module.css";

const isEmail = (value) => value.includes("@");
const isNotEmpty = (value) => value.trim() !== "";

const Login = () => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: pwValue,
    isValid: pwIsValid,
    hasError: pwHasError,
    valueChangeHandler: pwChangeHandler,
    inputBlurHandler: pwBlurHandler,
    reset: resetPw,
  } = useInput(isNotEmpty);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!emailIsValid) {
      emailBlurHandler()
      return
    }

    if (!pwIsValid) {
      pwBlurHandler()
      return
    }

    resetEmail();
    resetPw();
  };

  return (
    <section>
      <div>로고</div>
      <form onSubmit={submitHandler}>
        <div className={classes["form-control"]}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && <p className={classes["error-text"]}>유효한 이메일을 입력해주세요.</p>}
        </div>
        <div className={classes["form-control"]}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            value={pwValue}
            onChange={pwChangeHandler}
            onBlur={pwBlurHandler}
          />
          {pwHasError && <p className={classes['error-text']}>비밀번호를 입력해주세요.</p>}
        </div>
        <div className={classes["button-wrapper"]}>
          <button>Login</button>
        </div>
        <div className={classes["link-wrapper"]}>
          <Link className={classes["a-style"]} to="/signup">
            RountineWave 가입하기
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
```
submitHandler함수는 로그인 버튼을 클릭 시 호출되는 함수인데, 이메일이나 비밀번호가 유효하지 않으면 blur가(입력 필드에 포커스아웃) 될 때 호출하는 함수를 콜하게 하였다. 이렇게 되면 함수 콜에 의해 reducer에 action과 특정 state의 변화가 이루어져 다시 `re-render`하게 된다. 그럼 현재 유효하지 않은 로그인 입력 필드에 에러메시지가 생긴다.


```toc
```