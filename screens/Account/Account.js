import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Layout from "../../components/Layout/Content"
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'

const Account = ({navigation}) => {
  return (
    <Layout>
        <View style={styles.container}>
            <Image  style={styles.image}/>
            <View style={{justifyContent:"center",alignItems:"center"}}>
                <Text style={styles.name}>
                    Hi Nguyễn Ngọc Thái
                    <Text style={{color:"green"}}> </Text>
                    ✌️✌️
                </Text>
                <Text>Email : Vermouthno1@gmail.com</Text>
                <Text>Contact : 0968388210</Text>
            </View>
            <View style={styles.btnContainer}>
                <Text style={styles.heading}>Account Setting</Text>
                <TouchableOpacity style={styles.btn} 
                    onPress={()=>navigation.navigate("profile",{id:id})}>
                    <AntDesign name="edit"/>
                    <Text style={styles.btnText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} 
                    onPress={()=>navigation.navigate("myorders",{id:id})}>
                    <AntDesign name="bars"/>
                    <Text style={styles.btnText}>My Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} 
                    onPress={()=>navigation.navigate("notifications")}>
                    <AntDesign name="bells"/>
                    <Text style={styles.btnText}>Notification</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} 
                    onPress={()=>navigation.navigate("googlemap")}>
                    <Feather name="map-pin"/>
                    <Text style={styles.btnText}>Google Map</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} 
                    onPress={()=>navigation.navigate("adminPanel",{id:id})}>
                    <MaterialIcons name="admin-panel-settings"/>
                    <Text style={styles.btnText}>Admin Panel</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  image: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    marginTop: 10,
    fontSize: 20,
  },
  btnContainer: {
    padding: 10,
    backgroundColor: "#ffffff",
    margin: 10,
    marginVertical: 20,
    elevation: 5,
    borderRadius: 10,
    paddingBottom: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 5,
  },
  btnText: {
    fontSize: 15,
    marginRight: 10,
  },
});

export default Account