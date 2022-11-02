import { useContext } from "react";
import { Text, View } from "react-native";
import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/data";
import { FlatList } from "react-native-gesture-handler";

const Favourites = () => {
  const favouritesCtx = useContext(FavouritesContext);

  const favMeals = MEALS.filter((item) => favouritesCtx.ids.includes(item.id));

  return (
    <View style={styles.container}>
      <FlatList
        data={favMeals}
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

export default Favourites;
