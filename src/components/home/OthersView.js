
import React from 'react'
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, } from 'react-native';
import { APP_NAME, FONT_BOLD, FONT_REGULAR } from '../../constants';
import AppColors from '../../contsants/AppColors';

export default function AboutView() {
    return (
        <View style={{ flexDirection: 'column', marginHorizontal: 24, top: 20, height: 900 }}>

            <Text style={styles.rentalText}>CarRental</Text>

            <Text style={{
                color: AppColors.secondaryTextColor,
                fontSize: 12, fontWeight: '500', marginTop: 8, letterSpacing: -0.12, fontFamily: FONT_REGULAR
            }}>
                Our vision is to provide convenience and help increase your sales business.
            </Text>


            <View style={{ flexDirection: 'row', marginTop: 36.0 }}>

                <View style={{ flex: 2, flexDirection: 'column' }}>
                    <Text style={styles.headingOne}>About</Text>

                    <Text style={styles.headingTwo}>How it works</Text>
                    <Text style={styles.headingTwo}>Featured</Text>
                    <Text style={styles.headingTwo}>Partnership</Text>
                    <Text style={styles.headingTwo}>Business Relation</Text>

                </View>

                <View style={{ flex: 2, flexDirection: 'column' , }}>
                    <Text style={styles.headingOne}>Socials</Text>
                    <Text style={styles.headingTwo}>Discord</Text>
                    <Text style={styles.headingTwo}>Instagram</Text>
                    <Text style={styles.headingTwo}>Twitter</Text>
                    <Text style={styles.headingTwo}>Facebook</Text>
                </View>
            </View>

            <View style={{  flexDirection: 'column' ,marginTop:20.0}}>
                    <Text style={styles.headingOne}>Community</Text>

                    <Text style={styles.headingTwo}>Events</Text>
                    <Text style={styles.headingTwo}>Blog</Text>
                    <Text style={styles.headingTwo}>Podcast</Text>
                    <Text style={styles.headingTwo}>Invite a Friend</Text>

                </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' , marginTop:20}}>

                <Text style={styles.smallHeading}>Privacy & Policy</Text>
                <Text style={styles.smallHeading}>Terms & Condition</Text>
            </View>
            
            <View style={{marginTop:16}}>
            <Text style={styles.smallHeading}>©2022 {APP_NAME}. All rights reserved</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    headingOne: {
        fontSize: 20.0,
        fontWeight: '600',
        fontFamily:FONT_REGULAR,
        letterSpacing:-0.4,
        marginBottom:14.0
    },

    headingTwo: {
        marginBottom:12,
        fontSize: 16.0,
        fontWeight: '500',
        color: AppColors.secondaryTextColor,
        fontFamily:FONT_REGULAR
    },

    smallHeading: {
        fontSize: 12.0,
        fontWeight: '600',
        letterSpacing:-0.24,
        fontFamily:FONT_REGULAR,
    },

    rentalText: {
        color: AppColors.primaryTextColor,
        fontSize: 24,
        fontWeight: '700',
        letterSpacing: -0.75,
        fontFamily: FONT_BOLD
    },


});