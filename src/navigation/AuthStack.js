import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../components/sign_in/SignIn';
import SignUp from '../components/sign_up/SignUp';
import AppColors from '../contsants/AppColors';
import { FONT_REGULAR } from '../constants';
import UserProfileEdit from '../components/usrer_profile/UserProfileEdit';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />

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

export default AuthStack;