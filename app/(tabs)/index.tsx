import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task) {
      setTasks((prevTasks) => [...prevTasks, task]);
      setTask('');
    }
  };

  const removeTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      {/* Image at the top center */}
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>To-Do List</Text>

      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Add a new task"
      />

      {/* Custom Add Task Button */}
      <TouchableOpacity onPress={addTask} style={styles.addTaskButton}>
        <Text style={styles.addTaskButtonText}>Add Task</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity onPress={() => removeTask(index)} style={styles.removeButton}>
              <Text style={styles.removeText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontFamily: "cursive",
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#FF69B4',
    marginBottom: 20,
  },
  input: {
    height: 40,
    color:'white',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius:12,
    marginBottom: 10,
    paddingLeft: 8,
  },
  addTaskButton: {
    backgroundColor: '#FF69B4',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  addTaskButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: "cursive",
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  taskText: {
    fontSize: 18,
  },
  removeButton: {
    backgroundColor: '#f44336',
    padding: 5,
    borderRadius: 5,
  },
  removeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
