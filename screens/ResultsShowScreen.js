import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

export default ({ route, navigation }) => {
  const { id } = route.params;
  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.info}>{result.display_phone}</Text>
      <Text style={styles.info}>{result.location.address1}</Text>
      <Text style={styles.info}>{result.location.address2}</Text>
      <Text style={styles.info}>{result.location.address3}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  name: { fontSize: 20, fontWeight: 'bold' },
  info:{
    fontSize:15,
  },
  image: {
    height: 200,
    width: 300,
  },
});
