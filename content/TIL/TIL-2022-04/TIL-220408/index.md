---
emoji: 🍪
title: Docker 로컬 DB 구성하기 
date: '2022-04-08 22:30:59'
author: 코딩쿠니
tags: TIL DOCKER MYSQL DB
categories: TIL DOCKER DB
---

# 개요
팀프로젝트를 하는 데 우리는 개발 DB서버와 서비스 DB서버를 한 개로 사용하고 있었다. 이는 분명 문제가 있다 생각하고, 각 자 로컬 DB서버를 구성해서 개발해야 할 필요성을 느꼈다. 그래서 Docker image로 로컬 MySQL 구성 하는 방법을 정리 해 보았다.

# 환경 구축
## 1. Docker 설치
* OS에 맞는 docker 설치 : https://www.docker.com/products/docker-desktop

## 2. 설치 확인
```shell
$ docker -v
```
위 명령어로 docker 버전이 확인 되어진다면 잘 설치가 되어진 것이다.

## 3. MySQL Docker image 다운로드
* 최신버전 mysql docker image 다운로드
```shell
$ docker pull mysql
```
* 특정 버전 image 다운로드
```shell
$ docker pull mysql:5.7.20
```

## 4. Docker image 다운로드 확인
```shell
$ docker images
```
`mysql` 이름으로 이미지가 리스트에 보인다면 다운로드 성공

## 5. MySQL 컨테이너 생성 및 실행
```shell
$ docker run --name <container name> -e MYSQL_ROOT_PASSWORD=<password> -d -p 3306:3306 mysql
```
[저의 경우 예시]   
`$ docker run --name mooyaho-mysql -e MYSQL_ROOT_PASSWORD=qwe123 -d -p 3306:3306 mysql`

* 컨테이너의 이름은 `mooyaho-mysql`
* mysql root계정의 비밀번호는 `qwe123`
* `-p 3306:3306` 로컬의 3306포트를 컨테이너의 3306포트로 포워딩 해준다.
* `mysql` 의 이미지로 만든다.

## 6. MySQL 컨테이너 실행 확인
```shell
$ docker ps
```
* 아래와 같이 뜬다면 mysql 컨테이너가 실행중이다.
<img width="1046" alt="Screen Shot 2022-04-08 at 2 43 23 PM" src="https://user-images.githubusercontent.com/18342765/162372183-05548f08-71bd-470c-8655-6a44ce518501.png">


### 참고
[Docker를 이용하여 MySQL 설치하고 접속하기](https://happymemoryies.tistory.com/68)


```toc
```