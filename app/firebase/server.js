// var admin = require('firebase-admin');
import {Firestore, getFirestore} from 'firebase-admin/firestore';
import {getApps, initializeApp} from 'firebase-admin/app';
import admin, {ServiceAccount} from 'firebase-admin';
import {Auth, getAuth} from 'firebase-admin/auth';

const serviceAccount = {
	type: 'service_account',
	project_id: 'doula-ce10e',
	private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
	private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
	client_email: process.env.FIREBASE_CLIENT_EMAIL,
	client_id: process.env.FIREBASE_CLIENT_ID,
	auth_uri: 'https://accounts.google.com/o/oauth2/auth',
	token_uri: 'https://oauth2.googleapis.com/token',
	auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
	client_x509_cert_url:
		'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40doula-ce10e.iam.gserviceaccount.com',
	universe_domain: 'googleapis.com',
};

let firestore;
const currentApps = getApps();

if (!currentApps.length) {
	const app = initializeApp({
        credential: admin.credential.cert(serviceAccount),
        //delete if not needed
        databaseURL: 'https://doula-ce10e-default-rtdb.firebaseio.com',
		storageBucket: 'doula-ce10e.appspot.com',
	});
	firestore = getFirestore(app);
} else {
	const app = currentApps[0];
	firestore = getFirestore(app);
}

export {firestore};
