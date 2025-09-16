import React, { useEffect, useRef } from 'react';
import { Animated, TextProps, TextStyle } from 'react-native';

const FlickerText = ({
  children,
  flickerColors = ['red', 'orange'],
  speed = 1000,
  style,
  ...props
}) => {
  const colorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(colorAnim, {
          toValue: 1,
          duration: speed / 2,
          useNativeDriver: false,
        }),
        Animated.timing(colorAnim, {
          toValue: 0,
          duration: speed / 2,
          useNativeDriver: false,
        }),
      ])
    );
    loop.start();
    return () => loop.stop(); // cleanup on unmount
  }, [colorAnim, speed]);

  const animatedColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: flickerColors,
  });

  return (
    <Animated.Text
      {...props}
      style={[{ color: animatedColor }, style]}
    >
      {children}
    </Animated.Text>
  );
};

export default FlickerText;