import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { AntDesign } from "@expo/vector-icons";

export default function BuyButtom() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="shoppingcart" size={24} color='#fff' style={styles.icon}/>
        <Text style={styles.buttonText}>Buy This</Text>
      </TouchableOpacity>
    </View>
  );
}
