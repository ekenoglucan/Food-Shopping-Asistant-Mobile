import {StyleSheet, View, Text,ScrollView,Image } from 'react-native'
import CustomButton from '../../components/CustomButton';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import HeaderScreen from '../HeaderScreen/HeaderScreen';
import { Surface, Stack } from "@react-native-material/core";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('CameraScreen');
  }

  return (

    
    
    <View style={styles.container}>
      
      <HeaderScreen />   
        <Stack fill center spacing={4}>
        
       
        
    <Surface
      elevation={6}
      category="medium"
      style={{ width: 300, height: 150, bottom: 20 }}>
           <Text style={{
            top: -65,
            right: 20,
            fontFamily: 'sans-serif-condensed',
            fontSize: 28,
            position: 'absolute',
            width: 255,
            height: 42,
            fontStyle:'italic',
            

        }}>ÖNERİLEN ÜRÜNLER</Text>
          <Text
          style={{
              
              
              textAlign:"center",
              bottom: -5,
              left: 10,
              fontSize: 18,
          }}>Apro Soya Sütü</Text>
          <Image source={require('../../../assets/soya.jpg')}
          style={{
            
            top: -10,
            right: 10,
            resizeMode: "contain",
            height: 125,
            width: 100
          }} />
          <Text
          style={{
              color:"green",
              
              fontSize: 23,
              bottom: 100,
              left: 95
          }}>
              LAKTOZ İÇERMEZ
          </Text>
          <Text
          style={{
              color:"green",
              
              fontSize: 23,
              bottom: 85,
              left: 95
          }}>
              GLUTEN İÇERMEZ
          </Text>
      </Surface>
    <Surface
      elevation={6}
      category="medium"
      style={{ width: 300, height: 150, bottom:-20 }}>
          <Image source={require('../../../assets/makarna.jpg')}
          style={{
            top: 35,
            right: 5,
            resizeMode: "contain",
            height: 100,
            width: 100
          }} />
          <Text
          style={{
              
              position:'relative',
              textAlign:"center",
              bottom: 95,
              left: 10,
              fontSize: 18,
          }}>Schar Fusulli Burgu Makarna</Text>
          <Text
          style={{
              color:"green",
              position:"relative",
              fontSize: 23,
              bottom: 55,
              left: 95
          }}>
              GLUTEN İÇERMEZ
          </Text>

    </Surface>
    <Surface
      elevation={6}
      category="medium"
      style={{ width: 300, height: 150, bottom:-60 }}>
          <Image source={require('../../../assets/bar.jpg')}
          style={{
            top: 15,
            right: -10,
            height: 100,
            width: 100,
            resizeMode: "contain",
            alignSelf: 'center'
            
          }} />
          <Text
          style={{
              
              position:'relative',
              textAlign:"center",
              bottom: 95,
              left: 10,
              fontSize: 18,
          }}>Fellas Chia Meyve Bar</Text>
          <Text
          style={{
              color:"green",
              position:"relative",
              fontSize: 23,
              bottom: 20,
              left: 65,
              
          }}>
              GLUTEN İÇERMEZ
          </Text>
      </Surface>
      
  </Stack>
  </View>
  )

}

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
      
  }
});



export default HomeScreen
