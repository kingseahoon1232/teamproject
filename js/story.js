document.addEventListener("DOMContentLoaded", function () {
  var img = document.querySelector(".story_img");

  // 페이지 로드 후 0.5초 후에 rotate 클래스 추가
  setTimeout(function () {
    img.classList.add("rotate");
  }, 500);

  // 1초 후에 rotate 클래스 제거
  setTimeout(function () {
    img.classList.remove("rotate");
  }, 2000);
});

/* javascript */
// Intersection Observer 생성
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 화면에 들어옴
        entry.target.classList.add("fade-in");
      } else {
        // 화면에서 나감
        entry.target.classList.remove("fade-in");
      }
    });
  },
  // 화면에서 해당 요소가 40% 이상 보일 경우 화면에 들어온 것으로 판단함
  { threshold: 0.4 }
);

// 관찰 대상 설정
const targetElements = document.querySelectorAll(".story_main_2");
targetElements.forEach((element) => {
  observer.observe(element);
});

/*=============*/

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tabcontent > div");
  const tabLinks = document.querySelectorAll(".tabnav a");

  tabs.forEach((tab) => (tab.style.display = "none")); // 모든 탭 내용을 숨김

  tabLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // 기본 이벤트 제거

      const targetId = this.getAttribute("href"); // 클릭한 링크의 href 속성 값 가져오기
      const targetTab = document.querySelector(targetId); // 해당 href 값을 가진 탭 내용 요소 선택

      tabs.forEach((tab) => (tab.style.display = "none")); // 모든 탭 내용을 숨김
      targetTab.style.display = "block"; // 클릭한 탭 내용을 보여줌

      tabLinks.forEach((link) => link.classList.remove("active")); // 모든 탭 링크에서 active 클래스 제거
      this.classList.add("active"); // 클릭한 탭 링크에 active 클래스 추가
    });
  });

  // 초기에 첫 번째 탭을 활성화
  tabLinks[0].click();
});

document
  .getElementById("introBtnGroup1")
  .addEventListener("click", function () {
    document.getElementById("intro1").style.display = "block";
    document.getElementById("intro2").style.display = "none";
  });

document
  .getElementById("introBtnGroup2")
  .addEventListener("click", function () {
    document.getElementById("intro1").style.display = "none";
    document.getElementById("intro2").style.display = "block";
  });

document.getElementById("successGroup1").addEventListener("click", function () {
  document.querySelector(".successtap1").style.display = "flex";
  document.querySelector(".successtap2").style.display = "none";
  document.querySelector(".successtap3").style.display = "none";
  document.querySelector(".successtap4").style.display = "none";
});

document.getElementById("successGroup2").addEventListener("click", function () {
  document.querySelector(".successtap1").style.display = "none";
  document.querySelector(".successtap2").style.display = "flex";
  document.querySelector(".successtap3").style.display = "none";
  document.querySelector(".successtap4").style.display = "none";
});

document.getElementById("successGroup3").addEventListener("click", function () {
  document.querySelector(".successtap1").style.display = "none";
  document.querySelector(".successtap2").style.display = "none";
  document.querySelector(".successtap3").style.display = "flex";
  document.querySelector(".successtap4").style.display = "none";
});

document.getElementById("successGroup4").addEventListener("click", function () {
  document.querySelector(".successtap1").style.display = "none";
  document.querySelector(".successtap2").style.display = "none";
  document.querySelector(".successtap3").style.display = "none";
  document.querySelector(".successtap4").style.display = "flex";
});
