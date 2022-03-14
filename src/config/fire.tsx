import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDciSDa_WZyB1jqSvOVeHAkjQUgox8utgI",
  authDomain: "conby-db347.firebaseapp.com",
  projectId: "conby-db347",
  storageBucket: "conby-db347.appspot.com",
  messagingSenderId: "683068008313",
  appId: "1:683068008313:web:037c4ff6b308ebc112f1a8",
  measurementId: "G-W1Y5MD9DP2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const authentication = getAuth(app);
