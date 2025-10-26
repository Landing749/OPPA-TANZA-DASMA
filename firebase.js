import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";


const firebaseConfig = {
apiKey: "AIzaSyAFVa35QuIs2gydAS1Ii3zLtTaA4KqOXw8",
authDomain: "oppa-438a7.firebaseapp.com",
databaseURL: "https://oppa-438a7-default-rtdb.firebaseio.com",
projectId: "oppa-438a7",
storageBucket: "oppa-438a7.appspot.com",
messagingSenderId: "783854259514",
appId: "1:783854259514:web:fd1fa0b9ee913c5fefd403",
measurementId: "G-C986DZ6DCZ"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
