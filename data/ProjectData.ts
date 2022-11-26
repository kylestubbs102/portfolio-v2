import { BoxData } from "../components/Box";

export const PROJECTS: Array<BoxData> = [
  {
    title: "Pokedex",
    description:
      "Created an Android Pokedex app using the Pokedex API. Used a design from Figma to help with creating the UI. Implemented using clean architecture with Hilt, Glide, Retrofit, and Room.",
  },
  {
    title: "Mastermind",
    description:
      "Created a Mastermind web app using React, Chakra UI, Node.js, Express, and Socket.io. Utilized the useContext hook to use and update a global state. Deployed the client to Netlify and the server to Netlify.",
  },
  {
    title: "Github Auditor",
    description:
      "Used scrum with in a team to create a GitHub auditor using React and Ruby on Rails. Detected GitHub security alerts using webhooks via the GitHub API. Queued a Redis job to store data in PostgreSQL and send an email with Mailgun.",
  },
  {
    title: "GauchoShare",
    description:
      "Used scrum to create an Android app to help UCSB students buy/sell items to each other. Allowed users to post items and message each other using Firebase Realtime Database to store data. Used JUnit and Espresso to thoroughly test functionality.",
  },
];
