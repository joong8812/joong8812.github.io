---
emoji: π
title: λ΄κ° μ λ¦¬ν Git κ°λμ§λ - PR, Amend, Revert, Reset, Stash
date: '2022-01-05 16:20:00'
author: μ½λ©μΏ λ
tags: TIL Git Github Opensource
categories: TIL GIT
---

## 1. λ΄κ° μ λ¦¬ν Git 3μ£Όμ°¨ κ°λμ§λ
___

* PR, Amend, Revert
  * `PR(Pull Request)`: contributerκ° μμ μ μμ(commit)μ PR νλ©΄ νλ‘μ νΈ κ΄λ¦¬μκ° ν΄λΉ commitμ mainμ λ³ν© ν  μ§ λ§μ§λ₯Ό κ²°μ νλ€. merge μμ²­.
  * `Amend`: μ μΌ μ΅κ·Όμ νλ μ»€λ°μ λ©μμ§ μμ μ΄λ ν΄λΉ μ»€λ°μ νμΌμ λ€μ μΆκ° ν  μ μλ€.
  * `Revert`: μ νν κ³Όκ±°μ μμ μΌλ‘ λμκ° ν κ·Έ μνλ₯Ό λ€μ μ»€λ°νλ€. (νμ€ν λ¦¬κ° κ³μ λ¨μ μμ)
  ![PR,Amend,Revert](./git-pr-amend-revert.png)

* Reset, Stash
  * `Reset`: μ νν κ³Όκ±° μμ  μ΄ν μμ(μ»€λ°)λ€μ μ­μ  νλ€. μ νν μμ μ΄ Headκ° λλ€. μ­μ λ μ»€λ°λ€μ λν νμ€ν λ¦¬κ° λ¨μ§ μλλ€.
  * `Stash`: νμ¬ μμμ€μΈ νμΌλ€(Uncommited) μνλ₯Ό μ μ₯νλ€. λΈλμΉ μ΄λνμ¬ μμ, pull μ νλ λ±μ νλμ νκ³  λ€μ λΆλ¬μ¬ μ μλ€.
  ![Reset,Statsh](./git-reset-stash.png)

* μΆκ°λ΄μ©
  * Amend, Revert, Reset κ³Ό κ°μ κΈ°λ₯μ μμ μ branchμμλ§ νλ κ² μ’λ€κ³  νλ€. μλνλ©΄ λ©μΈ branchμμ ν΄λΉ μμμ νκ² λλ©΄ λ€λ₯Έ νμ νλ μ¬λλ€μ μμμλ μν₯μ λ―ΈμΉ  μ μκΈ° λλ¬Έμ΄λ€. μ€μ λ‘ μ΄κ²μ΄ λ²μ΄μ§λ€λ©΄ `λμ°` ν  κ²μ΄λ€.
  * [`μ€νμμ€μ κΈ°μ¬νλλ°©λ²`](https://opensource.guide/ko/how-to-contribute/) μ΄ κΈμ ν λ² μ½μ΄λ³΄κ³ , Githubμμ μ²μ contirbute νλ μ΄μκ² μΆμ²νλ μ€νμμ€μ [`Great for new contributors`](https://opensource.guide/ko/how-to-contribute/) νλ² κΈ°μ¬ ν΄λ³΄κ³  μΆλ€.

## 2. μ΄ν
___
  commit, push, pull λ§ μ¬μ© νλ λ΄κ° μ΄λ² Gitμμμ λ£κ³  κ·Έ λμ λͺ°λλ gitμ΄λ githubμ κΈ°λ₯μ λ μ μμ μκ² λμλ€. νΉν Githubμμ issue λ° PRμ ν΅ν΄μ μ΄λ»κ² μ€νμμ€κ° λ§λ€μ΄μ§κ³ , λ κΈ°μ¬ν  μ μλμ§λ₯Ό μκ² λμ΄μ λ΄κ° κ°μ‘λ κΆκΈμ¦μ νλ²μ ν΄μ ν  μ μμλ€. μ΄μ λ μμμΌλ `μ¨λ¨Ήμ`λ₯Ό μ ν΄λ΄μΌκ² λ€.

```toc
```