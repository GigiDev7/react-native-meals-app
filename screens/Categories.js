import { CATEGORIES } from "../data/data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

const Categories = ({ navigation }) => {
  const handleNavigation = (catId) => {
    navigation.navigate("MealsOverview", {
      categoryId: catId,
    });
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <CategoryGridTile
          color={item.color}
          title={item.title}
          onPress={() => handleNavigation(item.id)}
        />
      )}
    />
  );
};

export default Categories;
