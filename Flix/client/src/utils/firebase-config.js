
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import{getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBrBFgrVQW8YtQVtL0j4iIFgX4IvXIJZKQ",
  authDomain: "flix-6387b.firebaseapp.com",
  projectId: "flix-6387b",
  storageBucket: "flix-6387b.appspot.com",
  messagingSenderId: "641858413714",
  appId: "1:641858413714:web:dda85e8ce8dce28284724b",
  measurementId: "G-KK1ENEGD6R"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebaseAuth = getAuth(app);

export {firebaseAuth};