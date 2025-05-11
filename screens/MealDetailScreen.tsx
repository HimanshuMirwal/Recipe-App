import IconButton from "@/Components/IconButton";
import { MEALS } from "@/data/dummyData";
import { useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../store/redux/Favourites";

function MealDetailScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {

  // const FavouriteCtx = useContext(FavouriteContext);
  const FavouriteCtx = useSelector((state:any)=>state?.favouriteMeal?.ids);

  const dispatch = useDispatch();

  const recipeId = route?.params?.mealId || "";

  const recipe = MEALS.find((data: any) => data.id == recipeId);

  const isFavMeal = FavouriteCtx.includes(recipeId);


   function handleHeaderButton(){
      if(isFavMeal){
        dispatch(removeFav({id : recipeId}))
        // FavouriteCtx.removeFav(recipeId)
      }else{
        dispatch(addFav({id : recipeId}))
        // FavouriteCtx.addFav(recipeId)
      }
   }

  useEffect(() => {
    navigation.setOptions({
      title: recipe?.title,
      headerRight: () => (
       <IconButton onPress={handleHeaderButton} color={"#fff"} icon={isFavMeal ? "star" : "star-outline"} />
      ),
    });
  }, [recipeId, navigation, isFavMeal]);

  return (
    <View style={styles.mainContainer}>
      <Image source={{ uri: recipe?.imageUrl }} style={styles.image} />
      <View
        style={[
          {
            width: "100%",
            padding: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          },
        ]}
      >
        <Text style={[styles.text14, { textAlign: "left" }]}>
          {recipe?.duration} Mins
        </Text>
        <Text
          style={[
            styles.text14,
            { textAlign: "center", textTransform: "capitalize" },
          ]}
        >
          {recipe?.affordability}
        </Text>
        <Text
          style={[
            styles.text14,
            { textAlign: "right", textTransform: "capitalize" },
          ]}
        >
          {recipe?.complexity}
        </Text>
      </View>
      <ScrollView alwaysBounceVertical={false}>
        <View
          style={[
            styles.flex,
            {
              paddingTop: 0,
              width: "100%",
              flexDirection: "column",
              justifyContent: "flex-start",
            },
          ]}
        >
          <Text style={[styles.text16, { marginBottom: 16 }]}>Ingredients</Text>
          <View>
            {recipe?.ingredients.map((item, index) => {
              return (
                <Text key={item} style={styles.text14}>
                  {index + 1}. {item}
                </Text>
              );
            })}
          </View>
        </View>
        <View
          style={[
            styles.flex,
            {
              width: "100%",
              flexDirection: "column",
              justifyContent: "flex-start",
            },
          ]}
        >
          <Text style={[styles.text16, { marginBottom: 16 }]}>Steps</Text>
          <View>
            {recipe?.steps.map((item, index) => {
              return (
                <Text key={item} style={styles.text14}>
                  {index + 1}. {item}
                </Text>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
  },
  image: {
    height: 200,
    width: "100%",
    overflow: "hidden",
  },
  flex: {
    flex: 1,
    padding: 16,
  },
  text16: {
    fontSize: 16,
    fontWeight: 600,
    color: "#ffff",
  },
  text14: {
    fontSize: 14,
    fontWeight: 400,
    color: "#ffff",
  },
});
