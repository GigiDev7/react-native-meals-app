import { Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/data";

const MealsOverview = () => {
  return (
    <View style={styles.container}>
      <Text>Meals </Text>
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
