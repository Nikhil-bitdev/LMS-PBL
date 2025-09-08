# Firebase Setup Instructions

## 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name (e.g., "lms-auth")
4. Enable Google Analytics (optional)
5. Click "Create project"

## 2. Enable Authentication
1. In Firebase Console, go to "Authentication" > "Sign-in method"
2. Click "Google" provider
3. Toggle "Enable"
4. Add your project's support email
5. Click "Save"

## 3. Get Configuration
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Web" icon (</>) to add web app
4. Register app with nickname (e.g., "lms-web")
5. Copy the Firebase configuration object

## 4. Update Configuration
Replace the placeholder values in `src/firebase/config.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-actual-sender-id",
  appId: "your-actual-app-id"
};
```

## 5. Test the Setup
1. Run `npm run dev`
2. Go to `/login`
3. Click "Sign in with Google"
4. Use one of the authorized emails:
   - nik224134@gmail.com
   - rawatpalak140@gmail.com
   - chauhan.paritosh01@gmail.com
   - fatiharao333@gmail.com

## Security Features
- Only whitelisted emails can access the system
- Unauthorized users are immediately signed out
- All protected routes require authentication
- Email validation happens on both client and server side

## Troubleshooting
- Make sure Firebase project has Google Auth enabled
- Check that the configuration values are correct
- Verify the authorized email list in `src/firebase/auth.js`
