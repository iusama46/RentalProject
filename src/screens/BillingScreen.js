import React, { Component } from 'react'

import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, } from 'react-native';


import BillingInfoStepThree from '../components/booking_info/BillingInfoStepThree';
import BillingInfoStepTwo from '../components/booking_info/BillingInfoStepTwo';
import BillingInfoStepOne from '../components/booking_info/BillingInfoStepOne';
import BillingStepInfoFour from '../components/booking_info/BillingStepInfoFour';
import OthersView from '../components/home/OthersView';
import RentalSummary from '../components/booking_info/RentalSummary';
import BillingHeader from '../components/booking_info/BillingHeader';





export default class BillingScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
              
                <BillingHeader></BillingHeader>
                <RentalSummary></RentalSummary>
                <BillingInfoStepOne></BillingInfoStepOne>
                <BillingInfoStepTwo></BillingInfoStepTwo>
                <BillingInfoStepThree></BillingInfoStepThree>
                <BillingStepInfoFour></BillingStepInfoFour>
                <OthersView></OthersView>
                </ScrollView>
               

            </SafeAreaView>
        

        )
    }
}