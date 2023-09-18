import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList, Pressable, } from 'react-native';

import Images from '../../contsants/images';

import { Component, useState } from 'react';
import AppColors from '../../contsants/AppColors';

var selectedIndex=0;
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


export default function SliderView() {
    const [selectedImage, setSelectedImage] = useState(Images.posterImg);
    const Item = ({ image }) => (

        <Pressable onPress={() => {
            setSelectedImage(image);
        }}>
            <Image source={image} style={styles.itemImage}></Image>
        </Pressable>

    )


    return (
        <View style={{ flexDirection: 'column', marginHorizontal: 24 }}>
            <View style={{ alignItems: 'center' }}>
                <Image source={selectedImage} style={styles.posterImage}></Image>
            </View>

            {/* FlatList */}


            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 18, marginBottom: 24 }}
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
        flex: 1,
        backgroundColor: '#F6F7F9',
    },

    posterImage: {
        height: 200.0, width: '100%',
        borderRadius: 10,

        overflow: "hidden",
        resizeMode: 'stretch',
    },

    itemImage: {
        height: 64, width: 96,
        borderRadius: 8,
        overflow: "hidden",
        resizeMode: 'stretch',
        marginEnd: 12.0, 
        borderColor:AppColors.primaryColor,
       
    },



});


