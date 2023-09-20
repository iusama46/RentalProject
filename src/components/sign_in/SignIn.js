import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View, Platform, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FONT_BOLD, FONT_REGULAR } from '../../constants'
import AppColors from '../../contsants/AppColors'
import Images from '../../contsants/images'
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Helper from '../sign_up/Helper';
import * as AuthSession from 'expo-auth-session';
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as WebBrowser from "expo-web-browser";
import { LoginManager, Profile } from "react-native-fbsdk-next";

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { ActivityIndicator } from 'react-native-paper'
import useFetch from './useFetch'

Helper.configureGoogle();

var primaryColor = AppColors.primaryColor;
var fontBold = FONT_BOLD;
var regularFont = FONT_REGULAR;
var textInputBackgroundColor = AppColors.textInputBackgroundColor;

export default function SignIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [isError, setIsError] = useState(false);
    const [errorTxt, setErrorTxt] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const {data} = useFetch()

    SignInFB = async () => {
        var isError = false;
        var isLoggedIn = false;
        var userData = ''
        LoginManager.logInWithPermissions(["public_profile"]).then(
            function (result) {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                    isLoggedIn = false;
                } else {
                    console.log(
                        "Login success with permissions: " +
                        result.grantedPermissions.toString()
                    );

                    const currentProfile = Profile.getCurrentProfile().then(
                        async function (currentProfile) {
                            if (currentProfile) {
                                console.log("The current logged user is: " +
                                    currentProfile.name
                                    + ". His profile id is: " +
                                    currentProfile.userID
                                );

                                //storeData(currentProfile);
                                try {
                                    const jsonValue = JSON.stringify(currentProfile);
                                    await AsyncStorage.setItem('userData', jsonValue);

                                    isLoggedIn = true;
                                    isError = false;
                                    userData = currentProfile;


                                } catch (e) {
                                    // saving error
                                    console.log(e);
                                    isError = true;
                                    isLoggedIn = false;
                                }



                            }
                            return { userData, isLoggedIn, isError };
                        }
                    );

                }
            },
            function (error) {
                console.log("Login fail with error: " + error);
            }


        );
        console.log('kkpp');

    }


    return (

        <ScrollView style={{ backgroundColor: '#ffff', flex: 1 }}>
            <View style={{ alignItems: 'center', marginTop: '30%', marginHorizontal: 24 }}>

                <Text style={styles.loginTxt}>Login here</Text>
                <Text style={styles.smallTxt}>
                    Welcome back you've
                </Text>

                <Text style={styles.smallTxt1}>
                    been missed!
                </Text>


                <View style={{ marginTop: 40 }}></View>
                <TextInput
                    placeholder='Email'
                    selectionColor={primaryColor}
                    style={styles.input}
                    onChangeText={txt => setEmail(txt)}
                >

                </TextInput>

                <View style={{ marginTop: 20 }}></View>

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={showPassword}
                        selectionColor={primaryColor}
                        style={{ width: '90%' }}
                        onChangeText={txt => setPassword(txt)}>

                    </TextInput>
                    <Pressable
                        onPress={async () => {
                            setShowPassword(!showPassword);
                            navigation.navigate('UserProfileEdit');
                        }}  >
                        <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} style={{}} ></Ionicons>
                    </Pressable>

                </View>

                {
                    isError ? <Text style={styles.errorTxt}>{errorTxt}</Text>
                        : <View />
                }

                <Text style={styles.forgotTxt}>
                    Forgot your password?
                </Text>
                <Pressable style={{ width: '90%' }}
                    onPress={async () => {
                        setIsError(false);
                        console.log('sign in');
                        console.log(data);
                        Helper.isLogin(email, password);
                        if (!isLoading) {
                            if (Helper.isFieldEmpty(email)) {
                                //Helper.showAlert('Email is Required')
                                showError('Email is Required');
                            } else {
                                if (Helper.isEmailValid(email)) {

                                    if (Helper.isFieldEmpty(password)) {

                                        showError('Password is Required');
                                    } else {
                                        ///Post data
                                        // navigation.replace('Home');
                                        //setIsLoading(true);
                                        setIsLoading(true);

                                        setTimeout(() => {
                                            var data = Helper.isLogin(email, password);
                                            console.log(data.authorizationToken);
                                            setIsLoading(false);
                                            navigation.replace('Home');
                                        }, 3000);

                                        console.log('result:')
                                    }
                                } else {
                                    showError('Enter a valid email addess');
                                }
                            }
                        }

                    }}>
                    <View style={{ height: 44, width: '100%', backgroundColor: primaryColor, borderRadius: 6, justifyContent: 'center' }}>
                        {
                            isLoading ? <ActivityIndicator color='#ffff' style={{ alignSelf: 'center' }}></ActivityIndicator> :
                                <Text style={{ fontFamily: FONT_BOLD, fontSize: 20, fontWeight: 600, color: '#ffff', alignSelf: 'center', bottom: 2 }}>
                                    Sign in
                                </Text>
                        }

                    </View>
                </Pressable>


                <Pressable onPress={() => {

                    navigation.navigate('SignUp');
                }}>
                    <Text style={styles.createTxt}>
                        Create new account
                    </Text>
                </Pressable>


                <Text style={styles.continueTxt}>
                    Or continue with
                </Text>

                <View style={{ flexDirection: 'row', margin: 12 }}>


                    <View style={styles.appleIcon}>
                        <Pressable onPress={() => {
                            console.log('google auth');
                            Helper.SignInGoogle();
                        }}>
                            <Image source={Images.google} style={styles.icon}></Image>
                        </Pressable>

                    </View>



                    <View style={styles.appleIcon}>
                        <Pressable onPress={async () => {
                            console.log('fb auth');
                            // Helper.SignInFacebook();
                            SignInFB();

                        }}>
                            <Image source={Images.facebook} style={styles.icon}></Image>
                        </Pressable>

                    </View>

                    {
                        Platform.OS === 'ios' ? <View style={styles.appleIcon}>
                            <Image source={Images.apple} style={styles.icon}></Image>
                        </View> : <View />
                    }

                </View>


            </View>
        </ScrollView>
    )



    function showError(errorMsg) {
        setErrorTxt(errorMsg);
        setIsError(true);
    }

    function hideError() {
        setIsError(false);
    }


}

const styles = StyleSheet.create({
    loginTxt: {
        fontFamily: regularFont,
        fontSize: 30,
        color: primaryColor,
        fontWeight: '700'
    },

    smallTxt: {
        fontFamily: regularFont,
        fontSize: 20,
        marginTop: 40,

        fontWeight: '600'
    },
    smallTxt1: {
        fontFamily: regularFont,
        fontSize: 20,
        bottom: 10,
        fontWeight: '600'
    },
    input: {
        fontFamily: regularFont,
        fontSize: 16,
        bottom: 10,
        fontWeight: '600',
        backgroundColor: textInputBackgroundColor,
        height: 46,
        padding: 10,
        width: '90%',
        borderRadius: 6
    },
    inputContainer: {
        fontFamily: regularFont,
        fontSize: 14,
        bottom: 10,
        fontWeight: '600',
        backgroundColor: textInputBackgroundColor,
        height: 46,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        borderRadius: 6
    },

    errorTxt: {
        fontFamily: regularFont,
        fontSize: 14,
        bottom: 0,
        fontWeight: '600',
        color: '#ff0000',
        marginHorizontal: 4,
        padding: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        borderRadius: 6
    },
    forgotTxt: {
        marginTop: 16,
        marginBottom: 20,
        fontFamily: regularFont,
        fontSize: 13,
        bottom: 10,
        fontWeight: '600',
        alignSelf: 'flex-end',
        marginEnd: 16,
        color: primaryColor
    },
    continueTxt: {
        marginTop: '30%',

        fontFamily: regularFont,
        fontSize: 13,
        bottom: 10,
        fontWeight: '600',

        marginEnd: 16,
        color: primaryColor
    },

    createTxt: {
        marginTop: 36,
        fontFamily: regularFont,
        fontSize: 13,
        bottom: 10,
        fontWeight: '600',

    },
    appleIcon: {
        height: 40,
        width: 40,
        alignItems: 'center',
        backgroundColor: AppColors.textInputBackgroundColor,
        borderRadius: 6,
        justifyContent: 'center',
        marginEnd: 10,
    },
    icon:
    {
        height: 28,
        width: 28,
    }

})