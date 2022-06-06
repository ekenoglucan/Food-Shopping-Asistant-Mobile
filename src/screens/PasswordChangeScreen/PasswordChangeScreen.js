import React,{useContext,useState,Component} from 'react'
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { Avatar, Title, TouchableRipple } from 'react-native-paper';
import TabScreen from '../TabScreen';
import {useNavigation} from '@react-navigation/native';
import ProfileScreen from '../ProfileScreen';
import IonIcons from 'react-native-vector-icons/Ionicons'; 

const PasswordChangeScreen = () => {


    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();

    const Handle = () => {
        var requestOptions = {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": "kutay",
                "old_password": password,
                "new_password": newPassword,
                "new_password_confirmation": confirmPassword
            }),
        };
        fetch("https://7d83-88-230-229-180.eu.ngrok.io/changePass", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const GoBackPress = () => {
        navigation.navigate('TabScreen')
    }

    



    return(
        
        <View style={styles.container}>
            <View style={styles.back}>
                <TouchableRipple onPress={GoBackPress}><IonIcons name="md-arrow-back" color="black" size={70} /></TouchableRipple>
            </View>
            <View style={styles.title}>
                <Text style={{fontFamily: 'arial',fontSize: 32}}>Parola Ayarları</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.row}>
                    <TextInput 
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Eski Şifreniz'>
                    </TextInput>
                </View>
                <View style={styles.row}>
                    <TextInput 
                        secureTextEntry={true}
                        value={newPassword}
                        onChangeText={setNewPassword}
                        placeholder='Yeni Şifreniz'>
                    </TextInput>
                
                </View>
                <View style={styles.row}>
                    <TextInput 
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        placeholder='Yeni Şifre Tekrar'>
                    </TextInput>
                
                </View>
                <View style={styles.button}>
                    <TouchableRipple onPress={Handle}>
                    <Text style={{color:"white",fontSize:20}}>ŞİFRENİ DEĞİŞTİR</Text>
                    </TouchableRipple>
                
                </View>
                
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: 'white',
    },
    back: {
        width: 410,
        height: 70,
        borderColor:"blue",
        marginTop:70

    },
    title: {
        alignItems:"center",
        width: 250,
        height: 50,
        borderColor:"blue",
        marginTop:30

    },
    form: {
        display:"flex",
        flexDirection: "column",
        width: 400,
        height: 300,
        marginTop:50,
        alignItems:"center"
    },

    row:{
        width: 250,
        height: 50,
        borderWidth:3,
        borderColor:"#ff542e",
        marginTop:30,
        borderRadius:10
    },
    button:{
        width:200,
        height:50,
        backgroundColor:"#ff542e",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        marginTop:20
      }
    
});



export default PasswordChangeScreen