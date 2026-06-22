const header = document.querySelector("[data-header]");
const nav = document.querySelector("#site-nav");
const toggle = document.querySelector(".nav-toggle");
const accessKey = "ie-workbench-access";
const accessCode = "123456";

const lockPage = () => {
  if (sessionStorage.getItem(accessKey) === "granted") {
    return;
  }

  document.body.style.overflow = "hidden";

  const style = document.createElement("style");
  style.textContent = `
    .access-gate {
      align-items: center;
      background:
        radial-gradient(circle at 50% 20%, rgba(15, 107, 69, 0.16), transparent 28rem),
        linear-gradient(180deg, rgba(251, 251, 253, 0.94), rgba(245, 245, 247, 0.92));
      backdrop-filter: blur(22px) saturate(170%);
      -webkit-backdrop-filter: blur(22px) saturate(170%);
      display: grid;
      inset: 0;
      justify-items: center;
      padding: 24px;
      position: fixed;
      z-index: 999;
    }

    .access-panel {
      background: rgba(255, 255, 255, 0.82);
      border: 1px solid rgba(255, 255, 255, 0.9);
      border-radius: 34px;
      box-shadow: 0 34px 90px rgba(20, 35, 31, 0.13);
      max-width: 430px;
      padding: 34px;
      text-align: center;
      width: min(100%, 430px);
    }

    .access-mark {
      background: linear-gradient(145deg, #0f6b45, #2ba56e);
      border-radius: 24px;
      box-shadow: 0 18px 38px rgba(15, 107, 69, 0.25);
      color: #fff;
      display: grid;
      font-size: 28px;
      font-weight: 800;
      height: 78px;
      margin: 0 auto 24px;
      place-items: center;
      width: 78px;
    }

    .access-panel h2 {
      color: #101915;
      font-size: 28px;
      line-height: 1.25;
      margin: 0 0 12px;
    }

    .access-panel p {
      color: #687571;
      font-size: 15px;
      line-height: 1.7;
      margin: 0 0 24px;
    }

    .access-panel input {
      appearance: none;
      background: rgba(255, 255, 255, 0.92);
      border: 1px solid rgba(15, 107, 69, 0.16);
      border-radius: 999px;
      color: #101915;
      font-size: 22px;
      font-weight: 700;
      height: 56px;
      letter-spacing: 0.12em;
      outline: none;
      padding: 0 22px;
      text-align: center;
      width: 100%;
    }

    .access-panel input:focus {
      border-color: rgba(15, 107, 69, 0.38);
      box-shadow: 0 0 0 5px rgba(15, 107, 69, 0.08);
    }

    .access-panel button {
      background: #0f6b45;
      border: 0;
      border-radius: 999px;
      box-shadow: 0 16px 36px rgba(15, 107, 69, 0.22);
      color: #fff;
      cursor: pointer;
      font-size: 16px;
      font-weight: 700;
      height: 52px;
      margin-top: 14px;
      width: 100%;
    }

    .access-error {
      color: #b42318;
      font-size: 14px;
      min-height: 22px;
      margin-top: 12px;
    }
  `;

  const gate = document.createElement("div");
  gate.className = "access-gate";
  gate.innerHTML = `
    <form class="access-panel" autocomplete="off">
      <div class="access-mark">IE</div>
      <h2>智能装备研究院工作台</h2>
      <p>请输入访问码进入演示页面</p>
      <input type="password" inputmode="numeric" pattern="[0-9]*" maxlength="6" placeholder="访问码">
      <button type="submit">进入工作台</button>
      <div class="access-error" aria-live="polite"></div>
    </form>
  `;

  document.head.appendChild(style);
  document.body.appendChild(gate);

  const form = gate.querySelector("form");
  const input = gate.querySelector("input");
  const error = gate.querySelector(".access-error");

  setTimeout(() => input.focus(), 100);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (input.value.trim() === accessCode) {
      sessionStorage.setItem(accessKey, "granted");
      gate.remove();
      style.remove();
      document.body.style.overflow = "";
      return;
    }

    error.textContent = "访问码不正确，请重新输入。";
    input.select();
  });
};

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

if (header && nav && toggle) {
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

lockPage();
