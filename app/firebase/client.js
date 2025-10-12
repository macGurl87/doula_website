// Import the functions you need from the SDKs you need
import {initializeApp, getApps} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getStorage, FirebaseStorage} from 'firebase/storage';
// import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBQ4jbZ12HlgR-my1ZM5grkwAqVXVsWcmk',
	authDomain: 'doula-ce10e.firebaseapp.com',
	projectId: 'doula-ce10e',
	storageBucket: 'doula-ce10e.firebasestorage.app',
	messagingSenderId: '1001181278839',
	appId: '1:1001181278839:web:3fb58d3f1b6cef440b8c72',
};

const currentApps = getApps();

let auth;
let storage;
// let db;

if (!currentApps.length) {
	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	auth = getAuth(app);
	storage = getStorage(app);
	// db = getFirestore(app);
} else {
	// Use existing app
	const app = currentApps[0];
	auth = getAuth(app);
	storage = getStorage(app);
	// db = getFirestore(app);
}

export {auth, storage};
