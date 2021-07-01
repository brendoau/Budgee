import firebase from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBI8zixtP5hBSLUjWyKLPEoDfUjVOxeA0I",
    authDomain: "budgee-dev-aff3c.firebaseapp.com",
    projectId: "budgee-dev-aff3c",
    storageBucket: "budgee-dev-aff3c.appspot.com",
    messagingSenderId: "809199118529",
    appId: "1:809199118529:web:a770afedf6c67dd9c90c40"
};

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
    }
}

export default Firebase;
