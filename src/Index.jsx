import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Card, List, Checkbox, RadioButton, Button, Text, Divider, Avatar } from 'react-native-paper';
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
    const [orden, setOrden] = useState({ prop: 'description', tipo: 'ascendente' }); // Estado para almacenar el tipo de ordenación seleccionado

    const listaFiltrada = lista.filter(item => {
        if (filtro === 'hechas') {
            return item.completed;
        } else if (filtro === 'porHacer') {
            return !item.completed;
        } else {
            return true;
        }
    });

    const ordenAlfabetico = (prop) => {
        const newList = [...lista]; // Copia de la lista completa
        newList.sort((a, b) => {
            const propA = prop === 'description' ? a.description : a.dueDate;
            const propB = prop === 'description' ? b.description : b.dueDate;

            if (orden.tipo === 'ascendente') {
                return propA < propB ? -1 : propA > propB ? 1 : 0;
            } else {
                return propA > propB ? -1 : propA < propB ? 1 : 0;
            }
        });
        setLista(newList);
        setOrden({ prop, tipo: orden.tipo === 'ascendente' ? 'descendente' : 'ascendente' });
        setFiltro('todos'); // Mantener el filtro como "todos" después de cambiar el orden
    };
    const LeftContent = props => <Avatar.Icon {...props} icon="format-list-bulleted" />

    return (
        <View style={{ backgroundColor: '#B69EF4', paddingLeft: 15, paddingRight: 15, paddingTop: 15, maxHeight: '98%', overflow: 'hidden' }}>
            <Card style={{ maxHeight: '100%', }}>
                <Card.Title style={{ paddingTop: 20 }} title="TaskList" titleStyle={{ paddingTop: 5 }} left={LeftContent} />
                <Card.Content>
                    <RadioButton.Group
                        onValueChange={newValue => setFiltro(newValue)}
                        value={filtro}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton.Android value="todos" color="#6200EE" />
                                <Text style={{ fontSize: 12 }}>Todos</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton.Android value="hechas" color="#6200EE" />
                                <Text style={{ fontSize: 12 }}>Hechas</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <RadioButton.Android value="porHacer" color="#6200EE" />
                                <Text style={{ fontSize: 12 }}>Por hacer</Text>
                            </View>
                        </View>
                    </RadioButton.Group>
                    <Divider />
                    <FlatList
                        data={listaFiltrada}
                        style={{ height: 500, }}
                        renderItem={({ item }) => (
                            <List.Item
                                style={{ backgroundColor: item.completed ? '#AFF49B' : 'white', marginTop: 5, marginBottom: 5 }}
                                title={item.description}
                                titleStyle={[item.completed && { textDecorationLine: 'line-through' }, { fontWeight: 'bold' }]} // Estilo de negrita siempre activo
                                description={item.completed ? '' : 'Vencimiento: ' + item.dueDate.toDateString()}
                                descriptionStyle={{ fontSize: 12 }}
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
                    <Divider />
                    <Button onPress={() => ordenAlfabetico('description')} mode="contained" style={{ marginTop: 10 }}>Ordenar por descripción {orden.tipo === 'ascendente' ? 'ascendente' : 'descendente'}</Button>
                    <Button onPress={() => ordenAlfabetico('dueDate')} mode="contained" style={{ marginTop: 10 }}>Ordenar por fecha {orden.tipo === 'ascendente' ? 'ascendente' : 'descendente'}</Button>
                </Card.Content>
            </Card>
        </View>
    );
};

export default Index;