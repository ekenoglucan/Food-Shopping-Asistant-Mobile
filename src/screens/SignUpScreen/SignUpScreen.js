import { View, Text, Image,StyleSheet,useWindowDimensions,ScrollView,Alert } from 'react-native'
import React,{useContext,useState} from 'react'
import Logo from '../../../logo2.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import SelectPicker from 'react-native-form-select-picker'; 

const SignUpScreen = () => {
  
  const [email,setEmail] = useState('');
  const[firstname,setFirstname] = useState('');
  const[lastname,setLastname] = useState('');
  const [password,setPassword] = useState('');
  const navigation = useNavigation();

  const {height} = useWindowDimensions();

  const [selected, setSelected] = useState();
  

  const onRegisterPressed = () => {

    var requestOptions = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "username": email,
        "password": password,
        "diets": ["gluten"]
      }),
    };
    fetch("https://7d83-88-230-229-180.eu.ngrok.io/signup", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result.message))
      .catch(error => console.log('error', error));


    navigation.navigate('SignIn');
  }


  const onSignInPressed = () =>{
    navigation.navigate('SignIn');
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainerTop}>
      <Image 
        source={Logo} 
        style = {[styles.logo, {height : height * 0.25}]} 
        resizeMode="contain"
      />

      </View>
      <View style={styles.style}>
        <Text style={styles.style}>Food Shopping Asistant</Text>
      </View>
      <View style={styles.innerContainerBottom}>
      <Text style = {styles.title}>Kayıt Ol</Text>
          
          <CustomInput 
           placeholder="Adınız" 
           value={firstname} 
           setValue={setFirstname}
           rules={{
             required: 'Lütfen Adınızı Giriniz',
           }}
           />
           
           <CustomInput 
           placeholder="Soyadınız" 
           rules={{
             required: 'Lütfen Soyadınızı Giriniz',
           }}
           value={lastname} 
           setValue={setLastname}
           />
           <CustomInput 
           placeholder="Mail Adresiniz" 
           rules={{
             required: 'Lütfen E-mailinizi Giriniz',
           }}
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
           text="Kayıt Ol" 
           onPress={onRegisterPressed}
           fgColor="white"
           
           />
           
           <CustomButton 
           text="Hesabınız var mı? Giriş için tıklayınız." 
           onPress={onSignInPressed}
           bgColor="#FFFFFF"
           
           />
      

      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:"flex",
    alignItems: "center",
    flexDirection: "column",

    width: "100%",
    height: "100%",
    backgroundColor: 'white',
   
  },
  innerContainerTop: {
    marginTop:70,
    display:"flex",
    alignItems: "center",
    flexDirection: "column",
    borderRadius:20,

    width: 300,
    height: 200,
  },
  innerContainerBottom: {
    marginTop:70,
    display:"flex",
    alignItems: "center",
    flexDirection: "column",
    borderRadius:20,
    width: 300,
    height: 500,
    backgroundColor:"white"
  },
  style:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
  },
  title:{
    fontSize : 24,
    fontWeight:"bold",
    color:'#051C60',
    marginBottom:30
}
  
});

export default SignUpScreen