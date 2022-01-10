---
emoji: 🔖
title: Today I Learned - 220109
date: '2022-01-09 18:00:00'
author: 코딩쿠니
tags: TIL Python WebScraping
categories: TIL PYTHON WEBSCRAPING
---

## 1. 컨테스트 도전
과일예측 딥러닝 모델(기존 Perceptron 모델을 Transfer Learning(전이학습))을 학습시키는 데 굉장히 시간(약 8시간)이 오래 걸려 수업진도를 못나가던 찰나 팀원 중 한분이 관심있으면 요런 컨테스트 한 번 해 보라고 링크를 주셨다.
[![노마드코더_채용리스트_컨테스트](./contest.png)](https://nomadcoders.co/community/thread/1623)
해당 사이트에서 `무료`로 제공되는 웹스크래핑 강의를 듣고 채용리스트 사이트를 만드는 것이다. 스파르타에서 배운 웹스크래핑을 리마인드 할 겸 틈나는대로 컨테스트에 제출 할 사이트를 만들어 봐야겠다.

## 2. 작업환경
[Replit.com](https://replit.com/~) 라는 곳이 있다. IDE가 웹브라우저에서 구동 된다고 생각하면 된다. 파이썬을 사용하려면 파이썬 설치 및 환경변수 설정 등을 해야하는데, 저 곳에선 이미 세팅이 다 되어 있다. 그냥 프로그래밍 언어만 선택하고 프로젝트를 생성하면 된다. 물론 나는 이미 파이썬 개발환경이 다 갖춰져 있지만 강의 실습에서 알려준 `Replit` 사용해보기로 했다.

## 3. indeed 스크래핑
일부러 그런건지는 모르겠지만 해당 강의가 최신화가 안되어있다. 강의 녹화할 당시와 지금 indeed의 DOM구조, class 이름이 조금씩 다르다. 그래서 강의대로 하면 원하는 데이터를 스크래핑 할 수가 없다. 그래서 현재에 맞게 잘 잡아줘야 원하는 데이터를 가져올 수 있다. 현재(2021. 01. 09 기준) 아래와 같이 코드를 짜게 되면 [indeed](https://www.indeed.com/jobs?q=python)에서 파이썬으로 검색 시, 각 공고당 직무, 회사이름, 회사위치, 상세페이지를 스크래핑 할 수 있다.
사용한 파이썬 패키지는 requests, BeautifulSoup(bs4) 이다.
```python
import requests
from bs4 import BeautifulSoup

LIMIT = 50
URL = f"https://www.indeed.com/jobs?q=python&limit={LIMIT}" # 한페이지에 50개 공고를 보여줘라 


# 위 URL 요청시 마지막 페이지 구하기 
def get_last_page():
  result = requests.get(URL)
  soup = BeautifulSoup(result.text, "html.parser")
  pagination = soup.find("div", {"class": "pagination"})

  links = pagination.find_all('a')
  pages = []
  for link in links[:-1]:
      pages.append(int(str(link.string)))

  max_page = pages[-1]
  return max_page


# 각 공고 카드에서 직무, 회사이름, 회사위치, 상세페이지 정보를 리턴
def extract_job(html):
  titles = html.find("h2", {"class": "jobTitle"})
  title = titles.contents[1].text if len(
      titles.contents) == 2 else titles.contents[0].text
  company = html.find("span", {"class": "companyName"}).text
  location = html.find("div", {"class": "companyLocation"}).contents[0].text
  if "location" in location:
      location = "Remote"
  job_id = html["data-jk"]
  return {
      'title': title,
      'company': company,
      'location': location,
      "link": f"https://www.indeed.com/viewjob?jk={job_id}"
  }


# 각 페이지에서 공고 정보 가져온 후 리스트에 담고 리턴
def extract_jobs(last_page):
  jobs = []
  for page in range(last_page):
    print(f"Scrapping page {page}")
    result = requests.get(f"{URL}&start={page*LIMIT}")
    soup = BeautifulSoup(result.text, "html.parser")
    results = soup.find_all("a", {"class": "tapItem"})
    for result in results:
        job = extract_job(result)
        jobs.append(job)
  return jobs


# 공고정보를 담은 리스트 리턴
def get_jobs():
  last_page = get_last_page()
  jobs = extract_jobs(last_page)
  return jobs
  ```

## 총평
* 해당페이지에서 필요한 정보만 가져오려면 꼼꼼하게 살펴볼 것이 많고 가공이 필요함을 배움
* BeautifulSoup은 정말 뷰티풀하다. 원하는 데이터 뽑기가 정말 좋다.
* 컨테스트 1등하면 금 준다는데... 1등 해보고 싶다..
* 이거 끝나면 다른 것도 스크래핑 해볼까?

```toc
```