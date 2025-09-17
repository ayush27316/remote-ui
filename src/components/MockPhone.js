import React from "react";
import { View, StyleSheet } from "react-native";



const MockPhone = ({ component: Child, ...props }) => {
  return (
    <View style={styles.container}>
      <View style={styles.phoneFrame}>
        <View style={styles.notch} />
        <View style={[styles.button, styles.powerButton]} />
        <View style={[styles.button, styles.volumeUp]} />
        <View style={[styles.button, styles.volumeDown]} />
        <View style={[styles.button, styles.muteSwitch]} />
        <View style={styles.screen}>
          <Child {...props} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
  },
  phoneFrame: {
    position: "relative",
    backgroundColor: "white",
    borderRadius: 40,
    padding: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 16,
    borderWidth: 2,
    borderColor: "#374151",
    width: 320,
    height: 660, 
  },
  notch: {
    position: "absolute",
    top: 12,
    left: "50%",
    transform: [{ translateX: -44 }],
    width: 88,
    height: 25,
    backgroundColor: "#000000",
    borderRadius: 12,
    zIndex: 1000,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  screen: {
    flex: 1,
    backgroundColor: "#000000",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: "hidden",
    margin: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    marginTop: 30,
  },
  screenReflection: {
    position: "absolute",
    top: 8,
    left: 8,
    right: 8,
    height: "25%",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    pointerEvents: "none",
  },
  button: {
    position: "absolute",
    backgroundColor: "#4b5563",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  powerButton: {
    right: -3,
    top: "25%",
    width: 3,
    height: 44,
  },
  volumeUp: {
    left: -3,
    top: "20%",
    width: 3,
    height: 31,
  },
  volumeDown: {
    left: -3,
    top: "32%",
    width: 3,
    height: 31,
  },
  muteSwitch: {
    left: -2,
    top: "15%",
    width: 2,
    height: 15,
  },
});

export default MockPhone;