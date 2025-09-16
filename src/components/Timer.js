import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const pad = (num) => String(num).padStart(2, '0');

const Timer = ({ initialHours = 0, initialMinutes = 0 }) => {
  const [totalSeconds, setTotalSeconds] = useState(initialHours * 3600 + initialMinutes * 60);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (totalSeconds <= 0) return;

    intervalRef.current = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>
        {pad(hours)}:{pad(minutes)}:{pad(seconds)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    backgroundColor:'white',
    padding:8,
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    fontVariant: ['tabular-nums'],
  },
});

export default Timer;
