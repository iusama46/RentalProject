import React, { Component } from 'react'
import { useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, } from 'react-native';
import { FONT_BOLD, FONT_FAMILY, FONT_REGULAR } from '../../constants';

import { useNavigation } from '@react-navigation/native';

// Filled Star. You can also give the path from local
const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
// Empty Star. You can also give the path from local
const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';




export default function AdView() {

    const [title, setTitle] = useState('Nissan GT - R')
    const [detailDescription, setDetailDescription] = useState(' NISMO has become the embodiment of Nissan outstanding performance, inspired by the most unforgiving proving ground, the "race track".')

    const [carType, setCarType] = useState('Sports Car');
    const [capacity, setCapacity] = useState('2 Person');
    const [steering, setStreeing] = useState('Auto');
    const [gasoline, setGasoline] = useState('60L')
    const [actualPrice, setActualPrice] = useState('100.00$');
    const [discountPrice, setDiscountPrice] = useState('50.00$/')
    const navigation = useNavigation();
    return (
        <View style={styles.detailsView}>

            <Text style={styles.titleTxt}>
                {title}
            </Text>

            <View style={{ flexDirection: 'row' }}>

                {/* <CustomRatingBar /> */}
                <Text style={styles.ratingTextStyle}>
                    {/*To show the rating selected*/}
                    2 + Reviewers
                </Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.buttonStyle}>

                </TouchableOpacity>
            </View>

            <Text style={styles.detailDescriptionTxt}>

                {detailDescription}
            </Text>


            <View style={{ flexDirection: 'row', marginTop: 12, marginHorizontal: 2, }}>

                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.catHeading}>Car Type</Text>
                    <Text style={styles.catItemText}>{carType}</Text>
                </View>


                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                </View>
                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={styles.catHeading}>Capicty</Text>
                    <Text style={styles.catItemText}>{capacity}</Text>
                </View>
            </View>



            <View style={{ flexDirection: 'row', marginTop: 8, marginHorizontal: 4, marginBottom: 20 }}>

                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.catHeading}>Streering</Text>
                    <Text style={styles.catItemText}>{steering}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                </View>
                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={styles.catHeading}>Gasoline</Text>
                    <Text style={styles.catItemText}>{gasoline}</Text>
                </View>
            </View>



            <View style={{ flexDirection: 'row', marginHorizontal: 4, }}>

                <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>

                    <View style={{ flexDirection: "column" }}>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontWeight: '700', fontSize: 20, fontFamily: FONT_REGULAR }}>{discountPrice}</Text>
                            <Text style={{ fontWeight: '700', fontSize: 12, color: '#90A3BF', marginTop: 2, fontFamily: FONT_REGULAR, alignSelf: 'center' }}> days</Text>
                        </View>
                        <Text style={{
                            fontWeight: '700', fontSize: 12, color: '#90A3BF', marginTop: 0, textDecorationLine: 'line-through',
                            textDecorationStyle: 'solid', fontFamily: FONT_REGULAR
                        }}> {actualPrice}</Text>
                    </View>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                </View>


                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#3563E9', alignItems: 'center', borderRadius: 8 }}>
                    <TouchableOpacity style={{ alignItems: 'center', alignContent: 'center', }}
                        onPress={() => navigation.navigate('BillingScreen', {
                            title: title,

                        })}>
                        <Text style={{ fontSize: 16, fontWeight: '700', color: 'white', fontFamily: FONT_BOLD, letterSpacing: 0.32 }}>Rent Now</Text>
                    </TouchableOpacity>

                </View>


            </View>


        </View>
    )
}



const styles = StyleSheet.create({


    detailsView: {
        padding: 16,
        backgroundColor: '#ffff',
        marginHorizontal: 24,
        height: 'auto',
        borderRadius: 20,
        flexDirection: 'column'
    },
    titleTxt: {
        fontWeight: '700',
        fontSize: 20,
        letterSpacing: -0.7,
        fontFamily: FONT_BOLD
    },
    customRatingBarStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginEnd: 8
    },
    starImageStyle: {
        width: 12,
        height: 12,
        resizeMode: 'cover',
    },
    ratingTextStyle: {
        fontSize: 12,
        fontWeight: '500',
        color: '#90A3BF',
        letterSpacing: -0.24,
        fontFamily: FONT_REGULAR
    },
    detailDescriptionTxt: {
        fontSize: 12,
        fontWeight: '400',
        color: '#90A3BF',
        fontFamily: FONT_REGULAR,
        letterSpacing: -0.24,
    },
    catHeading: {
        fontSize: 12,
        fontWeight: '500',
        color: '#90A3BF',
        fontFamily: FONT_BOLD,
    },
    catItemText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#1A202C',
        fontFamily: FONT_REGULAR
    }
});


