import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
const TodoItem = ({ item, onDelete }) => {
    return (
        <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
            <Button title="Удалить" onPress={() => onDelete(item.id)} />
        </View>
    );
};
const styles = StyleSheet.create({
    todoItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f8f9fa',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    todoText: {
        fontSize: 16,
    },
});
export default TodoItem;