import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/header';
import TodoItemList from './components/ToDoItemList';
import CreateTodoList from './components/CreateToDoList';

export default function App() {
  //define a state variable
  const [task, setTask] = useState([
    { task_name: 'Wake up at 4AM', task_id: 1 },  //item1
    { task_name: 'Have Coffee', task_id: 2 },  //item2
    { task_name: 'Go to Gym', task_id: 3 },    //item3
    { task_name: 'Take Shower', task_id: 4 },
    { task_name: 'have breakfast', task_id: 5 },
    { task_name: 'Prepare for CPRG303 lecture', task_id: 6 },
    { task_name: 'Deliver CPRG303 lecture', task_id: 7 },
    { task_name: 'Prepare for cprg307', task_id: 8 },   //item8
  ]);

  //const [text, setText] = useState("")

  const clickHandler = (task_id) => {
    console.log(task_id)
    setTask((prevTask) => { return prevTask.filter(task => task.task_id != task_id) })
    // task.task_id!=task_id if it returns TRUE keep that item in the list , otherwise filterout that item from the list
  }
  //text box
  //const chnageHandler = (val) => {
  //setText(val)
  // }
  //submitbutton
  const submitHandler = (text) => {
    setTask((prevTask) => { return [{ task_name: text, task_id: Math.random().toString() }, ...prevTask] })
  }
  return (
    <View style={styles.container}>
      <Header />
	  
	  <View style={styles.content}>
	  <CreateTodoList submitHandler={submitHandler} />
	  </View>
      

      {/* 
        {task.map((item) => { return (<View key={item.task_id}><Text style={styles.list}>{item.task_name}</Text></View>) })} */}
	<View style={styles.list}>
		 <FlatList keyExtractor={(item) => item.task_id} data={task} renderItem={({ item }) => (
        <TodoItemList item={item} clickHandler={clickHandler} />

      )} />
	</View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1ee',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  content:{
	  padding: 4,
	  flex: 1,
	  backgroundColor: 'aqua',
  },
  list: {
    backgroundColor: 'red',
    //fontSize: 20,
   // marginHorizontal: 10,
    marginTop: 20,
    //padding: 20,
	flex: 1,
  },
 
})