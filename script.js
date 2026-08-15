// ---------------------------------------------------------------
// Project data
// ---------------------------------------------------------------
// Drop real Play Store icons into an /icons folder next to index.html and set
// the `icon` field below to the filename (e.g. "icons/salontoday.png").
// Any app without an `icon` set automatically falls back to the initials glyph.
// See README.md for exact steps to grab each icon.

const featured = [
  {
    name: "PackageX Receive",
    pkg: ":packagex-receive",
    stack: ["Kotlin", "Compose", "Clean Architecture"],
    layer: "presentation",
    desc: "Package receiving and tracking app for business mailrooms. Led Android development end-to-end — architecture, features, delivery. Live on Google Play.",
    role: "Lead engineer",
    link: "https://play.google.com/store/apps/details?id=receive.px.app",
    icon: "https://play-lh.googleusercontent.com/sZAOrv_P9vaV-55l9MEOykpQ2JX9SM65shAB33djJ39V9a0HXnUPKavQnlCDkITHBeFsltswZY1A9i7srrkL_A=s256"
  },
  {
    name: "PackageX Mailroom",
    pkg: ":packagex-mailroom",
    stack: ["Kotlin", "Room", "WorkManager"],
    layer: "domain",
    desc: "Mailroom management software using machine vision and AI to automate front-desk package intake, notifications and pickups. Live on Google Play.",
    role: "Core contributor",
    link: "https://play.google.com/store/apps/details?id=app.px.packagex",
    icon: "https://play-lh.googleusercontent.com/xFOrlAmPV2PddORbHP-DzZVu0BdjK3fvWMZ53Qg6s_BSJRDpcG4Gw31wfyz9-62Bu87Zzm9uxFsFW5FDdBmPj3k=s256"
  },
  {
    name: "Warehouse Logistics",
    pkg: ":warehouse-logistics",
    stack: ["Kotlin"],
    layer: "data",
    desc: "Warehouse-side companion to PackageX Receive — OCR-driven inbound receiving, inventory/asset tracking, kitting, and reverse-logistics workflows.",
    role: "Android developer",
    link: "https://play.google.com/store/apps/details?id=io.packagex.wms.prod",
    icon: "https://play-lh.googleusercontent.com/VdKRUuC0-5mlTrvTk-NlpBEctJSk3YZvTgZbXPXaRWxQ_4zD_m7LiasDJgpFHNNcMzBlLwHiWEG2Jss-MVsEPg=s256"
  },
  {
    name: "GenixDrive",
    pkg: ":genixdrive",
    stack: ["Kotlin"],
    layer: "presentation",
    desc: "Telematics-based driver behavior app — scores trips, flags risky driving events, and rewards safer drivers with cash prizes and coupons.",
    role: "Android developer",
    link: "https://play.google.com/store/apps/details?id=com.GenixDrive",
    icon: "https://play-lh.googleusercontent.com/F3sM4zru8xx3P_wLLXy7s2ukbYNM-4rmShavnRjJntJs_2_UguI0caGx2frjgiRpK11sc98R-mVygsJDDTcXVTo=s256"
  },
  {
    name: "SalonToday",
    pkg: ":salontoday",
    stack: ["Java"],
    layer: "domain",
    desc: "Salon booking platform for round-the-clock appointments, staff calendars, and daily offers — the business-facing side of the SalonToday pair.",
    role: "Android developer",
    link: "https://play.google.com/store/apps/details?id=com.salontoday.pk",
    icon: "icons/salontoday.png"
  }
];

const additional = [
  {
    name: "SalonToday Client",
    pkg: ":salontoday-client",
    stack: ["Java"],
    layer: "data",
    desc: "Customer-facing companion to SalonToday — browse salons, book slots, and track appointment history.",
    link: "https://play.google.com/store/apps/details?id=com.salontoday.client.pk",
    icon: "icons/salontoday-client.png"
  },
  {
    name: "Find A Doctor",
    pkg: ":find-a-doctor",
    stack: ["Java", "Kotlin"],
    layer: "presentation",
    desc: "Directory and booking app connecting patients with local doctors and clinics — search by specialty, book, and manage visits.",
    link: "https://play.google.com/store/apps/details?id=com.findadoctor.pk",
    icon: "icons/find-a-doctor.png"
  },
  {
    name: "Vevue",
    pkg: ":vevue",
    stack: ["Kotlin"],
    layer: "domain",
    desc: "Social video-sharing app rewarding users for authentic short-form content.",
    link: "https://play.google.com/store/apps/details?id=com.vevue.powehi",
    icon: "icons/vevue.png"
  },
  {
    name: "Photo Vault",
    pkg: ":photo-vault",
    stack: ["Java"],
    layer: "data",
    desc: "Private photo, video and document vault with PIN/pattern/face lock, decoy folders, and break-in reports on snoopers.",
    link: "https://play.google.com/store/apps/details?id=whizpool.ezy.photo.vault",
    icon: "https://play-lh.googleusercontent.com/QfSUljpqi-HjvSmMuQTZ8Dp8EmPTBzEdUzs32_HEe7-4e09dRBtXyXyRNpoq1DS7nPx1OdYSI3wc-55JBg57=s256"
  },
  {
    name: "Islamic Prayer Times",
    pkg: ":salah-alarm",
    stack: ["Java"],
    layer: "presentation",
    desc: "Prayer-time and Salah tracker with Qibla compass, Adhan alarms, nearby-mosque finder, and a built-in Quran reader.",
    link: "https://play.google.com/store/apps/details?id=whizpool.salahalarm",
    icon: "https://play-lh.googleusercontent.com/riSvvGhGjI70I6YLrFza2Qze4K3JN98gSkU2yCOZS8UkrId-qP4wsLOPnyrv5tiXibzI82zdskEda9zufg8cHZI=s256"
  },
  {
    name: "JS Mobile",
    pkg: ":js-bank",
    stack: ["Java", "Kotlin"],
    layer: "domain",
    desc: "Mobile banking app for JS Bank customers — account access, transfers and bill payments.",
    link: "https://play.google.com/store/apps/details?id=com.JSBL.bank",
    icon: "icons/js-bank.png"
  },
  {
    name: "Zindigi",
    pkg: ":zindigi-wallet",
    stack: ["Kotlin"],
    layer: "data",
    desc: "All-in-one digital wallet and finance app — payments, transfers and bill pay.",
    link: "https://play.google.com/store/apps/details?id=com.wallet.zindigi",
    icon: "icons/zindigi.png"
  }
];

const independent = [
  {
    name: "Smart Expense Manager",
    pkg: ":smart-expense-manager",
    stack: ["Kotlin", "Jetpack Compose"],
    layer: "presentation",
    desc: "Offline-first expense tracker built for Pakistan — log spending in PKR, scan receipts to auto-fill details, no account or cloud sync required.",
    role: "Founder · SharpEdges",
    link: "smart-expense-manager.html",
    linkLabel: "View app page"
  }
];

function initials(name) {
  return name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join("");
}

function cardHTML(app) {
  const roleLine = app.role ? `<span class="module-role">${app.role}</span>` : "";
  const isInternal = app.link && !app.link.startsWith("http");
  const linkLabel = app.linkLabel || "View on Play Store";
  const linkBtn = app.link
    ? `<a class="module-link" href="${app.link}" ${isInternal ? "" : 'target="_blank" rel="noopener"'}>${linkLabel} <span aria-hidden="true">↗</span></a>`
    : `<span class="module-link module-link--disabled">Enterprise / private build</span>`;

  // Real icon if one's been dropped into /icons; falls back to the initials
  // glyph automatically if the field is empty OR the image fails to load.
  const glyph = `<span class="module-glyph module-glyph--fallback">${initials(app.name)}</span>`;
  const iconHTML = app.icon
    ? `<span class="module-glyph module-glyph--icon">
         <img src="${app.icon}" alt="" loading="lazy"
              onerror="this.parentElement.outerHTML = '${glyph.replace(/'/g, "\\'")}';">
       </span>`
    : glyph;

  return `
    <article class="module-card" data-layer="${app.layer}">
      <div class="module-head">
        ${iconHTML}
        <div class="module-headtext">
          <h4>${app.name}</h4>
          <code class="module-pkg">${app.pkg}</code>
        </div>
      </div>
      <p class="module-desc">${app.desc}</p>
      <div class="module-stack">
        ${app.stack.map(t => `<span class="chip">${t}</span>`).join("")}
      </div>
      <div class="module-foot">
        ${roleLine}
        ${linkBtn}
      </div>
    </article>
  `;
}

document.getElementById("featured-grid").innerHTML = featured.map(cardHTML).join("");
document.getElementById("additional-grid").innerHTML = additional.map(cardHTML).join("");
document.getElementById("independent-grid").innerHTML = independent.map(cardHTML).join("");

// ---------------------------------------------------------------
// Scroll reveal
// ---------------------------------------------------------------
const revealTargets = document.querySelectorAll(
  ".layer-card, .release, .deps-block, .module-card, .layers-head, .log h2, .stack h2, .modules h2"
);

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

revealTargets.forEach((el) => {
  el.classList.add("reveal");
  io.observe(el);
});

// ---------------------------------------------------------------
// Layer stack subtle mouse parallax (desktop only, respects reduced motion)
// ---------------------------------------------------------------
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const layerStack = document.getElementById("layer-stack");

if (!prefersReducedMotion && layerStack && window.matchMedia("(hover: hover)").matches) {
  layerStack.addEventListener("mousemove", (e) => {
    const rect = layerStack.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    document.querySelectorAll(".layer-card").forEach((card) => {
      const depth = (parseInt(card.style.getPropertyValue("--i")) + 1) * 6;
      card.style.transform = `translate3d(${x * depth}px, ${y * depth * 0.5}px, 0)`;
    });
  });
  layerStack.addEventListener("mouseleave", () => {
    document.querySelectorAll(".layer-card").forEach((card) => {
      card.style.transform = "translate3d(0,0,0)";
    });
  });
}

// ---------------------------------------------------------------
// Nav shadow on scroll
// ---------------------------------------------------------------
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 8);
});
