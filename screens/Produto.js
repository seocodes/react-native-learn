import { Text, View, StyleSheet, Image, Button, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

export default function Login(){
    const [produtos, setProdutos] = useState([
        {id: 1, nome: 'Macarrão', valor: 1.99, img: 'https://mercantilnovaera.vtexassets.com/arquivos/ids/218485/Macarrao-Espaguete-MONDO-Pasta-Embalagem-400g.jpg?v=638605525349870000'},
        {id: 2, nome: 'Banana', valor: 10.00, img: 'https://www.naturaldaterra.com.br/_next/image?url=https%3A%2F%2Fnaturalterra.vtexassets.com%2Farquivos%2Fids%2F155863%2FBanana-Prata-Unidade.jpg%3Fv%3D638778428672100000&w=320&q=75'},
        {id: 3, nome: 'Maçã', valor: 5.00, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/330px-Red_Apple.jpg'},
        {id: 4, nome: 'Urso de pelúcia', valor: 10.00, img: 'https://http2.mlstatic.com/D_NQ_NP_985278-MLB51088524249_082022-O.webp'},
        {id: 5, nome: 'Almofada Naruto', valor: 78.00, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXUqznOm8yX-UlgNt1gqBYGQd7v0ErokE5Q&s'},
        {id: 6, nome: 'Boné Rockstar', valor: 100.00, img: 'https://cdn.awsli.com.br/600x700/17/17021/produto/37234208/6be68d503b.jpg'},
        {id: 7, nome: 'Caixa misteriosa', valor: 2.00, img: 'https://photos.enjoei.com.br/public/1200x1200/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xMjUxMTQzOS8zOTAzNzhjMDA1ZDE0MTI3NjRjMmRmNmYyZjJiYzVkMy5qcGc'},
        {id: 8, nome: 'Mendigo', valor: 1000.00, img: 'https://blog.eporamor.org.br/wp-content/uploads/2024/03/pessoa-situacao-de-rua-ou-mendigo.jpg'},
        {id: 9, nome: 'Kakashi', valor: 20.00, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJdCulK0Qs-pV-jxRHO6C5AyHkJ42lGJ8Dg&s'},
        {id: 10, nome: 'Manga', valor: 5.00, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7z1x7ks3A4Z5p9CvUb66dvHCnTgjaTjn0Q&s'},

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
            {/* {produtos.map((item) => (
                <View style={styles.produtos}>
                    <Text>{item.id}</Text>
                    <Text>{item.nome}</Text>
                    <Text>R${item.valor.toFixed(2)}</Text>
                </View>
            ))} */}
        <FlatList
            style={{ width: '100%' }}   //pro scrollview ficar legal bem do lado ali
            data={produtos}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image style={{width: 200, height: 200}} source={{uri: item.img }}/>
                    <Text style={styles.minorTxt}>ID: {item.id}</Text>
                    <Text style={styles.minorTxt}>{item.nome}</Text>
                    <Text style={styles.minorTxt}>Valor: R${item.valor.toFixed(2)}</Text>
                </View>
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
    card: {
        backgroundColor: '#99ccFF',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        width: '70%',
        margin: 15,
    },
    texto: {
        alignSelf: "center",
        padding: 50,
        fontWeight: 'bold',
        fontSize: 26,
        fontFamily: "Verdana",
        color: 'black',
      },
      minorTxt: {
        alignSelf: "center",
        padding: 5,
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: "Verdana",
        color: 'black',
      },
})


