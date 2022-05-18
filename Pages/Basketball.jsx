import { TouchableOpacity, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { React, useState, useEffect } from "react";
import Card from '../Components/Stadium/CardComponent'
import { getBStadium } from '../db/Stadium/Basketball'

export default function Football({ navigation }) {
  const [stadium, setStadium] = useState([]);
  useEffect(() => {
    getBStadium().then((data) => {
      setStadium(data);
    });
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titlealign}>
        <Text style={styles.title}> Search Component </Text>
      </View>

      {stadium.map((item, index) => {
        return (<Card e={item} key={index} navigation={navigation} />);
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22223b',
  },
  titlealign: {
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#FFF'
  },
});

