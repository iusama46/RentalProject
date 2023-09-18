import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FONT_BOLD, FONT_REGULAR } from '../../constants'
import AppColors from '../../contsants/AppColors'
import Images from '../../contsants/images'

export default function RentalSummary() {
    return (
        <View style={styles.container}>
            <Text style={styles.rentalTxt}>Rental Summary</Text>

            <Text style={styles.summaryTxt}>
                Prices may change depending on the length of the rental and the price of your rental car.
            </Text>

            <View style={{ flexDirection: 'row', marginTop: 20, }}>
                <Image source={Images.posterImg} style={styles.posterImage}></Image>

                <View style={{ marginStart: 12, justifyContent: 'space-around' }}>
                    <Text style={styles.carTitleTxt}>Nissan GT-R</Text>
                    <Text >Nissan GT-R</Text>
                    <Text style={styles.carRatingsTxt}>Nissan GT-R</Text>
                </View>
            </View>

            <View
                style={{
                    marginVertical: 16.0,
                    borderBottomColor: AppColors.secondaryTextColor,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.subTotalTxt}>Subtotal</Text>
                <Text style={styles.subTotalValueTxt}>$80.0</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.subTotalTxt}>Tax</Text>
                <Text style={styles.subTotalValueTxt}>$0</Text>
            </View>

            <View style={styles.promoContainer}>

                <TextInput
                    placeholder="Apply promo code"
                    placeholderTextColor={AppColors.secondaryTextColor}
                    keyboardType="numeric"
                    style={{ fontSize: 12, fontFamily: FONT_REGULAR, letterSpacing: -0.24, width: '50%' }}
                />
                <Text style={{ alignSelf: 'center', fontSize: 12, fontWeight: 600, letterSpacing: -0.24, fontFamily: FONT_REGULAR, }}>
                    Apply now
                </Text>
            </View>


            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:16}}>
                <View>
                    <Text style={styles.rentalTxt}>Total Rental Price</Text>
                    <Text style={styles.summaryTxt}>Overall price rental</Text>
                </View>

                <Text style={styles.totalValueText}>$80.00</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 16.0,
        marginTop: 40,
        marginHorizontal: 24,
        backgroundColor: '#ffff',
        borderRadius: 12,
        height: 'auto',
        width: 'auto',

    },
    rentalTxt: {
        fontFamily: FONT_BOLD,
        fontSize: 16.0,
        letterSpacing: -0.32,
        fontWeight: '500',
    },
    summaryTxt: {
        fontSize: 12,
        fontFamily: FONT_REGULAR,
        fontWeight: '500',
        color: AppColors.secondaryTextColor
    },
    posterImage: {
        height: 72.0,
        width: 120.0,
        borderRadius: 6,
        overflow: "hidden",
        resizeMode: 'stretch',
    },
    carTitleTxt: {
        fontFamily: FONT_BOLD,
        fontSize: 20,
        fontWeight: '700'
    },
    carRatingsTxt: {
        fontFamily: FONT_REGULAR,
        color: AppColors.secondaryTextColor,
        fontWeight: '500',
        letterSpacing: -0.24,
        fontSize: 12.0
    },
    subTotalTxt: {
        fontFamily: FONT_REGULAR,
        fontSize: 12.0,
        fontWeight: '600',
        letterSpacing: -0.24,
        color: AppColors.secondaryTextColor
    },
    subTotalValueTxt: {
        fontFamily: FONT_REGULAR,
        fontSize: 16.0,
        fontWeight: '600',
        letterSpacing: -0.32,
    },
    promoContainer: {
        height: 42.0,
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 16,
        backgroundColor: AppColors.textInputBackgroundColor,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: 'space-between'

    },
    totalValueText: {
        fontFamily: FONT_BOLD,
        fontSize: 16.0,
        letterSpacing: -0.32,
        fontWeight: '500',
        alignSelf:'center'
    },
    
})