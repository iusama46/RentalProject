
import React, { Component } from 'react'

import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, } from 'react-native';


import OthersView from '../components/home/OthersView';

import AdView from '../components/home/AdView';
import HomeHeader from '../components/home/HomeHeader';

import RecentCarsView from '../components/home/RecentCarsView';
import RecommendCarsView from '../components/home/RecommendCarsView';
import FilterSearchView from '../components/filter_search/FilterSearchView';
import SignIn from '../components/sign_in/SignIn';
import SliderView from '../components/home/SliderView';


export default function Home() {
    return (
        <SafeAreaView>
            <ScrollView  >
             <HomeHeader /> 
            
            <SliderView/>

            <AdView/> 
         
            <RecentCarsView/>
            <RecommendCarsView/>
          
            <OthersView/>   

           
          
            </ScrollView>
           

        </SafeAreaView>
    

    )
}



