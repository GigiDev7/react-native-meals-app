import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useContext, useLayoutEffect } from "react";
import { MEALS } from "../data/data";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/context/favourites-context";

const MealDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { mealId } = route.params;
  const meal = MEALS.find((el) => el.id === mealId);

  const favouriteCtx = useContext(FavouritesContext);
  const isMealFavourite = favouriteCtx.ids.includes(mealId);

  const handleHeaderPress = () => {
    if (isMealFavourite) {
      favouriteCtx.removeFavourite(mealId);
    } else {
      favouriteCtx.addFavourite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton
          onPress={handleHeaderPress}
          color="white"
          icon={isMealFavourite ? "star" : "star-outline"}
        />
      ),
    });
  }, [mealId]);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image style={styles.img} source={{ uri: meal.imageUrl }} />
        <Text style={styles.title}>{meal.title}</Text>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{meal.duration}m</Text>
          <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>
            {meal.affordability.toUpperCase()}
          </Text>
        </View>
        <View style={{ width: "80%" }}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Ingredients</Text>
          </View>
          {meal.ingredients.map((el) => (
            <View style={styles.listItem} key={el}>
              <Text style={styles.itemText}>{el}</Text>
            </View>
          ))}
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Steps</Text>
          </View>
          {meal.steps.map((el) => (
            <View style={styles.listItem} key={el}>
              <Text style={styles.itemText}>{el}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    marginBottom: 16,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 13,
    color: "white",
  },
  img: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  subTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});

export default MealDetails;
