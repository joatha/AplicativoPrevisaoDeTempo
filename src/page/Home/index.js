import React,{useState, useEffect} from 'react';
import {SafeAreaView, Text, StyleSheet,FlatList, Vibration, View} from 'react-native';
import * as Location from 'expo-location';

import Menu from '../../components/Menu/index';
import Header from '../../components/Header/index';
import Conditions from '../../components/Conditions/index'
import Forecast from '../../components/Forecast/index'

import api, {key} from '../../services/api';



export default function Home(){
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather,setWather] = useState([]);
  const [icon, setIcon] = useState({name: 'cloud', color:'#FFF'});
  const [ background, setBackground] = useState(['#1ed6ff', '#97c1ff']);

  useEffect(()=>{
    (async ()=>{
      let {status}= await Location.requestPermissionsAsync();
     
      if(status !== 'granted'){
        setErrorMsg('Permisão negada para acessar localização');
        setLoading(false);
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      //console.log(location.coords);
      //weather?key=38d89e7b&lat=-23.682&lon=-46.875
      const response = await api.get(`/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);

      setWather(response.data);
      if(response.data.results.currently === 'noite'){
        setBackground(['#0c3741','#0f261'])
      }

      switch(response.data.results.condition_slug){
        case 'clear_day':
          setIcon({name: 'partly-sunny', color:'#FFB300'});
          break;

        case 'rain':
          setIcon({name: 'rainy', color:'#FFF'});
          break;
        
        case 'storm':
          setIcon({name: 'rainy', color:'#FFF'});
          break;
      }
      setLoading(false);


    }) ();

  },[]);

    if(loading){
      return(
        <View style={styles.conatiner}>
          <Text style={{fontSize:17, fontStyle:'italic'}}>Carregando dados.</Text>
        </View>
      )
    }
    return(
        <SafeAreaView style={styles.conatiner}>
            <Menu/>
            <Header background={background} weather={weather} icon={icon}/>
            <Conditions  weather={weather}  />

            <FlatList
            horizontal={true}
            contentContainerStyle={{paddingBottom:'5%'}}
            style={styles.list}
            data={weather.results.forecast}
            keyExtractor={item=> item.date}
            renderItem={({item})=><Forecast data={item}/>}
            />
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#e8f0ff',
        paddingTop:'5%',

    },
    list:{
        marginTop:10,
        marginLeft:10
    }
})