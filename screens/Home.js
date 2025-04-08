import { Text, View, StyleSheet, Image, Button, TextInput, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Home() {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textoHead}>VOLLEYBALL LEGENDS</Text>
        <Text style={styles.texto}>Em 2029, ganhou o prêmio de melhor jogo do mundo!</Text>
        <Text style={styles.texto}>Volleyball Legends é um jogo popular no Roblox que mistura ação, estratégia e trabalho em equipe em partidas eletrizantes de vôlei. Criado por desenvolvedores da comunidade Roblox, o jogo atrai jogadores de todas as idades que curtem esportes e competição online.
No jogo, os jogadores controlam personagens estilizados em quadras de vôlei, disputando partidas 1v1, 2v2 ou até em modos personalizados. A mecânica é simples de aprender, mas difícil de dominar — exige bons reflexos, posicionamento e, principalmente, trabalho em equipe. O destaque vai para os movimentos acrobáticos, como pulos altos, bloqueios e cortadas poderosas.(oposto) que existe na história do jogo</Text>
        <Image style={{width: 200, height: 200}} source={{uri: "https://powerupgaming.co.uk/wp-content/uploads/IMG_4053.webp"}}/>
        <View style={styles.button}>
        <Button
                title="SAIBA MAIS"
                color="orange"
                onPress={() =>
                    navigation.navigate("Feed")
                }
                />
        </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
      texto: {
        alignSelf: "center",
        padding: 30,
      },
      textoHead: {
        alignSelf: "center",
        padding: 50,
        fontWeight: 9900,
        fontSize: 26,
        fontFamily: "Verdana",
        color: 'orange',
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
      button: {
        margin: 10,
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
