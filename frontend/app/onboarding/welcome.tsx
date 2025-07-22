// Example in welcome.tsx
import { ImageBackground, View, Text, StyleSheet, Button } from 'react-native';
import { router } from 'expo-router';

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require('../../assets/images/welcomebg.jpg')}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to `Khaana Express`</Text>
        <Text style={styles.subtitle}>Delicious food, delivered fast</Text>
        <Button title="Get Started" onPress={() => router.push('/onboarding/walk1')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.98)', // Optional: dark overlay
    padding: 20,
    borderRadius: 10,
  },
  title: {
    color: '#333',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#eee',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});
