import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./screens/Categories";
import MealsOverview from "./screens/MealsOverview";
import { CATEGORIES } from "./data/data";
import MealDetails from "./screens/MealDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
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
              title: "Meals Categories",
            }}
            name="Categories"
            component={Categories}
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
    </>
  );
}

const styles = StyleSheet.create({});
