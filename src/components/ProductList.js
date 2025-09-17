import React from 'react';
import { View, FlatList, Text,StyleSheet } from 'react-native';
import Product from './Product'; 

const PRODUCTS = [
  {
    id: '1',
    price: 'C$99',
    imageUrl: require('../../assets/images/4.png'),
    bannerTitle: '60% DISCOUNT',
    bannerType: 'discount',
    description1: 'HIGH QUALITY COTTON',
    description2: 'NEW ARRIVALS',
    width: 350,
    height: 150,
  },
  {
    id: '2',
    price: 'C$79',
    imageUrl: require('../../assets/images/5.png'),
    bannerTitle: 'NEW DROP',
    bannerType: 'info',
    description1: 'PREMIUM LEATHER',
    description2: 'LIMITED EDITION',
    width: 350,
    height: 150,
  },
  {
    id: '3',
    price: 'C$49',
    imageUrl: require('../../assets/images/6.png'),
    bannerTitle: 'BEST VALUE',
    bannerType: 'highlight',
    description1: 'SOFT & COMFY',
    description2: 'TRENDING STYLE',
    width: 350,
    height: 150,
  },
];

const ProductList = () => {
  return (
    <View style={styles.container}>
        
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Product
            type="row"
            price={item.price}
            imageUrl={item.imageUrl}
            bannerTitle={item.bannerTitle}
            bannerType={item.bannerType}
            description1={item.description1}
            description2={item.description2}
            width={item.width}
            height={item.height}
            cart
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:1000,
    paddingVertical: 10,

  },
  separator: {
    height: 2,
  },
});

export default ProductList;
