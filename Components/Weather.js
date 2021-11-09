import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, btn } from 'react-native';
import Loading from './Loading';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Weather = () => {
    const [loading, setLoading] = useState(true)
    const [currentWeather, setCurrentWeather] = useState()
    const [city, setCity] = useState('')
    const api_key = "03043abef7dd6d51c4b3441366d1b0bd"



    const fetchData = () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + " polokwane" + "&appid=" + api_key)
            .then((Response) => Response.json())
            .then((data) => {
                console.log(data)
                setCurrentWeather(data)
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false))

    }
    const searchByCity = () => {
        console.log(city)
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_key)
            .then((Response) => Response.json())
            .then((data) => {
                console.log(data)
                setCurrentWeather(data)
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false))

    }

    useEffect(() => {
        console.log("use effect called")
        setLoading(true)
        fetchData()

    }, [])


    return (
        <View style={styles.container}>
            {loading ? <Loading />
                :
                <div>
                    <View style={styles.form}>
                        <View style={{ color: "orange", justifyContent: 'space-evenly', flexDirection: 'row', marginBottom: '50' }} >
                            <TextInput style={styles.inputCity} textAlignVertical="top" backgroundColor='orange' placeholder='Search city...' onChangeText={(e) => setCity(e)} />
                            <Ionicons name="search" style={styles, btn} size={20} color="#fcbc04" onPress={() => searchByCity()} />
                        </View>


                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 50, justifyContent: 'center' }}>
                        <Ionicons name="location" size={24} color="orange" />
                        <Text style={{ color: 'white', fontSize: 30 }}>
                            {currentWeather?.name}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <Text style={{ color: 'white', fontSize: 20 }}>
                            Today
                        </Text>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: "orange", fontStyle: "10px" }}>
                                {new Date().toDateString()}
                            </Text>
                            <Text style={{ color: "orange", fontSize: 15 }}>
                                {currentWeather?.weather[0].description}
                            </Text>
                        </View>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <Image style={{ width: "100px", height: "200px" }} source={{ uri: "http://openweathermap.org/img/wn/" + currentWeather.weather[0].icon + "@2x.png" }} />

                        <Text style={{ color: 'white', fontSize: '40px' }}>
                            {(currentWeather?.main?.temp - 273.15).toFixed(2)}
                        </Text>
                        <MaterialCommunityIcons name="temperature-celsius" size={30} color="white" />
                    </View>

                    <View style={{ display: 'flex', backgroundColor: 'orange', flexDirection: 'row', alignItems: 'center', marginBottom: 50, justifyContent: 'space-evenly' }} >
                        <Entypo name="drop" size={24} color="black" />
                        <Text style={{ color: 'black', fontSize: 15, justifyContent: 'space-evenly' }} >
                            Humidity :
                            {currentWeather.main.humidity} <span style={{ color: 'black' }}>%</span>
                        </Text>
                        <MaterialCommunityIcons name="temperature-celsius" size={24} color="black" />
                        <Text style={{ color: 'black', fontSize: 15 }}>
                            Feels_like :
                            {(currentWeather.main.feels_like - 273.15).toFixed(2)}  <span style={{ color: 'black' }}>c</span>
                        </Text>
                    </View>
                    <View style={{ backgroundColor: 'orange', alignItems: 'center', flexDirection: 'row', flex: 'row', display: 'flex' }}>
                        <Fontisto name="wind" size={24} color="black" />
                        <Text style={{ color: 'black', fontSize: 15 }}>
                            wind :
                            {(currentWeather?.wind.speed)} <span style={{ color: 'black' }} >km/h</span>
                        </Text>
                        <Ionicons name="cloud-outline" size={24} color="black" />

                        <Text>
                            Clouds :
                            {(currentWeather?.clouds.all)}<span style={{ color: 'black' }}>m</span>
                        </Text>
                    </View>
                </div>
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

