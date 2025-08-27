import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <SafeAreaViewView style={styles.container}>
    <View style={styles.main}>

    </View>
    <View style={styles.footer}>
      <TouchableOpacity>
        <Ionicons name='heart-outline' size={30} color="#88888"/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='repeat' size={30} color="#8888"/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='share-outiline' size={30} color="#88888"/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name='ellipsis-horizontal' size={30} color="#88888"/>
      </TouchableOpacity>
    </View>
      <StatusBar style="light" />
    </SafeAreaViewView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
