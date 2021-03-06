---
emoji: 😺
title: (TIL) AWS 신기하다, 크롤링 재밌다 - 경험&생각
date: '2022-01-27 23:59:59'
author: 코딩쿠니
tags: TIL 
categories: TIL
---

## AWS 신기하다
이번 프로젝트에서 필수 조건 중 하나가 AWS S3, RDS를 꼭 사용해야 하는 것이다. 그래서 지금 제공 해준 AWS 강의를 보면서 실습을 하고 있는데, AWS에서 제공해주는 게 정말 많다. 서비스도 엄청나게 많은데 그 중에 S3, CloudFront 정도 써보고 관련하여 정적 호스팅, 자동으로 깃헙 프로젝트 배포하는 것까지 처음 해보는 것들이 많다. 클라우드로 제공되는 그들의 서비스는 잘만 할 줄 알고, 과금에 부담이 없다면 정말 괜찮은 인프라를 구성할 수 있을 것 같다. 그래서 몇몇 큰 기업들이 자체 IDC를 사용하지 않고 AWS로 이전했는지 이해가 간다. 빨리 RDS까지 배워서 지금 진행되는 프로젝트에 적용해보고 싶다.

## 크롤링 재밌다
기존 박스오피스 TOP200 으로는 데이터셋이 너무 작다는 튜터님의 피드백을 받았다. 적어도 1000개 이상은 되어야 할 것 같다 하셔서 `네이버영화` 중 `월별 영화 랭킹`으로 검색되는 `한국영화`만 뽑아서 데이터셋을 만들기로 했다. 2005 ~ 2022년에 데이터를 크롤링했는데, 약 1시간 30분정도가 걸렸고, 중복을 제거 하여 약 1700개 정도에 데이터를 얻었다. 일단은 영화 제목과 코드만 모은 것 이기에 더 필요한 정보를 모아 데이터화 해야 한다. 크롤링으로도 많은 데이터들을 모을 수 있다는 것을 보고 신기하고 재밌다는 것을 느꼈다. 프로그래밍의 세계는 정말 무궁무진하다.

```toc
```