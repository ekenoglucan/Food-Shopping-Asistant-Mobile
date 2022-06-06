import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { Avatar, Title, TouchableRipple } from 'react-native-paper';
import { Divider } from "@react-native-material/core";
import {useNavigation} from '@react-navigation/native';
import IonIcons from 'react-native-vector-icons/Ionicons'; 

const HelpScreen = () => {
    const navigation = useNavigation();

    const GoBackPress = () => {
        navigation.navigate('TabScreen')
    }

    return(
        <View style={styles.container}>
            <View style={{top:70}}>
            <Text style={{fontWeight:"bold", top: 50, left: 15, fontSize: 20}}>Food Shopping Assistant Nedir?</Text>
            <View>
                <Text style={{top: 60, left:5}}>         Food Shopping Assistant alışverişiniz sırasında almak istediğiniz ürünün fotoğrafını çekerek kısa süre içerisinde ürün hakkında bilgi sahibi olmanızı sağlayan bir uygulamadır.</Text>
            </View>
            <Divider style={{ marginTop: 100,   
            backgroundColor:'black' }} leadingInset={-50} trailingInset={-50} />
            <Text style={{fontWeight:"bold", top: 20, left: 15, fontSize: 20}}>Nasıl Kullanırım?</Text>
            <View style={{top:40, left :5}}>
                <Text>      1- Alt tarafta bulunan kamera ikonuna tıklayarak bilgi almak istediğiniz ürünün fotoğrafını çekiniz. </Text>
                <Text>      2- Fotoğrafı çektikten sonra 'Ürünü Sorgula' butonuna tıklayınız. </Text> 
                <Text>      3- İlgili ürün bilgileri karşınıza çıkar. </Text>    
                <TouchableRipple onPress={GoBackPress}><IonIcons name="md-arrow-back" color="black" size={70} style={{
                            left: 5, bottom:395
                        }} /></TouchableRipple>  
            </View>
            <Divider style={{ marginTop: 80,
            backgroundColor:'black' }} leadingInset={-50} trailingInset={-50} />


        </View>
        </View>
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
    
    
});

export default HelpScreen