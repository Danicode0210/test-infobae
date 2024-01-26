import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect, signOut } from 'firebase/auth';  // Importa signOut desde 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBCH-hsPs3cZ15wf64JRn6v2A-8m6kOHlQ",
  authDomain: "test-infobae-b5ab8.firebaseapp.com",
  projectId: "test-infobae-b5ab8",
  storageBucket: "test-infobae-b5ab8.appspot.com",
  messagingSenderId: "969994071494",
  appId: "1:969994071494:web:df4b7b300e5c118f0296c7",
  measurementId: "G-N0HRC9TJTC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

export { auth, firestore, signInWithGoogle, GoogleAuthProvider, signInWithRedirect, signOut, app as default };