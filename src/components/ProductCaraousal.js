import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Product from './Product'; 

import { useAssets } from 'expo-asset';


const ProductCaraousal = ({ title, products, onProductPress }) => {


  const renderProduct = ({ item }) => (
    <View
    style={styles.productItem}

    >

<Product
      {...item}
      onPress={() => onProductPress(item)}
    />
    </View>
    
  );

  return (
    <View style={styles.container}>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    marginLeft: 16,
  },
  listContent: {
    paddingHorizontal: 16,
  },
  productItem: {
    marginRight: 5,
  },
});




const ProductCaraousalWrapper = () => {


  const [productAssets, error] = useAssets([
    require('../../assets/images/1.png'),
   require('../../assets/images/2.png'),
   require('../../assets/images/3.png'),
  require('../../assets/images/4.png')]);
  
  if(!productAssets || productAssets.length === 0) {
    return null;
  }
  
  const featuredProducts = [
    {
      id: '1',
      price: 'C $120',
      description1: 'RUNNING',
      description2: 'NIKE AIR MAX',
      imageUrl: productAssets[0],
      width: 250,
      height: 300,
  
    },
    {
      id: '2',
      price: 'C $85',
      description1: 'CASUAL SNEAKER',
      description2: 'ADIDAS STAN SMITH',
      imageUrl: productAssets[1],
      width: 250,
      height: 300,
    },
    {
      id: '3',
      price: 'C $250',
      description1: 'HIKING BOOT',
      description2: 'SALOMON QUEST 4D',
      imageUrl: productAssets[2],
      width: 250,
      height: 300,
    },
    {
      id: '4',
      price: 'C $95',
      description1: 'CLASSIC CONVERSE',
      description2: 'CHUCK TAYLOR',
      imageUrl: productAssets[3],
      width: 250,
      height: 300,
    
    },
  ];

  return (
    <ProductCaraousal
      title="Featured Products"
      products={featuredProducts}
    />

  );
}

export default ProductCaraousalWrapper;