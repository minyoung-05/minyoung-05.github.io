// [숙제11] 동적 웹 페이지 구현
//2024-17603 김민영

// Q1
const themeBtn = document.querySelector("#theme-btn");
const Box = document.querySelector("#q1-box")

themeBtn.addEventListener("click", () => {
    Box.classList.toggle("dark");

    if (Box.classList.contains("dark")) {
        themeBtn.textContent = "라이트 모드";
    } else {
        themeBtn.textContent = "다크 모드";
    }
 });

 // Q2
 const input = document.querySelector("#q2-input");
 const count = document.querySelector("#q2-count");
 const warn = document.querySelector("#q2-warn");

 input.addEventListener("input", (e) => {
    const length = e.target.value.length;
    count.textContent = length;

    if (length >= 100) {
        warn.textContent = "100자를 넘었습니다.";
        warn.style.color = "crimson";
    } else {
        warn.textContent = "";
    }
    
 });