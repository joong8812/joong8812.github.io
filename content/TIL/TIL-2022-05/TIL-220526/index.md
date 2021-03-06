---
emoji: ๐ฅ
title: (TIL) React - useCallback์ ๋ฌด์์ธ๊ฐ?
date: '2022-05-26 20:59:59'
author: ์ฝ๋ฉ์ฟ ๋
tags: TIL REACT
categories: TIL REACT
---

## useCallback์ ๋ฌด์์ธ๊ฐ?
### ๊ฐ์
๋๊ธ ๊ธฐ๋ฅ์ ๊ฐ์ง Component์์  ์ฝ๋๋ฅผ ๋ณด๋ค๊ฐ ์์ฑ ๋ ๋ด์ฉ์ ์์ฒญํ๊ณ  ์ฝ๋ฐฑํจ์๋ก `useCallback` hook์ผ๋ก ๊ฐ์ผ ํจ์๋ฅผ ํธ์ถํ๋ ๋ถ๋ถ์ ๋ณด๊ณ , ์  hook์ ๋ฌด์จ ์ญํ ์ ํ๋ ๊ฑด์ง ๊ถ๊ธํด์ก๋ค. [๊ณต์๋ฌธ์](https://reactjs.org/docs/hooks-reference.html#usecallback)๋ฅผ ๋จผ์  ์ดํด๋ณด์๋ค.

### ์ ์
> Returns a memoized callback.  
๋์ ์๋ ๊ฐ๋จํ๋ค. memoized(์ ์ฅ๋์ด์ง) callback(์ฝ๋ฐฑํจ์๋ฅผ) return(๋ฆฌํด) ํ๋ ๊ฒ์ด๋ค.
> Pass an inline callback and an array of dependecies. `useCallback` will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
dependencies ๋ฐฐ์ด์ ๋ฃ์ด์ค ๊ฐ์ด ๋ณํ๊ฐ ๋  ๋์๋ง ์ฝ๋ฐฑํจ์๊ฐ ์ฌ์ ์๋๊ณ , ๊ทธ๋ ์ง ์์ ๊ฒฝ์ฐ์๋ ์ ์ฅ๋์ด์ง ์ฝ๋ฐฑํจ์๊ฐ ๋ฆฌํด์ด ๋์ด์ง๊ฒ์ด๋ค ๋ผ๊ณ  ์๊ธฐํ๊ณ  ์๋ค.

### ์ด์ 
React์ ์ปดํฌ๋ํธ๋ค์ ์ฌ๋ฌ ์ด์ ๋ก ๋ ๋๋ง์ด ๋ค์ ๋๋ ๊ฒฝ์ฐ๊ฐ ๋ง๋ค. ๋ ๋๋ง์ด ๋ค์ ๋ฐ์ํ  ๋๋ง๋ค ์์ฑ๋ ํจ์๋ ๋ค์ ์ ์๊ฐ ๋์ด์ง๋ค. ์ด ํ์๊ฐ ๋ฉ๋ชจ๋ฆฌ, CPU ๋ฆฌ์์ค๋ฅผ ๋ง์ด ์ฐจ์งํ๋ ์์์ ์๋๋ผ ๊ทธ ์์ฒด๋ง์ผ๋ก๋ ํฐ ๋ถํ๊ฐ ์๊ธธ์ผ์ ์์ง๋ง, `props๊ฐ ๋ฐ๋์ง ์์์ผ๋ฉด Virtual DOM์ ์๋ก ๋ ๋๋ง ํ์ง ์๊ณ  ์ปดํฌ๋ํธ์ ๊ฒฐ๊ณผ๋ฌผ์ ์ฌ์ฌ์ฉํ๋ ์ต์ ํ ์์`์ ํ์์ ์ธ ๊ธฐ๋ฅ์ด๋ผ๊ณ  ํฉ๋๋ค. (์ถ์ฒ: [๋ฒจ๋กํผํธ์ ํจ๊ปํ๋ ๋ชจ๋ ๋ฆฌ์กํธ](https://react.vlpt.us/basic/18-useCallback.html))

### ์์ ์ฝ๋
```jsx
...

const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

...

return (
  ...
  {isAddingComment && <NewCommentForm quoteId={quoteId} onAddedComment={addedCommentHandler} />}
)
```
์์ ์ฝ๋๋ฅผ ๋ณด๋ฉด `NewCommentForm`ํ์ ์ปดํฌ๋ํธ์์ ๋๊ธ ์์ฑ ํ ์ ์ฅ ์์ฒญ์ ํ๊ณ  ์ฑ๊ณต์ ํ๋ฉด `onAddedCommponent(๋ถ๋ชจ:addedCommentHandler)`๋ฅผ ํธ์ถํ์ฌ ํด๋น ์ฝ๋ฐฑํจ์๊ฐ ์ฌ์ ์ธ๋์ง ์๊ณ  ์ฒ์์ memoized๋ ์ฝ๋ฐฑํจ์๋ฅผ ํธ์ถ(์คํ) ํ๊ฒ ๋๋ค.

### ๋ง๋ฌด๋ฆฌ
์์ง ์ฑ๋ฅ์ ์ ๊ฒฝ ์ธ ์ ๋์ React ํ๋ก์ ํธ๋ฅผ ํด๋ณด์ง ์์์ ์ต์ ํ, ์ฑ๋ฅ ๋ฑ์ ๊ณ ๋ คํด์ ์ฝ๋๋ฅผ ์์ฑํ์ง๋ ์๋๋ค. ๊ทธ๋ฌ๋ ๊ท๋ชจ๊ฐ ์ปค์ง์๋ก ์ด๋ฐ๋ถ๋ถ์์ ์ฌ์ฉ์๊ฒฝํ์ ๋ง์ ์ํฅ์ ๋ฏธ์น๋ฆฌ๋ผ ์๊ฐ๋๊ธฐ์ ์ด๋ฐ Hook์ ์ฐ์์ ์ ์๊ณ  ์ ์ ํ ์ฌ์ฉํ๋ฉด ์ข์ ๊ฒ ๊ฐ๋ค.

### ์ฐธ๊ณ 
* [React ๊ณต์๋ฌธ์](https://reactjs.org/docs/hooks-reference.html#usecallback)
* [๋ฒจ๋กํผํธ์ ํจ๊ปํ๋ ๋ชจ๋ ๋ฆฌ์กํธ - 18. useCallback ์ ์ฌ์ฉํ์ฌ ํจ์ ์ฌ์ฌ์ฉํ๊ธฐ](https://react.vlpt.us/basic/18-useCallback.html)
* [React Hooks:useCallback ์ฌ์ฉ๋ฒ](https://www.daleseo.com/react-hooks-use-callback/)
```toc
```