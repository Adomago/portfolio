export interface WorksItem {
  title: string;
  description: string;
  link: string;
  tag: "ai" | "fullstack" | "civic" | "ml";
  tagLabel: string;
  tag2?: "ai" | "fullstack" | "civic" | "ml"; // Optional second tag
  tagLabel2?: string;
}

export const works: WorksItem[] = [
  {
    tag: "ai",
    tagLabel: "AI · Forecasting",
    tag2: "fullstack",
    tagLabel2: "Full-stack",
    title: "StockTrack",
    description: "AI-driven inventory and demand forecasting platform with user/admin dashboards, built with React and forecasting models to improve stock planning decisions.",
    link: "https://github.com/rpatenia/StockTrack",
  },
  {
    tag: "ai",
    tagLabel: "AI · RAG · LLM",
    title: "AI Legal Assistant",
    description: "RAG-based assistant for Philippine Labor Code queries, benchmarking Llama 3.1, Qwen 2.5, and Gemma 2 for legal-response quality and speed. Built with a Python notebook using the official Labor Code PDF, published on Hugging Face. Forthcoming IEEE conference paper (Malaysia, May 2026).",
    link: "https://github.com/Adomago/AI3",
  },
  {
    tag: "fullstack",
    tagLabel: "Full-stack",
    title: "Barkstay",
    description: "Full-stack pet services platform with real-time updates, secure authentication, and payment processing using JavaScript, Supabase, and MongoDB.",
    link: "https://github.com/rntpasia/BARKSTAY",
  },
  {
    tag: "civic",
    tagLabel: "Civic · Web",
    title: "Barangay 881 System",
    description: "Web-based administrative system that digitizes local government workflows and streamlines records and frontline barangay service operations, developed in coordination with official barangay personnel.",
    link: "https://github.com/rmgt9500/BarangayWeb",
  },
  {
    tag: "ml",
    tagLabel: "ML · Computer Vision",
    title: "Tomato Disease Detection",
    description: "YOLOv12 instance segmentation model for tomato leaf diseases, fine-tuned on a custom dataset to support accurate agricultural disease analysis. Deployed on Streamlit.",
    link: "https://github.com/Adomago/Tomato-Leaf-Disease-Detection",
  },
];