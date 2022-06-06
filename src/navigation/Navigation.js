
import React,{useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import CameraScreen from '../screens/CameraScreen';
import TabScreen from '../screens/TabScreen/TabScreen';
import PasswordChangeScreen from '../screens/PasswordChangeScreen';
import HelpScreen from '../screens/HelpScreen';

const Stack = createNativeStackNavigator();


const Navigation = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  


  return (
    
    <NavigationContainer >
      
      {isLoggedIn ? <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabScreen" component={TabScreen} setStackName = "TabScreen"/>
       <Stack.Screen name="HomeScreen" component={HomeScreen}/>
       <Stack.Screen name="PasswordChangeScreen" component={PasswordChangeScreen}/>
        <Stack.Screen name="HelpScreen" component={HelpScreen}/>
        
       
        <Stack.Screen name="CameraScreen" component={CameraScreen}/>
      </Stack.Navigator> : 
      <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
      
      }
    </NavigationContainer>
  )
    }

export default Navigation