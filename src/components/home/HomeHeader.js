import React, { Component } from 'react'
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, Modal, } from 'react-native';
import Images from '../../contsants/images';
import { APP_NAME, } from '../../constants';
import FilterSearchView from '../filter_search/FilterSearchView';

export default class HomeHeader extends Component {
    render() {
        return (
            <View style={styles.topBar1}>
                <View style={styles.topBar}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>


                            <Image source={Images.MenuIcon} style={{ height: 24, width: 24 }}></Image>
                            <Text style={styles.rentalText}>{APP_NAME}</Text>
                        </View>

                        <Image source={Images.ProfileIcon} style={{ height: 28, width: 28 }}></Image>

                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 24 }}>
                        <View style={styles.searchView}>
                            <Image source={Images.searchIcon} style={{ height: 22, width: 22, marginStart: 12 }}></Image>
                            <TextInput
                                style={styles.input}
                                placeholder="Search something here"

                                placeholderTextColor='#90A3BF' >
                            </TextInput>
                        </View>

                        <View style={styles.filterView}>
                            <Image source={Images.filterIcon} style={{ height: 20, width: 20, margin: 10 }}></Image>

                        </View>

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={false}
                            onRequestClose={() => {

                            }}>
                            <View>
                                <FilterSearchView></FilterSearchView>
                            </View>
                        </Modal>
                    </View>


                    {/* <View style={styles.searchView}>

               
            </View> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F7F9',
    },

    topBar1: {
        bottom: 24,
        marginTop: 20,
        height: '8%',
        width: '100%',
        backgroundColor: '#ffff',

    },

    topBar: {
        marginTop: 64,
        bottom: 24,
        marginHorizontal: 24,
    },

    searchView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 46.0,
        borderRadius: 10,
        borderColor: '#C3D4E966',
        borderWidth: 2,


    },

    filterView: {
        alignItems: 'center',
        height: 46.0,
        borderRadius: 10,
        borderColor: '#C3D4E966',
        borderWidth: 2,


    },

    toolbar: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    rentalText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3563E9',
        marginStart: 20,
        fontFamily: 'PlusJakartaSans-Regular'
    },
    input: {
        height: 40,
        margin: 0,

        padding: 6,
        width: '70%'
    },

    filterBtn: {
        height: 50,
        width: 50,
    },




});