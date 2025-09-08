import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAWVSU-CvJ6zpZVCVyETm_z5mUQFpMxDI",
  authDomain: "lms-project-f5413.firebaseapp.com",
  projectId: "lms-project-f5413",
  storageBucket: "lms-project-f5413.firebasestorage.app",
  messagingSenderId: "450357101143",
  appId: "1:450357101143:web:fa842ce83579f0f48e5912",
  measurementId: "G-127ZELXYHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

export default app;
