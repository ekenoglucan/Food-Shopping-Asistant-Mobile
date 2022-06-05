import IonIcons from 'react-native-vector-icons/Ionicons'; 
import * as React from 'react';
import {Text, StyleSheet,  View, Button, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Avatar, Title, TouchableRipple } from 'react-native-paper';
import HeaderScreen from '../HeaderScreen/HeaderScreen';
import { useNavigation } from '@react-navigation/native';



const ProfileScreen = () => {

    const navigation = useNavigation();
    const PasswordClicked = () => {
        navigation.navigate('PasswordChangeScreen');
    }
    const HelpClicked = () => {
        navigation.navigate('HelpScreen');
    }
   
    return(
        <SafeAreaView style={styles.container}>
            <HeaderScreen/>
            <View style={styles.userInfoSection}>
                <View>
                    <Avatar.Image
                        source={require('../../../assets/profile.jpg',)}
                        size={80}
                        style={{
                            marginTop:10,
                            marginLeft: 110,

                            
                        }}
                        />   
                </View>    
                
                <View style={{marginLeft: -40}}>
                <Title style={[styles.title, {
                    marginTop: 5,
                    marginBottom: 5,
                    marginLeft: 110
                    }
                ]}> Can Ekenoğlu </Title>
                </View>

                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <IonIcons name="ios-mail" color="grey" size={20} style={{
                                left: -55
                        }} />
                        <Text style={{color:"black", marginLeft: -45}}>ekenoglucan@gmail.com</Text>
                    </View>
                    <TouchableRipple onPress={PasswordClicked}>

                    <View style={{
                        flexDirection: 'row',
                        top: 70,}}>
                        <IonIcons name="md-settings" color="grey" size={20} style={{
                            left: -55
                        }} />
                        <Text style={{color:"black", marginLeft: -45}}>Password Settings</Text>
                    </View>
                    </TouchableRipple >
                    
                    <View style={{
                        flexDirection: 'row',
                        top: 90,}}>
                        <IonIcons name="md-medkit" color="grey" size={20} style={{
                                left: -55
                        }} />
                        <Text style={{color:"black", marginLeft: -45}}>Health Status</Text>
                    </View>
                    <TouchableRipple onPress={HelpClicked}>

                    <View style={{
                        flexDirection: 'row',
                        top: 110,}}>
                        <IonIcons name="md-help" color="grey" size={20} style={{
                            left: -55
                        }} />
                        <Text style={{color:"black", marginLeft: -45}}>Help</Text>
                    </View>
                    </TouchableRipple>


                </View>


            </View>               
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
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
      },
});

export default ProfileScreen