import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView>
      {data.map((product, index) => (
        <View key={index} style={styles.productPairContainer}>
          <View style={styles.productContainer}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productName}>{product.title}</Text>
            <Text style={styles.productPrice}>${product.price}</Text>
          </View>
          {/* Check if there's another product in the array before rendering */}
          {index + 1 < data.length && (
            <View style={styles.productContainer}>
              <Image source={{ uri: data[index + 1].image }} style={styles.productImage} />
              <Text style={styles.productName}>{data[index + 1].title}</Text>
              <Text style={styles.productPrice}>${data[index + 1].price}</Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productPairContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productContainer: {
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginBottom: 5,
    marginTop: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Products;
