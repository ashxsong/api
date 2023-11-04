import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundImage from './image/background.jpg';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coffee API</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginBottom: 400,
    fontSize: 40,
    fontFamily: 'Verdana',
    color: 'SaddleBrown'
  },
});
