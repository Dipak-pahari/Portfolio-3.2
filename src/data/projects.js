import ProjectImage2 from "../assets/GardenSewa-thumbnail.png";
import ProjectImage3 from "../assets/savvy's-thumbnail.png";
import Gimg3 from "../assets/GardenSewa404.png";
import Gimg1 from "../assets/GardenSewaHome.png";
import Gimg2 from "../assets/GardenSewaServices.png";

const projects = [
  {
    id: "savvy",
    name: "Savvy's Collection",
    type: "E-commerce Website Design",
    typeLabel: "Client",
    date: "2025",
    client: "E-commerce Brand (Confidential)",
    role: "UI/UX Designer",
    live: "Unavailable",
    image: ProjectImage3,
    detailPage: "/project/savvy",
    responsibilities: "temp resposnvibilitys of savvy prj",
    galleryImages: [],
    overviewText1: "savvys collection description1",
    overviewText2: "savvys collection description2",
    colordescription: "Why these colors?",
    colors: ["#F1C40F", "#8E44AD"],
  },
  {
    id: "gardensewa",
    name: "GardenSewa",
    type: "E-commerce Website Design",
    typeLabel: "Company",
    date: "2025",
    client: "SRIYOG Consulting",
    role: "UI/UX Designer (Team Lead)",
    live: "https://www.gardensewa.com/",
    image: ProjectImage2,
    detailPage: "/project/gardensewa",
    responsibilities: "Website Design • User Research • Wireframing • Prototyping",
    galleryImages: [Gimg1, Gimg2, Gimg3], // scrollable images
    overviewText1: "GardenSewa was designed as a plant-buying platform where users could also book gardeners. As Project Lead, I created a clean and easy-to-use interface aligned with Kishanpedia's direction—but without copying it.",
    overviewText2: "I led the design of Phase 1 and Phase 2. After my internship, the project changed under new management, so the live version isn't identical to my original concept, but it was built on the foundation I created.",
    colordescription: "Why these colors? Fresh, natural, readable, and consistent with the brand direction.",
    colors: ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD"],
  },
  {
    id: "sriyog-dashboard",
    name: "SRIYOG Dashboard",
    type: "Dashboard Design",
    typeLabel: "Company",
    date: "2025",
    client: "SRIYOG Consulting",
    role: "UI/UX Designer",
    live: "Unavailable",
    image: ProjectImage3,
    detailPage: "/project/sriyog-dashboard",
    responsibilities: "temp resposnvibilitys of sriyog prj",
    galleryImages: [],
    overviewText1: "savvys collection description1",
    overviewText2: "savvys collection description2",
    colordescription: "Why these colors?",
    colors: ["#FF5733", "#33FF57", "#3357FF"],
  },
];

export default projects;