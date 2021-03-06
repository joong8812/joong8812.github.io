---
emoji: π·
title: (TIL) React - μμ  App.js μ½λ μ΄ν΄λ³΄κΈ°
date: '2022-05-03 23:59:59'
author: μ½λ©μΏ λ
tags: TIL REACT
categories: TIL REACT
---

## μ€λ κ³΅λΆν React μμ  μ½λ μ΄ν΄λ³΄κΈ°
### κ°μ
React(λ¦¬μ‘νΈ) ν  μ€ μλ νλ‘ νΈμλ κ°λ°μκ° λκ³  μΆμ΄ μμ¦ Udemyμμ [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) κ°μλ₯Ό λ£κ³  μλ€. μ€λ λ€μ `Custom Hooks` κ΄λ ¨ κ°μ μ€μ λμ¨ App.js μμ  μ½λλ₯Ό μ΄ν΄λ³΄μ. (μ€λͺμ μ£ΌμμΌλ‘)

### μμ μ½λ
```javascript
import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [isLoading, setIsLoading] = useState(false); // Loading μνλ₯Ό λνλ΄λ boolean state
  const [error, setError] = useState(null); // error κ°μ κ°λ state
  const [tasks, setTasks] = useState([]); // μΌμ (μλ¬΄) λ°°μ΄ κ°μ κ°λ state

  const fetchTasks = async (taskText) => {
    setIsLoading(true); // μμ μ΄κΈ°κ°μ μ€μ ν΄μ€¬μ§λ§ λ€μ λ λλ§ν  λλ₯Ό κ³ λ €νμ¬ μ΄κΈ°ν ν΄μ€
    setError(null);
    try {
      const response = await fetch( // firebaseμμ λ°μ΄ν° κ°μ Έμ¬ λ async-awaitλ₯Ό μ¬μ©νμ¬ λΉλκΈ°μ²λ¦¬κ° λμ§ μλλ‘ νλ€
        'https://react-prac-a1700-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json'
      );

      if (!response.ok) { // μλ΅μ λͺ» λ°μΌλ©΄ μλ¬λ₯Ό λμ Έ λ€μ μ½λλ₯Ό μ€ννμ§ μλλ‘ νλ€
        throw new Error('Request failed!');
      }

      const data = await response.json(); // μλ΅μ jsonκ°μ data λ³μμ λ£λλ€

      const loadedTasks = []; // μΌμ λ€μ λ΄μ λ°°μ΄ μ μΈ

      for (const taskKey in data) { // μλ΅ λ°μ λ°μ΄ν°λ€μ loadedTasks λ°°μ΄μ λ΄λλ€
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks); // tasks stateμ μμ λ΄μ λ°°μ΄μ λ£μ΄μ€λ€
    } catch (err) {
      setError(err.message || 'Something went wrong!'); // μλ¬ λ°μμ error stateμ λ¬Έμμ΄κ°μ λ΄λλ€
    }
    setIsLoading(false); // λ‘λ© state falseλ‘ λ³κ²½
  };

  useEffect(() => { // ν¨μ fetchTasks νΈμΆνλ€. dependencyκ° λΉ λ°°μ΄μ΄κΈ° λλ¬Έμ λ λμ useEffect μμ΄ νλ² λ§ μ€νλλ€
    fetchTasks();
  }, []);

  // μλ ν¨μ νΈμΆ μ λ§€κ°λ³μλ‘ λ°μ μΌμ (task)μ κΈ°μ‘΄ tasks(λ°°μ΄) stateμ μΆκ°νλ€
  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  // μλλ JSX, μ»΄ν¬λνΈλ€μ λ°°μΉνλ€
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
```

### μλ‘ λ°°μ΄ κ²
* μλ°μ€ν¬λ¦½νΈμ fetchλ₯Ό μ΄μ©νμ¬ apiμλ²μμ λ°μ΄ν°λ₯Ό κ°μ Έμ¬ μ μλ€.
* firebaseλ₯Ό ν΅νμ¬ μμ£Ό κ°λ¨νκ² apiμλ²λ₯Ό λ§λ λ€(λ¬΄λ£)

```toc
```