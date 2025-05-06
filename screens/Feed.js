import { Text, View, StyleSheet, FlatList, Image, Button, TextInput } from "react-native";
import { useState } from "react";
import CardProduct from "../components/cardProduct";


export default function Feed() {
  const [produtos, setProdutos] = useState([
    {id: 1, nome: 'CREME', valor: 1.99, img: 'https://epocacosmeticos.vteximg.com.br/arquivos/ids/496104/Creme-Hidratante-Corporal-CeraVe---453gg--1-.jpg?v=637921253848200000'},
    {id: 2, nome: 'GEL DE LIMPEZA', valor: 10.00, img: 'https://cdn.principiaskin.com/media/catalog/product/cache/a11fc81ad62814be31cd922a993aa5ec/p/r/principia-skincare-cosmeticos-gl-01-gel-limpeza-acido-salicilico-glicerina-1_3.jpg'},
    {id: 3, nome: 'ESFOLIANTE', valor: 5.00, img: 'https://images.tcdn.com.br/img/img_prod/696801/esfoliante_labotrat_cereja_150g_17657_1_5dae1f0f307c37d8ad467f6dff2d2ff6.jpg'},
]);

  return (
      <View style={styles.container}>
        <Text style={styles.texto}>Produtos</Text>
        <FlatList
        style={{ width: '100%' }}   //pro scrollview ficar legal bem do lado ali
            data={produtos}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
            <View style={styles.container}>
                <CardProduct
                id = {item.id}
                nome = {item.nome}
                valor = {item.valor}
                img = {item.img}
                />
            </View>
            )}
        />
      </View>
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
        padding: 50,
        fontWeight: 'bold',
        fontSize: 26,
        fontFamily: "Verdana",
        color: 'black',
      },
    
})
