import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";
import React, { useState, useEffect } from 'react';

export default function App() {
  const URL = 'https://coffee.alexflipnote.dev/'
  const [data, setData] = useState([])

  useEffect(() => {
		const fetchData = async () => {
			console.log("Making GET Request");
			try {
				const response = await axios.get(URL)
						 .then((response) => {
						console.log(response)
				}).catch(() => {
          setData(response.data)
				})
			} catch (error) {
        console.error('Failed to fetch data: ', error);
			}
		}

		fetchData()
	}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coffee API</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const renderItem = ({ item }) => {(
  <ComponentForEachItem name={item.name} />
)
  return (
    <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()} 
          renderItem={renderItem}
        />
				{data.map((item) => <ComponentForEachItem name={item.name} />)}
    </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginBottom: 400,
    fontSize: 40,
    fontFamily: 'Verdana',
    color:'#8B4513'
  },
});