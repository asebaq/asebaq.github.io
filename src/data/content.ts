// Single source of truth for the site's content.
// Edit here; every component reads from this file.

export const person = {
  name: "Ahmad Sebaq",
  tagline: "Computer Vision Engineer & Technical Lead",
  role: "Senior Computer Vision & AI Engineer",
  years: 7,
  location: "Cairo, Egypt",
  email: "ahmad.sebaq@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahmad-sebaq-807273104/",
  github: "https://github.com/asebaq",
  scholar: "https://scholar.google.com.eg/citations?user=Ixo5qL0AAAAJ&hl=en",
  calendly: "", // add a booking link here to show the "Schedule a call" button
  intro:
    "I build video systems that run in production — detection, tracking, re-identification and action recognition on live camera feeds, broadcast streams and microscopy. Seven years across surveillance, sports analytics, biometrics and medical imaging.",
  cv: [{ label: "CV", file: "/cv-ahmad-sebaq.pdf" }],
};

// ── Services ────────────────────────────────────────────────────────────────
// `rate` shows as-is. Replace "Rate on request" with your number when ready.
export const services = [
  {
    kind: "Consulting",
    title: "Freelance & Consulting",
    rate: "Rate on request",
    body: "Computer-vision system design and delivery: video pipelines, detection and tracking, re-identification, biometrics, VLM and RAG integration, edge and on-prem deployment.",
    points: [
      "30-minute scoping call before any commitment",
      "Hourly or fixed-scope project pricing",
      "Architecture and code review support",
      "Part-time or full-project engagements",
    ],
  },
  {
    kind: "Mentoring",
    title: "CV & Career Guidance",
    rate: "Free",
    body: "For students and early-career engineers moving into computer vision, deep learning or AI engineering. I mentored student teams at Affectiva and led a team of 8.",
    points: [
      "CV and portfolio review",
      "Project scoping and model-selection feedback",
      "Async review over email or LinkedIn",
      "Optional 20-minute follow-up call",
    ],
  },
  {
    kind: "Speaking",
    title: "Technical Speaking",
    rate: "Paid or volunteer",
    body: "Talks and workshops for universities, meetups and company events on production computer vision, video understanding and agentic LLM systems.",
    points: [
      "Topics: video understanding, generative models, agentic RAG",
      "Online, or in person around Cairo",
      "30–60 minute sessions",
      "Get in touch to discuss the topic",
    ],
  },
];

export const availability =
  "Open to selected freelance and consulting work alongside my current roles. Engagements are subject to availability and to my employment agreements.";

// ── Skills ──────────────────────────────────────────────────────────────────
export const skills = [
  {
    title: "Video Understanding",
    items: [
      "Detection & multi-object tracking (YOLO, Yolact, DeepSort)",
      "Cross-camera re-identification",
      "Action recognition",
      "Scene-change detection (PySceneDetect)",
      "Keyframe & perceptual hashing (pHash)",
      "CLIP frame embeddings, automated video QA",
    ],
  },
  {
    title: "Computer Vision",
    items: [
      "Segmentation (U-Net, Mask R-CNN, Swin)",
      "Face & fingerprint biometrics (1:1 and 1:N)",
      "OCR and document understanding",
      "3D hand-pose reconstruction, SLAM",
      "Cross-modal RGB/IR alignment",
      "OpenCV, classical image processing",
    ],
  },
  {
    title: "Deep Learning",
    items: [
      "PyTorch, HuggingFace, scikit-learn",
      "CNNs and Transformers",
      "Diffusion models and GANs",
      "Perceptual & structural evaluation (LPIPS, FID, SSIM, PSNR)",
      "ASR (Whisper), diarization (Pyannote)",
      "Audio fingerprinting, denoising (DeepFilterNet3)",
    ],
  },
  {
    title: "Generative AI & LLMs",
    items: [
      "LLM orchestration (LangGraph, LangChain)",
      "Agentic pipelines and tool-use",
      "Agentic RAG with grounded citations",
      "Vision-language model fine-tuning",
      "Vector & hybrid search (Qdrant, Elasticsearch)",
      "Reranking, RRF fusion, LLM-as-judge evaluation",
    ],
  },
  {
    title: "Real-time & Deployment",
    items: [
      "FFmpeg, live stream ingest",
      "WebSocket / SSE streaming services",
      "Industrial-camera capture (GenTL, Harvesters)",
      "ONNX Runtime inference",
      "Edge: Jetson Nano & Orin, Raspberry Pi",
      "Desktop packaging (Electron, PyInstaller)",
    ],
  },
  {
    title: "Engineering & MLOps",
    items: [
      "Python, C++, JavaScript / TypeScript, React",
      "FastAPI, Docker, Jenkins CI, AWS EC2",
      "PostgreSQL, SQLAlchemy, Alembic",
      "Git, structured logging, Sentry",
      "QGIS, Sentinel-2 / Planet / Maxar imagery",
      "LeRobot imitation-learning data pipelines",
    ],
  },
];

// ── Experience timeline ─────────────────────────────────────────────────────
// lane: "core" (full-time) | "side" (part-time / consulting) | "research"
export const roles = [
  {
    lane: "core",
    title: "Senior Computer Vision Engineer",
    org: "CyShield",
    place: "New Cairo, Egypt",
    start: "2025-01",
    end: null,
    details:
      "Multi-camera stadium video surveillance — detection, tracking, cross-view re-identification and action recognition for incident alerting. Face and fingerprint identity verification for border-control checkpoints (1:1 verification, 1:N watchlist identification). Diffusion and GAN inpainting models, VLM fine-tuning. Leads a squad of 3 engineers.",
  },
  {
    lane: "side",
    title: "AI / Computer Vision Consultant",
    org: "CNTXT",
    place: "Remote — UAE / Egypt",
    start: "2026-01",
    end: null,
    details:
      "Egocentric video data platform processing 100+ hours of 3-camera teleoperation footage per week into validated LeRobot datasets. Arabic agentic RAG service on LangGraph — Hit@1 0.84 → 0.95, correct refusal 55% → 94% on a 278-question benchmark. Arabic ASR pipeline and RGB/IR drone-image alignment.",
  },
  {
    lane: "core",
    title: "AI Team Lead",
    org: "Lumin Soft",
    place: "Giza, Egypt",
    start: "2023-11",
    end: "2025-01",
    details:
      "Led 8 AI developers. Flagship sports video-analysis system — player and ball detection & tracking, team clustering, re-identification, action recognition and possession tracking across full matches. Delivered 3 production video and imaging projects.",
  },
  {
    lane: "core",
    title: "R&D Engineer",
    org: "Applied Innovation Center",
    place: "Giza, Egypt",
    start: "2022-10",
    end: "2023-11",
    details:
      "Land-cover segmentation into 7 classes from Sentinel-2 and Planet imagery using U-Net and Transformer networks — 98% overall accuracy across Egypt's main governorates, on end-to-end geospatial pipelines.",
  },
  {
    lane: "core",
    title: "Research Assistant",
    org: "Center for Informatics Science, Nile University",
    place: "Giza, Egypt",
    start: "2021-04",
    end: "2023-04",
    details:
      "Rice crop disease classification across 5 classes with ResNet and Transformer models — 96% F1 on a 250K-image dataset. Kaggle CV competitions including UW-Madison GI-tract segmentation.",
  },
  {
    lane: "side",
    title: "Computer Vision Engineer",
    org: "Dawarha",
    place: "Cairo, Egypt",
    start: "2021-04",
    end: "2023-09",
    details:
      "Real-time YOLOv3 + KMeans video pipeline for recyclable-material detection at 90 mAP, deployed on a Raspberry Pi at 11 FPS.",
  },
  {
    lane: "side",
    title: "Computer Vision Engineer",
    org: "VLens",
    place: "Cairo, Egypt",
    start: "2021-02",
    end: "2021-11",
    details: "National-ID OCR with U-Net text segmentation and KMeans preprocessing, deployed on AWS EC2.",
  },
  {
    lane: "side",
    title: "Mentor",
    org: "Affectiva",
    place: "Massachusetts, USA",
    start: "2020-06",
    end: "2020-08",
    details: "Mentored student teams through CV project scoping, model selection and demo delivery.",
  },
  {
    lane: "side",
    title: "Computer Vision Engineer",
    org: "TechnoIsland",
    place: "Cairo, Egypt",
    start: "2019-10",
    end: "2021-11",
    details:
      "Video pipeline for sperm-sample analysis — YOLOv3 detection, Yolact instance segmentation and DeepSort tracking across microscopy frames.",
  },
  {
    lane: "research",
    title: "Research Intern",
    org: "Fatima Fellowship",
    place: "Stanford, USA",
    start: "2023-09",
    end: "2024-08",
    details: "Generative models for enhancing low-resolution MRI, validated for clinical use.",
  },
  {
    lane: "research",
    title: "Research Intern",
    org: "Linköping University",
    place: "Linköping, Sweden",
    start: "2022-10",
    end: "2023-01",
    details: "GANs adding realistic seasonal effects to Maxar aerial imagery, with geospatial analysts validating output.",
  },
];

export const laneMeta = {
  core: { label: "Full-time", hint: "Employment" },
  side: { label: "Part-time", hint: "Consulting & contract" },
  research: { label: "Research", hint: "Fellowships & internships" },
};

// ── Projects ────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: "TV Ad-Recognition Pipeline",
    kicker: "Broadcast video · real-time",
    body: "Matches live TV against an ad catalog by fusing scene-change keyframes (PySceneDetect, pHash, CLIP ViT-B/32) with audio fingerprints (Chromaprint) and speaker embeddings (WavLM x-vectors), searched over Elasticsearch kNN + BM25 with NMS-suppressed airing events. WebSocket endpoint streams per-channel recognition.",
    stack: ["FastAPI", "Elasticsearch", "PyTorch", "FFmpeg"],
    link: "",
  },
  {
    title: "Sperm Analysis (CASA)",
    kicker: "Microscopy video · desktop product",
    body: "Computer-aided semen analysis measuring count, motility (per-cell kinematics from multi-object tracking) and morphology. Shipped as an offline Windows app: FastAPI backend in an Electron + React shell, industrial-camera capture, encrypted weights, licensing service and PDF clinical reports.",
    stack: ["YOLO", "ONNX Runtime", "Electron", "GenTL"],
    link: "",
  },
  {
    title: "BlacksmithAI",
    kicker: "Agentic pipeline · freelance",
    body: "Natural language to CAD. A multi-stage agent state machine (decompose → plan → assemble → execute → validate → repair) over a deterministic JSON IR with content-addressed caching, image grounding and human-in-the-loop review; verifier tools let the model self-check before execution.",
    stack: ["FastAPI", "Qdrant", "CadQuery", "react-three-fiber"],
    link: "https://blacksmithai.org",
  },
];

// ── Background ──────────────────────────────────────────────────────────────
export const education = [
  {
    degree: "M.Sc. in Communication and Information Technology",
    school: "Nile University",
    period: "2021 – 2026",
    detail: "GPA 4.0 / 4.0. Full master's scholarship.",
  },
  {
    degree: "B.Sc. in Biomedical Engineering",
    school: "Minia University",
    period: "2014 – 2019",
    detail: "Very Good with Honors (84.6%).",
  },
];

export const publications = [
  {
    title: "Assessment of artificial intelligence in detecting errors on panoramic radiographs",
    venue: "Imaging Science in Dentistry, 2026",
    doi: "https://doi.org/10.5624/isd.20250242",
  },
  {
    title: "RSDiff: Remote sensing image generation from text using diffusion model",
    venue: "Neural Computing and Applications, 2024",
    doi: "https://doi.org/10.1007/s00521-024-10363-3",
  },
  {
    title: "Rice plant disease detection and diagnosis using deep CNNs and multispectral imaging",
    venue: "International Conference on Model and Data Engineering, 2023",
    doi: "https://doi.org/10.1007/978-3-031-21595-7_2",
  },
  {
    title: "An analytical computational algorithm for solving a system of multipantograph DDEs",
    venue: "Advances in Astronomy, 2021",
    doi: "https://doi.org/10.1155/2021/7741166",
  },
];

export const awards = [
  { title: "Full master's scholarship, Nile University", year: "2021–2023" },
  { title: "3rd place — GMES & Africa Incubation Challenge", year: "2021" },
  { title: "3rd place — Affectiva Makeathon, Inside Out project", year: "2020" },
  { title: "Finalist — Nokia Africathon, ALS project", year: "2019" },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional working proficiency" },
];

// ── How I work ──────────────────────────────────────────────────────────────
export const workStyle = [
  {
    title: "Defined success metrics",
    body: "Vision work is only done when it hits a number. Agree the metric and the test set up front and the rest of the project gets easier.",
  },
  {
    title: "Production from day one",
    body: "I build research prototypes with deployment in mind — latency budgets, hardware limits and failure modes belong in the first sprint, not the last.",
  },
  {
    title: "End-to-end ownership",
    body: "Dataset, model, pipeline, deployment. I prefer owning the full chain rather than handing a checkpoint over a wall.",
  },
  {
    title: "Direct communication",
    body: "Short regular syncs, written decisions, and early warning when something is not going to work.",
  },
  {
    title: "Async-friendly",
    body: "Cairo time zone, comfortable with distributed teams, happy to overlap with Europe and the Gulf.",
  },
  {
    title: "Mentoring as I go",
    body: "I have led teams of 3 and 8. Code review and knowledge transfer are part of delivery, not an extra.",
  },
];

export const engagements = [
  { title: "Project-based", body: "A defined scope with deliverables and a timeline." },
  { title: "Part-time / retainer", body: "Ongoing work on an agreed weekly schedule." },
  { title: "Technical advisory", body: "Architecture and model-selection guidance without day-to-day delivery." },
  { title: "Mentoring", body: "Regular sessions on skills, portfolio and career direction." },
];
