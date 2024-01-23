import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native'
import React, {useState} from 'react'
import InputBox from '../components/Form/InputBox';
import axios from 'axios';

const Login = ({navigation}) => {
    const loginImage="https://tse2.mm.bing.net/th?id=OIP.goWhDthBL6oJBJd3ioXDPgHaCe&pid=Api&P=0&h=220";
    const [email, setEmail]=useState("");
    const [password, setPassword] = useState("");

    //login function
    const handleLogin=()=>{
        let formData = {
            email:email,
            password:password,
        }
        axios.post('https://6597ba0e668d248edf2344c8.mockapi.io/Account',formData)
        .then((respone)=>{
            if(respone.data){
                Alert.alert("Login Successfully")
                navigation.navigate('home')
            }
        }
        )
        .catch((err)=>console.log(err))
        // if(!email || !password){
        //     return alert("Please add email or password");
        // }
        // alert("Login Successfully");
        // navigation.navigate("home");
    }
  return (
    <View style={styles.container}>
        <Image source={{uri: loginImage}} style={styles.image}/>
        <InputBox placeholder={"Enter You Email"} value={email} setValue={setEmail} autoComplete={"email"}/>
        <InputBox placeholder={"Enter You Password"} value={password} setValue={setPassword} secureTextEntry={true}/>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                <Text style={styles.loginBtnText}>Login</Text>
            </TouchableOpacity>
            <Text>
                Not a user yet ? Please{"  "}
                <Text 
                    style={styles.link}
                    onPress={() => navigation.navigate("register")}
                >
                    Register !
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
        height:"100%",
        backgroundColor: "white"
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

export default Login