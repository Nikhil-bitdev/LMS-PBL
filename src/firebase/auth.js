import { 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { auth, googleProvider } from './config';

// Whitelist of allowed email addresses
const ALLOWED_EMAILS = [
  'nik224134@gmail.com',
  'rawatpalak140@gmail.com',
  'chauhan.paritosh01@gmail.com',
  'fatiharao333@gmail.com'
];

// Check if email is in whitelist
export const isEmailAllowed = (email) => {
  return ALLOWED_EMAILS.includes(email);
};

// Sign in with Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Check if email is allowed
    if (!isEmailAllowed(user.email)) {
      // Sign out immediately if not allowed
      await signOut(auth);
      throw new Error('Access denied. Your email is not authorized.');
    }
    
    return user;
  } catch (error) {
    throw error;
  }
};

// Sign out
export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// Listen to auth state changes
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    if (user && !isEmailAllowed(user.email)) {
      // If user is signed in but not allowed, sign them out
      signOut(auth);
      callback(null);
    } else {
      callback(user);
    }
  });
};
