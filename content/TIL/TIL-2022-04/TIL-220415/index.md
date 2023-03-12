---
emoji: 🔭
title: React immutability(불변성) 장점
date: '2022-04-15 22:30:59'
author: 최중재(aziel)
tags: TIL REACT
categories: TIL REACT
---

## 오잉? 상태변화 할 때 값을 복사하고 한다?

```javascript
handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
}
```

위와 같이 `squares`라는 배열의 state를 변경할 때 직접 해당 배열의 값을 변경하는 것이 아니라 `slice`를 사용하여 배열을 복사하고, 값을 변경하고, state 변화를 해준다. 직접 객체변경 혹은 데이터 변경이 이루어져도 결과는 같지만 이 immutability(불변성)이 가진 장점이 강력하기 때문에 React에서도 권장한다.

## immutability 장점

### 1. 복잡한 특징을 단순하게

`특정 행동을 취소하고 다시 실행하는 기능`을 위에 과정을 통해 쉽게 할 수 있다. 이전 데이터를 재사용하기 용이하다

### 2. 변화 감지

객체가 직접 수정이 이루어지면 변화 감지를 위해서 이전 사본과 전체 객체 트리를 돌며 비교해야 한다. 반면 immutable 객체는 이전 객체와 다르면 변화 했다고 빠르게 판단할 수 있다.

### 3. 리렌더링 시기 결정

React에서 `순수 컴포넌트`를 만드는데 도움을 주고, 성능을 최적화 할 수 있다. 직접적으로 값을 변경하면 매번 state변화와 함께 가상DOM에서 리렌더링이 발생하기 때문에 CPU에 미세한 낭비가 발생한다(규모가 커질수록 성능에 지대한 영향을 미칠수도 있다). 반면 immutable 객체를 활용하면 변화를 쉽게 감지하고 렌더링을 다시할 경우만 정의(shouldComponentUpdate 사용)하여 효율적으로 리렌더링을 할 수 있다.

## 참고

- [React documentation - 불변성이 왜 중요할까요?](https://ko.reactjs.org/tutorial/tutorial.html#why-immutability-is-important)
- [React documentation - 성능 최적화](https://ko.reactjs.org/docs/optimizing-performance.html#examples)
- [React ❤️ Immutable.js – 리액트의 불변함, 그리고 컴포넌트에서 Immutable.js 사용하기](https://velopert.com/3486)

```toc

```
