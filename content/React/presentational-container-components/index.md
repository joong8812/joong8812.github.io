---
emoji: 👀
title: container-presentational 패턴
date: '2023-03-12 10:30:00'
author: 최중재(aziel)
tags: React
categories: REACT
---

## 개요

더 좋은 React 컴포넌트를 구조에 대해 리서치를 하다보니 `presentational-container패턴` 이라는 키워드를 자주 접하게 되었다. React의 아버지 `Dan Abramov`의 [글](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)을 보면서 어떤 패턴인지 확인 해보자.

**_참고: 2019년에 남긴 Dan Abramov에 의하면 그는 더이상 이 패턴을 강제로 사용하기를 추천하지 않는다고 한다. (컴포넌트를 이 패턴으로 나누지 않고 커스텀 훅을 이용해서도 가능하는 등에 다양한 패턴이 있을 수 있기에)_**

## 왜 이러한 패턴을 정의했는가?

컴포넌트를 더 쉽게 재사용할 수 있기 때문이다.

## 살펴보자

이 두 형태의 컴포넌트들을 명확히 구분하기 위해서 각 각 다른 폴더에 넣는다.

### **presentational** 컴포넌트

- 어떻게 생겼는 지(표현)에 집중한다.
- presentational과 container 컴포넌트 둘 다 가질 수 있지만, 보통 DOM 마크업과 스타일을 가지고 있다.
- 종종 _this.props.children_ 을 통해 방지했던 것을 허용한다.
- _Flux actions_ 나 _store_ 와 같은 다른 앱에 종속성이 없어야 한다.
- 데이터를 불러오거나 변경하는 방법을 지정하지 않는다.
- 데이터와 콜백을 _props_ 를 통해서만 받는다.
- 드물게 이 컴포넌트가 자체적으로 _state_ 를 갖는다.(갖는다면, 데이터보다는 UI관련 state를 갖는다)
- state, 생명주기, hooks 또는 성능 최적화가 필요하지 않는다면 함수형 컴포넌트로 작성된다.
- 예시: Page, Sidebar, Story, UserInfo, List

### **container** 컴포넌트

- 어떻게 동작하는 지에 집중한다.
- presentational과 container 컴포넌트 둘 다 가질 수 있지만, 보통 감싸주는 div외에 DOM 마크업과 스타일을 가지고 있지 않다.
- presentatinal 컴포넌트와 다른 container 컴포넌트에 데이터와 행동을 제공한다.
- Flux action을 호출하고 이것을 presentational 컴포넌트에 콜백형태로 제공한다.
- 데이터를 제공하는 stateful 한 형태이다.
- 일반적으로 직접 작성하기보다 React Redux의 connect(), Relay의 createContainer(), Flux Utils의 Cotnainer.create() 와 같은 상위 컴포넌트르 사용하여 생성된다.
- 예시: UserPage, FollowersSidebar, StoryContainer, FollowedUserList

## 이 패턴의 이점

- 더 나은 관심사 분리가 가능하다. 이 패턴으로 앱과 UI를 더 이해하기가 좋다.
- 재사용성이 좋다. 동일한 presentational 컴포넌트를 완전히 다른 상태 소스와 함께 사용할 수 있으며, 이를 별도의 container 컴포넌트로 전환하여 재사용할 있다.
- Presentational 컴포넌트는 앱의 필수적인 "팔레트" 이다. 이러한 구성 요소를 한 페이지에 배치하면 디자이너가 앱의 로직을 건드리지 않고도 모든 변형을 조정할 수 있다. 해당 페이지에서 스크린샷 회귀 테스트를 실행할 수 있다.
- 이렇게 하면 여러 container 컴포넌트에 동일한 마크업과 레이아웃을 복제하는 대신 Sidebar, Page, ContextMenu 와 같은 'layout component'를 추출하여 this.props.children를 사용해야 한다.

기억하세요, 컴포넌트들은 DOM을 노출하지 않아도 됩니다. UI컴포넌트 사이에 구성요소 경계들만 제공하면 됩니다.

## 코드 예시

### _a presentation_ and _data concern_ 두 관심사가 같이 있는 코드

```javascript
// CommentList.js
import React from 'react';

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = { comments: [] };
  }

  componentDidMount() {
    fetch('/my-comments.json')
      .then((res) => res.json())
      .then((comments) => this.setState({ comments }));
  }

  render() {
    return (
      <ul>
        {this.state.comments.map(({ body, author }) => (
          <li>
            {body}-{author}
          </li>
        ))}
      </ul>
    );
  }
}
```

### 두 관심사가 분리 된 코드

```javascript
// CommentList.js
import React from 'react';

const Commentlist = (comments) => (
  <ul>
    {comments.map(({ body, author }) => (
      <li>
        {body}-{author}
      </li>
    ))}
  </ul>
);
```

```javascript
// CommentListContainer.js
import React from 'react';
import CommentList from './CommentList';

class CommentListContainer extends React.Component {
  constructor() {
    super();
    this.state = { comments: [] };
  }

  componentDidMount() {
    fetch('/my-comments.json')
      .then((res) => res.json())
      .then((comments) => this.setState({ comments }));
  }

  render() {
    return <CommentList comments={this.state.comments} />;
  }
}
```

## Dan Abramov의 마지막 한마디

**_프레젠테이션과 컨테이너 구성 요소의 분리를 독단적으로 받아들이지 마세요. 때로는 구분이 중요하지 않거나 선을 긋기가 어려울 수도 있습니다. 특정 컴포넌트가 프레젠테이션용인지 컨테이너용인지 확신이 서지 않는다면 아직 결정하기에는 이르다고 생각할 수 있습니다. 걱정하지 마세요!_**

## 나의 생각

`Dan Abramov`의 [글](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)을 다 읽어보니 이미 리액트 코드를 작성할 때 자연스럽게 하고 있던 패턴이였다. 다만 이 다른 관심사를 가지고 있는 두 컴포넌트를 _presentational_ 혹은 _container_ 라고 부르는 지 몰랐을 뿐이다. 이 글은 무려 8년전(2015년) 에 쓰여진 글이고 2019년에는 본인도 생각이 바뀌어 이 패턴을 사용해도 좋지만 무조건 강제하는 건 지양한다고 했다. 보이는 형태가 이렇게 컴포넌트로 쪼개지던 커스텀훅으로 관심사를 분리하던 혹은 다른형태로 하던 중요한 건 UI와 비즈니스 로직을 분리해서 관리하는 게 중요한 포인트 같다. 프로그래밍의 세계에 정답은 정말 없는 것 같다. 다양한 의견들이 공존하고 시행되고 있기 때문이다. 훗날 나도 생각이 바뀔수도 있지만 지금은 `팀플레이` 하기 좋고 `유지보수` 가 좋은 코드와 구조가 제일 좋다고 생각한다.

```toc

```
