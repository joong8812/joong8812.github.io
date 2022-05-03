---
emoji: 🐠
title: (WIL) 자동 배포 외 - 2203 week5
date: '2022-04-02 23:00:00'
author: 코딩쿠니
tags: WIL
categories: WIL
--- 

## The four F's (Facts, Feelings, Fidings, Futures)
### 자동 배포
지난 주에 어느 정도 개발을 마치고 어플리케이션 서버와 인공지능 서버를 AWS EB에 올려 배포를 했었다. 그리고 AWS CodePipeline을 통해 Github에 변경사항이 생기면 자동적으로 어플리케이션 서버에도 반영되도록 CI/CD 또한 구성을 하려 했었다. 그런데 AWS 시크릿키 등 감추어야 할 정보를 Github에 올릴 수 없어 실행에 옮기지 못했다. 서비스를 하기 위해선 이 과정이 꼭 필요하겠다 싶었다. (이것이 무중단 배포?) 튜터님께도 여쭙고 정보를 찾은 결과 숨기고 싶은 값들을 환경변수 값으로 넣고 불러오면 가능하다 생각했다. `django-dotenv` 패키지를 통해 로컬에서는 .env 파일에서 값을 가져오고 EB에서는 환경변수 알맞은 키와밸류만 넣어주면 동일하게 그 값들을 읽을 수 있다는 것을 알고 적용했다. 그리하여 deploy브랜치에 변경사항이 반영되면 자동으로 연결된 eb서버에도 적용되었다. 해결@@

### 중간 발표
너무 아쉽게 `좋아요` 기능이 시연 때 잘 안되었지만 (아니 테스트 때 잘 되었는데, 갑자기 왜 이상하게 동작한거죠..) 기한에 맞춰 홍보만 빼고 필수 포함 사항을 다 잘 구현한 것 같다. 무언가 서비스를 하기에는 부족하다는 생각이 많이 들지만, 그래도 튜터님들에게 S.A 패스 받았던 프로젝트를 계획대로 잘 완성해서 뿌듯했다. 스파르타에서 처음으로 발표를 해보았는데, 입술이 바짝 말라 말하기가 점점 힘들정도로 긴장을 했다(난 무대체질이 아닌가보다 ㅠ). 주어진 시간보다는 더 쓴 것 같지만 팀원들이 고생해서 만든 기능들을 하나하나 얘기하여 전달하였다. 아직 최종발표가 남아있지만 남은 기간도 팀원들과 잘 협업하여 유종의미를 거두고 싶다.

### 코드리뷰
코드리뷰라는 것은 모두 함께 모여서 함께 코드를 보고 피드백을 줘야한다고 생각했었다. 그런데 꼭 그렇게 같은 시간 속에서 모두가 함께 하지 않아도 Github에서 충분히 할 수 있다는 것을 튜터님을 통해 알았다. PR 보낸 각 코드 단락별로 의견도 남기도 답변도 하고 승인 및 작업 재요청도 할 수 있다. 코드를 바로 작업 브랜치에 병합하는 게 시간이 걸리긴 하지만 다른 사람의 코드도 더 자세하게 보게 되고(리뷰를 해야하니까) 나도 피드백을 받아볼 수 있어서 굉장히 좋고, 재미있다는 것을 느꼈다. 나의 제안대로 앞으로는 코드리뷰를 하면서 작업한 것을 반영하기로 했다. 더 성장하는 개발자가 되자!!

```toc
```