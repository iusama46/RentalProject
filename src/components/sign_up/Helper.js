import { Alert } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
export default class Helper {

   

  static androidClientId= "535196208474-klqpos8rjjq1bshc1ro72vs9cqprvrsi.apps.googleusercontent.com";
  static iosClientId= "535196208474-klqpos8rjjq1bshc1ro72vs9cqprvrsi.apps.googleusercontent.com";
   static webClientId= "535196208474-klqpos8rjjq1bshc1ro72vs9cqprvrsi.apps.googleusercontent.com";

    static isEmailValid(email) {

       let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       return reg.test(email) == true;
  }

  static isFieldEmpty(txt){
    return txt.length === 0; 
  }

  static showAlert(message){
    Alert.alert(message)
  }

  static isLogin(email, password){

    //Post DATA
    var authorizationToken='';
    var userDeatils;

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

}