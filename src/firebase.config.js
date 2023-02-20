import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1vMNUWCRylTCqOh9ndTOATLGEC_atIkM",
  authDomain: "furniture-website-7489d.firebaseapp.com",
  databaseURL: "https://furniture-website-7489d-default-rtdb.firebaseio.com",
  projectId: "furniture-website-7489d",
  storageBucket: "furniture-website-7489d.appspot.com",
  messagingSenderId: "1024129669929",
  appId: "1:1024129669929:web:9b40b2cc5c59c4fefd7538",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
