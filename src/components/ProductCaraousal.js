import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Product from './Product'; // Make sure the path to your Product component is correct
import shoes1 from '../assets/images/1.png';
import shoes2 from '../assets/images/2.png';
import shoes3 from '../assets/images/3.png';
import shoes4 from '../assets/images/4.png';
import shoes5 from '../assets/images/5.png';
import shoes6 from '../assets/images/6.png';
import shoes7 from '../assets/images/7.png';
import shoes8 from '../assets/images/8.png';
import shoes9 from '../assets/images/9.png';
const featuredProducts = [
  {
    id: '1',
    price: 'C $120',
    description1: 'RUNNING',
    description2: 'NIKE AIR MAX',
    imageUrl: shoes1,
    width: 250,
    height: 300,

  },
  {
    id: '2',
    price: 'C $85',
    description1: 'CASUAL SNEAKER',
    description2: 'ADIDAS STAN SMITH',
    imageUrl: shoes2,
    width: 250,
    height: 300,
  },
  {
    id: '3',
    price: 'C $250',
    description1: 'HIKING BOOT',
    description2: 'SALOMON QUEST 4D',
    imageUrl: shoes3,
    width: 250,
    height: 300,
  },
  {
    id: '4',
    price: 'C $95',
    description1: 'CLASSIC CONVERSE',
    description2: 'CHUCK TAYLOR',
    imageUrl: shoes4,
    width: 250,
    height: 300,
  
  },
];


const ProductSlider = ({ title, products, onProductPress }) => {
  // This function tells the FlatList how to render each individual product
  const renderProduct = ({ item }) => (
    <View
    style={styles.productItem}

    >

<Product
      // Pass all properties from the product item directly to the Product component
      {...item}
      // Handle the press event for each product
      onPress={() => onProductPress(item)}
      // Add some margin to the right of each item for spacing
      
    />
    </View>
    
  );

  return (
    <View style={styles.container}>

      <FlatList
        data={products}
        renderItem={renderProduct}
        // Use a unique key for each item, assuming each product has a unique 'id'
        keyExtractor={(item) => item.id.toString()}
        // This is the essential prop to make the list horizontal
        horizontal={true}
        // Hides the horizontal scroll bar for a cleaner look
        showsHorizontalScrollIndicator={false}
        // Style for the content container, useful for adding padding
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    marginTop: 20, // Space below the entire slider component
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12, // Space between the title and the products
    marginLeft: 16,   // Align title with the start of the first product
  },
  listContent: {
    paddingHorizontal: 16, // Adds padding on the left of the first item and right of the last item
  },
  productItem: {
    marginRight: 5, // Adds space between the products in the list
  },
});




const Slider = () => {
  return (
    <ProductSlider
      title="Featured Products"
      products={featuredProducts}
    />

  );
}

export default Slider;