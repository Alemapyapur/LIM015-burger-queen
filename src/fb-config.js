// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import 'firebase/firestore';
// // TODO: Add SDKs for Firebase products that you want to use.
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAEYzLibbeYJChCkzoU01GFTcWnGBYLhxs",
//   authDomain: "burguer-queen-294da.firebaseapp.com",
//   projectId: "burguer-queen-294da",
//   storageBucket: "burguer-queen-294da.appspot.com",
//   messagingSenderId: "573989711882",
//   appId: "1:573989711882:web:f3f9e9b3a1fdf7020c2ff3",
// };

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);

// export default firebaseApp;

// *--------------------------CONFIGURACION--------------------------------------*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use.
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEYzLibbeYJChCkzoU01GFTcWnGBYLhxs",
  authDomain: "burguer-queen-294da.firebaseapp.com",
  projectId: "burguer-queen-294da",
  storageBucket: "burguer-queen-294da.appspot.com",
  messagingSenderId: "573989711882",
  appId: "1:573989711882:web:f3f9e9b3a1fdf7020c2ff3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export default app;
// export default db;