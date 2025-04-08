import { Text, View, StyleSheet, Image, TouchableOpacity, Button, TextInput, ScrollView } from "react-native";
import { useState } from "react";


export default function Count() {
  const [count, setCount] = useState(0);

  //Esse prevCount não é uma variável que você declarou, ele é um parâmetro passado 
  //internamente pelo React quando ele processa a fila de atualizações de estado.
  function aumentar() {
    setCount(prevCount => prevCount + 1);
  }
  function diminuir() {
    if(count>0){
      setCount(prevCount => prevCount - 1);
    }
  }
  //O nome não muda nada — é só pra facilitar a leitura.
  //Mas o valor que o React passa ali sempre será o estado mais recente de COUNT.

  return (
      <View style={styles.container}>
        <Text style={styles.textoHead}>MEU CONTADOR: {count}</Text>
        <View style={styles.buttons}>
        <TouchableOpacity onPress={aumentar} style={styles.buttonView}>+</TouchableOpacity>
        <TouchableOpacity onPress={diminuir} style={styles.buttonView}>-</TouchableOpacity>
        {/* <Button
                title="+"
                color="orange"
                onPress={aumentar}
                />
        <Button
                title="-"
                color="orange"
                onPress={diminuir}
                />       */}
          </View>  
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      textoHead: {
        alignSelf: "center",
        padding: 50,
        fontWeight: 9900,
        fontSize: 26,
        fontFamily: "Verdana",
        color: 'black',
      },
      buttons: {
        margin: 10,
        display: "flex",
        flexDirection: "row",
      },
      buttonView: {
        padding: 10,
        margin: 10,
        borderRadius: 4,
        backgroundColor: "orange",
      }
})
