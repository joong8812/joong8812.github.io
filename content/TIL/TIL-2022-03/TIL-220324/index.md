---
emoji: 🐨
title: (TIL) AWS SSL인증서, CodePipeline
date: '2022-03-24 22:30:59'
author: 최중재(aziel)
tags: TIL AWS HTTPS EB Codepipeline Route53 SSL
categories: TIL
---

## 오늘 배운 것

- AWS Route 53에 다른 사이트에서 생성한 도메인을 붙인다.
  - 가비아에서 구매한 도메인의 NameServer를 Route 53에서 제공하는 것으로 변경한다.
- AWS Certificate Manager를 통해 SSL인증서를 발급 받아 Route 53에 등록한 도메인을 https를 변경 한다.
- Route 53에 등록된 도메인에 AWS Elastic Beanstalk 서버를 붙인다.
- AWS EC2 Loadbalancer에서 http(80포트)를 https(443포트)로 리다이렉트 설정을 한다.
- AWS Codepipleline 설정으로 Github repository 내용 변경 시 자동으로 배포(EB 파일들이 업데이트)하도록 한다. (CI/CD)

## 느낀점

AWS에서 모든 것들을 위한 세팅이 너무 잘 되어 있어 너무나 쉽게 위에 작업들을 다 할 수 있었다. 보안부터 자동배포에 이르기까지 간단하게 맛을 볼 수 있어서 정말 신기하고 재밌었다. AWS를 통해 프로젝트가 조금 더 웹어플리케이션 다운 모습으로 변해 가고 있다.

```toc

```
