// Importe as funções que você precisa dos SDKs que você precisa
const firebase = require("firebase/app");
require("firebase/analytics");
require("firebase/firestore");

// Configuração do Firebase para o seu aplicativo da web
const firebaseConfig = {
  apiKey: "AIzaSyCFjRC1AxxwjrAb4D9LbNC_xJn__ZaI9z8",
  authDomain: "longedecasa-efa59.firebaseapp.com",
  projectId: "longedecasa-efa59",
  storageBucket: "longedecasa-efa59.appspot.com",
  messagingSenderId: "552029688248",
  appId: "1:552029688248:web:6995a671ea40112cb9bf4d",
  measurementId: "G-XHZ4TJR862"
};

// Inicialize o Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics(app);