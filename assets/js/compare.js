//1. Gutenburg 텍스트 파일에서 본문만 가져오기
function extractBody(text) {
    const startMark = "*** START OF THE PROJECT GUTENBERG EBOOK";
    const endMark   = "*** END OF THE PROJECT GUTENBERG EBOOK";

    const startIdx = text.indexOf(startMark);
    const endIdx   = text.indexOf(endMark);

    // 시작 표시 다음 줄부터 끝 표시 직전까지
    return text.slice(startIdx, endIdx);
}

//2. 가져온 본문에서 단어들의 배열을 얻기
function getWords(text) {
    return text
        .toLowerCase()
        .replace(/[.,!?;:'"‘’“”()\[\]_*]/g, " ")
        .split(/\s+/)
        .filter(w => w.length > 0);
}

//3. 단어들의 배열에서 불용어 제거하기
function removeStopwords(words, stopwords) {
    return words.filter(w => !stopwords.includes(w));
}

//4. 단어들의 배열을 {단어: 빈도} 꼴의 객체로 만들기
function countWords(words) {     //words: 단어들의 배열
    const counts = {};   //빈 객체 초기화
    for (const word of words) {
        counts[word] = (counts[word] || 0) + 1;
    }
    return counts;
}

//5. {단어: 빈도} 객체에서 상위 n개의 배열 얻기
function topN(counts, n) {
    return Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, n);
}

//종합: text --> 상위 n개 단어의 배열
function analyze(text, stopwords) {
    const body = extractBody(text);
    const words = getWords(body);
    const cleaned = removeStopwords(words, stopwords);
    const counts = countWords(cleaned);
    return topN(counts, 30);
}

// 파일 읽고 처리하기
Promise.all([
    fetch("/data/scarlet.txt").then(r => r.text()),
    fetch("/data/hound.txt").then(r => r.text()),
    fetch("/data/stopwords-en.txt").then(r => r.text()),
]).then(([scarletText, houndText, stopwordsText]) => {
    const stopwords = stopwordsText.split(/\s+/).filter(w => w.length > 0);
    const scarletTop = analyze(scarletText, stopwords);
    const houndTop = analyze(houndText, stopwords);
    drawChart("#chart-scarlet",
        analyze(scarletText, stopwords),
        "rgba(220, 53, 69, 0.6)");
    drawChart("#chart-hound",
        analyze(houndText, stopwords),
        "rgba(54, 162, 235, 0.6)");
    }
);

function drawChart(selector, top,color) {
    const canvas = document.querySelector(selector);
    return new CharacterData(canvas, {
        type: "bar",
        data: {
            labels: top.map(item => item[0]),
            datasets: [{
                label: "빈도", data: top.map(item => item[1]), backgroundColor: color }],
            },
        options: {
            indexAxis: "y",
            maintainAspectRatio: false,
            scales: {x: {beginAtZero: true},
                     y: {ticks: {autoSkip: false } } },
        },
    });
}