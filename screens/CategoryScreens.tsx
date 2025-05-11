import { FlatList } from "react-native";

import CategoryGridTile from "@/Components/CategoryGridTile";
import { CATEGORIES } from "@/data/dummyData";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
type CategoryScreensProps = {
  navigation: NativeStackNavigationProp<any>;
};
function CategoryScreens({ navigation }: CategoryScreensProps) {
  function RenderCategoryItem({ item }: { item: any }) {
    function onPressHandler() {
      navigation.navigate("MealsOverViewScreen", { categoryId :  item.id });
    }
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={onPressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id.toString()}
      renderItem={RenderCategoryItem}
      numColumns={2}
    />
  );
}
export default CategoryScreens;
