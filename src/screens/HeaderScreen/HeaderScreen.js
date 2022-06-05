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
        height: 70,
        paddingTop: 35,
        backgroundColor: '#ff542e',
        
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


export default HeaderScreen