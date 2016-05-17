
class: middle, center

<p>
<span class="title">
<strong>D3를 활용한 데이터 시각화 방법</strong>
</span>
</p>


<div style="margin-top:140px;" id="mainchart"></div>

---

## 목차

### 1. 데이터 시각화란?
### 2. 데이터 시각화의 종류
### 3. 차트(그래프)의 종류
### 4. 피해야 할 차트(그래프)
### 5. D3 소개

???
### 6. 재사용 가능한 차트 구현 방법


---

class: middle, center


## 1. 데이터 시각화란?

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


<div style="width:746px;position:absolute;">
<p style="color: #f10000;opacity:0.8;font-size: 1.4em;">
    <strong>정보를 시각적 요소로 변환하는 작업</strong>
</p>
<p style="text-align:left">
가공되지 않은 데이터를 사람이 이해하기 쉬운 시각적 형태로 변환하고 
이를 활용해서 비즈니스를 성공적으로 수행하는데 도움을 줄 수 있다.
</p>
</div>

???
다시 말해 정보를 선, 면, 원과 같은 시각적 요소로 변환하는 작업을 말하고<br> 
이를 통해 정보를 명료하고 효과적으로 소통할 수 있도록 하는것이 목적으로 합니다.



---

### 데이터 시각화의 시작

<p>- 1786년 윌리엄 플레이페어(William Playfair)가 출간한 ❝경제와 정치의 지도❞라는 수출입 기록을 연도별로 정리한 책에서 막대그래프와 꺾은선그래프를 처음 사용</p>
<p>- 1801년 ❝통계의 성무일도❞에서 터키의 영토 비율을 나타내는 방법으로 원그래프 사용

<br>
<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:740px;text-align:center;">
    <span style="width:50%;float:left;">
    <img style="width:100%" src="src/img/WilliamPlayfair.png"/>
    </span>
    <span style="width:50%;float:left;">
    <img style="width:100%" src="src/img/WilliamPlayfair1.png"/>
    </span>
</span>
</p>

???
데이터 시각화의 시작은 18세기경 윌리엄 프레이페어라는 사람이 쓴 책에서<br> 
현대의 막대그래프와 꺽은선 그래프와 유사한 형태의 그래프를 처음 사용했으며
이후 영토 비율을 나타내는 방법으로 원그래프도 사용했습니다.<br>
그 이후 많은 사람들에 의해서 다양한 형태의 차트들이 생겨났습니다. 

---

### 데이터 시각화란 용어가 처음 사용된 시기

<p style="margin-top:120px;">
<span style="display:inline-block;background:#eee;padding:10px 10px 5px 10px;">
<img style="width:100%" src="src/img/Screenshot1.png">
</span>

<span style="display:block;text-align:right;margin-right:0px;font:0.6em normal;">
- 구글 N그램 뷰어
</span>
</p>

.footnote[.red.bold[*] 구글이 수만권의 책의 텍스트를 데이터화 시켜놓음으로써 인류가 어떤 문장과 단어들을 주로 사용 했는지 살펴 볼수 있는 검색 기술]

???
그림은 구글 N그램 뷰어라는 서비스에서 'data visualization', '빅데이터', '인포그래픽'으로 검색한 내용인데<br>
데이터 시각화란 용어가 언제부터 사용되기 시작했는지를 보여주고 있습니다.<br>
1980년대 초부터 사용하기 시작해서 꾸준하게 증가되는것을 확인할 수 있습니다.<br>
이는 최근 데이터 시각화의 부각이 단순히 데이터 증가로 인한 트렌드가 아니고 과거 부터 꾸준이 연구되고 데이터 분석에 효과적인 도구로 
사용되고 있었습니다. <br>
많은 데이터를 함축적으로 표현할수 있고 빠른 결정이 필요한 요즘 데이터 시각화가 더 중요하게 된것은 사실인거 같습니다.


---

### 데이터 시각화가 중요한 이유


<p class="highlight" style="text-align:center;margin-top:120px;">
❝<br>
인간의 가장 강력한 감각 기관인 눈은<br> 
냄새, 소리, 맛, 촉감을 위한 기관보다<br/> 
대역폭과 처리 능력이 훨씬 더 크다.<br>
<br>
그러므로 정보시각화를 통한 데이터 표현은<br>
인간의 가장 강력한 지각 능력을<br/> 
최대한 효과적으로 활용하는 방법이다.<br/>
❞<br>
<span style="display:block;text-align:right;margin-right:80px;font:0.8em normal;">
- 애덤페러, 아름다운시각화 中
</span>
</p>

???
데이터 시각화가 이렇게 중요해진 이유는 기본적으로 사람의 감각 중 눈은 <br>
다른 기관보다 정보를 처리하 할 수 있는 대역폭과 처리 능력이 더  큽니다.<br>
단순 텍스트 형식으로 되어 있는 정보를 분석하는 거 보다 시각화된 데이터 분석은 
인간의 가장 강력한 지각 능력을 최대한 효과적으로 활용하는 방법입니다.
 

---

### 데이터 시각화의 7가지 단계


<p class="highlight" style="text-align:center;margin-top:200px;">
데이터 시각화의 7가지 단계<br/>
<br/>
<span style="font-size:0.8em">
데이터 획득 - 분석 - 선별 - 데이터마이닝 - 표현 - 개선 - 상호작용
<span><br/><br/>
<span style="display:block;text-align:right;margin-right:80px;font:0.8em normal;">
- 벤 프라이[Ben Fry], Visualizing Data
</span>
</p>


---

### 데이터 시각화의 7가지 단계


<p class="highlight" style="text-align:center;margin-top:200px;">
데이터 시각화의 7가지 단계<br/>
<br/>
<span style="font-size:0.8em">
데이터 획득 - 분석 - 선별 - 데이터마이닝 - <span class="red">표현</span> - <span class="red">개선</span> - <span class="red">상호작용</span>
<span><br/><br/>
<span style="display:block;text-align:right;margin-right:80px;font:0.8em normal;">
- 벤 프라이[Ben Fry], Visualizing Data
</span>
</p>

???
여기서는 데이터를 어떻게 수집하고 무슨 데이터를 선별할지에 대한 내용은 제외하고 
정보를 어떻게 표현 할지에 대한 내용으로 살펴보겠습니다.


---

class: middle, center

## 2. 데이터 시각화의 종류

---

### 인포그래픽(Infographics)

<p >
- 어떤 주제에 대해서 하나 또는 그 이상의 특정한 측면을 
설명하고 의사소통하는 데 초점을 둔 데이터 시각화의 한 형태
</p>

<p style="text-align:center;">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:607px;text-align:center;">
<img style="width:100%" src="src/img/FireShot-info.png">
</span>
</p>

<span style="margin-left:70px">
.footnote[http://blog.kolon.com/225]
</span>

???
인포그래픽의 목적은 전달하고자 하는 것들을 쉽게 이해할 수 있도록 다양한 방법으로 복잡한 정보를 
단순하게 표현하는것입니다.


---

### 인포그래픽(Infographic)

<p>
- 1995년 제이미 세라의 참고래에 대한 인포그래픽
</p>

<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:737px;text-align:center;">
<img style="width:100%" src="src/img/infographics2.jpg">
</span>
</p>

.footnote[http://3.bp.blogspot.com/_LCqDL30ndZQ/TBPkvZIQaNI/AAAAAAAAAik/OrjA6TShNsk/s1600/INFO-BALLENA.jpg]


???
참고래에 대한 소개를 인포그래픽으로 나타내고 있습니다.<br>
참고래에 대한 설명과 함께 하단에 참고래 출몰지역, 크기, 먹이등 참고래에 대한 다양한 내용을 한 화면에 잘 설명하고 있습니다.

---

### 탐색 도구
<p>- 데이터 셋을 직접 탐색해 보고 의미를 파악할 수 있는 상호작용 가능한 도구를 제공</p>
<p>- <a href="http://www.ted.com/talks/hans_rosling_shows_the_best_stats_you_ve_ever_seen?language=en">
한스 로스링(Hans Rosling)의 시각화(TED 영상)</a></p>

<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:607px;text-align:center;">
<img style="width:100%" src="src/img/gapminder.png">
</span>
</p>

<span style="margin-left:70px">
.footnote[http://www.gapminder.org/world/]
</span>

???
다양한 형태의 데이터 셋을 사용자가 직접 탐색해 가면서 의미있는 정보를 파악하거나 가설을 세울 수 있는
도구를 제공합니다.<br>
그림은 갭마인더 프로젝트로 200년간 축척된 국가별 부와 건강 데이터등을 가지고 여러방면으로 의미를 파악할 수
있는 툴입니다. 


---

### 대시보드

<p>
- 어떤 이슈에 대한 핵심 측정치(metrics)를 가능한 빠르고 
효과적으로 이해 할 수 있도록 도와주는 집약적인 차트
</p>

<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:737px;text-align:center;">
<img style="width:100%" src="src/img/dashboard.gif">
</span>
</p>


---


class: middle, center

## 3. 그래프(차트)의 종류

---

### 시각화에 영향을 주는 데이터 형식

<table>
<thead>
<tr style="height:35px">
    <th>데이터 형식</th>
    <th>설명</th>
</tr>
</thead>
<tbody>
    <tr style="height:60px">
        <td>
        배열<br>
        (레코드 등 표 형식으로 표현)
        </td>
        <td>
        각 데이터는 복수의 속성값이 있으며 하나의 데이터는 한 줄로 표현</td>
    </tr>
    <tr style="height:100px">
        <td>
        그래프<br>
        (트리 구조와 중첩 구조, 네트워크 등)</td>
        <td>
        노드(정점)와 노드를 잇는 에지(변)로 구성된다.<br>
        에지에는 방향이 있는 것과 방향이 없는 것이 있다.<br>
        노드 간의 관계는 인접행렬 등으로 표현되는 일이 많다.<br>
         에지에는 그 관계성이 붙어 있는 것도 있다.
        </td>
    </tr>
</tbody>
</table>

.left-column[

```javascript
[
    {
        "year": 1850,
        "age": 20,
        "people": 122345
    }, 
    {
        "year": 1860,
        "age": 20,
        "people": 1438094
    },
    {
        "year": 1860,
        ...
]
```
]

.right-column[

```javascript
{
"name": "flare",
"children": [
    {
        "name": "cluster",
        "children": [
            {"name": "Agg", "size": 3938},
            {"name": "Comm", "size": 3812},
            {"name": "Hier", "size": 6714},
            {"name": "Merg", "size": 743}
        ]
    },
    ...
]
}
```
]



???
시각적으로 표현할 수 있는 차트는 다양합니다. 이런 차트를 어떻게 표현할 건인지는 데이터 구조에 영향을 받는다.
데이터 형식은 배열형식과 계층적 구조를 표현하는 그래프 형식으로 나눌수 있습니다.
<br>
시계열 데이터와 장르별 매출 데이터, 앙케이트 결과등은 배열로<br>
트리나 소셜 네트워크의 인간관계, 웹페이지 액세스 흐름등은 그래프 형식로 나타낼 수 있습니다. 


---

### 배열 데이터를 표현하는 차트(그래프)

<div>
    <div style="float:left;width:50%;">
    <p>- 막대그래프</p>
    <p>- 누적 막대그래프</p>
    <p>- 히스토그램</p>
    <p>- 퍼널 그래프</p>
    <p>- 꺾은선그래프</p>
    <p>- 평행형 / 방사형 차트</p>
    <p>- 영역형 그래프</p>
    </div>
    <div style="float:left;width:50%">
    <p>- 원그래프 / 도넛그래프</p>
    <p>- 상자 수염 그림</p>
    <p>- 산포도</p>
    <p>- 산포도 행렬</p>
    <p>- 버블차트</p>
    <p>- 히트맵</p>
    </div>
</div>

???
배열형식의 데이터를 이용해서 표현 할 수 있는 차트의 종류들입니다.
하나씩 살펴보겠습니다.

---

### 막대그래프
<p>- 같은 너비의 막대를 사용하여 데이터를 높이로 표현한 그래프</p>
<p>- 데이터의 크기 비교에 적합</p>
<p>- 그리는 방식에 따라 막대를 세로 또는 가로로 표현할 수 있음</p>
<p>- 복수 계열을 표현할 경우 10개 이상 늘어나지 않도록 할 것</p>
<br>

<div id="barchart"></div>

???
X축은 라벨과 같은 이산적인 값 또는 월별 분기별 같은 등간격의 순서가 있는 값을 사용할 수 있다.<br>
 

---

### 누적 막대그래프

<p>- 막대그래프를 쌓아올린 형태로 복수 요소를 표현</p>
<p>- 전체량과 동시에 하나의 막대를 구성하는 데이터를 시각화</p>
<br>

<br>
<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:740px;text-align:center;">
    <span style="width:50%;float:left;">
    <img style="width:100%" src="src/img/stackchart1.png"/>
    </span>
    <span style="width:50%;float:left;">
    <img style="width:100%" src="src/img/normalizedstatckchart.png"/>
    </span>
</span>
</p>


???
누적 막대그래프는 두가지 형태로 사용할 수 있습니다</br>
왼쪽 그림의 누적 막대그래프는 각 요소의 합한 값의 높이를 고정하지 않고 데이터를 표현하면서 지역 데이터의 절대량을 비교할 수 있습니다.<br>
오른쪽 그림의 각 요소의 합한값의 높이를 정규화 해서 각 지역에서 연령대별 차지하고 있는 비율을 표현할 수 있습니다 

<br>
지역별 연령대에 대한 분포도


---

### 히스토그램(Histogram)

<p>- 막대그래프처럼 막대 높이로 데이터를 표현</p>
<p>- 데이터 세트 내에 있는 변수의 분포를 표현</p>
<p>- 계급(보고 싶은 데이터의 범위), 도수(계급에 포함되는 데이터 갯수)</p>

<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:740px;text-align:center;">
    <span style="width:100%;float:left;">
    <img style="width:100%" src="src/img/histogramchart.png"/>
    </span>
   
</span>
</p>

???
막대그래프와 차이점은 막대그래프는 복수 데이터가 있는 요소를 비교하는데 이용하는 반면<br> 
히스토그램은 데이터 세트 내에 있는 변수에 대한 분포를 표현하는데 이용합니다<br> 
예를 들어 주어진 데이터 셋이 한반의 학생들에 대한 몸무게 데이터를 가지고 있다면 50~60, 60~70, 70~80 의 각 구간에 해당하는 학생들의 분포를 표현하는데 히스토그램을 사용할 수 있습니다

---

### 퍼널(Funnel) 그래프

<p>- 한 방향으로 진행하면 서서히 좁아지는(감소) 데이터를 시각화</p>
<p>- 단계 별 인수 분석에 이용</p>

<br>
<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:740px;text-align:center;">
    <span style="width:100%;float:left;">
    <img style="width:100%" src="src/img/funnelchart.png"/>
    </span>
   
</span>
</p>

???
예를 들면 인터넷 쇼핑몰에서 물건을 구매하기 위해 방문한 고객의 물건을 장바구니에 넣기, 배송정보 입력, 구매, 결제에 이어지는 각 단계중 어디 시점에 구매 포기가 많은지를 분석할 수 있습니다


---

### 꺾은선(Line) 그래프

<p>- 데이터를 점으로 표시하고 그 점을 선으로 연결하여 하나의 계열로 표현</p>
<p>- 베이스라인이나 트렌드 파악에 적합하고 값 예측 등에 이용</p>

<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:740px;text-align:center;">
    <span style="width:100%;float:left;">
    <img style="width:100%" src="src/img/linechart.png"/>
    </span>
   
</span>
</p>

---

### 평행형(Parallel) 차트 / 방사형(Radar) 차트

<p>- 평행으로 그은 복수의 직선에 데이터의 속성값을 플롯하여 한 줄로 연결해서 표현</p>
<p>- 평행선은 각각 하나의 속성값을 일차원으로 표현하며 많은 속성값을 동시에 표현 가능</p>
<p>- 전체적인 경향을 파악할 수 있고 특정 관점을 선의 색으로 구분하여 특정 집단에서의 경향을 쉽게 분석 가능</p>

<br>
<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:740px;text-align:center;">
    <span style="width:50%;float:left;">
    <img style="width:100%" src="src/img/parallelchart.png"/>
    </span>
    <span style="width:50%;float:left;">
    <img style="width:90%" src="src/img/radarchart.png"/>
    </span>
</span>
</p>

???
방사형 차트는 평행으로 그린 평행형 차트의 선을 중심으로부터 방사형으로 그린 차트를 말한다.<br>
좁은 공간에서의 표현에 어울리지만 반지름과 각도를 이용한 극좌표 표현은 사람이 인지하기 어렵기 때문에 평행형 차트를 사용

---

### 영역형(Area) 그래프

<p>- 선그래프를 누적해서 면으로 표현한 그래프</p>
<p>- 시계열 데이터 등 주로 연속적으로 변화하는 데이터 표현에 적합</p>
<p>- 값의 통계나 비율의 변화 표현에 적합</p>

<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:740px;text-align:center;">
    <span style="width:100%;float:left;">
    <img style="width:100%" src="src/img/stackareachart.png"/>
    </span>
</span>
</p>


---

### 원(Pie)그래프/도넛그래프

<p>- 파이처럼 원을 잘라 각도로 데이터의 양을 표현한 그래프</p>
<p>- 비율 표현에 적합하지만 각도와 면적을 정확하게 이해하기 어려움</p>
<p>- 표현할 내용을 다섯 개 이하로 제한</p>
<p>- 누적 막대그래프(띠그래프)로 대체 가능</p>

<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:740px;text-align:center;">
    <span style="width:50%;float:left;">
    <img style="width:100%" src="src/img/piechart1.png"/>
    </span>
    <span style="width:50%;float:left;">
    <img style="width:90%" src="src/img/piechart2.png"/>
    </span>
</span>
</p>

???
도넛그래프는 원그래프의 가운데가 뚫린 그래프로 중앙의 빈자리에 설명이나 합계 표현

---

### 상자 그림(Box-Whisker's Plot)

<p>- 최솟값, 1사분위, 중앙값, 3사분위, 최대값을 동시에 표현할 수 있는 그래프</p>
<p>- 데이터 분포를 표현하고 중앙값의 위치에 따라 분포 형태도 파악 가능  

<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:500px;text-align:center;">
    <span style="width:100%;float:left;">
    <img style="width:100%" src="src/img/boxplot.png"/>
    </span>
   
</span>
</p>

???
다섯가지 중요 요약 통계량인<br>

히스토그램과는 다르게 집단이 여러개인 경우에도 한 공간에 표현할 수 있다는 것이 다른 점입니다 

---

### 산포도(Scatter Plot)
<p>- 두 데이터 사이의 관계성을 표현</p>
<p>- 상관관계 유무 등을 볼 수 있으므로 데이터의 기본적인 성질을 파악하는데 이용</p>

<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:740px;text-align:center;">
    <span style="width:100%;float:left;">
    <img style="width:100%" src="src/img/scatterchart1.png"/>
    </span>
   
</span>
</p>

???
X축과 Y축에 다른 데이터 변수를 할당함으로써 두 데이터 변수 간의 관계를 표현하는데 적합합니다  

---

### 산포도 행렬(Scatter Plot Matrix)

<p>- 산포도 자체를 매트릭스 형태로 배치하여 여러 변수의 관계성을 표현</p>
<p>- 각각의 행과 열은 모두 다른 변수를 나타내며 교차하는 부분이 각 변수의 산포도로 표현</p>


<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:400px;text-align:center;">
<img style="width:100%" src="src/img/Scatter_Plot_Matrix.png">
</span>
</p>




---

### 버블(Bubble) 차트

<p>- 점을 원으로 그려 반지름으로 수치를 표현</p>
<p>- X축, Y축, 반지름으로 세 가지 수치 데이터 표현</p>

<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:740px;text-align:center;">
    <span style="width:100%;float:left;">
    <img style="width:100%" src="src/img/bubblechart.png"/>
    </span>
   
</span>
</p>

---

### 히트맵

<p>- 분포의 도수를 색으로 표현해서 위치 정보에 플롯한 시각화</p>
<p>- 어느 위치에서 도수가 높거나 낮은지를 한눈에 파악 가능</p>

<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:637px;text-align:center;">
<img style="width:100%" src="src/img/australia-heat-map.jpg">
</span>
</p>

<span style="margin-left:60px">
.footnote[http://wired.jp/2013/01/09/australia-temperature-map/]
</span>

???
그림은 오스트레일리아의 기온을 히트맵으로 표현하고 있습니다.

---

### 그래프 데이터를 표현하는 차트(그래프)

<p>- 트리맵</p>
<p>- 파티션 다이어그램</p>
<p>- 산키 차트</p>
<p>- 역학 그래프</p>

---

### 트리맵(Treemap)

<p>- 중첩 구조(트리 구조)로 된 계층적 데이터를 면적으로 표시한 차트</p>
<p>- 각각의 데이터가 전체에서 차지하는 비율을 구조적으로 확인 가능</p>

<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:537px;text-align:center;">
    <img style="width:100%" src="src/img/treemap-chart.png"/>
</span>
</p>

<span style="margin-left:100px">
.footnote[http://hyukjunseo.egloos.com/m/3508960]
</span>

---

### 파티션 다이어그램(Partition Diagram)

<p>- 상위 카테고리에서부터 하위 항목으로 계층적 관계성과 양적 관계를 표현</p>
<p>- 관계성 파악에는 원 또는 방사형 선택</p>
<p>- 양적인 관계 파악은 사각형 형태 선택</p>

<br>
<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:740px;text-align:center;">
    <span style="width:33%;float:left;">
    <img style="width:100%" src="src/img/circle-packing.png"/>
    </span>
    <span style="width:33%;float:left;">
    <img style="width:98%" src="src/img/zoomable-sunburst.png"/>
    </span>
    <span style="width:34%;float:left;">
    <img style="width:83%" src="src/img/partition-diagram.png"/>
    </span>
</span>
</p>

<span style="margin-left:0px">
.footnote[http://bl.ocks.org/mbostock]
</span>

---

### 산키 차트(Sankey Chart)

<p>- 어디에서부터 어디로 향하는지에 대해 흐름을 표현</p>
<p>- 사용자의 흐름이나 이동을 표현에 적합</p>
<p>- 반복이 발생하거나 이동 패턴이 많으면 구조가 복잡해지는 단점</p>

<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:637px;text-align:center;">
    <img style="width:100%" src="src/img/sankey-chart.png"/>
</span>
</p>

<span style="margin-left:45px">
.footnote[https://esotech.com/blog/]
</span>

???
Google Analyics의 유저 플로우<br>
사용자가 어떻게 이동하며, 어디에서 크게 이탈하는지를 파악 할 수 있다.


---

### 역학 그래프(Force Directed Graph)

<p>- 노드와 노드 간의 관계를 표현하는데 적합</p>
<p>- 소셜그래프 또는 사용자가 대상에 하는 행위등을 시각화</p>


<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:400px;text-align:center;">
    <img style="width:100%" src="src/img/forcedirectedchart.png"/>
</span>
</p>


???
역학 그래프는 노드와 링크에 가상적인 힘인 인력과 척력을 할당하여 역학적 에너지가 낮은 안전한 상태를 만들려고 하는 성질을 가집니다.


---

<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:737px;text-align:center;">
    <img style="width:100%" src="src/img/chart-suggestion-infographic.jpg"/>
</span>
</p>

???
시각화 형태가 너무 많아서 어떤 차트 이용하면 좋을지 고민이 된다면 다음 그림이 도움이 될거 같습니다</br/>
다음 표는 데이터 성질에 따른 적절한 시각화를 선택할 수 있는 가이드를 제공합니다.<br>
예를 들어 데이터의 두개의 데이터 변수에 대한 관계에 표현에는 산포도를 3개의 데이터 변수에는 버블 차트를 사용하면 적절할 것입니다.


---

class: middle, center

## 4. 피해야 할 차트(그래프)<br/>

???
이번에는 자주 이용되지만 바람직하지 않는 성질을 가진 대표적인 차트 알아보도록 하겠습니다



---

### 원그래프

<p>- 사람은 길이보다 면적과 각도를 정확히 인지하기 어렵기 때문에<br> 원그래프의 각 요소의 크기를 쉽게 인지할 수 없음</p>
<p>- 복수개의 원그래프를 비교하기 어려움</p>
<p>- 해석의 편의성 측면에서 띠그래프와 막대그래프가 더 적절</p>

<br>
<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:740px;text-align:center;">
    <span style="width:100%;float:left;">
    <img style="width:100%" src="src/img/multipiechart.png"/>
    </span>
</span>
</p>

???
원그래프는 자주사용되는 차트 중에 하나지만 반드시 사용해야만 하는 상황은 없습니다.<br>
두가지 이유가 있는데 첫번째는<br>
사람은 길이보다 면적과 각도를 정확히 인지하기 어렵기 때문에 원그래프의 각 요소의 크기를 쉽게 인지할 수가 없습니다<br>
두번째는 복수개의 원그래프를 비교하기 어렵다는 것입니다<br>
따라서 데이터를 해석하는 편의적인 측면에 띠그래와 막대그래프가 더 적절합니다

---

### 3D 그래프

<p>- 3D 특성상 앞쪽 오브젝트 표면적이 다른 오브젝트보다 커보임</p>
<p>- 원그래프만의 특징이 아니라 3D 그래프 전반에 대한 특징</p>
<br>
<br>


<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 0px;width:737px;text-align:center;">
    <span style="width:50%;float:left;">
    <img style="width:90%" src="src/img/3d-circle-chart.png"/>
    </span>
    <span style="width:50%;float:left;">
     <img style="width:100%" src="src/img/3d-circle-chart-2.png"/>
    </span>
</span>
</p>

???
그림을 보면 모두 값은 값을 표현한 차트지만 앞쪽에 있는 오브젝트가 다른 오브젝트보다 더 커보입니다.<br>
또한 오른쪽 그림 처럼 보는 시각에 따라서 그 영향이 더 크기때문에 사용되지 않아야 될 차트 중에 하나입니다.


---
### 그림 그래프
<p>- 그림의 크기로 데이터의 크기를 나타내는 그래프</p>
<p>- 인상 조작에 자주 이용</p>


<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:517px;text-align:center;">
<img style="width:100%" src="src/img/human-chart.jpg">
</span>
</p>

???
인상 조작이란 의도적으로 보는 사람에 따라 데이터를 왜곡되게 하는 것을 말합니다.<br>
그림을 보면 오른쪽 사람을 왼쪽의 2배 길이로 그려졌고 그 값도 2배를 나타내고 있지만<br/>
가로, 세로 모두가 2배가 되면서 4배 큰것처럼 느껴지고 있습니다.<br>

이상 세가지 차트는 여러 책에서도 말하고 있지만 될 수 있으면 사용하지 마라가 아니고
다른 대체 차트를 사용하라고 얘기하고 있습니다.

---

class: middle, center

## 5. D3 기본

---

### D3(Data Driven Document) 소개

<p>- 데이터 시각화 제작을 위한 자바스크립트 라이브러리</p>
<p>- 웹 문서를 데이터 중심으로 다룰 수 있음</p>
<p>- 마이크 보스탁(Mike Bostock, http://bost.ocks.org/mike)</p>
<p>- BSD 라이선스</p>
<p>- http://www.d3js.org</p>

<p style="text-align:center">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:600px;text-align:center;">
<img style="width:100%" src="src/img/mbostock-GitHub.png">
</span>
</p>

???
마이크 보스톡
- 2011년 D3.js 공식 발표
- 2015년 시각화 도구 개발에 매진하기 위해 뉴욕타임즈 떠났다

BSD 라이선스 = 추가 비용없이 비영리 또는 영리 목적으로 사용하거나 수정, 배포할 수 있다.




---

### SVG(Scalable Vector Graphics)

<p>- 벡터 기반의 이미지 포맷</p>
<p>- HTML과 비슷한 마크업 코드로 정의</p>
<p>- IE8 이하를 제외한 모든 브라우저가 지원
<span style="font-size:18px;">(<a href="http://caniuse.com/#feat=svg">http://caniuse.com/#feat=svg</a>)</span>
<p>

<table>
<thead>
<tr style="height:35px">
    <th>Canvas</th>
    <th>SVG</th>
</tr>
</thead>
<tbody >
    <tr style="height:35px">
        <td style="width:49%;text-align:left!important">픽셀 기반</td>
        <td style="width:49%;">벡터 기반</td>
    </tr>
    <tr style="height:35px">
        <td style="text-align:left!important">단일 HTML 요소(Canvas)</td>
        <td>DOM의 일부가 되는 복수의 그래픽 요소</td>
    </tr>
    <tr style="height:35px">
        <td style="text-align:left!important">스크립트로만 스타일 변경</td>
        <td>스크립트와 CSS로 스타일 변경</td>
    </tr>
    <tr style="height:35px">
        <td style="text-align:left!important">다수의 오브젝트(10,000개 이상), 작은 표면에서 높은 성능</td>
        <td>소수의 오브젝트(10,000개 미만), 큰 표면에서 높은 성능</td>
    </tr>
</tbody>
</table>
<br>
<div>
    <div style="width:49%;float:left;border:1px solid #eee" id="canvas-area"></div>
    <div style="width:49%;float:left;border:1px solid #eee" id="svg-area"></div>
</div>


???
D3는 SVG를 쉽게 다룰 수 있도록 특화되어 있지만 div와 같은 HTML 문서요소도 다룰 수 있습니다.<br>
단, div와 같은 다른 HTML 문서요소는 시각화 요소로 표현하기에는 투박하고 브라우저별 다르게 보일 수 있습니다.<br> 
그에 반해 SVG는 더 믿을 만하고 브라우저 일관성이 뛰어나면 심지어 빠르기 까지 합니다.<br>
그럼 SVG가 무엇인지 살표보겠습니다.<br><br>

벡터 형식의 확장 가능한 그래픽 요소를 이용하므로 확대 및 축소, 회전등의 변형 시 이미지 품질이 떨어지지 않는다.<br>
DOM과 동일한 요소로 취급되기 때문에 디버그 하기 쉽다<br><br>

canvas 도 HTML 문서요소 중 하나로써 스크립트를 이용해서 그림을 그리는데 사용됩니다.<br>

---
### SVG 좌표 시스템

<p>- 일반적인 픽셀 기반의 좌표 시스템과 동일</p>
<p>- 드로잉 영역의 좌측 상단을 0, 0으로 지정</p>
<br>

<div style="background-color:#eee;height:320px;">
<svg width="748" height="500">  
    <g transform="translate(10,10)">
    <circle cx="0" cy="0" r="5" />
    <text x="5" y="20">0,0</text>
    <circle cx="200" cy="100" r="5" />
    <text x="205" y="100">200,100</text>
    <circle cx="300" cy="200" r="5" />
    <text x="305" y="200">300,200</text>
    <line x1="0" y1="0" x2="0" y2="300" stroke-width="1.5" stroke="#000" marker-end="url(#triangle-end)"/>
    <line x1="0" y1="0" x2="730" y2="0" stroke-width="1.5" stroke="#000" marker-end="url(#triangle-end)"/>
    </g>
    <defs>
        <marker id="triangle-x" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z"/>
        </marker>
        <marker id="triangle-end" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z"/>
        </marker>
    </defs>
</svg>
</div>

???
일반적인 픽셀 기반의 좌표 시스템과 동일하게 드로잉 영역의 좌측 상단을 0.0으로 한다.

---

### SVG 문서요소 - 사각형(Rectangle)

```xml
<rect x="0" y="0" width="600" height="80" />
```
<div style="background-color:#eee;height:200px;">
<svg width="748">
   <g width="700" transform="translate(25,60)">
   <rect x="0" y="0" width="700" height="80"/>
   </g>
</svg>
</div>



```xml
<rect x="0" y="0" width="600" height="80" rx="20" ry="20"  
                     fill="teal" stroke="black" stroke-width="2" />
```
<div style="background-color:#eee;height:200px;">
<svg width="748">
   <g width="700" transform="translate(25,60)">
   <rect x="0" y="0" width="700" height="80" rx="20" ry="20" 
                    fill="teal" stroke="black" stroke-width="2"  />
   </g>
</svg>
</div>

???
SVG 시각 요소의 기본 스타일은 외곽선이 없고 바탕이 검은색이다.<br>
다른 스타일을 원하면 문서요소에 스타일을 지정해야한다


---

### SVG 문서요소 - 원(Circle)

```xml
<circle cx="100" cy="100" r="100" 
                      fill="#40718B" stroke="black" stroke-width="2" />
```
<div style="background-color:#eee;height:320px;">
<svg width="748" height="500">
   <g transform="translate(250,50)">
   <circle cx="100" cy="100" r="100" fill="#40718B" stroke="black" stroke-width="2" />
   </g>
</svg>
</div>
---

### SVG 문서요소 - 타원(Ellipse)

```xml
<ellipse cx="100" cy="100" rx="200" ry="50" 
                      fill="rgba(90, 123, 147, 0.8)" stroke="black" stroke-width="3" />
```
<div style="background-color:#eee;height:320px;">
<svg width="748" height="500">
   <g transform="translate(250,50)">
   <ellipse cx="100" cy="100" rx="200" ry="50" 
                      fill="rgba(90, 123, 147, 0.8)" stroke="black" stroke-width="3" />
   <line x1="-200" y1="100" x2="400" y2="100" stroke="black"/>
   <line x1="100" y1="0" x2="100" y2="200" stroke="black"/>
   <text x="305" y="100">rx</text>
   <text x="100" y="45">ry</text>
   </g>
</svg>
</div>

???
반지름 r 대신에 축별로 두개의 반지름 값 rx와 ry

---

### SVG 문서요소 - 선(Line)

```xml
<line x1="0" y1="0" x2="500" y2="200" 
                      stroke="purple" stroke-width="5" />
```
<div style="background-color:#eee;height:320px;">
<svg width="748" height="500">
   <g transform="translate(100,50)">
   <line x1="0" y1="0" x2="500" y2="200" 
                      stroke="purple" stroke-width="5" />
   </g>
</svg> 
</div>

---

### SVG 문서요소 - 다각형(Polygon)

```xml
<polygon points="200,10 250,190 160,210" 
                      style="fill:rgb(221,160,97);stroke:purple;stroke-width:2" />
```
<div style="background-color:#eee;height:320px;">
<svg width="748" height="500">
   <g transform="translate(100,50)">
   <polygon points="200,10 250,190 160,210" 
                      style="fill:rgb(221,160,97);stroke:purple;stroke-width:2" />
   </g>
</svg> 
</div>

---

### SVG 문서요소 - Path

```xml
<path d="M150 0 L75 200 L225 200 L200 100 Z"
                        stroke="red" stroke-width="5" fill="#eee"/>

M = moveto
L = lineto
H = horizontal lineto
V = vertical lineto
C = curveto
S = smooth curveto
Q = quadratic Bézier curve
T = smooth quadratic Bézier curveto
A = elliptical Arc
Z = closepath
```
<div style="background-color:#eee;height:260px;">
<svg width="748" height="300">
   <g transform="translate(100,20)">
   <path d="M150 0 L75 200 L225 200 L300 100 Z" stroke="red" stroke-width="5" fill="#eee"/>
   </g>
</svg> 
</div>

???
D3에서는 path를 쉽게 다룰 수 있도록 하는 메소드를 제공합니다. 


---

### SVG 문서요소 - Text

```xml
<text x="0" y="15" fill="red">I love SVG!</text>
```
<div style="background-color:#eee;height:320px;">
<svg width="748" height="500">
   <g transform="translate(100,50)">
   <text x="0" y="15" fill="red">I love SVG!</text>
   </g>
</svg> 
</div>

---



### SVG 문서요소 - 컨테이너 요소

<div>
    <div style="float:left;width:50%;">
        <p>- g</p>
        <p>- a</p>
        <p>- defs</p>
        <p>- glyph</p>
        <p>- marker</p>
        <p>- mask</p>
        <p>- missing-glyph</p>
    </div>
    <div style="float:left;width:50%">
        <p>- pattern</p>
        <p>- switch</p>
        <p>- symbol</p>
    </div>
</div>
 

---

### D3 다운로드 및 참조하기

<p>- <a href="https://d3js.org/">https://d3js.org/</a> 다운로드</p>
<p>- <a href="https://github.com/mbostock/d3">https://github.com/mbostock/d3</a> 다운로드</p>
<p>- bower install d3 --save</p>
<p>- CDN(<a href="https://cdnjs.com/libraries/d3">https://cdnjs.com/libraries/d3</a>)</p>
<br>

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>D3</title>
    <script type="text/javascript" src="d3/d3.v3.js"></script>
</head>
<body>
...
</body>
</html>
```

.footnote[.red.bold[*]https://github.com/mbostock/d3/tree/4]


---

### D3 동작 순서

.left-column[

<p style="text-align:center">
    <img style="width:65%;margin-left:50px;" src="src/img/d3action.png"/>
</p>

]

.right-column[
<p style="margin-left:-50px;">1. 데이터를 브라우저 메모리로 로딩(Loading)</p>
<p style="margin-left:-50px;margin-top:80px">2. HTML 문서요소를 생성한 후 데이터와 바인딩(Binding)</p>
<p style="margin-left:-50px;margin-top:80px">3. 개별 데이터를 토대로 문서요소의 속성을 지정(Transforming)</p>
<p style="margin-left:-50px;margin-top:80px">4. 사용자 입력에 대한 반응으로 문서요소의 상태값 전이(Transitioning)</p>

]

???
D3를 배운다는것은 이런 일렬의 과정에 필요한 API를 습득하는 과정이라고 생각하면 됩니다.

---

### 데이터 로딩

<table>
<thead>
<tr style="height:35px">
    <th style="width:10%">종류</th>
    <th>D3 메소드</th>
    <th>설명</th>
</tr>
</thead>
<tbody >
    <tr style="height:35px">
        <td>TSV</td>
        <td>d3.tsv(url[, accessor][, callback])</td>
        <td>데이터가 탭으로 구분된 형식</td>
    </tr>
    <tr style="height:35px">
        <td>CSV</td>
        <td>d3.csv(url[, accessor][, callback])</td>
        <td>데이터가 콤마로 구분된 형식</td>
    </tr>
    <tr style="height:35px">
        <td>JSON</td>
        <td>d3.json(url[, callback])</td>
        <td>JavaScript Object Notation</td>
    </tr>
    <tr style="height:35px">
        <td>HTML</td>
        <td>d3.html(url[, callback])</td>
        <td>브라우저로 표시했을 때 데이터를 보기 좋게 표시. 레이아웃 존재</td>
    </tr>
    <tr style="height:35px">
        <td>XML</td>
        <td>d3.xml(url[, mimeType][, callback])</td>
        <td>태그를 이용한 데이터 표현</td>
    </tr>
    <tr style="height:35px">
        <td>TEXT</td>
        <td>d3.text(url[, mimeType][, callback])</td>
        <td>순순 문자열로만 구성된 데이터 파일</td>
    </tr>
</tbody>
</table>
```javascript
d3.json('user.json', function(error, data) {
    if(error) throw error;
    // 차트 생성
});
```

```javascript
d3.csv('user.csv', accessor, function(error, data) {
    if(error) throw error;
    // 차트 생성
});

var accessor = function(d) {
*    d.age = +d.age;
};
```

???
D3가 다룰 수 있는 데이터 형식은 표처럼 다양하고 관련 메소드를 제공합니다.<br>
메소드들은 비동기로 처리되기 때문에 데이터가 로딩완료 된 후에 데이터를 사용해야 되기 때문에<br> 
콜백 메소드 내에서 로딩된 데이터를 사용해야합니다.<br>
CSV와 TSV는 특이하게 두번째 파라미터로 accessor를 추가할 수 있는데<br> 
이는 CSV, TSV는 불러들인 데이터의 모든 속성값이 문자열이기 때문에 <br>
숫자데이터를 다루기 위해서는 숫자로 변환이 필요합니다.<br>
아래와 같이 문자 속성을 숫자로 변환할 때 accessor를 사용합니다.<br>


---

### 문서요소 생성하기

<p>1. 메소드 체인으로 속성 지정</p>
```javascript
d3.select('div#uid53').append("svg").attr("width", 800).attr("height", 200)
    .append("rect")
    .attr("x", 10).attr("y", 10)
    .attr("width", 500).attr("height", 200).attr("fill", "#40718B");
```

<p>2. 객체로 속성 지정</p>
```javascript
d3.select('div#uid53').append("svg").attr("width", 800).attr("height", 200)
    .append("rect")
    .attr({
        x: 10, y: 10,
        width: 500, height: 200,
        fill: '#40718B'
    });
```

<div id="uid53">
    <svg width="800" height="100">
        <rect x="10" y="10" width="500" height="80" fill="#40718B">
    </svg>
</div>

???
append 메소드를 이용해서 문서요소를 추가하고 attr 메소드를 이용해 속성값을 변경합니다.<br>
D3는 jQuery 처럼 메소드 체이닝을 과하다 싶을 정도로 사용해서 설정합니다.<br>
사실 메소드 체이닝은 여러 장점이 있는데 첫째 코드를 깔끔하게 해주고,<br> 
두번째로 선택된 DOM을 캐시하고 있기때문에 성능이 좋아지는 장점이 있습니다.<br>


---

### 기본이 되는 API

<p>- d3.select(selector)</p>
&nbsp;&nbsp;: selector에 해당하는 단일 DOM 요소 선택
<p>- d3.selectAll(selector)</p>
&nbsp;&nbsp;: selector에 해당하는 모든 DOM 요소 선택
<p>- selection.attr(name[,value])</p>
&nbsp;&nbsp;: DOM 속성 조회 또는 설정
<p>- selection.style(name[,value])</p>
&nbsp;&nbsp;: DOM 스타일 조회 또는 설정
<p>- selection.text([value])</p>
&nbsp;&nbsp;: DOM 텍스트 조회 또는 설정
<p>- selection.data([values[,key]])</p>
&nbsp;&nbsp;: d3.select 또는 d3.selectAll로 선택한 DOM에 데이터 배열을 연결(binding)

---

### Enter, Update, Exit


.left-column[
<p>- selection.enter()</p>

```javascript
svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect");
```
]

.right-column[
<p>- selection.exit()</p>
```javascript
svg.selectAll("rect")
    .data(dataset)
    .exit()
    .remove();
```
]

<svg width="700" height="500">
    <circle cx="320" cy="200" r="140" fill="green" opacity="0.4"/>
    <circle cx="460" cy="200" r="140" fill="red" opacity="0.4"/>
    <text x="260" y="210" text-anchor="middle" style="font-family:sans-serif;font-weight:bold;" fill="brown">enter</text>
    <text x="390" y="210" text-anchor="middle" style="font-family:sans-serif;font-weight:bold;" fill="brown">update</text>
    <text x="520" y="210" text-anchor="middle" style="font-family:sans-serif;font-weight:bold;" fill="brown">exit</text>
    <text x="310" y="50" text-anchor="middle" style="font-family:sans-serif;font-weight:bold;" >데이터</text>
    <text x="460" y="50" text-anchor="middle" style="font-family:sans-serif;font-weight:bold;" >DOM</text>
    
</svg>

???
D3에서 가장 중요하고 이 부분만 이해하면 D3를 다 안다고 할 만큼 중요한 부분입니다.<br>



---


### 척도(Scale)

<p>- 입력되는 정의역(domain)과 출력되는 치역(range)을 매핑한 함수</p>
<p>- 데이터 값을 시각화에 필요한 적절한 값(비율)로 매핑</p>


<div style="background-color:#eee;height:320px;">
<svg width="748" height="500">
   <g transform="translate(100,100)">
   <line x1="0" y1="0" x2="500" y2="0" stroke="black" stroke-width="1.5"/>
   <line x1="50" y1="100" x2="450" y2="100" stroke="black" stroke-width="1.5"/>
   <circle cx="0" cy="0" r="5"/>
   <circle cx="250" cy="0" r="5"/>
   <circle cx="500" cy="0" r="5"/>
   <text x="0" y="20" font-size="15">100</text>
   <text x="235" y="20" font-size="15">300</text>
   <text x="490" y="20" font-size="15">500</text>
   
   <circle cx="50" cy="100" r="5"/>
   <circle cx="250" cy="100" r="5"/>
   <circle cx="450" cy="100" r="5"/>
   <text x="40" y="120" font-size="15">10</text>
   <text x="235" y="120" font-size="15">180</text>
   <text x="440" y="120" font-size="15">350</text>
   </g>
   <text x="255" y="70" font-size="15">입력되는 데이터 값의 범위</text>
   <text x="300" y="90" font-size="15">.domain([a,b])</text>
   <text x="305" y="170" font-size="15">출력되는 범위</text>
   <text x="310" y="190" font-size="15">.range([a,b])</text>
</svg> 
</div>

```javascript
var xScale = d3.scale.linear()
                          .domain([100, 500])
                          .range([10, 350);
```

---
### D3에서 제공하는 척도의 종류

- d3.scale.linear()<br>
<span style="font-size:20px">- 선형 척도</span>
- d3.scale.ordinal()<br>
<span style="font-size:20px">- 정의역이 카테고리 이름 같이 측정 불가능한 값일 경우에 사용하는 척도</span> 
- d3.scale.sqrt()<br>
<span style="font-size:20px">- 제곱근 척도</span>
- d3.scale.pow()<br>
<span style="font-size:20px">- 제곱 척도</span>
- d3.scale.log()<br>
<span style="font-size:20px">- 상용 로그(log) 척도</span>
- d3.scale.quntize()<br>
<span style="font-size:20px">- 치역을 위해 이산 값을 제공하는 선형 척도</span>
- d3.scale.quantile()<br>
<span style="font-size:20px">- 양자 척도와 비슷하지만, 정의역이 이산 값을 가짐</span>
- d3.time.scale()<br>
<span style="font-size:20px">- 날짜와 시간을 위한 척도</span>

 
---

### D3에서 제공하는 척도의 종류
- d3.scale.category10()<br>
- d3.scale.category20()<br>
- d3.scale.category20b()<br>
- d3.scale.category20c()<br>
<span style="font-size:20px">- 미리 정의된 10개 또는 20개의 색상 서열 척도</span>

---


### 척도 생성 방법

```javascript
var scale = d3.scale.linear()
                        .domain([100,500])  // 정의역
                        .range([10,350]);   // 치역
                        
console.log(scale(100));    // 10
console.log(scale(500));    // 350                        
console.log(scale(300));    // 180
console.log(scale(800));    // ??
```

---

### 척도 생성 방법

```javascript
var scale = d3.scale.linear()
                        .domain([100,500])  // 정의역
                        .range([10,350]);   // 치역
                        
console.log(scale(100));    // 10
console.log(scale(500));    // 350                        
console.log(scale(300));    // 180
console.log(scale(800));    // 605
```

--

```javascript
var scale = d3.scale.linear()
                        .domain([100,500])
                        .range([10,350])
*                       .clamp(true);

console.log(scale(800));    // 350
console.log(scale(-100));    // 10
```
- nice()
- rangeRound()
- clamp()

---

### 축(Axis)

<p>- 척도와 형태가 유사</p>
<p>- 어떤 값을 반환하는 대신에 선과 라벨, 구분자를 가진 시각적 요소가 생성</p>

<div id="scatter-chart"></div>

---

### 축 생성 방법

```javascript
var xAxis = d3.svg.axis()
                   .scale(xScale)   // 척도 설정
                   .orient("bottom");   // 축을 나타내는 선을 기준으로 라벨의 위치 지정

svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0, 400")
        .call(xAxis);
```

- g 문서요소의 역할<br>
<span style="font-size:19px">- 다른 문서요소의 컨테이너 역할</span><br>
<span style="font-size:19px">- 시각적 요소들을 렌더링하는 방법을 결정하는 트랜스폼(transformation) 적용</span>
- call() 함수<br>
<span style="font-size:19px">- 메서드 체인 앞단의 선택물을 가져와서 함수로 전달</span>
```javascript
xAxis(svg.append("g"))
```

---

###  축 스타일 설정

<p>
- shape-rendering<span style="font-size:14px;">
(<a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering">https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering</a>)
</span>
<br>
<span style="font-size:20px">: 축과 구분선을 선명하게 만들기 위해서 사용</span>
</p>

```css
.axis path,
.axis line {
    fill: none;
    stroke: black;
*    shape-rendering: crispEdges;
}
.axis text {
    font-family: sans-serif;
    font-size: 11px;
}
```

<div id="style-scatter" style="margin-top:-20px;"></div>


---

### Transition

<p>- 실제 데이터는 시간에 따라서 변화(Update)</p>
<p>- 시각적 인지를 위해 모션을 통한 트랜지션 사용 가능</p>

```javascript
svg.selectAll("rect")
    .data(dataset)
*    .transition()
    .attr("y", function(d) {
        return h - yScale(d);
    })
    .attr("height", function(d) {
        return yScale(d);
    })
    .attr("fill", function(d) {
        return "rgb(0, 0, " + (d * 10) + ")");
    });
```

- .duration()<br>
.transition()의 지속 시간을 설정(단위: ms, 기본값: 250ms)
- .delay()<br>
.transition()의 지연시간 설정(단위: ms)

---

### Transition 예제

<p>- 바코드 차트</p>

<div id="transition-barchart1"></div>
<div id="transition-barchart2"></div>

---


### 이징(Easing)

<p>- 트랜지션에 사용되는 모션의 특징(기본값: cubic)</p>
```javascript
    .transition()
    .duration(2000)
*    .ease("linear")
...// attr() 으로 속성 변경 
```

<div id="easing-chart"></div>

???
모션의 변동 비율이 일정하지 않고 가변적이다.<br>
트랜지션에 사용된느 모션의 특징을 이징이라고 한다.

---


### 상호작용(이벤트)

<p>- 특정 문서 요소와 이벤트 바인딩</p>
<p>- 브라우저에서 지원하는 표준 이벤트만 인식
<span style="font-size:13px;">(<a href="http://quirksmode.org/dom/events/">http://quirksmode.org/dom/events/</a>)</span>
</p>

```javascript
d3.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    ... // 속성 지정(생략)
    .on("mouseover", function(d) {
        // 마우스 오버 시 수행될 작업
        d3.select(this)
          .attr("fill", "orange");
    })
    .on("mouseout", function(d) {
        // 마우스 아웃 시 수행될 작업
        d3.select(this)
            attr("fill", "rgb(0, 0, " + (d * 10) + ")");
    });
```

---

### 상호작용 - 툴팁 예제

```css
<div id="tooltip" class="hidden">
    <p><strong>Important Label Heading</strong></p>
    <p><span id="value">100</span>%</p>
</div>
<!- css -->
#tooltip {
*   position: absolute;
    width: 200px;
    height: auto;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);
*   pointer-events: none;
}
#tooltip.hidden {
    display: none;
}
#tooltip.p {
    margin: 0;
    font-family: sans-serif;
    font-size: 16px;
    line-height: 20px;
}
```



---

### 상호작용 - 툴팁 예제

```javascript
.on("mouseover", function(d) {
    ... // Mouse Position 구함
    d3.select("#tooltip")
        .style("left", xPosition + "px")
        .style("top", yPosition + "px")
        .select("#value")
        .text(d);

    d3.select("#tooltip").classed("hidden", false);
})
.on("mouseout", function(d) {
    d3.select("#tooltip").classed("hidden", true);
});
```

<div id="tooltip-barchart"></div>










---

### 레이아웃

<p>- 특정 형태의 시각화에 맞는 새로운 데이터를 생성</p>
<p>
- <a href="https://github.com/mbostock/d3/wiki/Layouts">https://github.com/mbostock/d3/wiki/Layouts</a>
</p>

<br>

<div>
    <div style="width:40%;border:0px solid black;float:left">
        <ul class="layout">
            <li class="bundle" style="cursor:help;">번들(Bundle)</li>
            <li class="chord" style="cursor:help;">커드(Chord)</li>
            <li class="cluster" style="cursor:help;">클러스터(Cluster)</li>
            <li class="force" style="cursor:help;">포스(Force)</li>
            <li>히스토그램(Histogram)</li>
            <li class="pack" style="cursor:help;">팩(Pack)</li>
            <li class="partition" style="cursor:help;">파티션(Partition)</li>
            <li class="pie" style="cursor:help;">파이(Pie)</li>
            <li class="stack" style="cursor:help;">스택(Stack)</li>
            <li class="tree" style="cursor:help;">트리(Tree)</li>
            <li class="treemap" style="cursor:help;">트리맵(Treemap)</li>
        </ul>
    </div>
    <div style="float:left">
        <p>
        <img id="layout" src="src/img/bundle.png" />
        <br/>
        <span id="layout-id" style="font-size:13px">Bundle</span>
        </p>
    </div>
</div>


---

### 파이(Pie) 레이아웃

```javascript
var dataset = [5, 10, 20, 45, 6, 25];
var pie = d3.layout.pie()
                .value(function(d) {return d})
                .sort(function(a, b) { return b - a; })
                .startAngle(0)
                .endAngle(Math.PI*2);
            
console.log(pie(dataset));
```

<p style="text-align:center;">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:800;text-align:center;">
<img style="width:100%" src="src/img/pie-layout.png">
</span>
</p>

---

### 원그래프

```javascript
var w = 300, h = 300;
var outerRadius = w /2, innerRadius = 0;

var arc = d3.svg.arc()                  // Path Data Generators
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

*var pie = d3.layout.pie();            
            
var svg = d3.select("body").append("svg")
            .attr("width", w)
            .attr("height", h);
            
var arcs = svg.selectAll("g.arc")
*            .data(pie(dataset))
            .enter()
            .append("g")
            .attr("class", "arc")
            .attr("transform", "translate(" + [outerRadius, outerRadius] + ")");
            
arcs.append("path")
            .attr("fill", function(d, i) {
                return color(i);
            })
            .attr("d", arc);
            
```

---

### 원그래프

<br>
<br>
<div id="pie-chart"></div>


---

### 도넛그래프

```javascript
var arc = d3.svg.arc()
*            .innerRadius(100)
            .outerRadius(outerRadius);
```

<br>
<div id="donut-chart"></div>

---

### 포스(Force) 레이아웃

<p>- 관계 데이터에 사용되고, 노드(node)와 연결(edge)로 구성</p>
<p>- 노드 간 인력과 척력으로 상태 유지</p>

```javascript
var force = d3.layout.force()
               .nodes(dataset.nodes)
               .links(dataset.edges)
               .size([w, h])
               .linkDistance([50]) // 노드 사이의 연결선 길이
               .charge([-30])   // 노드 사이의 반발력(기본값: -30)
               .start();
```

<p style="text-align:center;">
<span style="display:inline-block;background:#eee;padding:10px 10px 10px 10px;width:500;text-align:center;">
<img style="width:100%" src="src/img/force-data.png">
</span>
</p>

---

### 포스(Force) 레이아웃

```javascript
var edges = svg.selectAll("line") 
                .data(dataset.edges)
                .enter()
                .append("line")
                .attr({ "stroke", "#ccc", "stroke-width", 1 });
var nodes = svg.selectAll("circle")
                .data(dataset.nodes)
                .enter()
                .append("circle")
                .attr({ "r": 10, "fill": "#eee" })
                .call(force.drag); // 노드를 드래그 앤 드롭 가능하게 함

force.on("tick", function() { // 매 순각(tick)마다 노드, 연결선의 x, y 값 갱신
    edges.attr("x1", function(d) { return d.source.x; })
         .attr("y1", function(d) { return d.source.y; })
         .attr("x2", function(d) { return d.target.x;})
         .attr("y2", function(d) { return d.target.y;});
         
    nodes.attr("cx", function(d) { return d.x; })
         .attr("cy", function(d) { return d.y; });   
});
                
```


---

### 포스(Force) 레이아웃

<p>- 브라우저 점유율</p>
<div id="force-chart"></div>

---

class: middle, center

<p class="highlight">
<br>
무엇을 시각화해야 하는가?
<br>
<br>

데이터 시각화의 첫걸음은 <br>
무엇을 시각화할지 결정하는 것
<br>
<br>
</p>

---

### 참고한 자료

<p>■ 엔지니어를 위한 데이터 시각화 (한빛리더스)</p>
<p>■ D3.js 실시간 데이터 시각화 (에어콘출판)</p>
<p>■ D3.js (인사이트)</p>
<p>■ 월스트리트저널 인포그래픽 가이드 (인사이트)</p>
<p>■ 구글</p>

<p>&nbsp;</p>

### 발표자료에 사용된 라이브러리
<p>■ remark.js (http://remarkjs.com/)</p>
<p>■ d3.js (https://d3js.org/)</p>
<p>■ react (https://facebook.github.io/react/)</p>


---

background-image: url(src/img/metal-powerpoint-background.jpg)

class: middle, center

<p style="font-size:4em;font-weight:bold">Q&A</p>










