import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/data";
import { useRoute } from "@react-navigation/native";
import { useMemo } from "react";
import MealItem from "../components/MealItem";

const MealsOverview = ({ navigation, route }) => {
  // const route = useRoute();
  const { categoryId } = route.params;
  const meals = useMemo(
    () => MEALS.filter((el) => el.categoryIds.includes(categoryId)),
    [categoryId]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem meal={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverview;
