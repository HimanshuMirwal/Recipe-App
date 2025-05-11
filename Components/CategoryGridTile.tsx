import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoryGridTile({
  title,
  color,
  onPress,
}: {
  title: String;
  color: string;
  onPress: any;
}) {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    height: 150,
    elevation: 4,
    shadowColor: "black", // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 0.25, // iOS shadow opacity
    shadowRadius: 4, // iOS shadow blur radius
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
  },
});
