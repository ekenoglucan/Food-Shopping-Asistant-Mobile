import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { Avatar, Title, TouchableRipple } from 'react-native-paper';
import TabScreen from '../TabScreen';
import {useNavigation} from '@react-navigation/native';
import ProfileScreen from '../ProfileScreen';
import IonIcons from 'react-native-vector-icons/Ionicons'; 

const PasswordChangeScreen = () => {

    const navigation = useNavigation();

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
            placeholder='Eski Şifreniz'>
            </TextInput>
        </View>

        <View >
            <TextInput style={[styles.textInput, {
                marginTop: 10
            }]
            }
            placeholder='Yeni Şifreniz'>
            </TextInput>
        </View>
        <View >
            <TextInput style={[styles.textInput, {
                marginTop: 10
            }]
            }
            placeholder='Yeni Şifre Tekrar'>
            </TextInput>
        </View>

        <Button
                raised
                color="#ff542e"
                icon={{name: 'check'}}
                title='Şifreyi Degiştir'
                onPress={() => this.handleButtonPress()} />

        <TouchableRipple onPress={GoBackPress}><IonIcons name="md-arrow-back" color="black" size={70} style={{
                            left: -50, bottom:395
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