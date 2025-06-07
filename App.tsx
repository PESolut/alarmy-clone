import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Alarm } from './src/components/Alarm';

export default function App() {
  const handleAlarmSet = (time: Date) => {
    console.log('Alarm set for:', time);
    // TODO: Implement actual alarm functionality
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>alarmy-clone</Text>
      <Alarm onAlarmSet={handleAlarmSet} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    position: 'absolute',
    top: 50
  }
});

