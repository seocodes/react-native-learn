import { Text, View, Image, StyleSheet } from "react-native";

export default function CardProduct({id,nome,valor,img}){
    return(
        <View style={styles.card}>
            <Image style={styles.img} source={{uri: img }}/>
            <Text style={styles.minorTxt}>ID: {id}</Text>
            <Text style={styles.minorTxt}>{nome}</Text>
            <Text style={styles.minorTxt}>R${valor.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#99ccFF',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        width: 310,
        margin: 15,
    },
      minorTxt: {
        alignSelf: "center",
        padding: 5,
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: "Verdana",
        color: 'black',
      },
      img: {
        width: 200, 
        height: 200,
      },
})