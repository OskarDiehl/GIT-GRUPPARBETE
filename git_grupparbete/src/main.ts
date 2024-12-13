import { createHeroMain } from "./components/hero-main/heroMain";
import { createNavbar } from "./components/navBar/navBar";

const app: HTMLElement | null = document.getElementById('app');


createNavbar(app);
createHeroMain(app);