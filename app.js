:root {
  --ink: #f7f2e8;
  --muted: #aaa7ad;
  --red: #d13939;
  --red-dark: #7d181d;
  --panel: rgba(18, 19, 24, .88);
  --line: rgba(255,255,255,.1);
  --black: #08090c;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  min-height: 100vh;
  color: var(--ink);
  background:
    radial-gradient(circle at 20% 15%, rgba(128, 24, 28, .22), transparent 30%),
    radial-gradient(circle at 85% 50%, rgba(22, 80, 95, .18), transparent 30%),
    linear-gradient(135deg, #090a0e, #111218 48%, #08090c);
  font-family: Inter, system-ui, sans-serif;
  overflow-x: hidden;
}
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: .18;
  background-image:
    linear-gradient(45deg, #111 25%, transparent 25%),
    linear-gradient(-45deg, #111 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #111 75%),
    linear-gradient(-45deg, transparent 75%, #111 75%);
  background-size: 36px 36px;
  background-position: 0 0, 0 18px, 18px -18px, -18px 0;
}

button, input, textarea { font: inherit; }
button { cursor: pointer; }
a { color: inherit; text-decoration: none; }
.hidden { display: none !important; }
.muted { color: var(--muted); }

.mist {
  position: fixed;
  width: 55vw;
  height: 220px;
  border-radius: 50%;
  background: rgba(255,255,255,.035);
  filter: blur(45px);
  pointer-events: none;
  animation: drift 14s ease-in-out infinite alternate;
}
.mist-one { top: 20%; left: -20%; }
.mist-two { bottom: 5%; right: -25%; animation-delay: -5s; }
@keyframes drift { to { transform: translateX(160px) translateY(35px); } }

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 max(24px, calc((100vw - 1440px)/2));
  border-bottom: 1px solid var(--line);
  background: rgba(8,9,12,.8);
  backdrop-filter: blur(18px);
}
.brand { display: flex; align-items: center; gap: 12px; }
.brand-mark {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 2px solid #e05252;
  border-radius: 50%;
  background: #121318;
  box-shadow: 0 0 24px rgba(209,57,57,.3);
  font-family: serif;
  font-size: 22px;
}
.brand strong, .brand small { display: block; }
.brand small { color: #e05252; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }

.shell {
  position: relative;
  z-index: 1;
  width: min(1440px, calc(100% - 32px));
  margin: 28px auto 80px;
  display: grid;
  grid-template-columns: 310px minmax(420px, 680px) 310px;
  gap: 22px;
  align-items: start;
}
.card {
  border: 1px solid var(--line);
  border-radius: 22px;
  background: var(--panel);
  box-shadow: 0 18px 50px rgba(0,0,0,.25);
  backdrop-filter: blur(16px);
}
.left-panel { position: sticky; top: 104px; overflow: hidden; padding: 22px; }
.left-panel h1 { margin: 6px 0 12px; font-size: 30px; line-height: 1.05; }
.eyebrow { margin: 0 0 6px; color: #e55a58; font-size: 11px; font-weight: 800; letter-spacing: .2em; }
.hero-art {
  position: relative;
  height: 190px;
  margin: -22px -22px 22px;
  overflow: hidden;
  background: linear-gradient(#091118, #17252a 60%, #08090c);
}
.moon {
  position: absolute;
  top: 28px;
  right: 46px;
  width: 78px;
  height: 78px;
  border-radius: 50%;
  background: #f5e9cc;
  box-shadow: 0 0 40px rgba(245,233,204,.32);
}
.mountain { position: absolute; bottom: -52px; width: 230px; height: 170px; transform: rotate(45deg); background: #101b20; }
.mountain-a { left: -60px; }
.mountain-b { right: -45px; background: #0c1519; }
.blade {
  position: absolute;
  left: 54px;
  bottom: 4px;
  width: 8px;
  height: 175px;
  border-radius: 6px;
  transform: rotate(37deg);
  background: linear-gradient(90deg, #8dd6e6, #fff, #4b8998);
  box-shadow: 0 0 16px rgba(141,214,230,.35);
}
.feature-row { display: flex; gap: 12px; margin-top: 20px; }
.feature-row > span {
  flex: 0 0 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: rgba(255,255,255,.04);
}
.feature-row b, .feature-row small { display: block; }
.feature-row small { margin-top: 3px; color: var(--muted); }

.feed-column { min-width: 0; }
.auth-card, .composer { padding: 20px; margin-bottom: 22px; }
.tabs { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 18px; padding: 5px; border-radius: 14px; background: rgba(255,255,255,.04); }
.tab { border: 0; border-radius: 10px; padding: 10px; color: var(--muted); background: transparent; font-weight: 700; }
.tab.active { color: white; background: rgba(209,57,57,.9); }
.auth-form { display: grid; gap: 14px; }
label { display: grid; gap: 7px; color: #d8d5d1; font-size: 13px; font-weight: 700; }
input, textarea {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 12px;
  outline: none;
  color: white;
  background: rgba(5,6,9,.65);
}
input { height: 46px; padding: 0 13px; }
textarea { min-height: 112px; padding: 13px; resize: vertical; }
input:focus, textarea:focus { border-color: #d94c4c; box-shadow: 0 0 0 3px rgba(217,76,76,.12); }

.primary, .secondary, .danger {
  border: 0;
  border-radius: 12px;
  padding: 11px 16px;
  font-weight: 800;
}
.primary { color: white; background: linear-gradient(135deg, #e34945, #8c1e23); box-shadow: 0 10px 24px rgba(176,39,42,.25); }
.secondary { color: white; border: 1px solid var(--line); background: rgba(255,255,255,.05); }
.danger { color: #ff8d8d; background: rgba(209,57,57,.12); }
.icon-button {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--line);
  border-radius: 50%;
  color: white;
  background: rgba(255,255,255,.04);
  font-size: 20px;
}
.composer { display: grid; grid-template-columns: auto 1fr; gap: 14px; }
.composer form { min-width: 0; }
.composer textarea { border: 0; background: transparent; font-size: 17px; }
.composer-bottom { display: flex; align-items: center; justify-content: space-between; padding-top: 10px; border-top: 1px solid var(--line); color: var(--muted); font-size: 12px; }

.avatar {
  flex: 0 0 auto;
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border: 2px solid rgba(255,255,255,.17);
  border-radius: 50%;
  color: white;
  font-family: serif;
  font-size: 20px;
  box-shadow: inset 0 0 15px rgba(255,255,255,.1);
}
.avatar-large { width: 84px; height: 84px; font-size: 34px; }
.water { background: linear-gradient(135deg, #167d9b, #142d73); }
.flame { background: linear-gradient(135deg, #ff9e2a, #9f1722); }
.mist-style { background: linear-gradient(135deg, #91aeb5, #40575e); }
.thunder { background: linear-gradient(135deg, #e9c834, #8e5e0b); }
.flower { background: linear-gradient(135deg, #dc76b9, #7b346d); }

.feed-heading { display: flex; align-items: center; justify-content: space-between; margin: 24px 4px 12px; }
.feed-heading h2 { margin: 0; font-size: 24px; }
.feed { display: grid; gap: 12px; }
.post { padding: 18px; transition: transform .2s, border-color .2s; animation: rise .35s ease both; }
.post:hover { transform: translateY(-2px); border-color: rgba(255,255,255,.18); }
@keyframes rise { from { opacity: 0; transform: translateY(12px); } }
.post-head { display: flex; gap: 12px; }
.post-meta { min-width: 0; flex: 1; }
.post-name { font-weight: 800; }
.post-user, .post-time { color: var(--muted); font-size: 13px; }
.post-content { margin: 13px 0 15px 58px; line-height: 1.55; white-space: pre-wrap; overflow-wrap: anywhere; }
.post-actions { display: flex; align-items: center; gap: 8px; margin-left: 58px; }
.action-button { border: 0; border-radius: 999px; padding: 8px 11px; color: var(--muted); background: transparent; }
.action-button:hover { color: white; background: rgba(255,255,255,.06); }
.action-button.liked { color: #ff6666; background: rgba(209,57,57,.1); }
.delete-button { margin-left: auto; }
.empty { padding: 34px; text-align: center; color: var(--muted); }

.right-panel { display: grid; gap: 18px; position: sticky; top: 104px; }
.profile-card, .rules-card, .trend-card { padding: 20px; }
.profile-card { text-align: center; }
.profile-card .avatar { margin: 0 auto 12px; }
.profile-card h3 { margin: 0; }
.profile-card .secondary { width: 100%; }
.profile-bio { min-height: 24px; color: #d3d0cc; line-height: 1.45; }
.rules-card h3 { margin: 0 0 8px; }
.rules-card p:last-child { color: var(--muted); line-height: 1.55; }
.trend-card > div { padding: 13px 0; border-top: 1px solid var(--line); }
.trend-card b, .trend-card small { display: block; }
.trend-card small { margin-top: 4px; color: var(--muted); }

dialog {
  width: min(520px, calc(100% - 28px));
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 0;
  color: white;
  background: #14151b;
  box-shadow: 0 30px 100px rgba(0,0,0,.75);
}
dialog::backdrop { background: rgba(0,0,0,.7); backdrop-filter: blur(5px); }
dialog form { display: grid; gap: 16px; padding: 22px; }
.dialog-heading { display: flex; justify-content: space-between; align-items: center; }
.dialog-heading h2 { margin: 0; }
fieldset { border: 1px solid var(--line); border-radius: 14px; }
legend { color: var(--muted); font-size: 12px; }
.style-picker { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; }
.style-picker label { align-items: center; justify-items: center; font-size: 10px; }
.style-picker input { display: none; }
.style-picker input:checked + .avatar { outline: 3px solid white; outline-offset: 2px; }

.toast {
  position: fixed;
  z-index: 50;
  right: 20px;
  bottom: 20px;
  max-width: 360px;
  padding: 13px 16px;
  border: 1px solid var(--line);
  border-radius: 12px;
  color: white;
  background: #24262e;
  box-shadow: 0 15px 40px rgba(0,0,0,.4);
  opacity: 0;
  transform: translateY(15px);
  pointer-events: none;
  transition: .25s;
}
.toast.show { opacity: 1; transform: translateY(0); }
.toast.error { background: #7e2025; }

@media (max-width: 1120px) {
  .shell { grid-template-columns: minmax(400px, 680px) 280px; justify-content: center; }
  .left-panel { display: none; }
}
@media (max-width: 780px) {
  .shell { width: min(100% - 20px, 680px); grid-template-columns: 1fr; margin-top: 14px; }
  .right-panel { position: static; grid-row: 1; }
  .rules-card, .trend-card { display: none; }
  .profile-card { text-align: left; grid-template-columns: auto 1fr; }
  .topbar { padding: 0 14px; }
  .brand strong { font-size: 14px; }
}
@media (max-width: 480px) {
  .post-content, .post-actions { margin-left: 0; }
  .style-picker { grid-template-columns: repeat(3, 1fr); }
}
