import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  onPress,
}: {
  title: String;
  imageUrl: string;
  duration: number;
  complexity: string;
  onPress: any;
}) {
  return (
    <View style={style.mainContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [pressed ? style.buttonPressed : null]}
        android_ripple={{ color: "rgb(253, 253, 253)" }}
      >
        <View style={{ backgroundColor: "rgba(0,0,0,0.9)" }}>
          <ImageBackground
            source={{
              uri: imageUrl,
            }}
            style={style.image}
            resizeMode="cover"
          >
            <View style={style.infoContainer}>
              <Text style={style.title}>{title}</Text>
              <View style={style.otherInfo}>
                <View>
                  <Text style={[style.info, { fontSize: 12 }]}>Duration</Text>
                  <Text style={style.info}>{duration} Mins</Text>
                </View>
                <View>
                  <Text
                    style={[style.info, { fontSize: 12, textAlign: "right" }]}
                  >
                    Complexity Level
                  </Text>
                  <Text style={[style.info, { textAlign: "right" }]}>
                    {complexity}
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Pressable>
    </View>
  );
}
export default MealItem;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 250,
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontWeight: 600,
    textAlign: "center",
    fontSize: 16,
    color: "#fff",
  },
  infoContainer: {
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "100%",
    paddingTop: 8,
    paddingBottom: 8,
  },
  otherInfo: {
    paddingLeft: 16,
    paddingRight: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  info: {
    color: "#fff",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
