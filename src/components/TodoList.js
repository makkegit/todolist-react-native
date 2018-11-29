import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons'

const TodoList = ({ todos, toggleTodo }) => (
    <ScrollView style={{ padding: 25, width: window.width, margin:10 }}>
        {todos.map(todo =>
            <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
            <View style={{  flexDirection: "row", justifyContent:"flex-start", alignItems:"center", padding: 5}}>
            <FontAwesome name="hand-o-right" size={20}/>
                <Text style={{
                    fontSize: 24,
                    textDecorationLine: todo.completed ? 'line-through' : 'none'
                }}>{todo.text}</Text>
                 </View>
            </TouchableOpacity>     
        )}        
    </ScrollView>
)
export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});