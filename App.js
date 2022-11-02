import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./screens/Categories";
import MealsOverview from "./screens/MealsOverview";
import { CATEGORIES } from "./data/data";
import MealDetails from "./screens/MealDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favourites from "./screens/Favourites";
import { Ionicons } from "@expo/vector-icons";
import { FavouritesContextProvider } from "./store/context/favourites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="list" />
          ),
        }}
        name="Categories"
        component={Categories}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons size={size} color={color} name="star" />
          ),
        }}
        name="Favourites"
        component={Favourites}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="MealsCategories"
              component={DrawerNavigator}
            />
            <Stack.Screen
              /*  options={({ route, navigation }) => {
              const { categoryId } = route.params;
              const category = CATEGORIES.find((el) => el.id === categoryId);
              return {
                title: category.title,
              };
            }} */
              name="MealsOverview"
              component={MealsOverview}
            />
            <Stack.Screen
              /*  options={{
              headerRight: () => {
                return <Button title="Tap me" />;
              },
            }} */
              name="MealDetails"
              component={MealDetails}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
