---
emoji: ๐ง
title: ๋ฆฌ์กํธ(React), ๋๊ตฌ์ธ์?
date: '2022-01-24 10:30:00'
author: ์ฝ๋ฉ์ฟ ๋
tags: React
categories: REACT
--- 

## ๋ฆฌ์กํธ(React), ๋๊ตฌ์ธ์?
[๊ณต์ํํ์ด์ง](https://reactjs.org/)์ ์ ์๋ฅผ ๋ณด์.
> A JavaScript library for building user interfaces   
> Declarative
>> React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
> Component-Based
>> Build encapsulated components that manage their own state, then compose them to make complex UIs. 
> Learn Once, Write Anywhere
>> We donโt make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
(์ฟ ๋๋ฒ์ญ๐ค )   
* ์ ์  ์ธํฐํ์ด์ค(UI)๋ฅผ ์ํ ์๋ฐ์คํฌ๋ฆฝํธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ
* ์ ์ธ์  (Declarative)
  * ๋ฆฌ์กํธ(React)๋ ์ํธ์์ฉ UI๋ฅผ ํธํ๊ฒ ๋ง๋ค์ด ์ค๋ค. ์ดํ๋ฆฌ์ผ์ด์์ ๊ฐ ์ํ๋ฅผ ์ํ ๊ฐ๋จํ ๋ทฐ๋ค์ ๋์์ธ ํ  ์ ์๊ณ , ์ด๋ค ๊ฐ์ ๋ณํ๊ฐ ์์ ๋ ํจ์จ์ ์ผ๋ก ํด๋นํ๋ ์ปดํฌ๋ํธ๋ฅผ ์๋ฐ์ดํธ ํด์ฃผ๊ณ  ํ๋ฉด์ ํ์ํด์ค๋ค.
* ์ปดํฌ๋ํธ ๊ธฐ๋ฐ (Component-Based)
  * ๊ฐ ์ํ๋ฅผ ๊ด๋ฆฌํ๊ณ , ๊ทธ๊ฒ์ผ๋ก ๋ณต์กํ UI๋ฅผ ๋ง๋๋ ์ปดํฌ๋ํธ๋ค์ ์๋ํ(encapsulated)ํ์ฌ ๋ง๋ ๋ค.
* ํ ๋ฒ ์์ฑํ์ฌ, ์ด๋๋  ์ฌ์ฉํ  ์ ์๋ค.
  * ์ฐ๋ฆฌ๋ ๋น์ ์ ๋๋จธ์ง ๊ธฐ์ ์ ๋ํด ์ ๊ฒฝ์ฐ์ง ์๋๋ค. ๊ธฐ์กด์ ์กด์ฌํ๋ ์ฝ๋๋ฅผ ๋ค์ ์์ฑํ  ํ์ ์์ด ๋ฆฌ์กํธ๋ก ์๋ก์ด ๊ธฐ๋ฅ๋ค์ ๊ฐ๋ฐ ํ  ์ ์๋ค.

์ขํฉํด๋ณด๋ฉด ๋ฆฌ์กํธ์์ ์ ๊ณตํ๋ ๋ชจ๋์ ํตํด ์์ฝ๊ฒ ์ธํฐ๋ ํฐ๋ธํ ์น ์ดํ๋ฆฌ์ผ์ด์ ํ๋ฉด์ ๊ตฌ์ฑํ  ์ ์๋ ๊ฒ ๊ฐ๋ค. ๊ธฐ์กด Html+Javscript ์ React๋ก ๋์ผํ ์ดํ๋ฆฌ์ผ์ด์์ ๋ง๋ค์์ ๋ ์ด๋ค ์ฐจ์ด๊ฐ ์๋ ์ง ์ดํด๋ณด์.

## ๋ฐ๋๋ผ ์๋ฐ์คํฌ๋ฆฝํธ(Vanilla JS) vs ๋ฆฌ์กํธ(React)
๋ฒํผ์ ๋๋ฅด๋ฉด ์นด์ดํธ๊ฐ ๋๋ ์ดํ๋ฆฌ์ผ์ด์ ์ฝ๋๋ฅผ ํตํด ๋ฆฌ์กํธ์ ์ฅ์ ์ ์ดํด๋ณด์.
* ๋ฐ๋๋ผ ์๋ฐ์คํฌ๋ฆฝํธ(Vaniall JS) ์ฝ๋
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
* ๋ฆฌ์กํธ(React) ์ฝ๋
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
### ๋ฆฌ์กํธ(React) ์ฝ๋ ๋ฏ์ด๋ณด์
1. 3๊ฐ์ ์๋ฐ์คํฌ๋ฆฝํธ ํ์ผ(React, ReactDOM, Babel)์ ์ํฌํธ ์์ผฐ๋ค. ์ด ์ฌ์ด์ Babel์ด ๋ค์ด๊ฐ๋ค.
```html
<script src="https://unpkg.com/react@17.0.2/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```
2. `React`๋ฅผ ํตํด React๋ฐฉ์์ผ๋ก html์์๋ค์ ๋ง๋ค๊ณ  ๊ฐ์ ์ํ๋ฅผ ๊ด๋ฆฌํ๊ณ  ์๋ฐ์ดํธ ๋ ๊ฒ์ ์ ๋ฌ ํด์ค๋ค.
```javascript
    function App(){
        const [counter, setCounter] = React.useState(0); // React ์ ๊ณต, ๋ณ์ ๊ฐ ๊ด๋ฆฌ, ๋ณํ๋ ๊ฐ ๋ ๋(render)๊น์ง ํ๋ค
        const onClick = () => { // ๋ฒํผ์ ํด๋ฆญํ๋ฉด
            setCounter(counter + 1);    // counter๋ณ์๊ฐ 1์ฉ ์ฆ๊ฐ
        }
        return (    // React ์ ๊ณต, ์ปดํฌ๋ํธ(html ์์)๋ค์ ๋ง๋ ๋ค ์ค์ ๋ก html์์ ์์ฑํ๋ ๊ฒ๊ณผ ๋น์ทํ๋ค.
            <div>
                <h3>Total clicks: {counter}</h3>
                <button onClick={onClick}>Click me</button>
            </div>
        );
    }
```
`React.useState`๋ [state, setState] ์ ํํ๋ฅผ ๊ฐ์ง object์ด๋ค. ์ฒซ๋ฒ์งธ ์ธ์๋ ๋ณ์๊ฐ์ ๊ฐ๊ณ , ๋๋ฒ์งธ ์ธ์๋ ์ฒซ๋ฒ์งธ ์ธ์ ๊ฐ์ ๋ณํ ์์ผ์ฃผ๋ ํจ์๋ค. ์ฝ๋์์๋ `React.useState(0)`์ผ๋ก counter๊ฐ์ 0์ผ๋ก ์ด๊ธฐํ ํด์ฃผ๊ณ , `setCounter(counert+1)`๋ก counter๊ฐ์ ํจ์ ํธ์ถํ  ๋๋ง๋ค 1์ฉ ์ฆ๊ฐ ์์ผ์ค๋ค.   

3. `ReactDOM`์ ํตํด `React`๋ก ๋ง๋  ์ปดํฌ๋ํธ๋ค์ ์ค์  html๋ก ๋ฃ์ด์ค๋ค.
```javascript
ReactDOM.render(<App />, root); // root div์ React component(์ค์ ๋ก  html ์์๋ค)๋ฅผ ๋ฃ๋๋ค
```

4. React์ ReactDOM ์ฌ์ด์ [`Babel(Javascript Compiler)`](https://babeljs.io/)์ด ๋ค์ด๊ฐ๋ค
```html
<script type="text/babel">
    (์๋ต)
</script>
```
์ฌ์ค ์์ ์์ฑ๋ React Component๋ค์ ํ ๋ฒ ๋ ๊ฐ์ธ์ง ๊ฒ์ด๋ค. ์๋ ์ฝ๋๋ฅผ ํตํด ๋ชํํ๊ฒ ์ดํด๋ณด์.
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
๊ทธ๋ ๋ค. ์ฌ์ค `ReactDOM`์ originalํ์์ ์ปดํฌ๋ํธ๋ค์ html๋ก ๋ ๋(redner) ํด์ฃผ๋ ๊ฒ์ด๋ค. Babel์ ์ญํ ์ JSX(javascript ์์ญ์์ html์์ผ๋ก ํํ)๋ฅผ originalํ์์ผ๋ก ๋ณ๊ฒฝ ํด ์ฃผ๋ ๊ฒ์ด๋ค.

## ์ดํ
* Javascript(React)๋ก html์ ๊ตฌ์ฑ ํด ๋ณด์๋ค.
* React์ useState๋ฅผ ์ฌ์ฉํ๋ฉด Vanilla JS๋ก ๊ตฌํํ  ๋์ ๋ฌ๋ฆฌ ๋ณํ๋ ๋ณ์๊ฐ๋ง ๋ค์ ๋ ๋ ํด์ค๋ค๊ณ  ํ๋ค. (์์ฒญ๋ ํจ์จ!!)
* ์์ง๊น์ง๋ ์ต์์น ์์์ ๊ทธ๋ฐ์ง React๊ฐ ๋ ๋ณต์กํ ๋๋์ด๋ค. ์กฐ๊ธ ๋ ์์ ๊ฐ๋ณด์.

๋์(์ถ์ฒ): https://nomadcoders.co/react-for-beginners/lobby