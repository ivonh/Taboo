import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Where did TABOO start?",
    blurb:
      "In early 2016, high school besties Isobel Marshall and Eloise Hall attended an inspiring leadership conference where they were first introduced to the Social Enterprise model of business. As young people with a burning passion for ...",
    image: require("../assets/blog.webp"),
  },
  {
    id: 2,
    title: "TABOO's Mission",
    blurb:
      "To sell period products in Australia, with all company profits, education initiatives and advocacy efforts dedicated to eradicating period poverty through systematic and social change.",
    image: require("../assets/blog2.webp"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"Blog- " + item.blurb}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
