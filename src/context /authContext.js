import { createContext, useState, useContext } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
	const [user, setUser] = useState(null);
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};
  