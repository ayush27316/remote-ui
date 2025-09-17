import React, { useCallback, useEffect, useMemo } from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from './Icon'
import useNavigation  from '../navigation/hooks/useNavigation';


// Need to implement simple metrics
// Notification: suppose addToCart button failed, or for other reasons if 

const Button = ({
  title = '',
  color = 'primary', // 'secondary'
  href = '',
  onPress = () => { },
  style , // solid, "outline" , "clear", 
  variant,
  type = 'normal', // 'link', 'external'
  loading = false,
  icon,
  iconName,
  iconAlign = 'right',
  disabled = false,
  loadingStyle,
  width = undefined,
  height = undefined,
  fullWidth = false,
  elevated = false,
  borderColor,
  contentStyle,
  buttonStyle,
}) => {

  const navigation = useNavigation();

  const handleOnPress = useCallback(
    (evt) => {
      if(!disabled && type ==='link')
      {
        navigation.navigate(href)
      }
      if (!loading && !disabled) {
        onPress(evt)
      }

    },
    []
  );

  const NativeTouchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  const displayTitle = typeof title === 'string' ? title : '';
  
  
  if(!style){style = variant;}
  const button = (
    <NativeTouchable
      onPress={handleOnPress}
      delayPressIn={0}
      disabled={disabled}
    >
      <View
        style={StyleSheet.flatten([
          styles.button,
          {
            zIndex: 10,
            // Flex direction based on iconPosition
            // If iconRight is true, default to right
            flexDirection: positionStyle[iconAlign] || 'row',
            backgroundColor: style === 'solid' ? 'black' : 'transparent',
            borderColor: color && color || 'black',
            borderWidth: style === 'outline' ? 1 : 0,
          },
          width && { width: width },
          height && { height: height },
          disabled && style === 'solid' && { backgroundColor: 'grey' },
          disabled && style === 'outline' && { borderColor: 'grey' },
          buttonStyle,
        ])}
      >
        {/* Activity Indicator on loading */}
        {loading && (
          <ActivityIndicator
            style={StyleSheet.flatten([styles.loading, loadingStyle])}
            color={style === 'solid' ? 'white' : 'black'}
            size='small'
          />
        )}

        <Text style={StyleSheet.flatten([
          styles.title,
          {
            color: style === 'solid' ? 'white' : (color && color || 'black'),
          },
          disabled && { color: 'grey' },
          contentStyle,
        ])}>{displayTitle}</Text>

        {iconName ? (
          <View>
            <Icon
              name={iconName}
              size={22}
              color={style === 'solid' ? 'white' : (color && color || 'black')}
            />
          </View>
        ) : (
          icon && icon
        )}

        {elevated && (
          <View
            style={[
              StyleSheet.absoluteFillObject, // Match size of parent
              {
                zIndex: 0,
                position: 'absolute',
                top: 3,
                left: 4,
                bottom: -3,
                right: -3,
                borderColor: borderColor || 'black',
                borderWidth: 1,
                backgroundColor: 'transparent',
              },
            ]}
          />
        )}
      </View>
    </NativeTouchable>
  );

  return (
    <View style={StyleSheet.flatten([
      {
        position: 'relative',
        alignSelf: fullWidth ? 'stretch' : 'flex-start',
      },
      width && { width },
      height && { height },
    ])}>
      {button}
    </View>
  );
};

export default Button;


const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    columnGap: 8
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    paddingVertical: 1,
  },
  iconContainer: {
    marginHorizontal: 5,
  }
});

const positionStyle = {
  top: 'column',
  bottom: 'column-reverse',
  left: 'row',
  right: 'row-reverse',
};

