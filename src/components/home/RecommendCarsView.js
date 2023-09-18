import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONT_REGULAR, FONT_BOLD } from '../../constants';

import AppColors from '../../contsants/AppColors';
import Images from '../../contsants/images';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        image: Images.sampleCar,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        image: Images.sampleCar,
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        image: Images.sampleCar,
    },
    {
        id: '58694a0f-3da1-471f-bd96-245571e29d72',
        image: Images.sampleCar,
    },
];

const Item = ({ image }) => (
    <View style={styles.carItem}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.itemTitle}>Nissan GT</Text>
            <Image source={Images.heart} style={{ height: 24, width: 24 }}></Image>
        </View>
        <Text style={styles.itemCatTxt}>Sport</Text>
        <Image source={Images.sampleCar} style={{ alignSelf: 'center', marginVertical: 24 }}></Image>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={Images.gasStation} style={styles.itemSubCatimage}></Image>
                <Text style={styles.itemSubCatTxt}>90L</Text>

            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={Images.carType} style={styles.itemSubCatimage}></Image>
                <Text style={styles.itemSubCatTxt}>Auto</Text>

            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={Images.profile} style={styles.itemSubCatimage}></Image>
                <Text style={styles.itemSubCatTxt}>6 People</Text>
            </View>

        </View>

        <View style={{ flexDirection: 'row', marginTop: 18.0 }}>

            <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>



                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontWeight: '700', fontSize: 14, fontFamily: FONT_REGULAR }}> 80.00$/</Text>
                    <Text style={{ fontWeight: '700', fontSize: 12, color: '#90A3BF', marginTop: 2, fontFamily: FONT_REGULAR, alignSelf: 'center' }}> days</Text>
                </View>


            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
            </View>
            <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#3563E9', alignItems: 'center', borderRadius: 4, padding: 8 }}>
                <Text style={{ fontSize: 12, fontWeight: '700', color: 'white', fontFamily: FONT_BOLD, letterSpacing: -0.24 }}>Rental Now</Text>
            </View>
        </View>
    </View>
);



export default function RecommendCarsView() {
    return (
        <View style={styles.container}>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.recentText}>Recomendation Car</Text>
                <Text style={styles.viewAllText}>View All</Text>
            </View>




            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 18, marginBottom: 20 }}
                horizontal
                data={DATA}
                renderItem={({ item }) => <Item image={item.image} />}
                keyExtractor={item => item.id}
            />

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 24,
        
        bottom: 0,
    },
    recentText: {
        fontSize: 14,
        letterSpacing: -0.28,
        fontWeight: '600',
        fontFamily: FONT_REGULAR,
        color: AppColors.secondaryTextColor
    },

    viewAllText: {
        fontFamily: FONT_REGULAR,
        fontSize: 12,
        letterSpacing: -0.24,
        fontFamily: FONT_REGULAR,
        fontWeight: '600',
        color: AppColors.primaryTextColor,
    },

    carItem: {
        padding: 12.0,
        backgroundColor: '#ffff',
        height: 240,
        width: 220,
        marginEnd: 12,
        borderRadius: 12
    },
    itemTitle: {
        fontSize: 16,
        fontFamily: FONT_REGULAR,
        fontWeight: '700',
        letterSpacing: 0.32
    },
    itemCatTxt: {
        marginTop: -2,
        color: AppColors.secondaryTextColor,
        fontFamily: FONT_REGULAR,
        letterSpacing: -0.24,
        fontSize: 12
    },
    itemSubCatTxt: {
        marginTop: -2,
        color: AppColors.secondaryTextColor,
        fontFamily: FONT_REGULAR,
        letterSpacing: -0.24,
        fontSize: 12
    },
    itemSubCatimage: {
        height: 14,
        width: 14,
        marginEnd: 2.0
    }

});