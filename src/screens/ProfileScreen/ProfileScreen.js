import IonIcons from 'react-native-vector-icons/Ionicons'; 
import * as React from 'react';
import {Text, StyleSheet,  View, Button, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Avatar, Title, TouchableRipple } from 'react-native-paper';
import HeaderScreen from '../HeaderScreen/HeaderScreen';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';



const ProfileScreen = () => {

    const navigation = useNavigation();
    const PasswordClicked = () => {
        navigation.navigate('PasswordChangeScreen');
    }
    const HelpClicked = () => {
        navigation.navigate('HelpScreen');
    }

    const baseUrl = "https://4aac-88-230-229-180.eu.ngrok.io"

    const fetchData = () =>{
      axios.get(`${baseUrl}/users`)
      .then(resp=>{
        console.warn(resp.data);
      })  
      .catch(error=>{

  });
    
    };
   

    return(
       <View style={styles.container}>
           <View style={styles.innerContainer}>
           <Avatar.Image
                source={require('../../../assets/profile.jpg',)}
                size={160}
                style={{
                    marginTop:50
                }}
                /> 
            <Title style={[styles.title, {
                    }
                ]}> Can Ekenoğlu </Title>
           </View>
           <View style={styles.innerContainer2}>
            <View style={styles.row}>
                <IonIcons name="ios-mail" color="black" size={30} />
                <Text style={{color:"black",marginLeft:5,fontSize:20}}>ekenoglucan@gmail.com</Text>
            </View>
            <View style={styles.row}>
                <TouchableRipple onPress={PasswordClicked}>
                    <View style={{display:"flex", flexDirection: "row"}}>
                        <IonIcons name="md-settings" color="black" size={30} style={{marginTop:20}} />
                        <Text style={{color:"black",fontSize:20,marginLeft:5,marginTop:20}}>Password Settings</Text>
                    </View>
                </TouchableRipple >
            </View>
            <View style={styles.row}>
                <TouchableRipple onPress={HelpClicked}>
                    <View style={{display:"flex", flexDirection: "row"}}>
                        <IonIcons name="md-help" color="black" size={30} style={{marginTop:20}} />
                        <Text style={{color:"black",fontSize:20,marginLeft:5,marginTop:20}}>Help</Text>
                    </View>
                </TouchableRipple >
            </View>
            <View style={styles.row}>
                <TouchableRipple>
                    <View style={{display:"flex", flexDirection: "row"}}>
                        <IonIcons name="md-log-out" color="red" size={30} style={{marginTop:20, transform: [{rotateY: '180deg'}]} } />
                        <Text style={{color:"black",fontSize:20,marginLeft:5,marginTop:20}}>Logout</Text>
                    </View>
                </TouchableRipple >
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
    innerContainer: {
        display:"flex",
        flexDirection: "column",
        alignItems:"center",
        width: 400,
        height: 300,
        backgroundColor: 'white',
    },
    innerContainer2: {
        display:"flex",
        flexDirection: "column",
        width: 400,
        height: 300,
        backgroundColor: 'white',

    },
    row:{
        display:"flex",
        flexDirection: "row",
        
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        top: 50,
        marginLeft:10
      },
});

export default ProfileScreen