---
emoji: ๐ช
title: Docker ๋ก์ปฌ DB ๊ตฌ์ฑํ๊ธฐ 
date: '2022-04-08 22:30:59'
author: ์ฝ๋ฉ์ฟ ๋
tags: TIL DOCKER MYSQL DB
categories: TIL DOCKER DB
---

# ๊ฐ์
ํํ๋ก์ ํธ๋ฅผ ํ๋ ๋ฐ ์ฐ๋ฆฌ๋ ๊ฐ๋ฐ DB์๋ฒ์ ์๋น์ค DB์๋ฒ๋ฅผ ํ ๊ฐ๋ก ์ฌ์ฉํ๊ณ  ์์๋ค. ์ด๋ ๋ถ๋ช ๋ฌธ์ ๊ฐ ์๋ค ์๊ฐํ๊ณ , ๊ฐ ์ ๋ก์ปฌ DB์๋ฒ๋ฅผ ๊ตฌ์ฑํด์ ๊ฐ๋ฐํด์ผ ํ  ํ์์ฑ์ ๋๊ผ๋ค. ๊ทธ๋์ Docker image๋ก ๋ก์ปฌ MySQL ๊ตฌ์ฑ ํ๋ ๋ฐฉ๋ฒ์ ์ ๋ฆฌ ํด ๋ณด์๋ค.

# ํ๊ฒฝ ๊ตฌ์ถ
## 1. Docker ์ค์น
* OS์ ๋ง๋ docker ์ค์น : https://www.docker.com/products/docker-desktop

## 2. ์ค์น ํ์ธ
```shell
$ docker -v
```
์ ๋ช๋ น์ด๋ก docker ๋ฒ์ ์ด ํ์ธ ๋์ด์ง๋ค๋ฉด ์ ์ค์น๊ฐ ๋์ด์ง ๊ฒ์ด๋ค.

## 3. MySQL Docker image ๋ค์ด๋ก๋
* ์ต์ ๋ฒ์  mysql docker image ๋ค์ด๋ก๋
```shell
$ docker pull mysql
```
* ํน์  ๋ฒ์  image ๋ค์ด๋ก๋
```shell
$ docker pull mysql:5.7.20
```

## 4. Docker image ๋ค์ด๋ก๋ ํ์ธ
```shell
$ docker images
```
`mysql` ์ด๋ฆ์ผ๋ก ์ด๋ฏธ์ง๊ฐ ๋ฆฌ์คํธ์ ๋ณด์ธ๋ค๋ฉด ๋ค์ด๋ก๋ ์ฑ๊ณต

## 5. MySQL ์ปจํ์ด๋ ์์ฑ ๋ฐ ์คํ
```shell
$ docker run --name <container name> -e MYSQL_ROOT_PASSWORD=<password> -d -p 3306:3306 mysql
```
[์ ์ ๊ฒฝ์ฐ ์์]   
`$ docker run --name mooyaho-mysql -e MYSQL_ROOT_PASSWORD=qwe123 -d -p 3306:3306 mysql`

* ์ปจํ์ด๋์ ์ด๋ฆ์ `mooyaho-mysql`
* mysql root๊ณ์ ์ ๋น๋ฐ๋ฒํธ๋ `qwe123`
* `-p 3306:3306` ๋ก์ปฌ์ 3306ํฌํธ๋ฅผ ์ปจํ์ด๋์ 3306ํฌํธ๋ก ํฌ์๋ฉ ํด์ค๋ค.
* `mysql` ์ ์ด๋ฏธ์ง๋ก ๋ง๋ ๋ค.

## 6. MySQL ์ปจํ์ด๋ ์คํ ํ์ธ
```shell
$ docker ps
```
* ์๋์ ๊ฐ์ด ๋ฌ๋ค๋ฉด mysql ์ปจํ์ด๋๊ฐ ์คํ์ค์ด๋ค.
<img width="1046" alt="Screen Shot 2022-04-08 at 2 43 23 PM" src="https://user-images.githubusercontent.com/18342765/162372183-05548f08-71bd-470c-8655-6a44ce518501.png">


### ์ฐธ๊ณ 
[Docker๋ฅผ ์ด์ฉํ์ฌ MySQL ์ค์นํ๊ณ  ์ ์ํ๊ธฐ](https://happymemoryies.tistory.com/68)


```toc
```