import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import NewsCard from "../Components/NewsCard";

const News = ({ navigation }) => {
  return (
    <View>
      <Text>News Screen</Text>
      <NewsCard></NewsCard>
    </View>
  );
};

export default News;
