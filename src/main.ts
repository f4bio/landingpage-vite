import "./style.css";
import "feather-icons";
import Typewriter from "typewriter-effect/dist/core";

function hideSplashscreen() {
  const splashscreenContainer = document.getElementById("splashscreen");
  const contentContainer = document.getElementById("content");

  splashscreenContainer?.classList.add("hidden");
  splashscreenContainer?.classList.remove("flex");

  contentContainer?.classList.remove("hidden");
  contentContainer?.classList.add("flex");
}

setTimeout(() => {
  hideSplashscreen();
}, 3000);

const typewriterElement = document.getElementById("typewriter");
if(typewriterElement) {
  const typewriter = new Typewriter(typewriterElement, {
    autoStart: true,
    loop: false,
    delay: 75,
  });
  typewriter
    .pasteString("<span class='text-slate-100'>[</span>")
    .pasteString("<span>iam</span>")
    .pasteString("<span class='text-slate-100'>@</span>")
    .pasteString("<span>f4b.io</span>")
    .pasteString("<span class='text-slate-100'> ~]$</span> ")
    .pauseFor(2500)
    .typeString("whoami | tree")
    .pauseFor(2500)
    .typeString("<br/>")
    .start();
}
