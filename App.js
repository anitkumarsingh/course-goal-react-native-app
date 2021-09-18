import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const App = () => {
	const [outputText, setOutputText] = useState('This is react native app!');
	return (
		<View style={styles.container}>
			<Text>{outputText}</Text>
			<StatusBar style='auto' />
			<Button
				title='Change Text'
				onPress={() => setOutputText('Text has been changed!')}
			/>
		</View>
	);
};
export default App;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
