import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default ({ term, setTerm, submitTerm }) => {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign style={styles.icon} name="search1" size={24} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={setTerm}
        onEndEditing={submitTerm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
  },
});
