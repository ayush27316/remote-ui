import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Product from './Product'; // Ensure this path is correct
import shoes1 from '../assets/images/1.png';
import shoes2 from '../assets/images/2.png';
import shoes3 from '../assets/images/3.png';
import shoes4 from '../assets/images/4.png';
import shoes5 from '../assets/images/5.png';
import shoes6 from '../assets/images/6.png';
import shoes7 from '../assets/images/7.png';
import shoes8 from '../assets/images/8.png';
import shoes9 from '../assets/images/9.png';

const ProductSlider = () => {
  const productData = [
    { id: '1', imageUrl: shoes4, price: 'C$ 30.99' },
    { id: '2', imageUrl: shoes5, price: 'C$ 29.99' },
    { id: '3', imageUrl: shoes7, price: 'C$ 29.99' },
    { id: '4', imageUrl: shoes9, price: 'C$ 29.99' },
    { id: '5', imageUrl: shoes3, price: 'C$ 29.99' },
    { id: '6', imageUrl: shoes2, price: 'C$ 29.99' },
    { id: '7', imageUrl: shoes6, price: 'C$ 30.99' },
    { id: '7', imageUrl: shoes7, price: 'C$ 30.99' }
  ];

  // Define fixed dimensions and gaps for precise alignment
  const ROW_GAP = 5;

  return (
    <View style={styles.sliderWrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.mainContainer}
      >


        {/* Child 1: Two 'small' cards */}
        <View style={[styles.columnContainer, { rowGap: ROW_GAP }]}>
          <Product
            {...productData[0]}
      
            width = {150}
            height= {150}
            
          />
          <Product
            {...productData[1]}
             bannerTitle='NEW ARRIVALS'
            bannerType='default'
            width = {150}
            height= {150}
            
          />
        </View>

        {/* Child 2: One 'full' card */}
        <View style={styles.columnContainer}>
          <Product
            {...productData[2]}
            bannerTitle='60% DISCOUNT'
            bannerType='discount'
            description1="HIGH QUALITY COTTON"
            description2="NEW ARRIVALS"
            width= {150}
    height={305}
            
          />
        </View>

        {/* Child 3: Two 'small' cards */}
        <View style={[styles.columnContainer, { rowGap: ROW_GAP }]}>
          <Product
            {...productData[3]}
            width = {150}
            height= {150}
            
          />
          <Product
            {...productData[4]}
            width = {150}
            height= {150}
            
          />
        </View>

        {/* Child 4: Two 'small' cards */}
        <View style={[styles.columnContainer, { rowGap: ROW_GAP }]}>
          <Product
            {...productData[5]}
            width = {150}
            height= {150}
            
          />
          <Product
            {...productData[6]}
            width = {150}
            height= {150}
            
          />
        </View>

        <View style={styles.columnContainer}>
          <Product
            {...productData[7]}
            description1="HIGH QUALITY COTTON"
            description2="NEW ARRIVALS"
            width= {150}
            height={305}
            
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderWrapper: {
    paddingVertical: 20,
  },
  mainContainer: {
    // This is the main container with flex and columnGap
    flexDirection: 'row',
    columnGap: 5,
    paddingHorizontal: 16,
  },
  columnContainer: {
    // This is for each child, controlling vertical arrangement
    flexDirection: 'column',
    justifyContent: 'flex-start',
  }
  

});

export default ProductSlider;