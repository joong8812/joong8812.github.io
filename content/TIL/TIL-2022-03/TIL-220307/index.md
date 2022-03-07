---
emoji: 🐳
title: Docker container 데이터 유지 시키기
date: '2022-03-07 23:00:59'
author: 코딩쿠니
tags: TIL Docker
categories: TIL DOCKER
---

## docker container 데이터 유지 시키기
db를 담은 docker 컨테이너를 삭제 하는 경우 혹은 새로운 db 컨테이너를 생성하는 경우 기존과 다른 컨테이너이기 때문에 데이터가 동일 하지가 않다. 이럴 때 `named volume`을 사용하게 되면 다른 컨테이너가 생성되더라도 기존 컨테이너에서 사용한 데이터를 계속 유지 할 수 있다. 
1. 처음 db 컨테이너를 만들기 전 volume 명령어로 로컬에 공간을 확보하자 (아래는 memo라는 이름의 volume을 생성 함)
```shell
$docker volume create memo
```
2. 새로 생성하는 컨테이너에 위에서 만들어준 volume을 연결 시켜 준다 (예제는 mongodb 컨테이너이다)
```shell
$docker run -p 27017:27017 -v memo:/data/db mongo
```
`memo`라는 이름의 로컬 volume과 mongodb 컨테이너 안의 `/data/db` 공간을 연결 해 주었기 때문에 db에 쌓이는 데이터는 로컬 공간에도 쓰게 된다. 다음에 새로운 mongodb 컨테이너를 생성 할 경우 2번과 같은 명령어로 다시 `memo` volume에 연결 해준다면 기존에 쓰여진 데이터를 새로운 컨테이너에서도 그대로 쓸 수 있게 된다.

```toc
```