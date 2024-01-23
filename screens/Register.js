import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import InputBox from '../components/Form/InputBox';
import axios from 'axios';


const Register = ({navigation}) => {
    const loginImage="https://clipground.com/images/login-logo-clipart-2.png";
    const [email, setEmail]=useState("");
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [contact, setContact] = useState("")

    const handleRegister=()=>{
        let formData = {
            email:email,
            password:password,
            name:name,
            address:address,
            city:city,
            contact:contact,
        }
        axios.post('https://6597ba0e668d248edf2344c8.mockapi.io/Account',formData)
        .then((respone)=>{
            if(respone.data){
                Alert.alert("Register Successfully")
                navigation.navigate('login')
            }
        }
        )
        .catch((err)=>console.log(err))
    }
    //login function
    // const handleRegister=()=>{
    //     if(!email || !password || !name || !address || !city || !contact){
    //         return alert("Please add email or password or name");
    //     }
    //     alert("Register Successfully");
    //     navigation.navigate("login");
    // }
  return (
    <View style={styles.container}>
        <Image source={{uri: loginImage}} style={styles.image}/>
        <InputBox placeholder={"Enter You Name"} value={name} setValue={setName} autoComplete={"name"}/>
        <InputBox placeholder={"Enter You Email"} value={email} setValue={setEmail} autoComplete={"email"}/>
        <InputBox placeholder={"Enter You Password"} value={password} setValue={setPassword} secureTextEntry={true}/>
        <InputBox placeholder={"Enter You Address"} value={address} setValue={setAddress} autoComplete={"address-line1"}/>
        <InputBox placeholder={"Enter You City"} value={city} setValue={setCity} autoComplete={"country"}/>
        <InputBox placeholder={"Enter You Contact no"} value={contact} setValue={setContact} autoComplete={"tel"}/>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
                <Text style={styles.loginBtnText}>Register</Text>
            </TouchableOpacity>
            <Text>
                Alredy a user please ?{"  "}
                <Text 
                    style={styles.link}
                    onPress={() => navigation.navigate("register")}
                >
                    Login !
                </Text>
            </Text>
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        //alignItems:"center",
        justifyContent:"center",
        height:"100%"
    },
    image:{
        height:150,
        width:"100%",
        resizeMode:"contain",
    },
    btnContainer:{
        alignItems:"center",
        justifyContent:"center",
    },
    loginBtn:{
        backgroundColor:"#000000",
        width:"80%",
        justifyContent:"center",
        height:40,
        borderRadius:10,
        marginVertical:20,
    },
    loginBtnText:{
        color:"#ffffff",
        textAlign:"center",
        fontWeight:"500",
        fontSize:18,
    },
    link:{
        color:"red",
    }
})
export default Register