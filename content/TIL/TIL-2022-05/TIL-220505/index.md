---
emoji: ๐
title: (TIL) React - ์๋ฌ๋ฉ์์ง๋ฅผ ๋์ฐ๊ธฐ ์ํ re-render ์ด๋ป๊ฒ?
date: '2022-05-05 23:59:59'
author: ์ฝ๋ฉ์ฟ ๋
tags: TIL REACT
categories: TIL REACT
---

## ์๋ฌ๋ฉ์์ง๋ฅผ ๋์ฐ๊ธฐ ์ํ re-render ์ด๋ป๊ฒ?
### ๊ฐ์
์คํ๋ฅดํ ๊ณต๋ชจ์ ์ ์ฐธ์ฌํ์ฌ ๋์๋ค. ์ง๊ธ์ `๋ก๊ทธ์ธ ํ์ด์ง`๋ฅผ ๋ง๋ค๊ณ  ์๋ค. ์์ง ์๋ฒ๋ก ์์ฒญํ๋ ๋ถ๋ถ์ ์์ํ์ง ์์๊ณ  custom hook์ ๋ง๋ค์ด ์ด๋ฉ์ผ๊ณผ ํจ์ค์๋ ์ ๋ณด์ ๋ํ ์ ํจ์ฑ๊ฒ์ฌ๋ฅผ ํ๋ ๋ถ๋ถ๊น์ง ์์ํ์๋ค. ์ด๋ฉ์ผ ํ์์ ๋ง์ง ์๋ ๊ฐ์ ์๋ ฅํ๊ฑฐ๋ ๋น๋ฐ๋ฒํธ๋ฅผ ๊ณต๋์ผ๋ก ๋ ์ฑ ๋ก๊ทธ์ธ ๋ฒํผ์ ๋๋ฅด๋ฉด ์๋ฌ๋ฉ์์ง๊ฐ ๋์์ผํ๋๋ฐ, ์ด๊ฒ `re-render`๋ฅผ ํ  ๊ฒฝ์ฐ ์ง์ฌ์ง ์ฝ๋์ ์ํด์ ์๋ฌ๋ฉ์์ง๊ฐ ๋์ฌ ํ๋ฐ ์ด๋ป๊ฒ ํด์ผํ  ์ง ๊ณ ๋ฏผ์ด ๋์๋ค. [๋๋ฏธ state๋ฅผ ๋ง๋ค์ด ๊ทธ state๋ฅผ ๋ณํ์ํค๋ ๋ฐฉ์์ผ๋ก re-render๋ฅผ ํ๋ ๊ธ](https://db2dev.tistory.com/entry/React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B0%95%EC%A0%9C-Re-render%ED%95%98%EA%B8%B0-re-render-%EC%9B%90%EB%A6%AC%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9D%B4%ED%95%B4)์ ๋ณด์์ผ๋ ์ด๋ ์ข์ง ์์ ๊ตฌ์กฐ๋ผ๊ณ  ๊ธ์ด์ด๊ฐ ์๊ธฐ๋ฅผ ํด์ ๊ณ ๋ฏผ ๋์ ์๋์ ๊ฐ์ด ์ฝ๋๋ฅผ ์์ฑํ์ฌ ํด๊ฒฐํ์๋ค.

### ๋์์ฝ๋
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
      <div>๋ก๊ณ </div>
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
          {emailHasError && <p className={classes["error-text"]}>์ ํจํ ์ด๋ฉ์ผ์ ์๋ ฅํด์ฃผ์ธ์.</p>}
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
          {pwHasError && <p className={classes['error-text']}>๋น๋ฐ๋ฒํธ๋ฅผ ์๋ ฅํด์ฃผ์ธ์.</p>}
        </div>
        <div className={classes["button-wrapper"]}>
          <button>Login</button>
        </div>
        <div className={classes["link-wrapper"]}>
          <Link className={classes["a-style"]} to="/signup">
            RountineWave ๊ฐ์ํ๊ธฐ
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
```
submitHandlerํจ์๋ ๋ก๊ทธ์ธ ๋ฒํผ์ ํด๋ฆญ ์ ํธ์ถ๋๋ ํจ์์ธ๋ฐ, ์ด๋ฉ์ผ์ด๋ ๋น๋ฐ๋ฒํธ๊ฐ ์ ํจํ์ง ์์ผ๋ฉด blur๊ฐ(์๋ ฅ ํ๋์ ํฌ์ปค์ค์์) ๋  ๋ ํธ์ถํ๋ ํจ์๋ฅผ ์ฝํ๊ฒ ํ์๋ค. ์ด๋ ๊ฒ ๋๋ฉด ํจ์ ์ฝ์ ์ํด reducer์ action๊ณผ ํน์  state์ ๋ณํ๊ฐ ์ด๋ฃจ์ด์ ธ ๋ค์ `re-render`ํ๊ฒ ๋๋ค. ๊ทธ๋ผ ํ์ฌ ์ ํจํ์ง ์์ ๋ก๊ทธ์ธ ์๋ ฅ ํ๋์ ์๋ฌ๋ฉ์์ง๊ฐ ์๊ธด๋ค.


```toc
```