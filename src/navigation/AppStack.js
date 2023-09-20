import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../components/sign_in/SignIn';

import Home from '../screens/home';
import BillingScreen from '../screens/BillingScreen';
import UserProfileEdit from '../components/usrer_profile/UserProfileEdit';
import AppColors from '../contsants/AppColors';
import { FONT_REGULAR } from '../constants';


const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="BillingScreen" component={BillingScreen} />


      <Stack.Screen name="UserProfileEdit" component={UserProfileEdit}
        options={{
          title: 'Edit Profile',
          headerStyle: {
            backgroundColor: AppColors.primaryColor,
          },
          headerShadowVisible: false,
          headerTintColor: AppColors.textInputBackgroundColor,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: FONT_REGULAR,
            fontWeight: '600',
            fontSize: 18,

          },
        }} />
    </Stack.Navigator>
  );
};

export default AppStack