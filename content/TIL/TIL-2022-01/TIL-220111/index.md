---
emoji: ⌛️
title: Today I Learned - 220111
date: '2022-01-11 21:30:00'
author: 코딩쿠니
tags: TIL Python WebScraping
categories: TIL PYTHON WEBSCRAPING
---

# Job리스트 스크래핑 - 3
## 1. 로딩화면이 필요하다
검색어가 입력이 되면 최대로 검색되는 만큼 스크래핑을 한 다음 화면에 보여주게 되어 있다. 검색결과가 많은 경우 사용자의 입장에서는 멍하니 진행되고 있는 것 조차 모르는 채 기다려야만 했다. 이를 해결하기 위해 여러가지 방법이 떠올랐지만, 나는 우선 로딩화면을 보여주기로 결정했다. (한 번 구현 해보고 싶었다.) 우선 [Loading.io](https://loading.io/)에 가서 마음에 드는 무료 로딩 gif를 받았다.

## 2. 로딩화면 구현
[kkamikoon](https://kkamikoon.tistory.com/168)님의 글을 보고 구현했습니다.   
1️⃣  브라우저 화면의 높이와 너비를 구한다.   
2️⃣  전체 화면을 음영처리 할 div 생성한다.   
3️⃣  로딩이미지를 담을 div, img 태그 생성한다.   
4️⃣  body에 전체 음영처리 div, 로딩이미지 div를 추가한다.   
5️⃣  위치와 크기 등을 css로 꾸며주고 보여준다.   
```javascript
function LoadingWithMask() {
    //화면의 높이와 너비를 구합니다.
    const maskHeight = window.innerHeight;
    const maskWidth = window.innerWidth;

    //화면에 출력할 마스크를 설정해줍니다.
    const mask = "<div id='mask'></div>";
    let loadingImg = "";

    loadingImg += "<div id='loadingImg'>";
    loadingImg += "<img src='static/images/loading.gif'/>";
    loadingImg += "</div>";

    //화면에 레이어 추가
    $("body").append(mask).append(loadingImg);

    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채웁니다.
    $("#mask").css({
        width: maskWidth,
        height: maskHeight,
        opacity: "0.3",
    });

    //마스크 표시
    $("#mask").show();
    //로딩중 이미지 표시
    $("#loadingImg").show();
}
```
```css
#mask {
    position: absolute;
    z-index: 9000;
    background-color: gray;
    display: none;
    left: 0;
    top: 0;
}
#loadingImg > img {
    position: relative;
    display: block;
    margin: 0px auto;
}
```

## 3. 검색결과 페이지에서 뒤로가면..?
위와 같이 구현하여 로딩이 끝난 후 검색페이지로 넘어가는 것 처럼 보인다. 그런데 사용자들은 브라우저상에서 다양한 액션들을 한다. 나도 한 번 그냥 뒤로 가보았다. 그랬더니 전체가 회색 음영으로 덮인채 로딩이미지가 계속 돌고 있는 것을 볼 수 있었다. 캐시가 계속 남아 있는 것이다. 이번에는 [공](https://blog.naver.com/PostView.nhn?blogId=amabile29&logNo=221548195341&categoryNo=30&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=postView)님의 도움으로 해결했다. 사용자가 `뒤로가기`로 돌아온다면 로딩화면 관련 된 HTML 태그를 숨김 및 삭제를 하는 것이다.
```javascript
// 결과 페이지에서 뒤로가기 할 경우
window.onpageshow = function (event) {
    if (
        event.persisted ||
        (window.performance && window.performance.naviagation.type == TYPE_BACK_FORWARD)
    ) {
        $("#mask, #loadingImg").hide();
        $("#mask, #loadingImg").remove();
    }
};
```

## 4. 결과물
![loading_demo](./test.gif)
## 총평
* 다른 개발자분들의 글로 문제를 해결 할 수 있었다.
* 지식의 공유 정말 좋다.
* 나도 다른이에게 도움되는 자가 되고 싶다.
```toc
```