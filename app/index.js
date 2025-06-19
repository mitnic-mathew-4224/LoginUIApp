import {View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import logo from '../assets/logo.png'



export default function GetStartedScreen(){
    return(
        <View style = {styles.container}>
            <Image source={logo} style = {styles.logo}/>
            <Text style={styles.title}>Welcome to AndroidApp</Text>
            <Link href="/login" asChild>
                <TouchableOpacity style= {styles.button}>
                     <Text style = {styles.buttonText}>Get Started!</Text>
                 </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#E6E6FA',
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        width:120,
        height:120,
        resizeMode:'contain',
        alignSelf:'center',
        marginBottom:20,
    },
    title:{
        fontSize:30,
        fontWeight: 'bold',
        marginBottom: 50,
        color: '#4B0082',
    },
    button:{
        backgroundColor: '#6A5ACD',
        paddingVertical:15,
        paddingHorizontal:50,
        borderRadius: 30,
    },
    buttonText:{
        color:'#fff',
        fontSize:18,
    },
});