---
emoji: 🏺
title: (WIL) Next.js 2가지 Pre-rendering 외 - 2204 week3
date: '2022-04-24 23:59:00'
author: 최중재(aziel)
tags: WIL
categories: WIL
---

## The four F's (Facts, Feelings, Fidings, Futures)

### Next.js 2가지 Pre-rendering

Next.js에서는 2가지의 미리 렌더링 방법 있는데, 어떤 것들이 있는 지 확인 해 보자.

1. SSG(Static Site Generation)

- 이는 `빌드` 할 때 미리 HTML을 생성하고, 매 요청마다 생성된 HTML을 재사용 한다.
- 마케팅 페이지, 블로그 글, 이커머스 상품 리스트, 도움말과 문서 같은 웹 페이지에 추천되는 방식이다.
- `getStaticProps`을 통해 미리 외부 데이터를 가져와 렌더링에 사용한다. 아래는 그 예다.

```javascript
export default function Home(props) { ... }

export async function getStaticProps() {
  // 파일 시스템, API, DB 등으로 부터 외부 데이터를 얻는다
  const data = ...

  // 'props' 라는 키의 값이 'Home' 컴포넌트에 전달 된다
  return {
    props: ...
  }
}
```

2. SSR(Servier Side Rendering)

- 이는 각 요청마다 HTML을 미리 생성한다.
- 모든 요청마다 페이지 내용이 변화거나 자주 데이터의 변화를 보여줄 때 추천되는 방식이다.
- 미리 렌더링하지 않는다면 CSR(Client Side Rendering)로 위의 방식을 해결 할 수도 있다.
- `getServerSideProps`을 통해 매 요청마다 필요한 데이터를 가져와 렌더링에 사용한다. 아래는 그 예다.

```javascript
function Page({ data }) {
  // 렌더(render) 데이터 ...
}

// 매 요청(request) 마다 호출 되는 함수
export async function getServerSideProps() {
  // 외부 API 로부터 데이터를 가져온다
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  // props를 통해 page component에 데이터 전달
  return { props: { data } };
}

export default Page;
```

3. 참고

- [Two Forms of Pre-rendering](https://nextjs.org/learn/basics/data-fetching/two-forms)
- [Static Generation with and without Data](https://nextjs.org/learn/basics/data-fetching/with-data)
- [getServerSideProps](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)

### 갖춰야 할 역량이 많구나

스파르타 내배캠이 끝나고 취업을 향한 여정 중이다. 프론트 혹은 풀스택 개발자로 취업하기로 마음 먹었지만, 현업에서 요구하는 이들의 역량이 만만치가 않다. 그러다보니 시간은 한정되어 있고, 내가 매일 학습할 수 있는 양은 극히 일부분이니 마음이 조급해진다. 많은 기업들이 `빠른 학습 능력`을 갖춘 개발자를 선호 한다고 느꼈다. 현재 내게 주어진 이 기간이 그걸 시험하는 시기라고 여겨진다. 언제나 그랬듯 또 다짐해 본다. 멈추지 않고 꾸준히 하다보면 궤도에 오를 것이라고 말이다. 계속 가자!

```toc

```
