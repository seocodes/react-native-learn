import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Profile(){
    return(
        <View>
            <Text>Meu primeiro componente!</Text>
            <Image style = {styles.img}></Image>
        </View>
    )
}

const styles = StyleSheet.create({

})