import React , { Component } from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { AntDesign } from 'react-native-vector-icons';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

class AddToDo extends Component {
  
      state = {
         text: ''
      }
  addTodo = (text) => {
      //redux store 
      this.props.dispatch(addTodo(text))
      this.setState({ 
        text: '' 
      })
  }

  render() {
      return (
          <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
              <TextInput
                  onChangeText={(text) => this.setState({ text })}
                  value={this.state.text}
                  placeholder="Press to write your todo! "
                  style={{ borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5 }}
              />
              <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                  <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
                      <AntDesign name="plussquareo" size={65} style={{ color: '#1e2366', padding: 5 }} />
                  </View>
              </TouchableOpacity>
          </View>
      );
  }
}

export default connect()(AddToDo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
