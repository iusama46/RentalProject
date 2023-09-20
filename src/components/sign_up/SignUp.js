import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FONT_BOLD, FONT_REGULAR } from '../../constants'
import AppColors from '../../contsants/AppColors'
import Images from '../../contsants/images'
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Helper from './Helper'



var primaryColor = AppColors.primaryColor;
var fontBold = FONT_BOLD;
var regularFont = FONT_REGULAR;
var textInputBackgroundColor = AppColors.textInputBackgroundColor;

export default function SignUp() {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);
    const [isError, setIsError] = useState(false);
    const [errorTxt, setErrorTxt] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    return (
        <ScrollView style={{ backgroundColor: '#ffff', flex: 1 }}>


            <View style={{ alignItems: 'center', marginTop: '30%', marginHorizontal: 24 }}>

                <Text style={styles.loginTxt}>Create Account</Text>
                <Text style={styles.smallTxt}>
                    Create an account so you can explore all the existing jobs
                </Text>

                <Text style={styles.smallTxt1}>
                    been missed!
                </Text>




                <View style={{ marginTop: 40 }}></View>
                <TextInput
                    selectionColor={primaryColor}
                    placeholder='Name'
                    style={styles.input}
                    onChangeText={txt => setName(txt)}>

                </TextInput>


                <View style={{ marginTop: 20 }}></View>
                <TextInput
                    selectionColor={primaryColor}
                    placeholder='Email'
                    style={styles.input}
                    onChangeText={txt => setEmail(txt)}>

                </TextInput>

                <View style={{ marginTop: 20 }}></View>
                <View style={styles.inputContainer}>
                    <TextInput
                        selectionColor={primaryColor}
                        placeholder='Password'
                        style={{ width: '90%' }}
                        secureTextEntry={showPassword}
                        onChangeText={txt => setPassword(txt)}>


                    </TextInput>
                    <Pressable
                        onPress={() => {
                            setShowPassword(!showPassword);
                        }}
                    >
                        <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} style={{}} ></Ionicons>
                    </Pressable>

                </View>


                <View style={{ marginTop: 20 }}></View>

                <View style={styles.inputContainer}>
                    <TextInput
                        selectionColor={primaryColor}
                        placeholder=' Confrim Password'

                        secureTextEntry={showConfirmPassword}
                        style={{ width: '90%' }}
                        onChangeText={txt => setConfirmPassword(txt)}>

                    </TextInput>
                    <Pressable
                        onPress={() => {
                            setShowConfirmPassword(!showConfirmPassword);
                        }}
                    >
                        <Ionicons name={showConfirmPassword ? 'eye' : 'eye-off'} size={24} style={{}} ></Ionicons>
                    </Pressable>

                </View>

                {
                    isError ? <Text style={styles.errorTxt}>{errorTxt}</Text>
                        : <View />
                }

                <Pressable style={{ width: '90%', marginTop: 18 }}
                    onPress={() => {

                        setIsError(false);
                        console.log('sign in');

                        if (!isLoading) {

                            if (Helper.isFieldEmpty(name)) {
                                showError('Name is Required')
                            } else {
                                if (Helper.isFieldEmpty(email)) {
                                    showError('Email is Required')

                                } else {
                                    if (Helper.isEmailValid(email)) {

                                        if (Helper.isFieldEmpty(password)) {
                                            showError('Password is required')
                                        } else {
                                            if (password.length >= 8) {
                                                if (Helper.isFieldEmpty(confirmPassword)) {

                                                    showError('Confrim Password is required')
                                                } else {
                                                    if (confirmPassword !== password) {

                                                        showError('Password does not match with confirm password')
                                                    } else {
                                                        ///Post data
                                                        navigation.replace('Home');
                                                    }
                                                }
                                            } else {
                                                showError('Password is greater than or equal to 8 characters.')
                                            }

                                        }
                                    } else {
                                        showError('Enter a valid email addess')
                                    }
                                }
                            }

                        }
                        //navigation.navigate('Home')
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
                    // navigation.('SignIn')
                    navigation.goBack();
                }}>
                    <Text style={styles.createTxt}>
                        Already have an account?
                    </Text>
                </Pressable>


                <Text style={styles.continueTxt}>
                    Or continue with
                </Text>

                <View style={{ flexDirection: 'row', margin: 12 }}>
                    <View style={styles.appleIcon}>
                        <Image source={Images.google} style={styles.icon}></Image>
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
        fontSize: 12,
        marginTop: 20,

        fontWeight: '600'
    },
    smallTxt1: {
        fontFamily: regularFont,
        fontSize: 12,
        bottom: 4,
        fontWeight: '600'
    },
    input: {
        fontFamily: regularFont,
        fontSize: 14,
        bottom: 10,
        fontWeight: '600',
        backgroundColor: textInputBackgroundColor,
        height: 46,
        padding: 10,
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
        padding: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
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

    continueTxt: {
        marginTop: '20%',

        fontFamily: regularFont,
        fontSize: 13,

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
        backgroundColor: textInputBackgroundColor,
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