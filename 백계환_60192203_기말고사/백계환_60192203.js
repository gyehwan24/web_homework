const words = [
  {
    korean: "봄",
    english: "spring",
  },
  {
    korean: "여름",
    english: "summer",
  },
  {
    korean: "가을",
    english: "fall",
  },
  {
    korean: "겨울",
    english: "winter",
  },
  {
    korean: "나무",
    english: "tree",
  },
  {
    korean: "꽃",
    english: "flower",
  },
];

const smalls = document.querySelectorAll(".small");

smalls.forEach((small) => {
  small.addEventListener("mouseover", (e) => {
    e.currentTarget.style.borderRadius = "20px";
    //e.currentTarget.stlye.boxShadow = "5px 5px 5px";
  });
  small.addEventListener("mouseout", (e) => {
    e.currentTarget.style.borderRadius = "0px";
  });
  small.addEventListener("click", (e) => {
    e.currentTarget.textContent = words[e.currentTarget.id].korean;
  });
  small.addEventListener("dblclick", (e) => {
    let input = prompt(
      `${words[e.currentTarget.id].korean}에 대한 영단어를 입력하세요`
    );
    if (input == words[e.currentTarget.id].korean) {
      alert("정답입니다");
      e.currentTarget.style.backgroundColor = "yellow";
      e.currentTarget.style.borderRadius = "20px";
    } else {
      alert("틀렸습니다");
      e.currentTarget.style.backgroundColor = "orange";
      e.currentTarget.style.borderRadius = "20px";
    }
  });
});
