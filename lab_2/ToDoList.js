import React from "react";
import { StyleSheet, Pressable, View, Text, ScrollView } from "react-native";

export default function ToDoList({ tasks }) {
  return (
    <View>
      <ScrollView>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Do laundry</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Go to gym</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Walk dog</Text>
          </View>
        </Pressable>
        {tasks.map((index, task) => {
          return (
            <View key={index}>
              <Text>{task}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
    paddingTop: 10,
  },
  taskText: {
    fontSize: 17,
  },
});
