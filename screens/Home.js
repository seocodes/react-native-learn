import { Text, View, StyleSheet, Image, Button, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <Text style={styles.texto}>JoJo's Bizarre Adventure é uma péssima obra japonesa!</Text>
        <Image style={styles.imagem} source={require('../assets/images.jpg')} />
        <Text style={styles.flexStartText}>Tipo, olha essa imagem aqui em cima, que bagulho podre slk</Text>
        <View style={styles.containerImage2}>
            <Image style={{width: 200, height: 200}} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRym01j0jv-Bq1vW8dBm6bz4KeEFvhMeO7sYA&s"}}/>
            <Image style={{width: 200, height: 200}} source={{uri: 'https://m.media-amazon.com/images/I/81gP0g-WoJL._AC_UF894,1000_QL80_.jpg',}} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      },
      texto: {
        alignSelf: "flex-start",
        padding: 50,
      },
      imagem: {
        alignSelf: "flex-end",
        width: 200,
        height: 200,
      },
      containerImage2: {
        flexDirection: "row-reverse",
        justifyContent: "space-around",
        alignItems: "center",
      },
      creditos: {
        alignSelf: "center",
      },
      flexStartText: {
        alignSelf: "flex-end",
        padding: 10,
      },
      txtinput: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
      }
})
