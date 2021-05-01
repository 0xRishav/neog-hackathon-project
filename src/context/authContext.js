import { createContext, useState, useContext, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { signInWithGoogle } from '../services/auth';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
	const [user, setUser] = useState(null);
	const [userLocal, setUserLocal] = useLocalStorage("currentUser", false);

	useEffect(() => {
			if(userLocal){
				setUser(userLocal);
			}
	}, [])
	
	const signInClickHandler = async () => {
		const signedInUser = await signInWithGoogle();
			if (signedInUser) {
				setUser(signedInUser)
				setUserLocal(signedInUser);
			}
	  }

	return (
		<AuthContext.Provider value={{ user, setUser, userLocal, setUserLocal, signInClickHandler }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
  