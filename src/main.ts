import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import Typewriter from "typewriter-effect/dist/core";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    <div id="typewriter">bla bla</div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

const typewriter = new Typewriter("#typewriter", {
  strings: ["Hello", "World"],
  autoStart: true,
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString("A simple yet powerful native javascript")
  .pauseFor(300)
  .deleteChars(10)
  .typeString("<strong>JS</strong> plugin for a cool typewriter effect and ")
  .typeString("<strong>only <span style='color: #27ae60;'>5kb</span> Gzipped!</strong>")
  .pauseFor(1000)
  .start();
