---
emoji: 🌷
title: (TIL) React - 예제 App.js 코드 살펴보기
date: '2022-05-03 23:59:59'
author: 최중재(aziel)
tags: TIL REACT
categories: TIL REACT
---

## 오늘 공부한 React 예제 코드 살펴보기

### 개요

React(리액트) 할 줄 아는 프론트엔드 개발자가 되고 싶어 요즘 Udemy에서 [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) 강의를 듣고 있다. 오늘 들은 `Custom Hooks` 관련 강의 중에 나온 App.js 예제 코드를 살펴보자. (설명은 주석으로)

### 예제코드

```javascript
import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [isLoading, setIsLoading] = useState(false); // Loading 상태를 나타내는 boolean state
  const [error, setError] = useState(null); // error 값을 갖는 state
  const [tasks, setTasks] = useState([]); // 일정(업무) 배열 값을 갖는 state

  const fetchTasks = async (taskText) => {
    setIsLoading(true); // 위에 초기값을 설정해줬지만 다시 렌더링할 때를 고려하여 초기화 해줌
    setError(null);
    try {
      const response = await fetch(
        // firebase에서 데이터 가져올 때 async-await를 사용하여 비동기처리가 되지 않도록 한다
        'https://react-prac-a1700-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
      );

      if (!response.ok) {
        // 응답을 못 받으면 에러를 던져 다음 코드를 실행하지 않도록 한다
        throw new Error('Request failed!');
      }

      const data = await response.json(); // 응답의 json값을 data 변수에 넣는다

      const loadedTasks = []; // 일정들을 담을 배열 선언

      for (const taskKey in data) {
        // 응답 받은 데이터들을 loadedTasks 배열에 담는다
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks); // tasks state의 위에 담은 배열을 넣어준다
    } catch (err) {
      setError(err.message || 'Something went wrong!'); // 에러 발생시 error state의 문자열값을 담는다
    }
    setIsLoading(false); // 로딩 state false로 변경
  };

  useEffect(() => {
    // 함수 fetchTasks 호출한다. dependency가 빈 배열이기 때문에 렌더시 useEffect 안이 한번 만 실행된다
    fetchTasks();
  }, []);

  // 아래 함수 호출 시 매개변수로 받은 일정(task)을 기존 tasks(배열) state에 추가한다
  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  // 아래는 JSX, 컴포넌트들을 배치한다
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks items={tasks} loading={isLoading} error={error} onFetch={fetchTasks} />
    </React.Fragment>
  );
}

export default App;
```

### 새로 배운 것

- 자바스크립트에 fetch를 이용하여 api서버에서 데이터를 가져올 수 있다.
- firebase를 통하여 아주 간단하게 api서버를 만든다(무료)

```toc

```
