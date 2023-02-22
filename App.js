import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen></HomeScreen>
      <SobreScreen></SobreScreen>
      <ContatoScreen></ContatoScreen>
      <SurpresaScreen></SurpresaScreen>
    </View>
  );
}

function HomeScreen(){
  return(
    <View>
      <Text>Sou a Homescreen</Text>
    </View>
  )
}

function SobreScreen(){
  return(
    <View>
      <Text>Me chamo Megami</Text>
    </View>
  )
}

function ContatoScreen(){
  return(
    <View>
      <Text>Github: MegamiAy</Text>
    </View>
  )
}

function SurpresaScreen(){
  return(
    <View>
      <Text>ok.</Text>
      <Image source={
        {
          uri: 'https://picsum.photos/300/300'
        }
      }
      
      style={
          {
          height: '300px',
          width: '300px'
        }
      }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
