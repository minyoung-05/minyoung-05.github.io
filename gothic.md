---
layout: page
title: 텍스트 분석 도구 구현
permalink: /gothic/
---
# [숙제13] 텍스트 분석 도구 구현
<!-- Q1: 두 고딕 소설의 상위 30개 단어 비교 -->
<h2>Frankenstein vs. Dracula -- 상위 30개 단어</h2>

<div style="display: flex; gap: 1em;">

<div style="flex: 1;">
        <h3>Frankenstein (Shelley, 1818)</h3>
        <div style="height: 600px;">
            <canvas id="chart-frankenstein"></canvas>
        </div>
    </div>
    <div style="flex: 1;">
        <h3>Dracula (Stoker, 1897)</h3>
        <div style="height: 600px;">
            <canvas id="chart-dracula"></canvas>
        </div>
    </div>
</div>

<!-- Q2: 보고서 -->

## 보고서

### 추가한 불용어와 근거

NLTK 기본 목록 외에 다음 7개의 단어를 'data/stopwrods-custom.txt'에 추가했다: 'one', 'could', 'would', 'must', 'shall', 'may', 'said'

'one'과 'said'는 어떤 소설 속에서나 빈번하게 등장하는 단어들로 의미를 나타내기 보다는 소설의 **보편적인 특징**으로 볼 수 있기 때문에 제외하였다. 나머지 단어들은 모두 조동사로 일반적으로 **기능어**로 분류되기 때문에 실질적인 의미를 나타내고 있다고 보기 어렵기 때문에 제외하였다. 

### 두 작품의 단어 빈도가 들려주는 이야기

- **공통적으로 도드라지는 단어**: saw, night 
- **한 작품에만 도드라지는 단어**와 그것이 시사하는 작품의 특성: eyes, mind, heart, feelings / lucy, mina, jonathan

Frankenstein에서는 eyes, mind, hear, feelings와 같이 감각과 감정 관련 단어가 많이 등장한다. 이는 해당 소설에서 인물의 감각적 경험이 심리적으로 어떻게 연결되는지에 대한 묘사가 많음을 드러낸다. 반면, Dracula에서는 사람 이름이 많이 등장한다. 이는 해당 소설이 다양한 인물들을 다루고 있다는 점을 드러낸다. 


{% include chartjs.html %}
<script src="/assets/js/analysis.js"></script>
<script src="/assets/js/gothic.js"></script>
