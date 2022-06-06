import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native'

const HeaderScreen = () => {
    return (
        
        <View style={styles.header}>
            <Text style={styles.title}>Food Shopping Assistant</Text>
           
           
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        width:"100%",
        backgroundColor: '#ff542e',
        
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop:28
        
    },
    
});


export default HeaderScreen