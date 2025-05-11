import MealItem from "@/Components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummyData";

import { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

// or get route from useRoute
function MealsOverviewScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const categoryId = route?.params?.categoryId || "";

  const meal = MEALS.filter((data: any) =>
    data.categoryIds.includes(categoryId)
  );
  const categoryTitle = CATEGORIES.find(
    (data: any) => data.id == categoryId
  )?.title;



//   useLayyoutEffect can be used to execute it side by side component loading.
  useEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);


  function handlePress(mealId:string){
    navigation.navigate("MealDetailScreen",{mealId})
  }

  function RenderItem(Item: any) {
    return (
      <MealItem
        onPress={()=>handlePress(Item.id)}
        title={Item.title}
        imageUrl={Item.imageUrl}
        duration={Item.duration}
        complexity={Item.complexity}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={meal}
        renderItem={(data: any) => RenderItem(data.item)}
        keyExtractor={(data: any) => data.id}
        contentContainerStyle={styles.listHolder}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  listHolder: {
    gap: 16,
  },
});
