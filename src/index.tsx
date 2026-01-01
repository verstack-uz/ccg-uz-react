import { createRoot } from "react-dom/client";

import App from "@/app";
import "@/styles/index.css";

const rootDiv = document.getElementById("root") as HTMLElement;
const root = createRoot(rootDiv);

root.render(<App />);
