import Benefits from "../pages/benefits/Benefits";
import Testimonials from "../pages/testimonials/Testimonials";
import Faq from "../pages/FAQ/Faq";
import Login from "../pages/login/Login";
import { SiBentobox } from "react-icons/si";
import { SiLibreofficewriter } from "react-icons/si";
import { FaPersonCircleQuestion } from "react-icons/fa6";

export const DashBoardLinks = [
  {
    path: "benefits",
    label: "Benefits",
    icon: <SiBentobox />,
    childComponente: <Benefits />,
  },
  {
    path: "testimonials",
    label: "Testimonials",
    icon: <SiLibreofficewriter />,
    childComponente: <Testimonials />,
  },
  {
    path: "faq",
    label: "FAQ",
    icon: <FaPersonCircleQuestion />,
    childComponente: <Faq />,
  },
  {
    path: "login",
    childComponente: <Login />,
  },
];

export const testimonialsData = [
  {
    image: "/assets/images/Vector.png",
    name: "Jennifer B",
    star: 5,
    comment:
      "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
  },
  {
    image: "/assets/images/Vector.png",
    name: "Jennifer B",
    star: 5,
    comment:
      "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
  },
  {
    image: "/assets/images/Vector.png",
    name: "Jennifer B",
    star: 5,
    comment:
      "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
  },
  {
    image: "/assets/images/Vector.png",
    name: "Jennifer B",
    star: 5,
    comment:
      "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
  },
];
