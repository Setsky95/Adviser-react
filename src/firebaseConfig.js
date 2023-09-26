import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqKEg-3TArS5NWa9nk-IgIs886xmnEQz8",
  authDomain: "proyecto-consejo.firebaseapp.com",
  projectId: "proyecto-consejo",
  storageBucket: "proyecto-consejo.appspot.com",
  messagingSenderId: "355682931940",
  appId: "1:355682931940:web:c6a40ccb8addf0950888f1"
};

const app = initializeApp(firebaseConfig);
 export const dataBase = getFirestore(app)

