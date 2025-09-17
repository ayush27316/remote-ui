import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from 'expo-image';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useAssets } from 'expo-asset';

const navItems = [
  { name: 'Search', icon: 'search1', route: 'Shop' },
  { name: 'Cart', icon: 'shoppingcart', route: 'Cart' },
  { name: 'WishList', icon: 'hearto', route: 'WishList' },
];

const BottomNav = ({ cartCount = 0, wishListCount = 0 }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [logoAsset, error] = useAssets([require('../../assets/images/logo.jpeg')]);
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        {
          logoAsset 
            ?  <Image style={{ width: 40, height: 40 }} source={logoAsset[0]} contentFit="cover"/> 
            : null
        } 
      </TouchableOpacity>

      {navItems.map((item) => {
        const isActive = route.name === item.route;

        return (
          <TouchableOpacity
            key={item.route}
            onPress={() => navigation.navigate(item.route)}
            activeOpacity={0.7}
            style={styles.navItem}
          >
            <AntDesign
              name={item.icon}
              size={22}
              color={'#595959'}
              style={[styles.icon, isActive && styles.activeIcon]}
            />

            {item.name === 'Cart' && (
              <Text style={styles.countBox}>{cartCount}</Text>
            )}
            {item.name === 'WishList' && (
              <Text style={styles.countBox}>{wishListCount ?? 0}</Text>
            )}
          </TouchableOpacity>
        );
      })}

      <Text style={styles.text}>adiClub</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#f2f2f2',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    position: 'relative',
  },
  activeIcon: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  icon: {
    paddingBottom: 10,
    paddingRight: 2,
  },
  label: {
    fontSize: 11,
    color: '#595959',
  },
  activeLabel: {
    color: '#007AFF',
    fontWeight: '600',
  },
  countBox: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    backgroundColor: '#4d4d4d',
    color: 'white',
    fontSize: 12,
    paddingVertical: 1,
    paddingHorizontal: 3,
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default BottomNav;
