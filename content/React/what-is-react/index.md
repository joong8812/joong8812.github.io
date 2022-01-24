---
emoji: 🧐
title: 리액트(React), 누구세요?
date: '2022-01-24 10:30:00'
author: 코딩쿠니
tags: React
categories: REACT
--- 

## 리액트(React), 누구세요?
[공식홈페이지](https://reactjs.org/)의 정의를 보자.
> A JavaScript library for building user interfaces   
> Declarative
>> React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
> Component-Based
>> Build encapsulated components that manage their own state, then compose them to make complex UIs. 
> Learn Once, Write Anywhere
>> We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
(쿠니번역🤖 )   
* 유저 인터페이스(UI)를 위한 자바스크립트 라이브러리
* 선언적 (Declarative)
  * 리액트(React)는 상호작용 UI를 편하게 만들어 준다. 어플리케이션의 각 상태를 위한 간단한 뷰들을 디자인 할 수 있고, 어떤 값의 변화가 있을 때 효율적으로 해당하는 컴포넌트를 업데이트 해주고 화면에 표시해준다.
* 컴포넌트 기반 (Component-Based)
  * 각 상태를 관리하고, 그것으로 복잡한 UI를 만드는 컴포넌트들을 은닉화(encapsulated)하여 만든다.
* 한 번 작성하여, 어디든 사용할 수 있다.
  * 우리는 당신의 나머지 기술에 대해 신경쓰지 않는다. 기존에 존재하는 코드를 다시 작성할 필요 없이 리액트로 새로운 기능들을 개발 할 수 있다.

종합해보면 리액트에서 제공하는 모듈을 통해 손쉽게 인터렉티브한 웹 어플리케이션 화면을 구성할 수 있는 것 같다. 기존 Html+Javscript 와 React로 동일한 어플리케이션을 만들었을 때 어떤 차이가 있는 지 살펴보자.

## 바닐라 자바스크립트(Vanilla JS) vs 리액트(React)
버튼을 누르면 카운트가 되는 어플리케이션 코드를 통해 리액트의 장점을 살펴보자.
* 바닐라 자바스크립트(Vaniall JS) 코드
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <span>Total clicks: 0</span>
    <button id="btn">Click me</button>
    <script>
        let counter = 0;
        const button = document.getElementById("btn");
        const span = document.querySelector("span");
        function handleClick() {
            counter = counter + 1;
            span.innerText = `Total clicks: ${counter}`;
        }
        button.addEventListener("click", handleClick);
    </script>
</body>
</html>
```
* 리액트(React) 코드
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="root"></div>
</body>
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    const root = document.getElementById("root");
    function App(){
        const [counter, setCounter] = React.useState(0);
        const onClick = () => {
            setCounter(counter + 1);
        }
        return (
            <div>
                <h3>Total clicks: {counter}</h3>
                <button onClick={onClick}>Click me</button>
            </div>
        );
    }
    ReactDOM.render(<App />, root);
</script>
</html>
```
### 리액트(React) 코드 뜯어보자
1. 3개의 자바스크립트 파일(React, ReactDOM, Babel)을 임포트 시켰다. 이 사이에 Babel이 들어간다.
```html
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```
2. `React`를 통해 React방식으로 html요소들을 만들고 값의 상태를 관리하고 업데이트 된 것을 전달 해준다.
```javascript
    function App(){
        const [counter, setCounter] = React.useState(0); // React 제공, 변수 값 관리, 변화된 값 렌더(render)까지 한다
        const onClick = () => { // 버튼을 클릭하면
            setCounter(counter + 1);    // counter변수가 1씩 증가
        }
        return (    // React 제공, 컴포넌트(html 요소)들을 만든다 실제로 html에서 작성하는 것과 비슷하다.
            <div>
                <h3>Total clicks: {counter}</h3>
                <button onClick={onClick}>Click me</button>
            </div>
        );
    }
```
`React.useState`는 [state, setState] 의 형태를 가진 object이다. 첫번째 인자는 변수값을 갖고, 두번째 인자는 첫번째 인자 값을 변화 시켜주는 함수다. 코드에서는 `React.useState(0)`으로 counter값을 0으로 초기화 해주고, `setCounter(counert+1)`로 counter값을 함수 호출할 때마다 1씩 증가 시켜준다.   

3. `ReactDOM`을 통해 `React`로 만든 컴포넌트들을 실제 html로 넣어준다.
```javascript
ReactDOM.render(<App />, root); // root div에 React component(실제론 html 요소들)를 넣는다
```

4. React와 ReactDOM 사이에 [`Babel(Javascript Compiler)`](https://babeljs.io/)이 들어간다
```html
<script type="text/babel">
    (생략)
</script>
```
사실 위에 작성된 React Component들은 한 번 더 감싸진 것이다. 아래 코드를 통해 명확하게 살펴보자.
```javascript
// original
React.createElement("div", null, 
    React.create("h3", null, "Total Clicks: ", counter),
    React.create("button", {onClick: onClick}, "Click me")
)

// JSX
<div>
    <h3>Total clicks: {counter}</h3>
    <button onClick={onClick}>Click me</button>
</div>
```
그렇다. 사실 `ReactDOM`은 original형식의 컴포넌트들을 html로 렌더(redner) 해주는 것이다. Babel의 역할은 JSX(javascript 영역에서 html식으로 표현)를 original형식으로 변경 해 주는 것이다.

## 총평
* Javascript(React)로 html을 구성 해 보았다.
* React의 useState를 사용하면 Vanilla JS로 구현할 때와 달리 변화된 변수값만 다시 렌더 해준다고 한다. (엄청난 효율!!)
* 아직까지는 익숙치 않아서 그런지 React가 더 복잡한 느낌이다. 조금 더 알아 가보자.

도움(출처): https://nomadcoders.co/react-for-beginners/lobby