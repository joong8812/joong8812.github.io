---
emoji: 🥎
title: (TIL) React - useCallback은 무엇인가?
date: '2022-05-26 20:59:59'
author: 코딩쿠니
tags: TIL REACT
categories: TIL REACT
---

## useCallback은 무엇인가?
### 개요
댓글 기능을 가진 Component예제 코드를 보다가 작성 된 내용을 요청하고 콜백함수로 `useCallback` hook으로 감싼 함수를 호출하는 부분을 보고, 저 hook은 무슨 역할을 하는 건지 궁금해졌다. [공식문서](https://reactjs.org/docs/hooks-reference.html#usecallback)를 먼저 살펴보았다.

### 정의
> Returns a memoized callback.  
대정의는 간단한다. memoized(저장되어진) callback(콜백함수를) return(리턴) 하는 것이다.
> Pass an inline callback and an array of dependecies. `useCallback` will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
dependencies 배열에 넣어준 값이 변화가 될 때에만 콜백함수가 재정의되고, 그렇지 않은 경우에는 저장되어진 콜백함수가 리턴이 되어질것이다 라고 얘기하고 있다.

### 이점
React의 컴포넌트들은 여러 이유로 렌더링이 다시 되는 경우가 많다. 렌더링이 다시 발생할 때마다 작성된 함수도 다시 정의가 되어진다. 이 행위가 메모리, CPU 리소스를 많이 차지하는 작업은 아니라 그 자체만으로는 큰 부하가 생길일은 없지만, `props가 바뀌지 않았으면 Virtual DOM에 새로 렌더링 하지 않고 컴포넌트의 결과물을 재사용하는 최적화 작업`에 필수적인 기능이라고 합니다. (출처: [벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/basic/18-useCallback.html))

### 예제코드
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
예제코드를 보면 `NewCommentForm`하위 컴포넌트에서 댓글 작성 후 저장 요청을 하고 성공을 하면 `onAddedCommponent(부모:addedCommentHandler)`를 호출하여 해당 콜백함수가 재선언되지 않고 처음에 memoized된 콜백함수를 호출(실행) 하게 된다.

### 마무리
아직 성능을 신경 쓸 정도의 React 프로젝트를 해보지 않아서 최적화, 성능 등을 고려해서 코드를 작성하지는 않는다. 그러나 규모가 커질수록 이런부분에서 사용자경험에 많은 영향을 미치리라 생각되기에 이런 Hook의 쓰임을 잘 알고 적절히 사용하면 좋을 것 같다.

### 참고
* [React 공식문서](https://reactjs.org/docs/hooks-reference.html#usecallback)
* [벨로퍼트와 함께하는 모던 리액트 - 18. useCallback 을 사용하여 함수 재사용하기](https://react.vlpt.us/basic/18-useCallback.html)
* [React Hooks:useCallback 사용법](https://www.daleseo.com/react-hooks-use-callback/)
```toc
```