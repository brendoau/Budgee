// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from 'firebase/app';

// Add the Firebase products that you want to use
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBI8zixtP5hBSLUjWyKLPEoDfUjVOxeA0I",
    authDomain: "budgee-dev-aff3c.firebaseapp.com",
    projectId: "budgee-dev-aff3c",
    storageBucket: "budgee-dev-aff3c.appspot.com",
    messagingSenderId: "809199118529",
    appId: "1:809199118529:web:a770afedf6c67dd9c90c40"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(firebaseApp);

export { db, storage };
// export default firebase;
// export { db };