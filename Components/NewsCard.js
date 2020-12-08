import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Linking,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const NewsCard = ({ item }) => {
  console.log(item.author);
  return (
    <View style={styles.cardView}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>{item.author}</Text>
      <Image style={styles.image} source={{ uri: item.urlToImage }} />
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Linking.openURL(`${item.url}`);
          }}
        >
          <Text style={styles.buttonText}>Full Article</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "black", // "#aad7e4",
    margin: width * 0.04,
    borderRadius: width * 0.05,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  title: {
    marginHorizontal: width * 0.05,
    margin: width * 0.03,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  author: {
    marginVertical: height * 0.0,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: "white",
  },
  image: {
    height: height / 6,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },

  description: {
    marginVertical: width * 0.05,
    marginHorizontal: width * 0.02,
    color: "gray",
    fontSize: 18,
  },
  buttonView: {
    width: 200,
    alignSelf: "center",
  },
  button: {
    alignSelf: "center",
    backgroundColor: "blue",
    borderRadius: 20,
    bottom: 0,
    width: 200,
    height: 40,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default NewsCard;
