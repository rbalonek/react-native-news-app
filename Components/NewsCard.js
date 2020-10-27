import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const NewsCard = ({}) => {
  return (
    <View style={styles.cardView}>
      <Text style={styles.title}>
        Scientists kill 85 murder hornets and capture 13 alive: This is only the
        start
      </Text>
      <Text style={styles.author}>CBS News</Text>
      <Image style={styles.image} />
      <Text style={styles.description}>
        Researchers were disturbed to see a children's playset only about 30
        feet away form the nest.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "white",
    margin: width * 0.02,
    borderRadius: width * 0.05,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 3,
  },
  title: {
    marginHorizontal: width * 0.05,
    margin: width * 0.03,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  author: {
    marginVertical: height * 0.0,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: "gray",
  },
  image: {
    width: width,
    height: height / 6,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },

  description: {
    // width: width,
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.02,
    // margin: width * 0.05,
    color: "gray",
    fontSize: 18,
  },
});

export default NewsCard;
