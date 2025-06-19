import {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {useRouter} from 'expo-router';
import { Image } from 'react-native';
import logo from '../assets/logo.png';


export default function SignupScreen(){
    const router = useRouter();
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');

    const handleSignup = () => {

        if (!name || !email || !password || !ConfirmPassword ){
            Alert.alert('Error','Please Fill in all fields');
            return;
        }

        if (password !== ConfirmPassword) {
            Alert.alert('Error','Password and confirm password must be same.');
            return;
        }

        Alert.alert('Success', 'Account Created Successfully!');
        router.pust('/login');
    };

    return(
        <View style = {styles.container}>
          <Image source={logo} style={styles.logo} />

            <Text style = {styles.title}>Sign Up</Text>

            <TextInput
            style = {styles.input}
            placeholder='Name'
            onChangeText={setName}
            value = {name}
            />

            <TextInput
            style = {styles.input}
            placeholder='Email'
            onChangeText={setEmail}
            value={email}
            keyboardType='email-address'
            />
            <TextInput
            style = {styles.input}
            placeholder='Password'
            onChangeText={setPassword}
            value = {password}
            secureTextEntry
            />
            <TextInput
            style = {styles.input}
            placeholder='Confirm Password'
            onChangeText={setConfirmPassword}
            value={ConfirmPassword}
            secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress = {handleSignup}>
                <Text style = {styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/login')}>
                <Text style = {styles.loginLink}>Already have an account? Log In</Text>
            </TouchableOpacity>

        </View>
    );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E6E6FA',
      justifyContent: 'center',
      padding: 20,
    },
    logo: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginBottom: 20,
    },    
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#4B0082',
      textAlign: 'center',
      marginBottom: 30,
    },
    input: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 10,
      marginBottom: 20,
      borderColor: '#ccc',
      borderWidth: 1,
      width: '100%',
      maxWidth: 350,
      alignSelf: 'center',
    },
    button: {
      backgroundColor: '#6A5ACD',
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,
      width: '100%',
      maxWidth: 350,
      alignSelf: 'center',
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 16,
    },
    loginLink: {
      color: '#4B0082',
      textAlign: 'center',
      marginTop: 10,
      fontWeight: 'bold',
    },
  });