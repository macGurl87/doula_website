// 'use client';

// import {Auth} from 'firebase-admin/auth';
// import {createContext, useEffect, useState, useContext} from 'react';

// // Create React context for auth
// const AuthContext = createContext(null);

// export const AuthProvider = ({children}) => {
// 	const [currentUser, setCurrentUser] = useState(null);

// 	useEffect(() => {
// 		// Set up Firebase auth state listener here
// 		// Update currentUser state when auth state changes
// 		const unsubscribe = Auth.onAuthStateChanged((user) => {
// 			setCurrentUser(user || null);
// 		});
// 		//cleanup subscription on unmount
// 		return () => unsubscribe();
// 	}, []);

// 	return (
// 		<AuthContext.Provider
// 			value={{
// 				user: currentUser,
// 				// login: () => {},
// 				// logout: () => {},
// 				// register: () => {},
// 			}}
// 		>
// 			{children}
// 		</AuthContext.Provider>
// 	);
// };

// export const useAuth = () => React.useContext(AuthContext);

// //currently logged in user, log out function, login function, register function by using const auth = useAuth(); in any client component/ Then use auth.user, auth.login(), auth.logout(), auth.register()

// //centralizing everything auth related in one place
