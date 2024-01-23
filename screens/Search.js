import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Layout from "../components/Layout/Content";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Search = () => {
    const navigation = useNavigation();
    const [searchText,setSearchText]=useState("");
    const handleSearch = () =>{
      console.log(searchText);
      setSearchText("");
    };
    return ( 
    <Layout>
        <View style={{height:80,backgroundColor:'lightgray'}}>
            <View style={styles.container}>
            <TextInput style={styles.inputBox} value={searchText} onChangeText={ (text) => setSearchText(text)}/>
            <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
            <FontAwesome name="search" style={styles.icon}/>
            </TouchableOpacity>
            </View>
        </View>
        <View>
            <Text>Your search results are:</Text>
        </View>
    </Layout>
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
export default Search ;