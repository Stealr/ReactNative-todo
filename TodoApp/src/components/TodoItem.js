// TodoItem.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import BouncyCheckbox from "react-native-bouncy-checkbox";


const TodoItem = ({ item, onDelete, onEdit, onCheck }) => {
    // const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.todoItem}>
            <BouncyCheckbox
                isChecked={item.check}
                onPress={(checked) => onCheck(checked, item.id)}
                text={item.text}
                textStyle={styles.todoText}
                fillColor="#2196F3"
                unfillColor="#FFFFFF"
                iconStyle={{ borderColor: '#6200EE' }}
            />

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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#e8edf1',
        borderRadius: 5,
        paddingRight: 35,
    },

    todoText: {
        fontSize: 17,
        color: '#000',
        width: '90%',
    },

    menuTrigger: {
        fontSize: 28,
        width: 30,
        textAlign: 'center',
        paddingBottom: 6,
    },

    menuOption: {
        padding: 10,
    },
});

export default TodoItem;
