import * as React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { Avatar, Title, TouchableRipple } from 'react-native-paper';
import { Divider } from "@react-native-material/core";
import { Surface, Stack } from "@react-native-material/core";
import { Flex, Box } from "@react-native-material/core";
import IonIcons from 'react-native-vector-icons/Ionicons'; 
import { useState } from 'react';
const HelpScreen = () => {
    const ÜrünAdı = "ÜRÜN ADI";
    const ÜrünContent = "ÜRÜNÜN İÇERİĞİ";
    const [isFree, setIsFree] = useState(true);


    return(
        
        // <View style={styles.container}>
        //     <View style={{top:30}}>
        //     <Text style={{fontWeight:"bold", top: 50, left: -30, fontSize: 20}}>Food Shopping Assistant Nedir?</Text>
        //     <View>
        //         <Text style={{top: 60, left:-20}}>         Food Shopping Assistant alışverişiniz sırasında almak istediğiniz ürünün fotoğrafını çekerek kısa süre içerisinde ürün hakkında bilgi sahibi olmanızı sağlayan bir uygulamadır.</Text>
        //     </View>
        //     <Divider style={{ marginTop: 100,   
        //     backgroundColor:'black' }} leadingInset={-50} trailingInset={-50} />
        //     <Text style={{fontWeight:"bold", top: 20, left: 15, fontSize: 20}}>Nasıl Kullanırım?</Text>
        //     <View style={{top:40, left :5}}>
        //         <Text>      1- Alt tarafta bulunan kamera ikonuna tıklayarak bilgi almak istediğiniz ürünün fotoğrafını çekiniz. </Text>
        //         <Text>      2- Fotoğrafı çektikten sonra 'Ürünü Sorgula' butonuna tıklayınız. </Text> 
        //         <Text>      3- İlgili ürün bilgileri karşınıza çıkar. </Text>     
        //     </View>
        //     <Divider style={{ marginTop: 80,
        //     backgroundColor:'black' }} leadingInset={-50} trailingInset={-50} />


        // </View>
       
        //  </View>
        <View style={styles.wrapper}>

            {isFree&&(<View style={styles.containerFree}>
            
                <View style={styles.innerTopContainer}>
                    <Text style={{alignSelf:"center", fontSize:24 }}>{ÜrünAdı}</Text>
                </View>

                <View style={styles.innerBottomContainer}>
                    <Text style ={{fontSize:20, marginTop:20}}>ÜRÜN İÇERİĞİ</Text>
                    <View style={styles.innerBottomContainerPhoto}>
                        <Image style={{height:125,width:100,alignSelf: "center",resizeMode: "contain"}}source={require('../../../assets/soya.jpg')}/>
                    </View >
                    <View style={styles.innerBottomContainerInfo}>
                    <Text style={{ alignSelf:"center", color: "green", fontSize:26}}>LAKTOZ İÇERMEZ</Text>
                    <IonIcons name="md-checkmark" color="green" size={150} style={{
                                alignSelf:"center"
                        }} />
                    </View >
                </View>
            </View>)}

            {!isFree&&(<View style={styles.containerNotFree}>
            
                <View style={styles.innerTopContainer}>
                    <Text style={{alignSelf:"center", fontSize:24 }}>{ÜrünAdı}</Text>
                </View>

                <View style={styles.innerBottomContainer}>
                    <Text style ={{fontSize:20, marginTop:20}}>ÜRÜN İÇERİĞİ</Text>
                    <View style={styles.innerBottomContainerPhoto}>
                        <Image style={{height:125,width:100,alignSelf: "center",resizeMode: "contain"}}source={require('../../../assets/soya.jpg')}/>
                    </View >
                    <View style={styles.innerBottomContainerInfo}>
                    <Text style={{ alignSelf:"center", color: "red", fontSize:26}}>LAKTOZ İÇERMEZ</Text>
                    <IonIcons name="md-close" color="red" size={150} style={{
                                alignSelf:"center"
                        }} />
                    </View >
                </View>
            </View>)}

        </View>

         
            

     
    );
}


const styles = StyleSheet.create({
    wrapper:{
        
    },
    containerFree: {
        display:"flex",
        alignItems: "center",
        flexDirection: "column",
    
        width: "100%",
        height: "100%",
        backgroundColor: 'green',
       
    },
    containerNotFree: {
        display:"flex",
        alignItems: "center",
        flexDirection: "column",
    
        width: "100%",
        height: "100%",
        backgroundColor: 'red',
       
    },
    innerTopContainer: {
        marginTop: 100,
        marginBottom: 10,
        borderRadius: 20,
        display:"flex",
        alignItems: "center",
        flexDirection: "column",
        height:100,
        testAlign: "center",
        justifyContent: "center",
        
        width: "70%",
        backgroundColor: "white",
    },
    innerBottomContainer: {
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 20,
        display:"flex",
        alignItems: "center",
        flexDirection: "column",
        width: "70%",
        backgroundColor: "white",
        height:500
    },
    innerBottomContainerPhoto: {
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 20,
        display:"flex",
        alignItems: "center",
        flexDirection: "column",
        width: "70%",
    },
    innerBottomContainerInfo: {
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 20,
        display:"flex",
        alignItems: "center",
        flexDirection: "column",
        width: 800,
        
    }
    
    
});

export default HelpScreen



/*

const HelpScreen = () => {
    const ÜrünAdı = "ÜRÜN ADI";
    const ÜrünContent = "ÜRÜNÜN İÇERİĞİ";


    return(
        
        // <View style={styles.container}>
        //     <View style={{top:30}}>
        //     <Text style={{fontWeight:"bold", top: 50, left: -30, fontSize: 20}}>Food Shopping Assistant Nedir?</Text>
        //     <View>
        //         <Text style={{top: 60, left:-20}}>         Food Shopping Assistant alışverişiniz sırasında almak istediğiniz ürünün fotoğrafını çekerek kısa süre içerisinde ürün hakkında bilgi sahibi olmanızı sağlayan bir uygulamadır.</Text>
        //     </View>
        //     <Divider style={{ marginTop: 100,   
        //     backgroundColor:'black' }} leadingInset={-50} trailingInset={-50} />
        //     <Text style={{fontWeight:"bold", top: 20, left: 15, fontSize: 20}}>Nasıl Kullanırım?</Text>
        //     <View style={{top:40, left :5}}>
        //         <Text>      1- Alt tarafta bulunan kamera ikonuna tıklayarak bilgi almak istediğiniz ürünün fotoğrafını çekiniz. </Text>
        //         <Text>      2- Fotoğrafı çektikten sonra 'Ürünü Sorgula' butonuna tıklayınız. </Text> 
        //         <Text>      3- İlgili ürün bilgileri karşınıza çıkar. </Text>     
        //     </View>
        //     <Divider style={{ marginTop: 80,
        //     backgroundColor:'black' }} leadingInset={-50} trailingInset={-50} />


        // </View>
       
        //  </View>
        <View style={styles.container}>
            

     

            <Surface
                elevation={2}
                category="medium"
                style={{ width: 300, height: 50, top:120, left :60, borderColor:"yellow"}}
            />
            
                <Surface
                 elevation={2}
                category="medium"
                style={{ width: 300, height:480, top:150, left :60}}
                />
            <View >
            
            <Text style={{top:-70, alignSelf:"center", color: "red", fontSize:38}}>GLUTEN İÇERİR</Text>
            {/* <IonIcons name="md-close" color="red" size={150} style={{
                                top:-80, alignSelf:"center"
                        }} /> }
                        <IonIcons name="md-checkmark" color="green" size={150} style={{
                            top:-80, alignSelf:"center"
                    }} />
        </View>
        <View >
        <Text style={{bottom:530, alignSelf:"center", fontSize:24 }}>ÜRÜN İÇERİĞİ</Text>
        <Image source={require('../../../assets/soya.jpg')}
            style={{
        
        top: -500,
        alignSelf: "center",
        resizeMode: "contain",
        height: 125,
        width: 100,
        
      }} />
        </View>
        <View>
        <Text style={{top:-770, alignSelf:"center", fontSize:24 }}>{ÜrünAdı}</Text>
        </View>
      </View>
);
}


const styles = StyleSheet.create({
container: {
    
    backgroundColor: 'green',
   
},


});

export default HelpScreen
*/