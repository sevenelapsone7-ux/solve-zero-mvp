:root {
  font-family: Inter, 'Segoe UI', sans-serif;
  color: #eaf6ff;
  background: #071a2a;
  line-height: 1.5;
  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background:
    radial-gradient(circle at top left, rgba(36, 140, 186, 0.2), transparent 25%),
    linear-gradient(180deg, #071a2a 0%, #0d2331 100%);
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

#root {
  min-height: 100vh;
}

.app-shell {
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px 18px 48px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(7, 26, 42, 0.7);
  border-radius: 18px;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 12px;
  z-index: 20;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #2ad4a5, #1eb7c9);
  color: #062231;
}

.brand-name {
  font-weight: 800;
  letter-spacing: 0.1em;
}

.brand-subtitle {
  font-size: 0.75rem;
  color: #8bbcda;
}

.nav {
  display: flex;
  align-items: center;
  gap: 18px;
  color: #cfe8f7;
  font-size: 0.92rem;
}

.primary {
  border: none;
  background: linear-gradient(135deg, #26d0a4, #1db3d3);
  color: #041d2d;
  font-weight: 700;
  border-radius: 12px;
  padding: 0.8rem 1.1rem;
  transition: transform 0.2s ease;
}

.primary:hover {
  transform: translateY(-1px);
}

.primary.small {
  padding: 0.7rem 1rem;
}

.primary.wide {
  width: 100%;
  margin-top: 14px;
}

.page {
  margin-top: 24px;
  display: grid;
  gap: 22px;
}

.card,
.panel {
  background: rgba(16, 34, 46, 0.9);
  border: 1px solid rgba(160, 211, 255, 0.08);
  border-radius: 20px;
  box-shadow: 0 20px 55px rgba(2, 9, 17, 0.35);
}

.hero {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 24px;
  padding: 26px;
}

.hero-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.eyebrow {
  color: #73d3c4;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  font-weight: 700;
}

.hero-copy h1 {
  margin: 12px 0 10px;
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1.05;
}

.hero-copy p {
  color: #d7ecff;
  margin: 0;
  max-width: 560px;
}

.quick-stats {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 12px;
}

.quick-stats div {
  background: rgba(128, 176, 216, 0.08);
  border: 1px solid rgba(150, 200, 255, 0.08);
  border-radius: 16px;
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.quick-stats strong {
  font-size: 1.3rem;
}

.quick-stats span {
  font-size: 0.8rem;
  color: #a7cfe8;
}

.search-panel {
  background: rgba(11, 25, 36, 0.9);
  border: 1px solid rgba(125, 198, 255, 0.1);
  border-radius: 18px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.search-panel label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #dff0ff;
  font-size: 0.9rem;
}

.search-panel input,
.search-panel select,
.search-panel textarea {
  width: 100%;
  border: 1px solid rgba(166, 215, 255, 0.14);
  background: rgba(6, 18, 28, 0.95);
  color: #edf7ff;
  border-radius: 12px;
  padding: 0.8rem 0.9rem;
}

.search-panel textarea {
  resize: vertical;
  min-height: 86px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.steps {
  display: grid;
  grid-template-columns: repeat(5, minmax(140px, 1fr));
  gap: 14px;
}

.step {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(27, 49, 63, 0.9);
  border: 1px solid rgba(181, 226, 255, 0.08);
  padding: 14px 16px;
  border-radius: 14px;
  color: #dfeffb;
}

.step span {
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
  background: rgba(22, 122, 154, 0.18);
  border-radius: 50%;
  font-size: 0.8rem;
  font-weight: 700;
}

.step.active {
  border-color: rgba(64, 224, 184, 0.4);
  background: rgba(24, 117, 109, 0.15);
}

.content-grid {
  display: grid;
  grid-template-columns: 1.35fr 0.9fr;
  gap: 22px;
}

.panel {
  padding: 20px;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 18px;
}

.panel-header h2,
.panel-header h3 {
  margin: 0;
}

.tag,
.badge,
.mkesh {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-size: 0.74rem;
  padding: 0.34rem 0.7rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tag.success,
.badge {
  background: rgba(38, 208, 164, 0.12);
  color: #7ae2c6;
}

.tag.neutral {
  background: rgba(124, 162, 197, 0.12);
  color: #c7e1f7;
}

.offers-list {
  display: grid;
  gap: 14px;
}

.offer-card {
  width: 100%;
  text-align: left;
  padding: 16px 18px;
  border-radius: 16px;
  background: rgba(9, 22, 34, 0.9);
  border: 1px solid rgba(177, 222, 255, 0.08);
  color: inherit;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.offer-card:hover,
.offer-card.selected {
  border-color: rgba(72, 242, 195, 0.45);
  transform: translateY(-1px);
}

.offer-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.offer-type {
  color: #74e0c1;
  text-transform: uppercase;
  font-size: 0.72rem;
  letter-spacing: 0.07em;
  margin-bottom: 4px;
}

.offer-head h3 {
  margin: 0;
  font-size: 1.1rem;
}

.offer-meta,
.offer-footer,
.summary-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: #cddff7;
  font-size: 0.85rem;
}

.offer-meta {
  margin-top: 12px;
}

.offer-price-row {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  margin: 12px 0;
}

.offer-price-row strong {
  font-size: 1.5rem;
  color: #fff;
}

.offer-footer {
  margin-bottom: 10px;
}

.link-inline {
  color: #7fe8d0;
  text-decoration: none;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.summary-card {
  display: grid;
  gap: 12px;
}

.divider {
  height: 1px;
  width: 100%;
  background: rgba(177, 218, 255, 0.08);
}

.summary-row {
  padding: 8px 0;
  border-bottom: 1px solid rgba(177, 218, 255, 0.06);
}

.summary-row strong {
  text-align: right;
  max-width: 180px;
}

.payment-box {
  background: rgba(3, 17, 24, 0.9);
  border-radius: 16px;
  border: 1px solid rgba(178, 220, 255, 0.08);
  padding: 16px;
}

.panel-header.tiny {
  margin-bottom: 12px;
}

.mkesh {
  background: rgba(255, 185, 77, 0.1);
  color: #ffc976;
}

.payment-state {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #d6f3ff;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ffb856;
  box-shadow: 0 0 12px rgba(255, 184, 86, 0.8);
}

.confirmation-box {
  margin-top: 14px;
  padding: 12px 14px;
  border-radius: 12px;
  background: rgba(35, 171, 135, 0.1);
  border: 1px solid rgba(89, 224, 177, 0.25);
  color: #d4f7eb;
}

.confirmation-box p {
  margin: 8px 0 0;
  color: #d4f7eb;
}

.admin-section {
  display: grid;
  grid-template-columns: 0.9fr 1.4fr;
  gap: 22px;
}

.admin-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 1fr));
  gap: 12px;
}

.mini-card {
  padding: 14px 16px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid rgba(182, 223, 255, 0.08);
}

.mini-card.success {
  background: rgba(17, 107, 76, 0.18);
}

.mini-card.warning {
  background: rgba(166, 113, 37, 0.16);
}

.mini-card.info {
  background: rgba(26, 102, 157, 0.18);
}

.mini-card.dark {
  background: rgba(20, 30, 44, 0.8);
}

.mini-card span {
  color: #cfe3fb;
  font-size: 0.8rem;
}

.mini-card strong {
  font-size: 1.1rem;
}

.supplier-row {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 12px;
}

.supplier-card {
  background: rgba(8, 21, 31, 0.9);
  border: 1px solid rgba(180, 220, 255, 0.08);
  border-radius: 14px;
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.supplier-name {
  font-weight: 700;
}

.supplier-card small,
.supplier-card span {
  color: #abcfe9;
}

table {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 12px;
}

th,
td {
  padding: 12px 10px;
  text-align: left;
  border-bottom: 1px solid rgba(175, 213, 249, 0.08);
  font-size: 0.9rem;
}

th {
  color: #9cc2de;
  font-weight: 600;
}

.status-pill {
  display: inline-flex;
  padding: 0.35rem 0.5rem;
  border-radius: 999px;
  background: rgba(90, 201, 167, 0.14);
  color: #9feecb;
}

.empty-state {
  padding: 30px 18px;
  border-radius: 16px;
  border: 1px dashed rgba(173, 220, 255, 0.2);
  text-align: center;
  color: #cfe5f8;
}

@media (max-width: 980px) {
  .hero,
  .content-grid,
  .admin-section {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-wrap: wrap;
  }

  .nav {
    order: 3;
    width: 100%;
    justify-content: space-between;
  }
}

@media (max-width: 640px) {
  .steps {
    grid-template-columns: repeat(2, minmax(130px, 1fr));
  }

  .row,
  .quick-stats,
  .admin-grid,
  .supplier-row {
    grid-template-columns: 1fr;
  }

  .app-shell {
    padding-inline: 12px;
  }

  .topbar,
  .hero,
  .panel {
    padding: 16px;
  }
}
