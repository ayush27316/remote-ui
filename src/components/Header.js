import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Button from './Button';

const Header = ({ label }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.label}>{label}</Text>
      <Button
        variant='clear'
        type='link'
        href='/profile'
        iconName='user'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical:5,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 99,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 1,
    padding: 8,
  }
});

export default Header;
