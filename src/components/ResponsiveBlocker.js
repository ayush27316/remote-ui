import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const ResponsiveBlocker = ({ children, minWidth = 1024 }) => {
  const [screenData, setScreenData] = useState(Dimensions.get('window'));
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const onChange = (result) => {
      setScreenData(result.window);
      setIsBlocked(result.window.width < minWidth);
    };

    const subscription = Dimensions.addEventListener('change', onChange);
    setIsBlocked(screenData.width < minWidth);

    return () => subscription?.remove();
  }, [minWidth, screenData.width]);

  if (isBlocked) {
    return (
      <View style={styles.blockerContainer}>
        <View style={styles.blockerContent}>
          <Text style={styles.blockerTitle}>Desktop Experience Required</Text>
          <Text style={styles.blockerMessage}>
            This application is optimized for larger screens.{'\n'}
            Please switch to a laptop or desktop computer for the best experience.
          </Text>
          <View style={styles.minRequirement}>
            <Text style={styles.requirementText}>
              Minimum width: {minWidth}px{'\n'}
              Current width: {Math.round(screenData.width)}px
            </Text>
          </View>
        </View>
      </View>
    );
  }

  return children;
};

const styles = StyleSheet.create({
  blockerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0a0a0a',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    padding: 40,
  },
  blockerContent: {
    maxWidth: 400,
    alignItems: 'center',
    textAlign: 'center',
  },
  blockerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 16,
    textAlign: 'center',
  },
  blockerMessage: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 32,
  },
  minRequirement: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  requirementText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    fontFamily: 'monospace',
  },
});

export default ResponsiveBlocker;
