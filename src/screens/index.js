import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, } from 'react-native';

export const Home = () => {

  ///DELETE LATER

  const [defaultRating, setDefaultRating] = useState(2);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  // Filled Star. You can also give the path from local
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';


  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImageFilled }
                    : { uri: starImageCorner }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (

    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'column', marginHorizontal: 1 }}>
        


        <View style={styles.detailsView}>

          <Text style={styles.titleTxt}>
            Nissan GT - R
          </Text>

          <View style={{ flexDirection: 'row' }}>

            <CustomRatingBar />
            <Text style={styles.ratingTextStyle}>
              {/*To show the rating selected*/}
              {defaultRating} / {Math.max.apply(null, maxRating)} + Reviewers
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.buttonStyle}>
              {/* onPress={() => alert(defaultRating)}*/}
              {/*Clicking on button will show the rating as an alert*/}
              {/* <Text style={styles.buttonTextStyle}>Get Selected Value</Text> */}
            </TouchableOpacity>
          </View>

          <Text style={styles.detailDescriptionTxt}>

            NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
          </Text>


          <View style={{ flexDirection: 'row', flex: 1, marginTop: 8, marginHorizontal: 4, }}>

            <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 12, fontWeight: '500', color: '#90A3BF' }}>Car Type</Text>
              <Text style={{ fontSize: 12, fontWeight: '600', color: '#1A202C' }}>Sports Car</Text>
            </View>


            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            </View>
            <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', }}>
              <Text style={{ fontSize: 12, fontWeight: '500', color: '#90A3BF' }}>Capicty</Text>
              <Text style={{ fontSize: 12, fontWeight: '600', color: '#1A202C' }}>Sports Car</Text>
            </View>
          </View>



          <View style={{ flexDirection: 'row', flex: 1, marginTop: 4, marginHorizontal: 4, }}>

            <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 12, fontWeight: '500', color: '#90A3BF' }}>Streering</Text>
              <Text style={{ fontSize: 12, fontWeight: '600', color: '#1A202C' }}>Gasoline</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            </View>
            <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', }}>
              <Text style={{ fontSize: 12, fontWeight: '500', color: '#90A3BF' }}>Capicty</Text>
              <Text style={{ fontSize: 12, fontWeight: '600', color: '#1A202C' }}>Sports Car</Text>
            </View>
          </View>



          <View style={{ flexDirection: 'row', flex: 1, marginTop: 0, marginHorizontal: 4, }}>

            <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>

              <View style={{ flexDirection: "column" }}>

                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontWeight: '700', fontSize: 20 }}> 80.00$/</Text>
                  <Text style={{ fontWeight: '700', fontSize: 12, color: '#90A3BF', marginTop: 2 }}> days</Text>
                </View>
                <Text style={{
                  fontWeight: '700', fontSize: 12, color: '#90A3BF', marginTop: 0, textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                }}> 100.00$</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            </View>
            <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#3563E9', alignItems: 'center', borderRadius: 8 }}>
              <Text style={{ fontSize: 16, fontWeight: '700', color: 'white' }}>Rent Now</Text>
            </View>
          </View>


        </View>


      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F6F7F9',

  },

  topBar1: {

    marginTop: 60,
    bottom: 24,

    height: '35%',
    width: '100%',
    backgroundColor: '#ffff',

  },

  searchView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topBar: {

    marginTop: 50,
    bottom: 24,
    marginHorizontal: 24,



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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%'
  },

  filterBtn: {
    height: 50,
    width: 50,
  },

  detailsView: {
    backgroundColor: '#ffff',
    marginHorizontal: 24,
    height: '40%',
    borderRadius: 20,
    flexDirection: 'column'
  },
  titleTxt: {
    fontWeight: '700',
    fontSize: 20,
    letterSpacing: 0.7,
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
    color: '#90A3BF'
  },
  detailDescriptionTxt: {
    fontSize: 12,
    fontWeight: '400',
    color: '#90A3BF'
  }
});


