import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import loading from './Loading';

const Weather = () => {
    const [Loading, setLoading] = useState(true)
    const[currentWeather, setCurrentWeather]= useState()
    const api_key="03043abef7dd6d51c4b3441366d1b0bd"



    const fetchData= ()=>{
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ " polokwane" +"&appid="+api_key )
        .then((Response)=>Response.json())
        .then((data)=>{
            console.log(data)
            setCurrentWeather(data)
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>setLoading(false))

    }
    useEffect(() => {
        console.log("use effect called")
        setLoading(true)
        fetchData()
        
    },[])


    return (
        <View style={styles.container}>
            {loading ? <Loading />
                :
                <Text>weather</Text>

            }


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
});
export default Weather;

