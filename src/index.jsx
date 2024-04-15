import { render } from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client";

const rootElement = document.querySelector(".root");

createRoot(rootElement).render(<App />);