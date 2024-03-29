import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
    const [searchText,setSearchText]=useState("");
    const handleSearch = () =>{
      console.log(searchText);
      setSearchText("");
    };
  return (
    <View style={{height:80,backgroundColor:'lightgray'}}>
      <View style={styles.container}>
        <TextInput style={styles.inputBox} value={searchText} onChangeText={ (text) => setSearchText(text)}/>
        <TouchableOpacity style={styles.searchBtn} onPress={() => navigation.navigate("search")}>
          <FontAwesome name="search" style={styles.icon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  inputBox: {
    borderWidth: 0.3,
    width: "100%",
    position: "absolute",
    left: 15,
    height: 35,
    color: "#000000",
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    fontSize: 16,
    borderRadius: 5,
  },
  searchBtn: {
    position: "absolute",
    left: "95%",
  },
  icon: {
    color: "#000000",
    fontSize: 18,
  },
});

export default Header;