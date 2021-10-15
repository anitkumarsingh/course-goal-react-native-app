import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {
	return (
		<View style={{padding:50}}>
			<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
       <TextInput  placeholder="Enter your course goal" style={{borderBottomColor:'black',borderBottomWidth:1,marginBottom:5,fontSize:20,padding:5}}/>
			 <Button title="ADD"/>
			</View>
			<View>
         <Text>Coarse goal list display</Text>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default App;