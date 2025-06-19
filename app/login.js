import { useState } from "react";
import { ToastAndroid, Platform } from 'react-native';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {Link } from 'expo-router';
import { Image } from 'react-native';
import logo from '../assets/logo.png'; // Importing logo image
import users from '../data/user.json';// Importing user data from local JSON

export default function LoginScreen(){

    // State variables to store input values and toggle password visibility
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    // Function to handle login logic
    const handleLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          Alert.alert('Invalid Email', 'Please enter a valid email address.');
          return;
        }


        // Ensure password is not empty
        if (!password) {
          Alert.alert('Missing Password', 'Please enter your password.');
          return;
        }

        // Check for a matching user in the JSON file
        const user = users.find(
          (u) => u.email === email && u.password === password
        );


        // Show appropriate success/failure message
        if (user) {
          Alert.alert('Login Successful', `Welcome, ${email}`);
        }
        else
        {
          Alert.alert('Login Failed','Invalid Email or Password');
        }

      };
      

    return(
        <View style = {styles.container}>
          <Image source={logo} style={styles.logo} />

            <Text style = {styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={"#666"}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />

        <View style={styles.passwordContainer}>
            <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                placeholderTextColor="#666"
                secureTextEntry={hidePassword}
                value={password}
                onChangeText={setPassword}
            />
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <Text style={styles.toggle}>{hidePassword ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        </View>

            <TouchableOpacity onPress={() => Alert.alert('Reset Link Sent', 'Please check your email.')}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style= {styles.button} onPress={handleLogin}>
                <Text style = {styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style= {styles.bottomText}>
                <Text>Don't have an Account?</Text>
                <Link href= "/signup">
                    <Text style={styles.link}>Sign up</Text>
                </Link>
            </View>
        </View>
    );
}


// Styles for Login Screen components
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E6E6FA',
        padding:20,
        justifyContent:'center',
    },
    logo: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginBottom: 20,
    },
    
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        maxWidth: 350,
        alignSelf: 'center',
        width: '100%',
        height:50,

      },
      
      toggle: {
        color: '#4B0082',
        fontWeight: '600',
        paddingHorizontal: 10,
        fontSize: 14,
        
      },
      
    title:{
        fontSize:28,
        fontWeight: 'bold',
        color: '#4B0082',
        textAlign:'center',
        marginBottom: 40,
    },
    input:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        marginBottom:20,
        borderColor:'#ccc',
        borderWidth: 1,
        width: '100%',
        maxWidth:350,
        alignSelf:'center',
    },
    passwordInput: {
      flex: 1,
      height: '100%',
      padding: 0,       
      marginBottom: 0,  
      color: '#000',    
    },
    forgotText: {
        color: '#4B0082',
        textAlign: 'right',
        marginBottom: 15,
        fontWeight: '600',
        width: '100%',
        maxWidth:350,
        alignSelf:'center',
      },      
    button:{
        backgroundColor:'#6A5ACD',
        padding:15,
        borderRadius: 10,
        marginTop: 10,
        width: '100%',
        maxWidth:350,
        alignSelf:'center',
    },
    buttonText:{
        color:'#fff',
        textAlign:'center',
        fontSize:16,
    },
    bottomText:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'center',
    },
    link:{
        color:'#4B0082',
        fontWeight: 'bold',
    },
});