
class: center

<p>
<span class="title">D3를 활용한 데이터 시각화 방법</span>
<br/>
</p>

---

## 목차

### 1. 데이터 시각화란
### 2. 데이터 시각화의 종류
### 3. 차트(그래프)의 종류
### 4. 시각화에서 자주하는 실수들
### 5. D3 기본
### 6. 재사용 가능한 차트 구현 방법

---

class: middle, center


## 1. 데이터 시각화란

---
class: middle, center


<p class="highlight">
❝<br>
데이터 시각화(Data Visualization)는<br> 
분석된 데이터의 결과를 쉽게 이해할 수 있도록<br> 
시각적으로 표현하고 전달되는 과정을 말한다.<br>
❞<br>
<span style="display:block;text-align:right;margin-right:80px;font:0.8em normal;">
- wikipedia
</span>
</p>

---



## <span style="color: #f10000;"><b>정보를 시각적 요소로 변환하는 작업</b></span>

<p>
<h4>가공되지 않은 데이터를 사람이 이해하기 쉬운 시각적 형태로 변환하고 
이를 활용해서 비즈니스를 성공적으로 수행하는데 도움을 줄 수 있다.
</h4>
</p>


---

### 데이터 시각화가 시작된 시기

<p>
<img style="width:100%" src="../img/Screenshot1.png">
<span style="display:block;text-align:right;margin-right:60px;font:0.6em normal;">
- 구글 N그램 뷰어
</span>
</p>


---



class: middle, center

## 2. 데이터 시각화의 종류


---

### 인포그래픽

<b>
\- 어떤 주제에 대해서 하나 또는 그 이상의 특정한 측면을 
설명하고 의사소통하는 데 초점을 둔 데이터 시각화의 한 형태
</d>



---

name: infographics2
class: middle

.left[<b>1995년 제이미 세라의 참고래에 대한 인포그래픽</b>]
.center[![:scale 100%](img/infographics2.jpg)]
.right[<font style="font-size:8px;">http://3.bp.blogspot.com/_LCqDL30ndZQ/TBPkvZIQaNI/AAAAAAAAAik/OrjA6TShNsk/s1600/INFO-BALLENA.jpg</font>]

---

## 탐색 도구
<b>
\- 데이터 셋을 직접 탐색해 보고 의미를 파악할 수 있는 도구를 
제공하는데 중점 
</b>


http://www.gapminder.org/world/

---

## 대시보드

<b>
\- 어떤 이슈에 대한 핵심 측정치(metrics)를 가능한 빠르고 
효과적으로 이해 할 수 있도록 도와주는 집약적인 차트
</b>

.center[![:scale 100%](img/dashboard.gif)]
---


class: middle, center

## 3. 차트(그래프)의 종류

---

- 꺽은선 그래프
- 막대 그래프
- 원 그래프
- 도넛 그래프
- 산포도
- 산키 차트
- 포스 그래프
- 산포도 행렬
- 트리맵
- 버블 차트


---

name: thought-starter

.center[![:scale 100%](img/chart-suggestion-infographic.jpg)]



---
### 막대 그래프

- dfjsl
- sdfjsdl



<div id="barchar01" class="bottom center"></div>




---

background-image: url(img/)
# Slide with background image




---

class: middle, center

<h2>
4. 시각화에서 자주하는 실수들<br/>
<span style="font-size:0.8em">(피해야 할 그래프)</span>
</h2>
---

## 목표
<p>
- 흔히하는 실수의 사례를 이해함으로써 잘못된 시각화를 피하고 적절한 시각화를 선택할 수 있도록 한다.
</p>


<p style="text-align:left;margin-top:0px;">
   <img style="width:50%" src="../img/wonder-graph-gen.png"> 
</p> 

---
### 원그래프


---
## 3D 그래프
<p>
- 모두 같은 값이지만 뒤에 있는 오브젝트는 가려지므로 앞쪽에 있는 오브젝트의 표면적이 다른 오브젝트보다 커진다.
</p>
<p>
- 보는 시점에 따라 더 큰 왜곡으로 보여진다.
</p>

<div>
<p style="text-align:center;margin-top:0px;float:left;width:50%;">
   <img style="width:100%" src="../img/3d-circle-chart.png"> 
   
</p>
<p style="text-align:center;margin-top:0px;float:left;width:50%;">
   <img style="width:100%" src="../img/3d-circle-chart-2.png"> 
</p>
</div>

---
## 그림 그래프
\- 그림의 크기로 데이터의 크기를 나타내는 그래프<br>
\- 오른쪽과 왼쪽과 데이터 대비 두 배지만 2배 이상인 느낌을 준다.

<p style="text-align:center;margin-top:10px">
   <img style="width:60%" src="../img/human-chart.jpg"> 
</p>



---

# Slide

- bullet 1
--

- bullet 2


---

# Slide

Some content.

???
Some note.

---
name: agenda

# Agenda

---
count: false

This slide will not be counted.

---
name: other-slide

Some content.
dsfsdf
---
template: other-slide

Content appended to other-slide's content.

---
# Agenda

--
1. Introduction

--
2. Markdown formatting

---



.footnote[.red.bold[*] Important footnote]

---

Implicit return statment:

```javascript
function () {
*    return x + x;
}

Notice how there is no return statement.
```


---

!:test sdf