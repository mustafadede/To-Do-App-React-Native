import { StyleSheet, View, Text, Pressable } from "react-native";

function GaolItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={props.onDeleteItem.bind(this, props.id)}
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
    backgroundColor: "#B2B2B2",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  goalText: {
    color: "white",
    fontWeight: "bold",
  },
});
