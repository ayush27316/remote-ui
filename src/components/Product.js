import Button from './Button';
import React, { useMemo, useState } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'expo-image';
import AntDesign from '@expo/vector-icons/AntDesign';
/**
 * type: 'display', || 'row' || 'column' || 'cart'
 * price: {before: number , after: number}
 * description:[''] //array string 
 * banners:[{
 *  type: string, 'default' || 'default' || 'discount'
 *  title: string
 * }]
 * isLiked:boolean
 * onLikePress
 * 
 */
// const ProductCard = ({
//   id,
//   type = 'display',
//   width,
//   height,
//   imageUrl,
//   price,
//   banners,
//   isLiked,
//   onLikePress,
// }) => {
  
//   const {getWishList, useAddToWishList, useRemoveFromWishList} = useWishList();
//   const [hasLiked, setHasLiked] = useState(isLiked);

//   // const initState = useMemo(()=>(
//   //   getWishList().filter(pID => (pID === id))? true: false
//   // ));

  
//   const addToWishList = useMemo(()=>{
//     setHasLiked(true);
//     useAddToWishList(id, ()=>(setHasLiked(false)));
//   });
//   const removeFromWishList = useMemo(()=>{
//     setHasLiked(false);
//     useRemoveFromWishList(id, ()=>(setHasLiked(false)));
//   });
  
//   const handleLikePress = () => {
//     if (onLikePress) {
//       onLikePress(!hasLiked);
//     }
//     if(hasLiked){
//       removeFromWishList();
//     }else{
//       addToWishList();
//     }
//   };

//   const getBannerStyle = () => {
//     return bannerType === 'discount' 
//       ? { backgroundColor: '#FF0000' }
//       : { backgroundColor: '#000000' };
//   };


//   if(type === 'column'){
//     return (<View style={[styles.container, { width, height },]}>
//       <Image
//         style={styles.backgroundImage}
//         source={imageUrl}
//         contentFit="cover"
//       />
  
//       {/* Price and Description - Bottom Left */}
    
  
//       {/* Banner */}
//       {bannerTitle && (
//         <View style={[styles.bannerContainer, getBannerStyle()]}>
//           <Text style={styles.bannerText}>{bannerTitle}</Text>
//         </View>
//       )}
  
//       {/* Heart */}
//       <View style={styles.heartContainer}>
//         <Button
//           icon={<Icon
//             name={hasLiked ? 'favorite' : 'favorite-border'}
//             size={24}
//             color='#595959'
//           />}
//           style='clear'
//           onPressIn={handleLikePress}
//         />
//       </View>
//       <View>
//         {price && (
//           <View style={styles.priceContainer}>
//             <Text style={styles.priceText}>{price}</Text>
//           </View>
//         )}
//         {description1 && <Text style={styles.descriptionText}>{description1}</Text>}
//         {description2 && <Text style={styles.descriptionText}>{description2}</Text>}
//       </View>
//       <AddToCartButton
//   initialQuantity={0}
//   onAdd={(qty) => console.log('Added', qty)}
//   onIncrement={(qty) => console.log('Increased to', qty)}
//   onDecrement={(qty) => console.log('Decreased to', qty)}
//   />

//     </View>);
//   }
//   return (
//   <>
//     {

// type === 'row' ? (

//   <View style={[styles.container,rowStyles.container]}>
//     <Image
//       style={[rowStyles.image, { width: width * 0.4, height: height }]}
//       source={imageUrl}
//       contentFit="cover"
//     />

//     <View style={styles.heartContainer}>
//         <Button
//           icon={<Icon
//             name={hasLiked ? 'favorite' : 'favorite-border'}
//             size={24}
//             color='#595959'
//           />}
//           style='clear'
//           onPressIn={handleLikePress}
//         />
//       </View>
//     <View style={rowStyles.infoContainer}>
//       {/* Banner */}
//       {bannerTitle && (
//         <View style={[rowStyles.bannerContainer, getBannerStyle()]}>
//           <Text style={styles.bannerText}>{bannerTitle}</Text>
//         </View>
//       )}

//       {/* Heart */}
    

//       {/* Price and Descriptions */}
//       <View style={rowStyles.textContainer}>
//         {price && (
//           <View style={rowStyles.priceContainer}>
//             <Text style={rowStyles.priceText}>{price}</Text>
//           </View>
//         )}
//         {description1 && <Text style={styles.descriptionText}>{description1}</Text>}
//         {description2 && <Text style={styles.descriptionText}>{description2}</Text>}
//       </View>

//       {!cart && <Button
//         title='ADD TO CART'
//         icon={<AntDesign
//           name='shoppingcart'
//           size={22}
//           color={'#595959'}
          
//         />}
//         iconAlign='left'
//         style='outline'
//         />}
        
//     </View>
//   </View>
// ) : (
//   // Default vertical layout
//   <View style={[styles.container, { width, height },]}>
//     <Image
//       style={styles.backgroundImage}
//       source={imageUrl}
//       contentFit="cover"
//     />

//     {/* Price and Description - Bottom Left */}
//     <View style={styles.bottomContainer}>
//       {price && (
//         <View style={styles.priceContainer}>
//           <Text style={styles.priceText}>{price}</Text>
//         </View>
//       )}
//       {description1 && <Text style={styles.descriptionText}>{description1}</Text>}
//       {description2 && <Text style={styles.descriptionText}>{description2}</Text>}
//     </View>

//     {/* Banner */}
//     {bannerTitle && (
//       <View style={[styles.bannerContainer, getBannerStyle()]}>
//         <Text style={styles.bannerText}>{bannerTitle}</Text>
//       </View>
//     )}

//     {/* Heart */}
//     <View style={styles.heartContainer}>
//       <Button
//         icon={<Icon
//           name={hasLiked ? 'favorite' : 'favorite-border'}
//           size={24}
//           color='#595959'
//         />}
//         style='clear'
//         onPressIn={handleLikePress}
//       />
//     </View>

//   </View>
// )


//     }
//   </>
      
//     );
// };

// const styles = StyleSheet.create({
//   container: {
//     overflow: 'hidden',
//     position: 'relative',
   
//   },
//   backgroundImage: {
//     flex: 1,
//     justifyContent: 'space-between',
//    zIndex:10
//   },
//   bannerContainer: {
//     position: 'absolute',
//     top: 5,
//     left: 5,
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     zIndex:100,
//   },
//   bannerText: {
//     color: '#FFFFFF',
//     fontSize: 8,
//     fontWeight: 'bold',
//     zIndex:100,
//   },
//   heartContainer: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     zIndex:100,
//   },
//   bottomContainer: {
//     position: 'absolute',
//     bottom: 8,
//     left: 8,
//     maxWidth: '70%',
//     zIndex:100,
//   },
//   priceContainer: {
//     backgroundColor: '#FFFFFF',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     marginBottom: 4,
//     alignSelf: 'flex-start',
//     zIndex: 100,
//   },
//   priceText: {
//     color: '#000000',
//     fontSize: 14,
//     letterSpacing:2,
//   },
//   descriptionText: {
    
//     fontSize: 12,
//     fontWeight:'bold',
//     marginVertical: 2,
//     letterSpacing:1.2,
//   },
// });

// const rowStyles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',

//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//   },
//   image: {
//     height: '100%',
//     resizeMode: 'cover', // For Image, or set contentFit="cover"
   
//   },
//   bannerContainer: {
 
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     alignSelf: 'flex-start',
    
//   },
//   bannerText: {
//     color: '#FFFFFF',
//     fontSize: 8,
//     fontWeight: 'bold',

//   },
//   infoContainer: {
//     flex: 1,
//     paddingLeft: 10,
//     rowGap:5,
    
//   },
//   textContainer: {
//     flexDirection: 'column',
  
//   },
//   priceContainer:{
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     backgroundColor: 'orange',
//     alignSelf: 'flex-start',
  
//   },
//   priceText: {
//     color: 'white',
//     fontSize: 14,
//   },
// });

const ProductCard = ({
  type = 'display', //'row' , 'column', 'cart'
  width,
  height,
  imageUrl,
  price,
  description1,
  description2,
  bannerTitle,
  bannerType = 'default', // 'default' or 'discount'
  onLikePress,
  cart
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
    if (onLikePress) {
      onLikePress(!isLiked);
    }
  };

  const getBannerStyle = () => {
    return bannerType === 'discount' 
      ? { backgroundColor: '#FF0000' }
      : { backgroundColor: '#000000' };
  };


  if(type === 'column'){
    return (<View style={[styles.container, { width, height },]}>
      <Image
        style={styles.backgroundImage}
        source={imageUrl}
        contentFit="cover"
      />
  
      {/* Price and Description - Bottom Left */}
    
  
      {/* Banner */}
      {bannerTitle && (
        <View style={[styles.bannerContainer, getBannerStyle()]}>
          <Text style={styles.bannerText}>{bannerTitle}</Text>
        </View>
      )}
  
      {/* Heart */}
      <View style={styles.heartContainer}>
        <Button
          icon={<Icon
            name={isLiked ? 'favorite' : 'favorite-border'}
            size={24}
            color='#595959'
          />}
          style='clear'
          onPressIn={handleLikePress}
        />
      </View>
      <View>
        {price && (
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>{price}</Text>
          </View>
        )}
        {description1 && <Text style={styles.descriptionText}>{description1}</Text>}
        {description2 && <Text style={styles.descriptionText}>{description2}</Text>}
      </View>
    </View>);
  }
  return (
  <>
    {

type === 'row' ? (

  <View style={[styles.container,rowStyles.container]}>
    <Image
      style={[rowStyles.image, { width: width * 0.4, height: height }]}
      source={imageUrl}
      contentFit="cover"
    />

    <View style={styles.heartContainer}>
        <Button
          icon={<Icon
            name={isLiked ? 'favorite' : 'favorite-border'}
            size={24}
            color='#595959'
          />}
          style='clear'
          onPressIn={handleLikePress}
        />
      </View>
    <View style={rowStyles.infoContainer}>
      {/* Banner */}
      {bannerTitle && (
        <View style={[rowStyles.bannerContainer, getBannerStyle()]}>
          <Text style={styles.bannerText}>{bannerTitle}</Text>
        </View>
      )}

      {/* Heart */}
    

      {/* Price and Descriptions */}
      <View style={rowStyles.textContainer}>
        {price && (
          <View style={rowStyles.priceContainer}>
            <Text style={rowStyles.priceText}>{price}</Text>
          </View>
        )}
        {description1 && <Text style={styles.descriptionText}>{description1}</Text>}
        {description2 && <Text style={styles.descriptionText}>{description2}</Text>}
      </View>

      {!cart && <Button
        title='ADD TO CART'
        icon={<AntDesign
          name='shoppingcart'
          size={22}
          color={'#595959'}
          
        />}
        iconAlign='left'
        style='outline'
        />}
        
    </View>
  </View>
) : (
  // Default vertical layout
  <View style={[styles.container, { width, height },]}>
    <Image
      style={styles.backgroundImage}
      source={imageUrl}
      contentFit="cover"
    />

    {/* Price and Description - Bottom Left */}
    <View style={styles.bottomContainer}>
      {price && (
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{price}</Text>
        </View>
      )}
      {description1 && <Text style={styles.descriptionText}>{description1}</Text>}
      {description2 && <Text style={styles.descriptionText}>{description2}</Text>}
    </View>

    {/* Banner */}
    {bannerTitle && (
      <View style={[styles.bannerContainer, getBannerStyle()]}>
        <Text style={styles.bannerText}>{bannerTitle}</Text>
      </View>
    )}

    {/* Heart */}
    <View style={styles.heartContainer}>
      <Button
        icon={<Icon
          name={isLiked ? 'favorite' : 'favorite-border'}
          size={24}
          color='#595959'
        />}
        style='clear'
        onPressIn={handleLikePress}
      />
    </View>

  </View>
)


    }
  </>
      
    );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'relative',
   
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'space-between',
   zIndex:10
  },
  bannerContainer: {
    position: 'absolute',
    top: 5,
    left: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex:100,
  },
  bannerText: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: 'bold',
    zIndex:100,
  },
  heartContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex:100,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    maxWidth: '70%',
    zIndex:100,
  },
  priceContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 4,
    alignSelf: 'flex-start',
    zIndex: 100,
  },
  priceText: {
    color: '#000000',
    fontSize: 14,
    letterSpacing:2,
  },
  descriptionText: {
    
    fontSize: 12,
    fontWeight:'bold',
    marginVertical: 2,
    letterSpacing:1.2,
  },
});

const rowStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  image: {
    height: '100%',
    resizeMode: 'cover', // For Image, or set contentFit="cover"
   
  },
  bannerContainer: {
 
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    
  },
  bannerText: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: 'bold',

  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10,
    rowGap:5,
    
  },
  textContainer: {
    flexDirection: 'column',
  
  },
  priceContainer:{
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'orange',
    alignSelf: 'flex-start',
  
  },
  priceText: {
    color: 'white',
    fontSize: 14,
  },
});

// export default ProductCard;


export default ProductCard;


