const root = document.documentElement;

const darkBackground = "#2b2b2b";
const lightBackground = "#fafafa";
const darkText = "#424242";
const lightText = "#fff";
const text = document.querySelectorAll(
  ".footer__designed, .footer__copyright, .menu-nav__link"
);
const themeBtn = document.querySelector(".btn-change-theme");

themeBtn.addEventListener("click", () => {
  if (document.body.classList.contains("dark-theme")) {
    root.style.setProperty("--theme-background", lightBackground);
    root.style.setProperty("--theme-text", darkText);
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    text.forEach((el) => {
      el.classList.remove("dark-theme-descr");
      el.classList.add("light-theme-descr");
    });
  } else {
    root.style.setProperty("--theme-background", darkBackground);
    root.style.setProperty("--theme-text", lightText);
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    text.forEach((el) => {
      el.classList.remove("light-theme-descr");
      el.classList.add("dark-theme-descr");
    });
  }
});

// video playing

const videoPlay = document.querySelector(".video-controller--play");
const videoPause = document.querySelector(".video-controller--pause");
const video = document.querySelector(".video");
const barLine = document.querySelector(".bar__line");

videoPlay.addEventListener("click", () => {
  video.play();
  videoPlay.style.display = "none";
  videoPause.style.display = "block";
});

videoPause.addEventListener("click", () => {
  video.pause();
  videoPause.style.display = "none";
  videoPlay.style.display = "block";
});

video.ontimeupdate = function () {
  // console.log(video.currentTime);
  let percentage = (video.currentTime / video.duration) * 100;
  console.log(percentage);
  barLine.style.width = percentage + "%";
};

// menu

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const body = document.body;

let keys = {
  ESC: 27,
};

document.addEventListener("keydown", function (e) {
  if (e.keyCode == keys.ESC) {
    closeMenu;
  }
});

function showMenu() {
  body.style.overflow = "hidden";

  menu.classList.add("menu--showed");
}

function closeMenu() {
  menu.classList.remove("menu--showed");
  body.style.overflow = "initial";
}

burger.addEventListener("click", showMenu);
close.addEventListener("click", closeMenu);
