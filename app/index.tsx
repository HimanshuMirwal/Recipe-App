import CategoryScreens from "@/screens/CategoryScreens";
import MealDetailScreen from "@/screens/MealDetailScreen";
import MealsOverviewScreen from "@/screens/MealsOverviewScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <Stack.Navigator
        initialRouteName="MealsCategories"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#351401",
          },
          headerTintColor: "#fff",
          contentStyle: {
            backgroundColor: "#3f2f25",
          },
        }}
      >
        <Stack.Screen
          options={{
            title: "All Categories",
            // headerStyle:{
            //   backgroundColor:"#351401",
            // },
            // headerTintColor:"#fff",
            // contentStyle:{
            //   backgroundColor:"#3f2f25"
            // }
          }}
          name="MealsCategories"
          component={CategoryScreens}
        />
        <Stack.Screen
          // You may set title using route -> that is accessible within component
          options={({ route }: { route: any }) => {
            const c_id = route.params.categoryId;
            return {
              title: c_id,
            };
          }}
          name="MealsOverViewScreen"
          component={MealsOverviewScreen}
        />
        <Stack.Screen
          name="MealDetailScreen"
          component={MealDetailScreen}
          // options={{
          //   headerRight: () => (
          //     <Button
          //       onPress={() => alert("Button in titlebar pressed")}
          //       title="Info"
          //       color="#000"
          //     />
          //   ),
          // }}
        />
      </Stack.Navigator>
    </>
  );
}
