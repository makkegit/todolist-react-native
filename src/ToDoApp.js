import React , { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddToDo from './containers/AddToDo';
import VisibleTodos from './containers/VisibleTodos';


class ToDoApp extends Component {
    
  render() {
    return (
      <View style={styles.container}>
        <AddToDo/>
        
        <View>
          <VisibleTodos/>
        </View>     
      </View>
    );
  }
}

export default ToDoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,

  },
});
