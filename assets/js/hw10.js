// [숙제 10] Javascript 기초 연습
// 2024-17603 김민영

// Q1
function classifyEra(year) {
    if (year < 1910) {
        return("개화기 이전"); 
    } else if (year < 1945) {
        return("일제강점기");
    } else if (year < 1990) {
        return("해방 이후-현대");
    } else {
        return("동시대");
    }
}

const years = [1908, 1936, 1972, 2025];
for (year of years) {
    console.log(`${year}년: ${classifyEra(year)}1`)
}

// Q2
  // 1
const works = ["날개", "오감도", "지주회시", "종생기", "권태"]

console.log(works.length); // 길이
console.log(works[0]); // 첫 번째
console.log(works[works.length - 1]); // 마지막 항목

  // 2
const titled = works.map(work => `「${work}」`);
console.log(titled);

  //3
const long = works.filter(w => w.length >= 2);
console.log(long);

  //4
for (let i = 0; i < works.length; i++) {
    console.log(`${i + 1}번째 작품: ${works[i]}`);
}

//Q3

function countChar(text, target) {
    let count = 0;
    for (const ch of text) {
        if (ch === target) count++;
    }
    return count;
}

console.log(countChar ("박씨는 이씨에게 시집간 김씨의 외사촌 동생이다.", "씨")) //3
console.log(countChar("이상의 「날개」는 1936년 작품이다.", "이")) //2
console.log(countChar("banana", "a")) //3

//Q4
const text = "이상의 「날개」는 1936년에 발표된 단편소설이다.";
const targets = ["이", "의", "날", "개", "소"]

const counts = targets.map(t => countChar(text, t));
console.log(counts);

for (let i = 0; i < targets.length; i++) {
    console.log(`'${targets[i]}': ${counts[i]}번`);
}

const frequent = targets.filter(t => countChar(text, t) >= 2);
console.log(frequent);

let maxIdx = 0;
for (let i = 1; i < counts.length; i++) {
    if (counts[i] > counts[maxIdx]) maxIdx = i;
}
const topTarget = targets[maxIdx];
console.log(`가장 자주 나온 글자: '${topTarget}' (${counts[maxIdx]}번)`);
