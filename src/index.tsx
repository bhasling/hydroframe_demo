import { createRoot } from "react-dom/client";
import createRoutes from "./routes";
import "./main.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactGA from "react-ga4";

ReactGA.initialize("G-ZD01YNXXCV");
let container: HTMLDivElement;
const routes = createRoutes();
document.addEventListener("DOMContentLoaded", function () {
    if (!container) {
        container = document.getElementById("root") as HTMLDivElement;
        const root = createRoot(container);
        root.render(routes);
    }
});
