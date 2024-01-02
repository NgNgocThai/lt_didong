import { View, Text, StyleSheet } from 'react-native'
import React from 'react' 
import Content from '../components/Layout/Content'
import Categories from '../components/category/categories'
import Banner from '../components/banner/Banner'
import Products from '../components/Products/Products'
import Header from '../components/Layout/Header'

const Home = () => {
  return (
    <Content>
        <Header/>
        <Categories/>
        <Banner/>
        <Products/>
    </Content>
  )
}

export default Home;

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: 'white',
   alignItems: 'center',
   justifyContent: 'center',
 },
});
