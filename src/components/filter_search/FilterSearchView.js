import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { FONT_REGULAR } from '../../constants'
import { Checkbox } from 'react-native-paper';
import AppColors from '../../contsants/AppColors';
import Images from '../../contsants/images';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        image: Images.posterImg,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        image: Images.sampleImg,
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        image: Images.sampleImg,
    },
    {
        id: '58694a0f-3da1-471f-bd96-245571e29d72',
        image: Images.sampleImg,
    },
];


const DATA1 = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        image: Images.posterImg,
        checkBoxTxt:'2 Person'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        image: Images.sampleImg,
        checkBoxTxt:'4 Person'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        image: Images.sampleImg,
        checkBoxTxt:'6 Person'
    },
    {
        id: '58694a0f-3da1-471f-bd96-245571e29d72',
        image: Images.sampleImg,
        checkBoxTxt:'8 or More'
    },
];
const Item = ({ image }) => (
    <View style={{ flexDirection: 'row' }}>
        <Checkbox
            status={'checked'}
            color={AppColors.primaryColor} />
        <Text style={styles.checkBoxTxt}>
            Sport
        </Text>
        <Text style={styles.searchNumber}>
            (10)
        </Text>
    </View>
);


const CapacityItem = ({ txt}) => (
    <View style={{ flexDirection: 'row' }}>
        <Checkbox
            status={'checked'}
            color={AppColors.primaryColor} />
        <Text style={styles.checkBoxTxt}>
            {txt}
        </Text>
        <Text style={styles.searchNumber}>
            (10)
        </Text>
    </View>
);

export default function FilterSearchView() {
    return (
        <View style={styles.container}>
            <Text style={styles.typeTxt}>T Y P E</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 18, marginBottom: 24 }}

                data={DATA}
                renderItem={({ item }) => <Item image={item.id} />}
                keyExtractor={item => item.id}
            />
    
        <View>
        <Text style={styles.typeTxt}>Capacity</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 18, marginBottom: 24 }}

                data={DATA1}
                renderItem={({ item }) => <CapacityItem txt={item.checkBoxTxt} />}
                keyExtractor={item => item.id}
            />
        </View>

        <View>
        <Text style={styles.typeTxt}>Price</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 18, marginBottom: 24 }}

                data={DATA1}
                renderItem={({ item }) => <CapacityItem txt={item.checkBoxTxt} />}
                keyExtractor={item => item.id}
            />
        </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        backgroundColor: '#ffff',
        marginTop: 50
    },
    typeTxt: {
        fontFamily: FONT_REGULAR,
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: -0.24
    },
    checkBoxTxt: {
        fontFamily: FONT_REGULAR,
        fontSize: 15,
        fontWeight: '600',
        top: -2,
        letterSpacing: -0.24,
        letterSpacing: -0.4,
        alignSelf: 'center'
    },
    searchNumber: {
        fontFamily: FONT_REGULAR,
        fontSize: 15,
        fontWeight: '600',
        letterSpacing: -0.24,
        letterSpacing: -0.4,
        alignSelf: 'center',
        marginHorizontal: 6,
        top: -2,
        color: AppColors.secondaryTextColor

    }
})