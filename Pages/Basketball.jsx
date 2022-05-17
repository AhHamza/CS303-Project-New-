import { TouchableOpacity, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { React, useState, useEffect } from "react";
import Item from '../Components/Stadium/CardComponent'
import { getBStadium } from '../db/Stadium/Basketball'

export default function Football({ navigation }) {
  const [stadium, setStadium] = useState([]);
  useEffect(() => {
    getBStadium().then((data) => {
      setStadium(data);
    });
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}> Search Component </Text>
        {stadium.map((item, index) => {
          return (<Item e={item} key={index} navigation={navigation} />);
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
});

