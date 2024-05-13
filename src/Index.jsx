import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Card, RadioButton, Button, Text, Divider, Checkbox, List } from 'react-native-paper';
import { globalStyles } from './componentes/styles';
const Index = () => {
    const [lista, setLista] = useState([
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
    const [filtro, setFiltro] = useState('todos');
    const [ordenDescripcion, setOrdenDescripcion] = useState('ascendente');
    const [ordenFecha, setOrdenFecha] = useState('ascendente');
    const [mostrarFiltros, setMostrarFiltros] = useState(false);

    const aplicarFiltro = (newValue) => {
        setFiltro(newValue);
        setMostrarFiltros(false);
    };

    const ordenarPorDescripcion = () => {
        const newList = [...lista];
        newList.sort((a, b) => {
            const propA = a.description.toLowerCase();
            const propB = b.description.toLowerCase();

            if (ordenDescripcion === 'ascendente') {
                return propA.localeCompare(propB);
            } else {
                return propB.localeCompare(propA);
            }
        });
        setLista(newList);
        setOrdenDescripcion(ordenDescripcion === 'ascendente' ? 'descendente' : 'ascendente');
    };

    const ordenarPorFecha = () => {
        const newList = [...lista];
        newList.sort((a, b) => {
            const propA = a.dueDate;
            const propB = b.dueDate;

            if (ordenFecha === 'ascendente') {
                return propA - propB;
            } else {
                return propB - propA;
            }
        });
        setLista(newList);
        setOrdenFecha(ordenFecha === 'ascendente' ? 'descendente' : 'ascendente');
    };

    const listaFiltrada = lista.filter(item => {
        if (filtro === 'hechas') {
            return item.completed;
        } else if (filtro === 'porHacer') {
            return !item.completed;
        } else {
            return true;
        }
    });

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.card}>
                <View style={globalStyles.header}>
                    <Text style={globalStyles.headerText}>Lista de tareas</Text>
                    <Divider/>
                    <Button onPress={() => setMostrarFiltros(!mostrarFiltros)}>Filtros</Button>
                </View>
                {mostrarFiltros && (
                    <Card style={globalStyles.modalCard}>
                        <Card.Title title="Seleccionar filtro" />
                        <Card.Content>
                            <RadioButton.Group onValueChange={setFiltro} value={filtro}>
                                <RadioButton.Item label="Todos" value="todos" />
                                <RadioButton.Item label="Hechas" value="hechas" />
                                <RadioButton.Item label="Por hacer" value="porHacer" />
                            </RadioButton.Group>
                            <Button onPress={ordenarPorDescripcion} style={globalStyles.orderButton}>Ordenar por descripción {ordenDescripcion === 'ascendente' ? '↓' : '↑'}</Button>
                            <Button onPress={ordenarPorFecha} style={globalStyles.orderButton}>Ordenar por fecha {ordenFecha === 'ascendente' ? '↓' : '↑'}</Button>
                        </Card.Content>
                      {/*   <Card.Actions>
                            <Button onPress={aplicarFiltro}>Cerrar</Button>
                        </Card.Actions> */}
                    </Card>
                )}
                <Divider />
                <FlatList
                    data={listaFiltrada}
                    renderItem={({ item }) => (
                        <List.Item
                            style={[globalStyles.listItem, item.completed && globalStyles.completedItem]}
                            title={item.description}
                            titleStyle={[item.completed && { textDecorationLine: 'line-through' }, globalStyles.boldText]}
                            description={'Vencimiento: ' + item.dueDate.toDateString()}
                            descriptionStyle={globalStyles.descriptionText}
                            right={() => (
                                <Checkbox.Item
                                    status={item.completed ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        const newList = [...lista];
                                        const index = newList.findIndex(task => task.id === item.id);
                                        newList[index].completed = !newList[index].completed;
                                        setLista(newList);
                                    }}
                                />
                            )}
                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    );
};

export default Index;