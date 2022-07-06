import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyBDz-Rv8m6KSGpq2TW-_N65nW_SUSxVyR8',
    authDomain: 'netflix-42347.firebaseapp.com',
    databaseURL: 'https://netflix-42347-default-rtdb.firebaseio.com',
    projectId: 'netflix-42347',
    storageBucket: 'netflix-42347.appspot.com',
    messagingSenderId: '897727273813',
    appId: '1:897727273813:web:bdcb4f775d29c062d3addc',
    measurementId: 'G-93JH8GTPZY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app
