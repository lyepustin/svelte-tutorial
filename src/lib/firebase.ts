import {
  PUBLIC_FIREBASE_API_KEY,
  PUBLIC_FIREBASE_AUTH_DOMAIN,
  PUBLIC_FIREBASE_PROJECT_ID,
  PUBLIC_FIREBASE_STORAGE_BUCKET,
  PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  PUBLIC_FIREBASE_APP_ID
} from '$env/static/public';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
 
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: PUBLIC_FIREBASE_API_KEY,
  authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: PUBLIC_FIREBASE_APP_ID
};
 
let firebaseApp;
const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
}

const firebaseAuth = getAuth(firebaseApp);
 
export { firebaseApp, firebaseAuth, GoogleProvider}