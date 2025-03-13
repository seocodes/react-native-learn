import { Text, View, StyleSheet, Image } from "react-native";

export default function Test(){
    return(
    <View>
        <View style={styles.container}>
            <View style={styles.containerTextImage}>
                <Text>KFDJSKFDSJKFSDJKFDSJFKDSJ</Text>
                {/* IMAGEM NAO TA INDO */}
                <Image style={{ width: 200, height: 200}} source={require('../assets/images.jpg')} />
            </View>
            <Text>Ai num sei :3</Text>
            <View style={styles.containerTextImage2}>
                <Text>dkfasjgffs</Text>
                <Image style={{width: 200, height: 200}} source={require('../assets/jojo.jpg')} />
            </View>
            <Text style={styles.textoProLado}>alguma coisa</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      containerTextImage: {
        flexDirection: "row",
        margin: 50,
      },
      containerTextImage2: {
        flexDirection: "row-reverse",
        margin: 50,
      },
      textoProLado: {
        alignSelf: "flex-end",
        marginHorizontal: 20,
      }
})
