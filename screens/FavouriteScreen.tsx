import MealItem from "@/Components/MealItem";
import { MEALS } from "../data/dummyData";

import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

// or get route from useRoute
function FavouriteScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  // const FavMealContextApi = useContext(FavouriteContext);
  const FavMealContextApi = useSelector((state:any)=>state?.favouriteMeal?.ids);

  const recipe = MEALS.filter((data: any) =>
    FavMealContextApi.includes(data.id)
  );

  //   useLayyoutEffect can be used to execute it side by side component loading.

  function handlePress(mealId: string) {
    navigation.navigate("MealDetailScreen", { mealId });
  }

  function RenderItem(Item: any) {
    return (
      <MealItem
        onPress={() => handlePress(Item.id)}
        title={Item.title}
        imageUrl={Item.imageUrl}
        duration={Item.duration}
        complexity={Item.complexity}
      />
    );
  }

    function redirectToCategoryScreen() {
    navigation.navigate("Meals");
  }

  if (recipe.length <= 0) {
    return (
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding:16
        }}
      >
        <Text style={styles.message}>Hungry for favorites? Start adding some meals you love!</Text>
        <View>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={redirectToCategoryScreen}
          >
            <View>
              <Text style={styles.buttonText}>Browse Meals</Text>
            </View>
          </Pressable>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={recipe}
        renderItem={(data: any) => RenderItem(data.item)}
        keyExtractor={(data: any) => data.id}
        contentContainerStyle={styles.listHolder}
      />
    </View>
  );
}

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listHolder: {
    gap: 16,
  },
  message: {
    fontSize: 14,
    color: "#FFF",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#351401",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 2,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
