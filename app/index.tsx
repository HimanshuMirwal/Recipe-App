import CategoryScreens from "@/screens/CategoryScreens";
import FavouriteScreen from "@/screens/FavouriteScreen";
import MealDetailScreen from "@/screens/MealDetailScreen";
import MealsOverviewScreen from "@/screens/MealsOverviewScreen";
// import FavouriteContextProvider from "@/store/context/Favourite";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import { Provider } from "react-redux";
import { store } from "../store/redux/store";


// Stack navigator for meals
function MealsDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: "#351401" },
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#ccc",
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "#fff",
        sceneStyle:{
          backgroundColor:"#3f2f25"      // when we use this container than styles goes away. by using this we can apply bg styles
        },
        drawerContentStyle:{
          backgroundColor:"#351401" // high light selected tab
        }
      }}
    >
      <Drawer.Screen
        name="Meals"
        component={CategoryScreens}
        options={{ title: "Meals",
          drawerIcon:({size, color})=><Ionicons name="list" size={size} color={color}/>
         }}

      />
      <Drawer.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{ 
          title: "Favourite Meals",
          drawerIcon:({size, color})=><Ionicons name="star" size={size} color={color}/>
         }}
      />
    </Drawer.Navigator>
  );
}

export default function Index() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      {/* <FavouriteContextProvider>  // This was done using react context api */}
      <Provider store={store}>
      <Stack.Navigator
        initialRouteName="MealsCategories"
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "#fff",
          contentStyle: { backgroundColor: "#3f2f25" },
        }}
      >
        <Stack.Screen
          name="MealsCategories"
          component={MealsDrawer}
          options={{
            title: "Meals",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MealsOverViewScreen"
          component={MealsOverviewScreen}
          options={{ title: "Meals Overview" }}
        />
        <Stack.Screen
          name="MealDetailScreen"
          component={MealDetailScreen}
          options={{ title: "Meal Detail" }}
        />
      </Stack.Navigator>
      </Provider>
      {/* </FavouriteContextProvider> */}
    </>
  );
}
