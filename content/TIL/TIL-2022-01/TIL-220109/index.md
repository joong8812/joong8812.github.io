---
emoji: ๐
title: Job๋ฆฌ์คํธ ์คํฌ๋ํ - 1
date: '2022-01-09 18:00:00'
author: ์ฝ๋ฉ์ฟ ๋
tags: TIL Python WebScraping
categories: TIL PYTHON WEBSCRAPING
---

## 1. ์ปจํ์คํธ ๋์ 
๊ณผ์ผ์์ธก ๋ฅ๋ฌ๋ ๋ชจ๋ธ(๊ธฐ์กด Perceptron ๋ชจ๋ธ์ Transfer Learning(์ ์ดํ์ต))์ ํ์ต์ํค๋ ๋ฐ ๊ต์ฅํ ์๊ฐ(์ฝ 8์๊ฐ)์ด ์ค๋ ๊ฑธ๋ ค ์์์ง๋๋ฅผ ๋ชป๋๊ฐ๋ ์ฐฐ๋ ํ์ ์ค ํ๋ถ์ด ๊ด์ฌ์์ผ๋ฉด ์๋ฐ ์ปจํ์คํธ ํ ๋ฒ ํด ๋ณด๋ผ๊ณ  ๋งํฌ๋ฅผ ์ฃผ์จ๋ค.
[![๋ธ๋ง๋์ฝ๋_์ฑ์ฉ๋ฆฌ์คํธ_์ปจํ์คํธ](./contest.png)](https://nomadcoders.co/community/thread/1623)
ํด๋น ์ฌ์ดํธ์์ `๋ฌด๋ฃ`๋ก ์ ๊ณต๋๋ ์น์คํฌ๋ํ ๊ฐ์๋ฅผ ๋ฃ๊ณ  ์ฑ์ฉ๋ฆฌ์คํธ ์ฌ์ดํธ๋ฅผ ๋ง๋๋ ๊ฒ์ด๋ค. ์คํ๋ฅดํ์์ ๋ฐฐ์ด ์น์คํฌ๋ํ์ ๋ฆฌ๋ง์ธ๋ ํ  ๊ฒธ ํ๋๋๋๋ก ์ปจํ์คํธ์ ์ ์ถ ํ  ์ฌ์ดํธ๋ฅผ ๋ง๋ค์ด ๋ด์ผ๊ฒ ๋ค.

## 2. ์์ํ๊ฒฝ
[Replit.com](https://replit.com/~) ๋ผ๋ ๊ณณ์ด ์๋ค. IDE๊ฐ ์น๋ธ๋ผ์ฐ์ ์์ ๊ตฌ๋ ๋๋ค๊ณ  ์๊ฐํ๋ฉด ๋๋ค. ํ์ด์ฌ์ ์ฌ์ฉํ๋ ค๋ฉด ํ์ด์ฌ ์ค์น ๋ฐ ํ๊ฒฝ๋ณ์ ์ค์  ๋ฑ์ ํด์ผํ๋๋ฐ, ์  ๊ณณ์์  ์ด๋ฏธ ์ธํ์ด ๋ค ๋์ด ์๋ค. ๊ทธ๋ฅ ํ๋ก๊ทธ๋๋ฐ ์ธ์ด๋ง ์ ํํ๊ณ  ํ๋ก์ ํธ๋ฅผ ์์ฑํ๋ฉด ๋๋ค. ๋ฌผ๋ก  ๋๋ ์ด๋ฏธ ํ์ด์ฌ ๊ฐ๋ฐํ๊ฒฝ์ด ๋ค ๊ฐ์ถฐ์ ธ ์์ง๋ง ๊ฐ์ ์ค์ต์์ ์๋ ค์ค `Replit` ์ฌ์ฉํด๋ณด๊ธฐ๋ก ํ๋ค.

## 3. indeed ์คํฌ๋ํ
์ผ๋ถ๋ฌ ๊ทธ๋ฐ๊ฑด์ง๋ ๋ชจ๋ฅด๊ฒ ์ง๋ง ํด๋น ๊ฐ์๊ฐ ์ต์ ํ๊ฐ ์๋์ด์๋ค. ๊ฐ์ ๋นํํ  ๋น์์ ์ง๊ธ indeed์ DOM๊ตฌ์กฐ, class ์ด๋ฆ์ด ์กฐ๊ธ์ฉ ๋ค๋ฅด๋ค. ๊ทธ๋์ ๊ฐ์๋๋ก ํ๋ฉด ์ํ๋ ๋ฐ์ดํฐ๋ฅผ ์คํฌ๋ํ ํ  ์๊ฐ ์๋ค. ๊ทธ๋์ ํ์ฌ์ ๋ง๊ฒ ์ ์ก์์ค์ผ ์ํ๋ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ฌ ์ ์๋ค. ํ์ฌ(2021. 01. 09 ๊ธฐ์ค) ์๋์ ๊ฐ์ด ์ฝ๋๋ฅผ ์ง๊ฒ ๋๋ฉด [indeed](https://www.indeed.com/jobs?q=python)์์ ํ์ด์ฌ์ผ๋ก ๊ฒ์ ์, ๊ฐ ๊ณต๊ณ ๋น ์ง๋ฌด, ํ์ฌ์ด๋ฆ, ํ์ฌ์์น, ์์ธํ์ด์ง๋ฅผ ์คํฌ๋ํ ํ  ์ ์๋ค.
์ฌ์ฉํ ํ์ด์ฌ ํจํค์ง๋ requests, BeautifulSoup(bs4) ์ด๋ค.
```python
import requests
from bs4 import BeautifulSoup

LIMIT = 50
URL = f"https://www.indeed.com/jobs?q=python&limit={LIMIT}" # ํํ์ด์ง์ 50๊ฐ ๊ณต๊ณ ๋ฅผ ๋ณด์ฌ์ค๋ผ 


# ์ URL ์์ฒญ์ ๋ง์ง๋ง ํ์ด์ง ๊ตฌํ๊ธฐ 
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


# ๊ฐ ๊ณต๊ณ  ์นด๋์์ ์ง๋ฌด, ํ์ฌ์ด๋ฆ, ํ์ฌ์์น, ์์ธํ์ด์ง ์ ๋ณด๋ฅผ ๋ฆฌํด
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


# ๊ฐ ํ์ด์ง์์ ๊ณต๊ณ  ์ ๋ณด ๊ฐ์ ธ์จ ํ ๋ฆฌ์คํธ์ ๋ด๊ณ  ๋ฆฌํด
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


# ๊ณต๊ณ ์ ๋ณด๋ฅผ ๋ด์ ๋ฆฌ์คํธ ๋ฆฌํด
def get_jobs():
  last_page = get_last_page()
  jobs = extract_jobs(last_page)
  return jobs
  ```

## ์ดํ
* ํด๋นํ์ด์ง์์ ํ์ํ ์ ๋ณด๋ง ๊ฐ์ ธ์ค๋ ค๋ฉด ๊ผผ๊ผผํ๊ฒ ์ดํด๋ณผ ๊ฒ์ด ๋ง๊ณ  ๊ฐ๊ณต์ด ํ์ํจ์ ๋ฐฐ์
* BeautifulSoup์ ์ ๋ง ๋ทฐํฐํํ๋ค. ์ํ๋ ๋ฐ์ดํฐ ๋ฝ๊ธฐ๊ฐ ์ ๋ง ์ข๋ค.
* ์ปจํ์คํธ 1๋ฑํ๋ฉด ๊ธ ์ค๋ค๋๋ฐ... 1๋ฑ ํด๋ณด๊ณ  ์ถ๋ค..
* ์ด๊ฑฐ ๋๋๋ฉด ๋ค๋ฅธ ๊ฒ๋ ์คํฌ๋ํ ํด๋ณผ๊น?

```toc
```