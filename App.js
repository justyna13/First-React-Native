import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: "Tesa", id: 1},
    {name: "Troy", id: 2}
  ]);

  const pressHandler = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text>{item.name}</Text>
            </TouchableOpacity>
        )}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
