import { Text, View, StyleSheet, Image, Button, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';  //para os componentes/funções que são as screens a gente importa somente isso
import { ImageBackground } from "react-native-web";

export default function Login(){
  const navigation = useNavigation();  //para poder navegar entre paginas
    return(
      <View style={styles.container}>
            <Text style={styles.creditos}>VOLLEYBALL LEGENDS LEAGUE</Text>
            <TextInput
            style={styles.txtinput}
            placeholder="Nome"
            />

            <TextInput
            style={styles.txtinput}
            placeholder="Senha"
            />

            <Button
              title="Enviar"
              color="black"
              onPress={() =>
                navigation.navigate("Home")  //navega p home
              }
            />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
,      },
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
        fontSize: 24,
        fontWeight: 800,
      },
      flexStartText: {
        alignSelf: "flex-end",
        padding: 10,
      },
      txtinput: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
        margin: 6,
      }
})


