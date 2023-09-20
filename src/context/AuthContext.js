import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export default AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);

    const isLoggedIn = async () => {
        setIsLoading(true);

        try {
            var userData = await AsyncStorage.getItem('userData');
            userData = JSON.parse(userData)
            console.log(userData)

            setUserToken(userData);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setIsLoading(false);
            setUserToken(null);
        }
    }


    useEffect(() => {
        isLoggedIn();
    }, [])

    const logout = async () => {
        await AsyncStorage.removeItem('userData');
        setIsLoading(false);
        setUserToken(null);
    }

    const logIn = async (userData) => {
        const userDataJson = JSON.stringify(userData);
        await AsyncStorage.setItem('userData', userDataJson);
        setIsLoading(false);
        setUserToken(userDataJson);
    }

    return (<AuthContext.Provider value={{ isLoggedIn, logout, logIn, isLoading, userToken }}>
        {children}
    </AuthContext.Provider>
    );
}