// HomeScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import TodoList from '../components/TodoList';
import Dialog from 'react-native-dialog';

const HomeScreen = () => {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);

    const [visible, setVisible] = useState(false);

    const [editText, setEditText] = useState('');
    const [editId, setEditId] = useState(null);

    const addTodo = () => {
        if (text.trim()) {
            setTodos([...todos, { id: Date.now(), text }]);
            setText('');
        }
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const openEditDialog = (id) => {
        const currentTodo = todos.find(todo => todo.id === id);
        if (currentTodo) {
            setEditText(currentTodo.text);
            setEditId(id);
            setVisible(true);
        }
    };

    const saveEdit = () => {
        if (editText.trim()) {
            setTodos(todos.map(todo =>
                todo.id === editId ? { ...todo, text: editText } : todo
            ));
            setVisible(false);
            setEditText('');
            setEditId(null);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Введите задачу"
                value={text}
                onChangeText={setText}
            />
            <Button title="Добавить" onPress={addTodo} />
            <TodoList todos={todos} onDelete={deleteTodo} onEdit={openEditDialog} />


            {/* Диалоговое окно для редактирования задачи */}
            <Dialog.Container visible={visible}>
                <Dialog.Title>Редактировать задачу</Dialog.Title>
                <Dialog.Input
                    value={editText}
                    onChangeText={setEditText}
                />
                <Dialog.Button label="Отмена" onPress={() => setVisible(false)} />
                <Dialog.Button label="Сохранить" onPress={saveEdit} />
            </Dialog.Container>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        padding: 10,
        marginTop: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
});

export default HomeScreen;
