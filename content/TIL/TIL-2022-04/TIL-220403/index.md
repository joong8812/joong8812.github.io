---
emoji: 🦬
title: Docker Network 사용해보자!
date: '2022-04-03 22:30:59'
author: 최중재(aziel)
tags: TIL DOCKER
categories: TIL DOCKER
---

## Docker Container 끼리 연결

Docker의 각 컨테이너는 서로 다른 FileSystem과 Network를 가진다. 그렇기 때문에 따로 설정을 해주지 않으면 컨테이너 끼리 통신이 불가능하다. 그러면 어떤 방법으로 Docker container끼리 통신이 가능할까? mongoDB와 FlaskApp 두 컨테이너를 연결 해보자.

### 1. Docker network를 생성

```zsh
docker network create memo
```

memo 라는 이름으로 docker network를 생성해주었다.

### 2. MongoDB 컨테이너를 네트워크 memo와 연결

```zsh
docker run -d -p 27017:27017 --network memo --network-alias mongo mongo
```

- `-p 27017:27017` 로 내 컴퓨터의 27017포트를 mongo 컨테이너의 27017와 연결
- `--network memo` memo라는 이름의 네트워크 와 연결
- `--network-alias mongo` mongo라는 이름으로 mongo컨테이너를 가리키는 network 이름

### 3. Flask 앱 내에 DB link를 변경

```python
client = MongoClient('mongo', 27017)
```

MongoDB를 가리키는 연결정보를 2번 항목에서 alias해준 mongo로 변경

### 4. Docker Flask 네트워크 memo와 연결

```zsh
docker run -p 80:5000 --network memo simple-memo-app
```

그렇다. 중간에 `--network memo` 옵션을 추가하여 해당 컨테이너도 memo network와 연결 해주자.

### 마무리

위와 같은 과정을 거치면 서로 다른 두 도커 컨테이너를 같은 네트워크에 두어 통신이 가능하게 할 수 있다.

```toc

```
