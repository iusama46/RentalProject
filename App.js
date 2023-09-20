
import { useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as React from 'react';
import ConfirmationView from './src/components/booking_info/BillingStepInfoFour';

import { PaperProvider } from 'react-native-paper';
import BillingScreen from './src/screens/BillingScreen';
import Home from './src/screens/home';
import SignIn from './src/components/sign_in/SignIn';
import SignUp from './src/components/sign_up/SignUp';
import UserProfileEdit from './src/components/usrer_profile/UserProfileEdit';
import AppColors from './src/contsants/AppColors';
import { FONT_REGULAR } from './src/constants';
import AuthStack from './src/navigation/AuthStack';
import { AuthProvider } from './src/context/AuthContext';
import { AppNav } from './src/context/AppNav';



const Stack = createNativeStackNavigator();
export default function App() {


  const [fontsLoaded, fontError] = useFonts({
    'PlusJakartaSans-Regular': require('./assets/fonts/PlusJakartaSans-Regular.ttf'),
    'PlusJakartaSans-Regular-Bold': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <PaperProvider>

      <AuthProvider>
    

          <AppNav />
      
      </AuthProvider>


    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'ffff',

  },



  headingOne: {
    fontSize: 16.0,
    fontWeight: '700'
  },

  headingTwo: {
    fontSize: 12.0,
    fontWeight: '500',
    color: '#90A3BF'
  },

  headingSmall: {
    marginTop: 12,
    fontSize: 14.0,
    fontWeight: '600'
  },


  input: {
    width: '98%',
    height: 56.0,
    padding: 10,
    backgroundColor: '#F6F7F9',
    borderRadius: 10,
    marginBottom: 10,

  }

});


// rnfs. rnc