import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View, Platform } from 'react-native'
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

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '535196208474-f6vdgf0c9glhtgddl79p6fjujfleup1o.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px,
    androidClientId: '535196208474-klqpos8rjjq1bshc1ro72vs9cqprvrsi.apps.googleusercontent.com'
});


var primaryColor = AppColors.primaryColor;
var fontBold = FONT_BOLD;
var regularFont = FONT_REGULAR;
var textInputBackgroundColor = AppColors.textInputBackgroundColor;

export default function SignIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);







    return (
        <View style={{ backgroundColor: '#ffff', flex: 1 }}>


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
                        }}  >
                        <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} style={{}} ></Ionicons>
                    </Pressable>

                </View>


                <Text style={styles.forgotTxt}>
                    Forgot your password?
                </Text>
                <Pressable style={{ width: '90%' }}
                    onPress={() => {

                        if (Helper.isFieldEmpty(email)) {

                            Helper.showAlert('Email is Required')

                        } else {
                            if (Helper.isEmailValid(email)) {

                                if (Helper.isFieldEmpty(password)) {
                                    Helper.showAlert('Password is required')
                                } else {
                                    ///Post data
                                    navigation.replace('Home');
                                }
                            } else {
                                Helper.showAlert('Enter a valid email addess')
                            }
                        }

                    }}>
                    <View style={{ height: 44, width: '100%', backgroundColor: primaryColor, borderRadius: 6 }}>
                        <Text style={{ fontFamily: FONT_BOLD, fontSize: 20, fontWeight: 600, color: '#ffff', alignSelf: 'center', bottom: -4 }}>
                            Sign in
                        </Text>
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
                        <Image source={Images.facebook} style={styles.icon}></Image>
                    </View>

                    {
                        Platform.OS === 'ios' ? <View style={styles.appleIcon}>
                            <Image source={Images.apple} style={styles.icon}></Image>
                        </View> : <View />
                    }

                </View>

            </View>
        </View>
    )
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