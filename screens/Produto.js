import { Text, View, StyleSheet, Image, Button, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

export default function Login(){
    const [produtos, setProdutos] = useState([
        {id: 1, nome: 'Macarrão', valor: 1.99},
        {id: 2, nome: 'Banana', valor: 10.00},
        {id: 3, nome: 'Abacaxi', valor: 5.00},
    ]);

    function adicionarProduto(nome, valor){
         const idNovoProduto = produtos.length + 1;
         setProdutos([...produtos, {id: idNovoProduto, nome: nome, valor: valor}])
    }

    function removerProduto(id){
        setProdutos(produtos.filter(produto => produto.id !== id));
    }

    return(
      <View style={styles.container}>
            <Text style={styles.texto}>Produtos</Text>
            {produtos.map((item) => (
                <View style={styles.produtos}>
                    <Text>{item.id}</Text>
                    <Text>{item.nome}</Text>
                    <Text>R${item.valor.toFixed(2)}</Text>
                </View>
            ))}
            <FlatList
                data={produtos}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View style={styles.produtos}>
                    <Text>{item.id}</Text>
                    <Text>{item.nome}</Text>
                    <Text>R${item.valor.toFixed(2)}</Text>
                </View>
                )}
                />
      </View>
          )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",      
    },
    texto: {
        alignSelf: "center",
        padding: 50,
        fontWeight: 5000,
        fontSize: 26,
        fontFamily: "Verdana",
        color: 'black',
      },
      produtos: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
      },

})


