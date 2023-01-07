// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDIBUF2cWvI9pc4kHjMmSRuyuO1Hck8KJ0',
  authDomain: 'contract-manager-c09a1.firebaseapp.com',
  projectId: 'contract-manager-c09a1',
  storageBucket: 'contract-manager-c09a1.appspot.com',
  messagingSenderId: '190898289765',
  appId: '1:190898289765:web:67cd8a20f9f4d44b4d1a8c',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
