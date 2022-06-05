import { View, Text, Image,StyleSheet,useWindowDimensions,ScrollView,Alert } from 'react-native'
import React,{useContext,useState} from 'react'
import Logo from '../../../logo2.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {

  const [email,setEmail] = useState('');
  const[firstname,setFirstname] = useState('');
  const[lastname,setLastname] = useState('');
  const [password,setPassword] = useState('');
  const navigation = useNavigation();

  const {height} = useWindowDimensions();

  const onRegisterPressed = async(data) => {
    navigation.navigate('SignIn');

  }

  

  const onSignInPressed = () =>{
    navigation.navigate('SignIn');
  }

  return (
    <ScrollView>
    <View style={styles.root} flex={1}>
      

        

      <Image 
        source={Logo} 
        style = {[styles.logo, {height : height * 0.25}]} 
        resizeMode="contain"
      />
     <Text style={styles.style}>Food Shopping Asistant</Text>
     <Text style = {styles.title}>Hesap oluştur</Text>
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
          </ScrollView>
  );
};

const styles = StyleSheet.create({
  style:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
    padding: 10,
  },
  root:{
    alignItems : 'center',
    padding: 10,
    backgroundColor: 'white'
    

  },
  title:{
      fontSize : 24,
      fontWeight:"bold",
      color:'#051C60',
      margin: 10,  
  },
  logo: {
    width:'40%',
    maxWidth: 200,
    maxHeight: 133,
    paddingVertical: 150
  },
  
});

export default SignUpScreen