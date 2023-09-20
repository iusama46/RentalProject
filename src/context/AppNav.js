import { useContext } from "react";
import AuthContext from "./AuthContext";
import { NavigationContainer } from '@react-navigation/native';
import AppStack from "../navigation/AppStack";
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, } from 'react-native';
import AuthStack from "../navigation/AuthStack";

export function AppNav() {
    const { isLoading, userToken } = useContext(AuthContext);

    if (isLoading) {
        return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading</Text>
        </View>);
    }


    return (
        <NavigationContainer>
            {userToken !== null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
}