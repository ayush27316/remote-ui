import React from 'react';
import { ImageBackground, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

// Better image management
const imageMap = {
  "../assets/images/christmas2.jpg": require("../assets/images/christmas2.jpg"),
  "../assets/images/main-banner.jpg": require("../assets/images/main-banner.jpg"),
  // Add more images here
};

function resolveImage(source) {
  return imageMap[source] || null;
}

export default function ImageBanner(props) {
  const { style, source, ...rest } = props;

  const resolvedSource = typeof source === 'string'
    ? resolveImage(source)
    : source;

  return (
    <ImageBackground
      {...rest}
      source={resolvedSource}
      style={StyleSheet.flatten([styles.fullWidth, style])}
    />
  );
}

const styles = StyleSheet.create({
  fullWidth: {
    
    width: screenWidth,
  }
});
