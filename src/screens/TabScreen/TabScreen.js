import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IonIcons from 'react-native-vector-icons/Ionicons'; 
import Feather from 'react-native-vector-icons/Feather'; 
import HomeScreen from '../HomeScreen/HomeScreen';
import CameraScreen from '../CameraScreen';
import ProfileScreen from '../ProfileScreen';
import HeaderScreen from '../HeaderScreen/HeaderScreen';


//import HomeScreen from './screens/HomeScreen';
//import PasswordChange from './screens/PasswordChange';
//import ProfileInfo from './screens/ProfileInfo';





const Tab = createBottomTabNavigator();


const TabScreen = () =>{
    return(
            
            <Tab.Navigator
            
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveTintColor: 'white',
                tabBarActiveTintColor: 'yellow',
                tabBarStyle: {
                    backgroundColor : '#ff542e'
                }
            }}>
                
            
                <Tab.Screen name="Home" component={HomeScreen} options={{
                 tabBarIcon: ({color, size}) => ( 
                     <IonIcons name="md-home" color={color} size={size} 
                    />
                 ) }} 
                 />
                <Tab.Screen name="Camera" component={CameraScreen} options={{
                 
                    tabBarIcon: ({color, size, }) => (
                     <IonIcons name="md-camera" color={'black'} size={70}
                    
                     style={{
                        width: 80,
                        height: 80,
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        borderRadius: 40,
                        textAlign: 'center',
                        bottom: 20
                              
                    }}
                    />
                 ) }}
                  />
                
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                 tabBarIcon: ({color, size}) => (
                     <IonIcons name="md-person" color={color} size={size}/>
                 ) }}/>

             </Tab.Navigator>
             

             
        
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 50,
        backgroundColor: '#6C3483',
        
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    headerImage: {
        width: 110,
        height: 110,
        padding: 20
        
    },
    image: {
        alignItems: 'center',
        padding: 30
    }
});

export default TabScreen