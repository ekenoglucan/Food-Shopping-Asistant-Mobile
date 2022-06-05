import { View, Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text,bgColor,fgColor}) => {
  return (
    <Pressable 
    onPress={onPress} 
    style={[styles.container,bgColor ? {backgroundColor : bgColor} : {}]}>
      <Text style={[styles.text,fgColor ? {color: fgColor} : {}]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ff542e',
        width: '100%',
        
        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius:5,

        
    },

   

    text:{
        fontWeight: 'bold',
        color: 'black',
    },

   
})

export default CustomButton