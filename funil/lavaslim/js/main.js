// menu start
var menu = document.getElementById("menu");
if (menu) {
  var menuBtn = document.getElementById("menuBtn");
  var body = document.body;
  menuBtn.onclick = function () {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("active");
  };
  window.onclick = function (event) {
    if (event.target == menu) {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("active");
    }
  };
}

// menu end

// scroll start
let header = document.getElementById("header");

function scrollFunc() {
  if(header){
    if (window.scrollY >= 60) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}
const links = document.querySelectorAll(".links");
const sections = document.querySelectorAll(".anchor");
function changeLinkState() {
  let index = sections.length;
  while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
  links.forEach((link) => link.classList.remove("active"));
  links[index]?.classList.add("active");
}
links.forEach((e) => {
  onLinkClick(e);
});
function onLinkClick(linkItem) {
  linkItem.addEventListener("click", function () {
    if(menu) {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("active");
    }

  });
}
window.onscroll = function () {
  changeLinkState();
  scrollFunc();
};
// scroll end
// faq start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end
// video start
const playBtn = document.getElementById("play");
if (playBtn) {
  const banner = document.getElementById("banner");
  const playBtnText = playBtn.querySelector("b");

  playBtn.addEventListener("click", function () {
    if (video.paused == true) {
      video.play();

      playBtn.classList.toggle("active");
      banner.classList.toggle("active");
      playBtnText.innerHTML = "Pause";
    } else {
      video.pause();

      playBtn.classList.remove("active");
      banner.classList.remove("active");
      playBtnText.innerHTML = "Play";
    }
  });

  video.onclick = function () {
    if (video.paused == true) {
      video.play();

      playBtn.classList.toggle("active");
      banner.classList.toggle("active");
      playBtnText.innerHTML = "Pause";
    } else {
      video.pause();

      playBtn.classList.remove("active");
      banner.classList.remove("active");
      playBtnText.innerHTML = "Play";
    }
  };
}
// video end

