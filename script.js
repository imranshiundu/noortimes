// Define styles for .kegiatan-item
makeStyle(
  ".kegiatan-item",
  "fx-250px bg-[primary-900] br-1rem p-2rem display-flex flex-parent-center fd-column transition-all-0.3s hover:scale-105 hover:shadow-lg"
);

// Style configuration
const styleConfig = {
  props: {
    scroll: ["scrollBehavior"],
    d: ["display"],
    tdc: ["textDecorationColor"],
  },
  color: {
    // Text Colors
    ".text-neutral-100": "tc-[neutral-100]",
    ".text-neutral-200": "tc-[neutral-200]",
    ".text-neutral-300": "tc-[neutral-300]",
    ".text-neutral-400": "tc-[neutral-400]",
    ".text-neutral-500": "tc-[neutral-500]",
    ".text-neutral-600": "tc-[neutral-600]",
    ".text-neutral-700": "tc-[neutral-700]",
    ".text-neutral-800": "tc-[neutral-800]",
    ".text-neutral-900": "tc-[neutral-900]",
    ".text-primary-200": "tc-[primary-200]",
    ".text-primary-300": "tc-[primary-300]",
    ".text-primary-400": "tc-[primary-400]",
    ".text-primary-500": "tc-[primary-500]",
    ".text-primary-600": "tc-[primary-600]",
    ".text-primary-700": "tc-[primary-700]",
    ".text-primary-800": "tc-[primary-800]",
    ".text-primary-900": "tc-[primary-900]",
    ".text-accent-100": "tc-[accent-100]",
    ".text-accent-200": "tc-[accent-200]",
    ".text-accent-300": "tc-[accent-300]",
    ".text-accent-400": "tc-[accent-400]",
    ".text-accent-500": "tc-[accent-500]",
    ".text-accent-600": "tc-[accent-600]",
    ".text-accent-700": "tc-[accent-700]",
    ".text-accent-800": "tc-[accent-800]",
    ".text-accent-900": "tc-[accent-900]",
   
  },
  styles: {
    html: "scroll-smooth",
    a: "tc-[accent-300] tdc-[primary-400] hover:tc-[accent-500]",
    p: "tc-[accent-300]",
    main: "w-100% h-mn-100vh display-flex flex-parent-center ai-start fd-column",
    section: "w-100% h-mn-100vh pv-4rem ph-10vw",
    footer: "w-100% pt-2rem ph-10vw fs-14px",
    ".navbar":
      "display-flex flex-parent-center jc-[space-between] position-fixed t-0 r-0 l-0 pv-1rem ph-10vw z-1000 bg-[primary-800]",
    ".center": "display-flex flex-parent-center",
    ".flex-start": "display-flex flex-parent-center ai-[flex-start]",
    ".start": "display-flex flex-parent-[flex-start]",
    ".end": "display-flex flex-parent-[flex-end]",
    ".w-full": "w-100%",
    ".relative": "position-relative",
    ".absolute, .float-icon": "position-absolute",
    ".float-icon": "animation-float-6s-infinite",
  },
};

// Define props and styles
defineProps(styleConfig.props);
makeStyles(styleConfig.styles);
makeStyles(styleConfig.color);
tenoxui();

// Time function
function waktu() {
  const now = new Date();
  const format = now.toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  document.getElementById("date").textContent = format;
}
setInterval(waktu, 1000);
waktu();

// Additional styles
makeStyles({
  ".jadwal-wrapper":
    "display-flex jc-[flex-start] ai-center gap-1rem p-1rem br-1rem bg-[primary-200] hover:bg-[primary-300] transition-all-0.3s",
  ".bubble-wrapper":
    "bg-[accent-300] box-2rem br-50% display-flex flex-parent-center position-relative",
  ".bubble-icon": "fs-1rem animation-iconPop-0.5s",
  ".bubble-connector":
    "w-2px bg-[accent-300] h-260% position-absolute z--99 br-1rem",
  ".jadwal-wrapper header h2": "fs-18px fw-600",
  ".jadwal-wrapper header p": "fs-14px opa-0.7",
});

// Animations
makeStyles({
  "@keyframes float": `
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  `,
  "@keyframes iconPop": `
    0% { transform: scale(0.8); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  `,
});

// Media Queries for Responsiveness
makeStyles({
  "@media (max-width: 768px)": {
    ".kegiatan-item": "fx-200px",
    ".jadwal-wrapper": "fd-column ai-[flex-start]",
    ".bubble-connector": "h-2px w-100% t-50% l-0",
  },
  "@media (max-width: 480px)": {
    ".kegiatan-item": "fx-100%",
    ".jadwal-wrapper header h2": "fs-16px",
    ".jadwal-wrapper header p": "fs-12px",
  },
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
