import { Text, View, StyleSheet, Image, Button, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Feed() {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
        <Text style={styles.texto}>Bem-vindo à Volleyball Legends League!</Text>
        <Image style={styles.imagem} source={require('../assets/maxresdefault.jpg')} />
        <Text style={styles.flexStartText}>Tipo, olha essa imagem aqui em cima, que bagulho podre slk</Text>
        <View style={styles.containerImage2}>
            <Image style={{width: 200, height: 200}} source={{uri: "https://s2-techtudo.glbimg.com/u3vKbXlaZUYJmatjvpfFF48kbak=/0x0:768x432/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2025/U/K/lixrvFQXSdI0KK8E6FKA/imagem-2025-03-18-232418064.png"}}/>
            <Image style={{width: 200, height: 200}} source={{uri: 'https://dotesports.com/wp-content/uploads/2025/02/haikyuu-volleyball-legends-tier-list-best-styles-abilities-ranked-mode-update.jpg',}} />
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
        alignSelf: "center",
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
