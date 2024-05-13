// styles.js
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    containerApp: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#B69EF4',
    },
    container: {
        backgroundColor: 'white',
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 15,
        marginRight: 15,
        paddingTop: 15,
        maxHeight: '98%',
        overflow: 'hidden',
    },
    card: {
        maxHeight: '100%',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#B69EF4',
        marginBottom: 10, 
    },
    radioButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItem: {
        marginTop: 5,
        marginBottom: 5,
    },
    completedItem: {
        backgroundColor: '#AFF49B',
    },
    boldText: {
        fontWeight: 'bold',
    },
    descriptionText: {
        fontSize: 12,
    },
    button: {
        marginTop: 10,
        alignSelf: 'center',
    },
    orderButton: {
        marginTop: 5,
        alignSelf: 'center',
        borderColor: '#B69EF4',
        borderWidth: 1,
        borderRadius: 5, 
        marginBottom: 10, 
        color: 'white', 
        fontSize: 16, 
    },
});