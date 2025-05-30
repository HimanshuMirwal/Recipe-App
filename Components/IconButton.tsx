import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

function IconButton({onPress,color, icon}:{onPress:any, color:string, icon:any}){
    return (
        <Pressable onPress={onPress} style={({pressed})=>pressed && styles.pressed}>
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    )
}

export default IconButton;


const styles = StyleSheet.create({
    pressed :{
        opacity:0.5
    }
})