import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBH_HjadSxs9NssYmOxISfWipLdpL58F-o",
  authDomain: "sweep-stakes-45239.firebaseapp.com",
  projectId: "sweep-stakes-45239",
  storageBucket: "sweep-stakes-45239.appspot.com",
  messagingSenderId: "648146474444",
  appId: "1:648146474444:web:583469b7187272e1027969",
  measurementId: "G-0F9WGVC47Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
