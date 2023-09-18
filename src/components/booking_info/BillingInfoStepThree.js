
import { useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, } from 'react-native';
import { RadioButton } from 'react-native-paper';


import React from 'react'
import { FONT_REGULAR } from '../../constants';
import AppColors from '../../contsants/AppColors';
import Images from '../../contsants/images';

export default function BillingInfoStepThree() {
    const [billingMethod, setBillingMethod] = useState('Credit Card');
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.headingOne}>Payment Method</Text>
                <Text style={styles.headingTwo}>Step 3 of 4</Text>
            </View>

            <Text style={styles.headingTwo}>Please enter your payment method</Text>




            <View style={styles.creditCard}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row', bottom: 10, end: 10 }}>
                        <RadioButton
                            value="Credit Card"
                            color={AppColors.primaryColor}
                            onPress={() => setBillingMethod('Credit Card')}
                            status={billingMethod === 'Credit Card' ? 'checked' : 'unchecked'}
                        />

                        <Text style={styles.radioBtnTxt}>Credit Card</Text>
                    </View>


                    <View style={{ flexDirection: 'row' }}>
                        <Image source={Images.visaCard} style={{ height: 18, width: 32, resizeMode: 'stretch' }}></Image>
                        <View style={{ width: 10 }}></View>
                        <Image source={Images.masterCard} style={{ height: 18, width: 32, resizeMode: 'stretch' }}></Image>
                    </View>

                </View>



                <Text style={styles.headingSmall}>Card Number</Text>
                <TextInput style={styles.input} placeholder='Card Number' />

                <Text style={styles.headingSmall}>Card Holder</Text>
                <TextInput style={styles.input} placeholder='Card Holder' />

                <Text style={styles.headingSmall}>Expiration Date</Text>
                <TextInput style={styles.input} placeholder='DD/MM YY' />

                <Text style={styles.headingSmall}>CVC</Text>
                <TextInput style={styles.input} placeholder='CVC' />

            </View>


            <View style={styles.paypalCard}>
                <View style={{ flexDirection: 'row', bottom: 2, end: 10 }}>
                    <RadioButton
                        value="PayPal"
                        color={AppColors.primaryColor}
                        status={billingMethod === 'PayPal' ? 'checked' : 'unchecked'}
                        onPress={() => setBillingMethod('PayPal')}
                    />

                    <Text style={styles.radioBtnTxt}>PayPal</Text>
                </View>

                <Image source={Images.paypal} style={{ height: 20, width: 85, resizeMode: 'stretch' }}></Image>
            </View>

            <View style={styles.paypalCard}>
                <View style={{ flexDirection: 'row', bottom: 2, end: 10 }}>
                    <RadioButton
                        value="Pay Later"
                        color={AppColors.primaryColor}
                        status={billingMethod === 'Pay Later' ? 'checked' : 'unchecked'}
                        onPress={() => setBillingMethod('Pay Later')}
                    />

                    <Text style={styles.radioBtnTxt}>Pay Later</Text>
                </View>


            </View>

        </View>
    )
}



const styles = StyleSheet.create({

    container: {
        padding: 16.0,
        marginTop: 60,
        marginHorizontal: 24,
        backgroundColor: '#ffff',
        borderRadius: 12,
        height: 'auto',
        width: 'auto',

    },
    radioBtn: {
        color: AppColors
    },

    creditCard: {
        padding: 16.0,
        marginTop: 30,

        backgroundColor: AppColors.textInputBackgroundColor,
        borderRadius: 6,
        height: 'auto',
        width: 'auto',
    },


    paypalCard: {
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: AppColors.textInputBackgroundColor,
        borderRadius: 6,
        height: 'auto',
        width: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headingOne: {
        fontSize: 16.0,
        fontWeight: '700',
        letterSpacing: -0.32,
        fontFamily: FONT_REGULAR
    },

    radioBtnTxt: {
        fontSize: 15.0,
        fontWeight: '700',
        letterSpacing: -0.32,
        fontFamily: FONT_REGULAR,
        alignSelf: 'center'
    },

    headingTwo: {
        fontSize: 12.0,
        fontWeight: '500',
        color: AppColors.secondaryTextColor,
        letterSpacing: -0.24,
        fontFamily: FONT_REGULAR

    },

    headingSmall: {
        marginTop: 12,
        fontSize: 14.0,
        fontWeight: '600',
        letterSpacing: -0.28,
        fontFamily: FONT_REGULAR,
    },


    input: {
        width: '98%',
        height: 48.0,
        marginTop: 10.0,
        padding: 10,
        backgroundColor: '#ffff',
        borderRadius: 6,
        marginBottom: 10,
    }

});


