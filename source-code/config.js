// change this config!
// ubah konfigurasi ini sesuai dengan akun firebase anda!
const firebaseConfig = {
  apiKey: "FIREBASE-API-KEY",
  authDomain: "FIREBASE-AUTH-DOMAIN",
  databaseURL: "FIREBASE-DB-URL",
  projectId: "FIREBASE-PROJ-ID",
  storageBucket: "FIREBASE-STRG-BUCKET",
  messagingSenderId: "FIREBASE-MSG-ID",
  appId: "FIREBASE-APP-ID",
  measurementId: "FIREBASE-MEA-ID",
};

// initialize
firebase.initializeApp(firebaseConfig);

// ref-database
const auth = firebase.auth();

// Creative Commons License 2025 diyyo White CC0 1.0 Universal