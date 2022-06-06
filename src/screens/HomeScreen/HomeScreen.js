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
      
      <Text style={styles.title}>ÖNERİLEN ÜRÜNLER</Text>
      
      <View style={styles.innerContainer}>
        
        <Text style={{ fontSize: 18, textAlign:"center",fontWeight: 'bold',borderBottomWidth:2}}>Apro Soya Sütü</Text>

        <View style={styles.innerContainer2}>
        
          <Image source={require('../../../assets/soya.jpg')}
          style={{
            marginBottom: 70,
            resizeMode: "contain",
            height: 130,
            width: 75
          }} /> 
          <View style={styles.innerContainer2Inner}>
            <Text style={styles.textStyle}>GLUTEN İÇERMEZ</Text>
            <Text style={styles.textStyle}>LAKTOZ İÇERMEZ</Text>
          </View>
        </View>
      </View>

      <View style={styles.innerContainer}>
        
        <Text style={{ fontSize: 18, textAlign:"center",fontWeight: 'bold',borderBottomWidth:2}}>Schar Fusulli Burgu Makarna</Text>

        <View style={styles.innerContainer2}>
        
          <Image source={require('../../../assets/makarna.jpg')}
          style={{
            marginBottom: 50,
            resizeMode: "contain",
            height: 130,
            width: 75
          }} /> 
          <View style={styles.innerContainer2Inner}>
            <Text style={styles.textStyle}>GLUTEN İÇERMEZ</Text>
          </View>
        </View>

      </View>

      <View style={styles.innerContainer}>
        
        <Text style={{ fontSize: 18, textAlign:"center",fontWeight: 'bold',borderBottomWidth:2}}>Fellas Chia Meyve Bar</Text>

        <View style={styles.innerContainer2}>
        
          <Image source={require('../../../assets/bar.jpg')}
          style={{
            marginBottom: 50,
            resizeMode: "contain",
            height: 130,
            width: 75
          }} /> 
          <View style={styles.innerContainer2Inner}>
            <Text style={styles.textStyle}>GLUTEN İÇERMEZ</Text>
          </View>
        </View>

      </View>

    </View>
    
  )

}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    alignItems: "center",
    flexDirection: "column",

    width: "100%",
    height: "100%",
    backgroundColor: 'white',
  },
  innerContainer: {
    display:"flex",
    alignItems: "center",
    flexDirection: "column",
    marginTop:30,
    borderRadius:20,
    width: 350,
    height: 180,
    borderWidth:5,
    borderStyle:'solid',
    borderColor:"orange",
    borderRadius:10
    },

  innerContainer2: {
    display:"flex",
    alignItems: "center",
    flexDirection: "row",
    width: 400,
    height: 200,
    marginLeft:100,
    marginBottom:100
  },
  innerContainer2Inner:{
    display:"flex",
    alignItems: "center",
    flexDirection: "column",
    width:200,
    height:200
  },
  textStyle: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 24,
    fontStyle:'italic',
    marginTop: 20,
    color:"green",
    marginLeft:20

  },
  title: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 24,
    marginTop: 15,
    color:"black",
    
  }
});



export default HomeScreen
