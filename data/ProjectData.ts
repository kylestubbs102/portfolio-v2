import { ProjectBoxData } from "../components/ProjectBox";
import GauchoShare from "../public/GauchoShare.jpg";
import HotelFinder from "../public/HotelFinder.png";
import Mastermind from "../public/Mastermind.jpg";
import Pokedex from "../public/Pokedex.jpg";

export const PROJECTS: Array<ProjectBoxData> = [
  {
    title: "Pokedex",
    description:
      "Created an Android Pokedex app using the Pokedex API. Used a design from Figma to help with creating the UI. Implemented using clean architecture with Koin, Glide, Retrofit, and Room.",
    src: Pokedex,
    link: "https://github.com/kylestubbs102/Pokedex",
  },
  {
    title: "Mastermind",
    description:
      "Created a Mastermind web app using React, Chakra UI, Node.js, Express, and Socket.io. Utilized the useContext hook to use and update a global state. Deployed the client to Netlify and the server to Heroku.",
    src: Mastermind,
    link: "https://github.com/kylestubbs102/mastermind",
  },
  {
    title: "Hotel Finder",
    description:
      "Created an Android app to show hotels based on the user's desired location and travel days. Implemented using clean architecture with Hilt, Glide, Retrofit, Compose, Google Maps SDK, and Room.",

    src: HotelFinder,
    link: "https://github.com/kylestubbs102/HotelsApp",
  },
  // {
  //   title: "Github Auditor",
  //   description:
  //     "Used scrum with in a team to create a GitHub auditor using React and Ruby on Rails. Detected GitHub security alerts using webhooks via the GitHub API. Queued a Redis job to store data in PostgreSQL and send an email with Mailgun.",
  //   src: GithubAuditor,
  //   link: "https://github.com/chrisyang365/github-auditor",
  // },
  // Add this back when Grid is replaced with projects to make it look better
  {
    title: "GauchoShare",
    description:
      "Used scrum to create an Android app to help UCSB students buy/sell items to each other. Allowed users to post items and message each other using Firebase Realtime Database to store data. Used JUnit and Espresso to thoroughly test functionality.",
    src: GauchoShare,
    link: "https://github.com/ucsb-cs48-w20/gauchoshare",
  },
];
