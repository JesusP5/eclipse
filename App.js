import {useRef, useEffect} from 'react';
import { StyleSheet, Text, View, Animated,TouchableOpacity } from 'react-native';

export default function App() {
  const moonAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(moonAnimation, {
      toValue: 1,
      duration: 15000,
      useNativeDriver: false,
    }).start();
  }, []);

  const moonLeft = moonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '78%']
  });
  const backeclipseColor = moonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ffff00', '#000000']
  });

  return (
    <View style={styles.container}>
      <Text  style={styles.textStyle} >Eclipse 2024 🌒</Text>
      <Animated.View style={{left: backeclipseColor}}>
      <Animated.View
        style={styles.sun}
      />
      <Animated.View
        style={[styles.moon, {left: moonLeft}]}/>
        </Animated.View>
    <TouchableOpacity style={styles.buttonEclipse}>
      <Text>Hagase la noche</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 120,
    marginTop: 80,
  },
  sun: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: '#ffff00',
    marginLeft: 135
  },
  moon: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#000000',
    position: 'absolute',
    marginTop: 20,

  },
  buttonEclipse: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
    width: 200,
    marginLeft: 100,
    alignItems: 'center',
  },
});