import { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../firebase';
import useLocalStorage from '../hooks/useLocalStorage';
import { signInWithGoogle } from '../services/auth';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
	const [user, setUser] = useState(null);
	const [userLocal, setUserLocal] = useLocalStorage("currentUser", false);
	const [currentUser, setCurrentUser] = useState(null);
	const [pending, setPending] = useState(true);

	useEffect(() => {
			if(userLocal){
				setUser(userLocal);
			}
			auth.onAuthStateChanged(setCurrentUser);
			setPending(false);
	}, [])
	
	const signInClickHandler = async () => {
		const signedInUser = await signInWithGoogle();
			if (signedInUser) {
				setUser(signedInUser)
				setUserLocal(signedInUser);
			}
	  }

	return (
		<AuthContext.Provider value={{ user, setUser, userLocal, setUserLocal, signInClickHandler, currentUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
  