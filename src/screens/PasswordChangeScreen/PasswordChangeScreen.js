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
        
        <Title style={[styles.title, {
            marginTop: 50,
            marginBottom: 5,
            marginLeft: 50,
            fontFamily: 'sans-serif-condensed',
            fontSize: 32,
            fontStyle:'italic'
        }
        ]}> Parola Ayarları </Title>
        
        <View >
                <TextInput style={[styles.textInput, {
                    marginTop: 100
                    
                }]
                }
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Eski Şifreniz'>
                    
                </TextInput>
            </View>

            <View >
                <TextInput style={[styles.textInput, {
                    marginTop: 10
                }]
                }
                    secureTextEntry={true}
                    value={newPassword}
                    onChangeText={setNewPassword}
                    placeholder='Yeni Şifreniz'>
                    
                </TextInput>
            </View>
            <View >
                <TextInput style={[styles.textInput, {
                    marginTop: 10
                }]
                }
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder='Yeni Şifre Tekrar'>
                    
                </TextInput>
            </View>

            <Button
                raised
                color="#ff542e"
                icon={{ name: 'check' }}
                title='Şifreyi Degiştir'
                onPress={Handle} />

            <TouchableRipple onPress={GoBackPress}><IonIcons name="md-arrow-back" color="black" size={70} style={{
                left: -50, bottom: 395
            }} /></TouchableRipple>

        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    textInput: {
        borderWidth:1,
        borderColor: 'black',
        marginVertical: 20,
        padding: 10,
        height: 40,
        alignItems: 'center'
    },
});
export default PasswordChangeScreen