import { StyleSheet, View, Text, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
function GaolItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#42291c" }}
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GaolItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 10,
    backgroundColor: "#a065ec",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    fontWeight: "bold",
  },
});
