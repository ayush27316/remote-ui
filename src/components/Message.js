import React from 'react';
import {
  Modal as RNModal,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import Button from './Button'
import { Ionicons } from '@expo/vector-icons';



const Modal = ({
  type = 'modal', //'message'
  visible,
  onClick,
  heading,
  description,
  button,
}) => {
  if (!visible) return null;

  if (type === 'modal') {
    return (
      <RNModal
        transparent={false}
        visible={visible}
        onRequestClose={onClick}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalBox}>
            <View style={{padding:10}}>
                {heading}
                {description}
            </View>
            <Button
                onPress={onClick}
                title='OK'
                type='solid'
                fullWidth
                alignTitle='left'
                contentStyle={{fontWeight:'bold', margin:5,}}
                
            />
          </View>
        </View>
      </RNModal>
    );
  }

  if (type === 'message') {
    return (
      <View style={styles.messageContainer}>
        <View style={styles.messageBox}>
          <TouchableOpacity
            onPress={onClick}
            style={styles.closeButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="close" size={20} color="white" />
          </TouchableOpacity>
          {description}
        </View>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
    modalBackdrop: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // semi-transparent dark background
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalBox: {
      width: '80%',
      backgroundColor: '#fff',
      elevation: 5,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 8,
    },
    messageContainer: {
      position: 'absolute',
      top:0,
      left: 0,
      right: 0,
      alignItems: 'center',
      zIndex: 999,
      elevation: 999,
    },
    messageBox: {
      backgroundColor: 'black',
      padding: 16,
      width: '100%',
      elevation: 5,
      position:'relative',
    },
    closeButton: {
        position:'absolute',
        top: 5,
        right: 5,
        backgroundColor:'black',
    },
  });

  
export default Modal;
