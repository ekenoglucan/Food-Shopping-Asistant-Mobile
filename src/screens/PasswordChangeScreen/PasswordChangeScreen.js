import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { Avatar, Title, TouchableRipple } from 'react-native-paper';

const PasswordChangeScreen = () => {
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
                color="#6C3483"
                icon={{name: 'check'}}
                title='Şifreyi Degiştir'
                onPress={() => this.handleButtonPress()} />

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