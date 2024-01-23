import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import useNavigation hook
import Layout from "../components/Layout/Content";

const Male = () => {
  const navigation = useNavigation();  // Use useNavigation hook to get the navigation prop
  const [data, setData] = useState([]);

  const handleMoreButton = (id) => {
    navigation.navigate("productDetails", { id: id });
    console.log(id);
  };

  // add to cart
  const handleAddToCart = () => {
    alert("added to cart");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/category/men's clothing");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {data.map((product, index) => (
        <View key={index} style={styles.productContainer}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
          <Text style={styles.productName}>{product.title}</Text>
          <Text style={styles.productPrice}>${product.price}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.detailsButton} onPress={() => handleMoreButton(product.id)}>
              <Text style={styles.buttonText}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
              <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  productContainer: {
    width: '48%',
    marginBottom: 20,
    alignItems: 'center',
  },
  productImage: {
    width: '100%', 
    height: 150,
    resizeMode: 'cover',
    marginBottom: 5,
    marginTop: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 4,
  },
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  detailsButton: {
    backgroundColor: '#000000',
    height: 20,
    width: '48%', 
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartButton: {
    backgroundColor: 'orange',
    height: 20,
    width: '48%', 
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Male;


