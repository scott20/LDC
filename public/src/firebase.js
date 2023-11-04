// Importe as funções que você precisa dos SDKs que você precisa
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";  
import 'firebase/firestore';// Você pode importar outros módulos do Firebase, como Firestore, Realtime Database, Autenticação, etc., conforme necessário.
// TODO: Adicione os SDKs dos produtos Firebase que você deseja usar
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuração do Firebase para o seu aplicativo da web
// Para o Firebase JS SDK v7.20.0 e posterior, measurementId é opcional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);