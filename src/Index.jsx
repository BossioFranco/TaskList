import React, { useContext, useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { Card, RadioButton, Button, Text, Divider, Checkbox, List, Switch, IconButton } from 'react-native-paper';
import { globalStyles } from './components/styles';
import { globalStylesGreen } from './components/styles';
import { ThemeContext } from './components/contexts/ThemeContext';

const Index = () => {
    const themeContext = useContext(ThemeContext)
    const [list, setList] = useState([
        { id: 1, description: 'Lavar los platos ', dueDate: new Date('2024-05-15'), completed: false },
        { id: 2, description: 'Estudiar', dueDate: new Date('2024-05-11'), completed: false },
        { id: 3, description: 'Descansar', dueDate: new Date('2024-05-17'), completed: false },
        { id: 4, description: 'Hacer deporte', dueDate: new Date('2024-05-20'), completed: true },
        { id: 5, description: 'Planchar', dueDate: new Date('2024-05-14'), completed: false },
        { id: 6, description: 'Cocinar', dueDate: new Date('2024-05-21'), completed: true },
        { id: 7, description: 'Hacer las compras', dueDate: new Date('2024-05-26'), completed: false },
        { id: 8, description: 'Jugar', dueDate: new Date('2024-05-18'), completed: false },
        { id: 9, description: 'Arreglar la mesa', dueDate: new Date('2024-05-16'), completed: false },
        { id: 10, description: 'Cortar el pasto', dueDate: new Date('2024-05-22'), completed: false }
    ]);
    const [filter, setFilter] = useState('all');
    const [descriptionOrder, setDescriptionOrder] = useState('ascendant');
    const [dateOrder, setDateOrder] = useState('ascendant');
    const [showFilters, setShowFilters] = useState(false);
    const [style, setStyle] = useState(globalStyles)

    useEffect(() => {
        themeContext.theme ? setStyle(globalStyles) : setStyle(globalStylesGreen)
    }, [themeContext.theme])

    const sortByDescription = () => {
        const newList = [...list];
        newList.sort((a, b) => {
            const propA = a.description.toLowerCase();
            const propB = b.description.toLowerCase();

            if (descriptionOrder === 'ascendant') {
                return propA.localeCompare(propB);
            } else {
                return propB.localeCompare(propA);
            }
        });
        setList(newList);
        setDescriptionOrder(descriptionOrder === 'ascendant' ? 'descendant' : 'ascendant');
    };

    const sortByDate = () => {
        const newList = [...list];
        newList.sort((a, b) => {
            const propA = a.dueDate;
            const propB = b.dueDate;

            if (dateOrder === 'ascendant') {
                return propA - propB;
            } else {
                return propB - propA;
            }
        });
        setList(newList);
        setDateOrder(dateOrder === 'ascendant' ? 'descendant' : 'ascendant');
    };

    const filteredList = list.filter(item => {
        if (filter === 'completed') {
            return item.completed;
        } else if (filter === 'toDo') {
            return !item.completed;
        } else {
            return true;
        }
    });

    const toggleSwitch = () => {
        themeContext.setTheme(!themeContext.theme);
    };

    return (
        <View style={style.container}>
            <View style={style.card}>
                <View style={style.header}>
                    <Text style={style.headerText}>Lista de tareas</Text>
                    <Switch value={themeContext.theme} onValueChange={toggleSwitch} />
                    <IconButton style={{ marginBottom: 5 }} icon={themeContext.theme ? "white-balance-sunny" : 'moon-waning-crescent'} iconColor={themeContext.theme ? '#F8B710' : 'yellow'} onPress={toggleSwitch} />
                </View>
                <Divider />
                <Button style={style.filterButton} labelStyle={style.filterButton.labelStyle} onPress={() => setShowFilters(!showFilters)}>Filtros {showFilters ? "▼" : "▲"}</Button>

                {showFilters && (
                    <Card style={style.modalCard} >
                        <Card.Content>
                            <RadioButton.Group onValueChange={setFilter} value={filter}>
                                <RadioButton.Item label="Todas" value="all" color={style.modalCard.radioButtonModal.color} labelStyle={style.modalCard.labelStyle} />
                                <RadioButton.Item label="Completadas" value="completed" color={style.modalCard.radioButtonModal.color} labelStyle={style.modalCard.labelStyle} />
                                <RadioButton.Item label="Para hacer" value="toDo" color={style.modalCard.radioButtonModal.color} labelStyle={style.modalCard.labelStyle} />
                            </RadioButton.Group>
                            <Button onPress={sortByDescription} style={style.orderButton} labelStyle={style.orderButton.labelStyle} >Ordenar por descripción {descriptionOrder === 'ascendant' ? '▼' : '▲'}</Button>
                            <Button onPress={sortByDate} style={style.orderButton} labelStyle={style.orderButton.labelStyle}>Ordenar por fecha {dateOrder === 'ascendant' ? '▼' : '▲'}</Button>
                        </Card.Content>
                    </Card>
                )}

                <Divider />
                {filteredList.length === 0 ? (
                    <Text style={style.noTask}>No hay tareas</Text>
                ) : (
                    <FlatList
                        data={filteredList}
                        renderItem={({ item }) => (
                            <>
                                <Divider />
                                <List.Item
                                    style={[style.listItem, item.completed && style.completedItem]}
                                    title={item.description}
                                    titleStyle={[item.completed && { textDecorationLine: 'line-through' }, style.boldText]}
                                    description={'Vencimiento: ' + item.dueDate.toDateString()}
                                    descriptionStyle={style.descriptionText}
                                    right={() => (
                                        <Checkbox.Item
                                            uncheckedColor={style.listItem.uncheckedColor.color}
                                            status={item.completed ? 'checked' : 'unchecked'}
                                            onPress={() => {
                                                const newList = [...list];
                                                const index = newList.findIndex(task => task.id === item.id);
                                                newList[index].completed = !newList[index].completed;
                                                setList(newList);
                                            }}
                                        />
                                    )}
                                />
                            </>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />)}
            </View>
        </View>
    );
};

export default Index;