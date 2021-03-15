import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';

export default function conditions({weather}){

    return(
        <View style={styles.conatiner}>

            <View style={styles.condiition}>
                <Feather name='wind' size={23} color="#1ed6ff"/>
            <Text>{weather.results.wind_speedy}</Text>

            </View>

            <View style={styles.condition}>
                <MaterialCommunityIcons name='weather-sunset-up' size={23} color="#1ed6ff"/>
            <Text>{weather.results.sunrise}</Text>
            </View>


            <View style={styles.condiition}>
                <MaterialCommunityIcons name='weather-sunset-down' size={23} color="#1ed6ff"/>
            <Text>{weather.results.sunset}</Text>
            </View>


            <View style={styles.condiition}>
                <Feather name='droplet' size={23} color="#1ed6ff"/>
            <Text>{weather.results.humidity}</Text>
            </View>

        </View>
        
    )
}

const styles= StyleSheet.create({
    conatiner:{
        marginTop:15,
        padding:10,
        backgroundColor:'#FFF',
        flexDirection:'row',
        width:'95%',
        justifyContent:'space-around',
        borderRadius: 8

    },
    condition:{
        alignItems:'center',
        justifyContent:'center'
    },
    
})


