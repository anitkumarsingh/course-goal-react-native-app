import React,{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const App = () => {
	const [enteredGoal,setEnteredGoal] = useState('');
	const [currentGoal,setCurrentGoal] = useState([]);

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
       <TextInput  placeholder="Enter your course goal" style={styles.textInput} onChangeText={(e)=>setEnteredGoal(e)} value={enteredGoal}/>
			 <Button title="ADD" onPress={()=>setCurrentGoal(current=>[...current,enteredGoal])}/>
			</View>
			<View>
         {currentGoal.map((goal,index)=><View key={index} style={styles.listItem}><Text >{goal}</Text></View>)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
	padding:50
	},
	inputContainer:{
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center'
	},
	textInput:{
		borderBottomColor:'black',
		borderBottomWidth:1,
		marginBottom:5,
		fontSize:20,
		padding:5
	},
	listItem:{
		padding:3,
    marginVertical:5,
		borderRadius:5,
		backgroundColor:'#f3f3f3',
		color:'white'
	}
});

export default App;