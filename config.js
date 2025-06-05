const firebaseConfig = {
  apiKey: "AIzaSyCB_hTbqxCMZpfNXrvCTNxHfhS4FAjhjUw",
  authDomain: "jdew-website.firebaseapp.com",
  projectId: "jdew-website",
  storageBucket: "jdew-website.firebasestorage.app",
  messagingSenderId: "95166403085",
  appId: "1:95166403085:web:df38ab15817f797ccbbb44",
  measurementId: "G-M0KD03XZ93"
};

firebaseConfig.initializeApp(frebaseConfig);
const db = firebaseConfig.firestore();