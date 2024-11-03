// TodoItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

const TodoItem = ({ item, onDelete, onEdit }) => {
    return (
        <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
            <Menu>
                <MenuTrigger>
                    <Text style={styles.menuTrigger}>⋮</Text>
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption onSelect={() => onEdit(item.id)}>
                        <Text style={styles.menuOption}>Редактировать</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => onDelete(item.id)}>
                        <Text style={styles.menuOption}>Удалить</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
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
        flex: 1,
    },
    menuTrigger: {
        fontSize: 28,
        paddingHorizontal: 10,
    },
    menuOption: {
        padding: 10,
    },
});

export default TodoItem;
