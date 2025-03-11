import { Text, View, StyleSheet } from "react-native";

export default function Profile(){
    return(
        <View style={styles.containerProfile}>
            <Text>Meu primeiro componente!</Text>
        </View>
    );
}

export function Gallery(){ 
   //export é pra caso precise importar em outro arquivo, pra botar ali dentro do profile não precisaria do export
    return(
      <View style={styles.containerGallery}>
        <Text>Essa é a minha galeria!</Text>
      </View>
    );
  }

  export function Artists(){
    return(
      <View style={styles.containerArtists}>
        <Text>Esses são os artistas.</Text>
      </View>
    );
  }


const styles = StyleSheet.create({
  containerProfile: {
    flex: 1, 
    backgroundColor: '#fff',
  },
  containerGallery: {
    flex: 2, 
    backgroundColor: '#fff000',
  },
  containerArtists: {
    flex: 3, 
    backgroundColor: '#FF0000',
  },
})