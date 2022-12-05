import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import {
  faEarth,
  faLaptopCode,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { SkillBoxData } from "../components/SkillBox";

export const SKILLS: Array<SkillBoxData> = [
  {
    title: "Languages",
    description:
      "Kotlin, Java, Javascript/Typescript, HTML/CSS, Python, C++, XML, SQL",
    icon: faEarth,
  },
  {
    title: "Android",
    description:
      "Retrofit, Room, Glide, Compose, XML, Material UI, Coroutines, RxJava, MVVM, Clean Architecture, Firebase, FCM, Gradle, Hilt/Dagger/Koin, Paging3, Mockito, JUnit, Espresso",
    icon: faAndroid,
  },
  {
    title: "Web",
    description:
      "React, Chakra UI, Hooks, Custom Hooks, Next.js, Axios, Routing, Redux, Jest, Socket IO",
    icon: faLaptopCode,
  },
  {
    title: "Tools",
    description:
      "REST, Git, VS Code, Android Studio, Linux, Jira, Postman, Agile Methodologies",
    icon: faTools,
  },
];

// If you see this it means that I'm interested in and currently learning iOS dev :)
//
//   {
//     title: "iOS",
//     description: "",
//     icon: faApple,
//   },
