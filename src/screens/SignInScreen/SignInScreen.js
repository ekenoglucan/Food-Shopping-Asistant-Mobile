import { View, Text, Image,StyleSheet,useWindowDimensions,ScrollView,Alert } from 'react-native'
import React,{useContext,useState} from 'react'
import Logo from '../../../logo2.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import HeaderScreen from '../HeaderScreen/HeaderScreen';

const SignInScreen = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    var requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "username": email,
        "password": password
      }),
    };
    fetch("https://7d83-88-230-229-180.eu.ngrok.io/login", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result.message))
      .catch(error => console.log('error', error));
  }

 
  const onSignUpPressed = () =>{
    navigation.navigate('SignUp');
  }

  return (
    
    
    <View style={styles.root} ><ScrollView>
      <Image 
        source={Logo} 
        style = {[styles.logo, {height : height * 0.25}]} 
        resizeMode="contain"
      />
     <Text style={styles.style}>Food Shopping Asistant</Text>
      
      <CustomInput 
      placeholder="Mail Adresiniz" 
      value={email} 
      setValue={setEmail}
      />
      <CustomInput 
      placeholder="Şifreniz" 
      value={password} 
      setValue={setPassword}
      secureTextEntry
      />
      <CustomButton 
      text={"Giriş Yap" }
      onPress={onSignInPressed}
      fgColor="white"
      
      />

      <CustomButton 
      text="Hesabınız yok mu? Kayıt olmak için tıklayınız." 
      onPress={onSignUpPressed}
      bgColor="#FFFFFF"
      
      />
      
      </ScrollView>
          </View>
  );
};

const styles = StyleSheet.create({
  style:{
    color: '#1b4171',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
    padding: 20,
  },
  root:{
    alignItems : 'center',
    flex:1,
    padding: 20,
    backgroundColor: 'white',
    

  },
  logo: {
    width:'50%',
    maxWidth: 300,
    maxHeight:200,
    resizeMode: 'contain',
    paddingVertical: 130,
    left:85
  },
  
});

export default SignInScreen