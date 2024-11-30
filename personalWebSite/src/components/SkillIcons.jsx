import {
  faDatabase,
  faCodeBranch,
  faServer,
  faTerminal,
  faCube,
  faChartLine,
  faPuzzlePiece,
  faLightbulb,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJsSquare,
  faHtml5,
  faCss3,
  faNodeJs,
  faJava,
  faGitAlt,
  faDocker,
  faAws,
  faBootstrap,
  faFigma,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// İkonlar haritası
const iconMap = {
  React: faReact,
  JavaScript: faJsSquare,
  HTML5: faHtml5,
  CSS3: faCss3,
  "Node.js": faNodeJs,
  Java: faJava,
  Git: faGitAlt,
  Bootstrap: faBootstrap,
  Figma: faFigma,
  GitHub: faGithub,
  PostgreSQL: faDatabase,
  MongoDB: faDatabase,
  "Spring Boot": faServer,
  "CI/CD": faCodeBranch,
  "Tailwind CSS": faTerminal,
  Redux: faCube,
  SQL: faDatabase,
  Deployment: faServer,
  "Team Collaboration": faCodeBranch,
  "Takım Çalışması": faCodeBranch,
  "Çevik Yöntemler": faTerminal,
  "Agile Methodologies": faTerminal,
  "Technical Documentation": faTerminal,
  "Teknik Dokümantasyon": faTerminal,
  "Algorithm Design": faChartLine,
  "Algoritma Tasarımı": faChartLine,
  "Problem Solving": faPuzzlePiece,
  "Problem Çözme": faPuzzlePiece,
  "System Design": faLightbulb,
  "Sistem Tasarımı": faLightbulb,
  "React Hooks": faHammer,
  Dağıtım: faServer,
};

const getIcon = (name, color) => {
  const icon = iconMap[name];
  if (icon) {
    return <FontAwesomeIcon icon={icon} style={{ color: color }} />;
  }
  return null; // Eğer ikon bulunamazsa, null döndür
};

export default getIcon;
