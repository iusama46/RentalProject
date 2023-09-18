import { Component, useState } from "react";
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, } from 'react-native';
import { FONT_REGULAR } from "../../constants";
import Checkbox from 'expo-checkbox';
import AppColors from "../../contsants/AppColors";
import Images from "../../contsants/images";



export default function BillingStepInfoFour() {
  const [isChecked, setChecked] = useState(false);
  const [isChecked2, setChecked2] = useState(true);

  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.headingOne}>Confirmation</Text>
        <Text style={styles.headingTwo}>Step 4 of 4</Text>
      </View>

      <Text style={styles.headingTwo}>
        We are getting to the end. Just few
        clicks and your rental is ready!
      </Text>


      <View style={styles.checkBoxView}>


        <Checkbox
          style={{ alignSelf: 'center', marginEnd: 10 }}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? AppColors.primaryColor : undefined}
        />
        <Text style={styles.checkBoxText}>
          I agree with sending an Marketing and newsletter emails. No spam, promissed!
        </Text>

      </View>

      <View style={styles.checkBoxView}>


        <Checkbox
          style={{ alignSelf: 'center', marginEnd: 10 }}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? AppColors.primaryColor : undefined}
        />
        <Text style={styles.checkBoxText}>
          I agree with our terms and conditions and privacy policy!
        </Text>
      </View>


      <View style={{
        height: 40, width: '40%', backgroundColor: AppColors.primaryColor, borderRadius: 4, justifyContent: 'center',
        alignItems: 'center', marginTop: 20
      }}>
        <Text style={{ color: '#ffff', fontFamily: FONT_REGULAR, fontSize: 13, fontWeight: '500' }}>Rental Now</Text>
      </View>


      <Image source={Images.security} style={{ height: 32, width: 32, marginTop:24,marginBottom:10 }}></Image>


      <View style={{marginTop:14}}>
      <Text style={styles.headingOne}>
      All your data are safe
      </Text>
      <View style={{height:8}}></View>
      <Text style={styles.headingTwo}>
      We are using the most advanced security to provide you the best experience ever.
      </Text>
      </View>
    </View>
  );
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

  checkBoxText: {
    fontFamily: FONT_REGULAR,
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: -0.24,

  },


  headingOne: {
    fontSize: 16.0,
    fontWeight: '700',
    letterSpacing: -0.32,
    fontFamily: FONT_REGULAR
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


  checkBoxView: {
    width: '100%',
    height: 60.0,
    marginTop: 12.0,
    padding: 10,
    backgroundColor: AppColors.textInputBackgroundColor,
    borderRadius: 6,
    marginBottom: 10,
    flexDirection: 'row',


  }


});




