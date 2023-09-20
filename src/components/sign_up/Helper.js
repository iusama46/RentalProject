import { Alert } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LoginManager, Profile } from "react-native-fbsdk-next";
import { useNavigation } from '@react-navigation/native';


export default class Helper {



  static androidClientId = "535196208474-klqpos8rjjq1bshc1ro72vs9cqprvrsi.apps.googleusercontent.com";
  static iosClientId = "535196208474-klqpos8rjjq1bshc1ro72vs9cqprvrsi.apps.googleusercontent.com";
  static webClientId = "535196208474-klqpos8rjjq1bshc1ro72vs9cqprvrsi.apps.googleusercontent.com";


  static fbProfile;

  static isEmailValid(email) {

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email) == true;
  }

  static isFieldEmpty(txt) {
    return txt.length === 0;
  }

  static showAlert(message) {
    Alert.alert(message)
  }

  static async isLogin(email, password) {

    //Post DATA
    var authorizationToken = 'tmepp';
    var userDeatils;

    var isError = false;
    //console.log(this.isEmailValid('emailkk.com'));
    
    return { authorizationToken, isError, userDeatils }
  }

  static async SignUp(name, email, password){

  }




  static configureGoogle() {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '535196208474-f6vdgf0c9glhtgddl79p6fjujfleup1o.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
      openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
      profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px,
      androidClientId: '535196208474-klqpos8rjjq1bshc1ro72vs9cqprvrsi.apps.googleusercontent.com'
    });
  }

  static SignInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.log(error);

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow

      } else if (error.code === statusCodes.IN_PROGRESS) {

        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

        // play services not available or outdated
      } else {

        console.log(error);
        // some other error happened
      }
    }
  };

  static SignInFacebook() {

    var isError = false;
    var isLoggedIn = false;
    var userData = ''
    LoginManager.logInWithPermissions(["public_profile"]).then(
      function (result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
          isLoggedIn = false;
        } else {
          console.log(
            "Login success with permissions: " +
            result.grantedPermissions.toString()
          );

          const currentProfile = Profile.getCurrentProfile().then(
            async function (currentProfile) {
              if (currentProfile) {
                console.log("The current logged user is: " +
                  currentProfile.name
                  + ". His profile id is: " +
                  currentProfile.userID
                );

                //storeData(currentProfile);
                try {
                  const jsonValue = JSON.stringify(currentProfile);
                  await AsyncStorage.setItem('userData', jsonValue);

                //const funt = await this.storeUserData(currentProfile);

                  isLoggedIn = true;
                  isError = false;
                  userData = currentProfile;


                } catch (e) {
                  // saving error
                  console.log(e);
                  isError = true;
                  isLoggedIn = false;
                }



              }
              return { userData, isLoggedIn, isError };
            }
          );

        }
      },
      function (error) {
        console.log("Login fail with error: " + error);
      }


    );
    console.log('kkpp');

  }
  static SignInFB = async () => {
    var userData = '';
    var isError = false;
    var errorMsg = '';
    LoginManager.logInWithPermissions(["public_profile"]).then(
      function (result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          console.log(
            "Login success with permissions: " +
            result.grantedPermissions.toString()
          );

          const currentProfile = Profile.getCurrentProfile().then(
            async function (currentProfile) {
              if (currentProfile) {
                console.log("The current logged user is: " +
                  currentProfile.name
                  + ". His profile id is: " +
                  currentProfile.userID
                );
                console.log('kkk');
                //storeData(currentProfile);
                try {
                  const jsonValue = JSON.stringify(currentProfile);
                  await AsyncStorage.setItem('userData', jsonValue);

                  //     const jsonValue1 = await AsyncStorage.getItem('userData');
                  // jsonValue1 != null ? JSON.parse(jsonValue) : null;

                  // console.log('hh');
                  // console.log(jsonValue1);

                  //navigation.navigate('UserProfileEdit');
                } catch (e) {
                  // saving error
                  console.log(e);
                }

                console.log('kk');
              }
            }
          );

        }
      },
      function (error) {
        console.log("Login fail with error: " + error);
      }
    );
  }


  static async storeUserData(value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('userData', jsonValue);

      console.log('data saved in  local storage');
      return { jsonValue };
    } catch (e) {
      // saving error
      console.log('data saved in  local storage error');
      console.log(e);
    }
  };
  static GetFbProfileInfo = async () => {

    var isError = false;
    var userData = '';
    const currentProfile = Profile.getCurrentProfile().then(
      function (currentProfile) {
        if (currentProfile) {

          fbProfile = currentProfile;

          isError = false;
          userData = currentProfile;

          console.log(currentProfile);

        } else {
          isError = true;
        }

        return { userData, isError };
      }
    );
  }




}