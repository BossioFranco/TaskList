// styles.js
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    containerApp: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#A38DDC',
    },
    container: {
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        marginLeft: 15,
        marginTop: '15%',
        marginRight: 15,
        paddingTop: 15,
        maxHeight: '85%',
        overflow: 'hidden',
    },
    card: {
        maxHeight: '100%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        flex: 1,
        color: '#A38DDC',
        marginBottom: 5,
        fontWeight: 'bold'
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
    noTask: {
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 70,
        color: 'grey'
    },
    listItem: {
        marginTop: 5,
        marginBottom: 5,
        uncheckedColor: {
            color: 'black'
        }
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
        borderColor: '#A38DDC',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        color: 'white',
        fontSize: 16,
        labelStyle: {
            fontSize: 14
        },
        width: '80%'
    },
    filterButton: {
        paddingVertical: 10,
        labelStyle: {
            color: '#A38DDC'
        }
    },
    modalCard: {
        radioButtonModal: {
            color: '#A38DDC'
        },
        labelStyle: {
            color: 'black'
        },
        marginBottom: 10
    }

});

export const globalStylesDark = StyleSheet.create({
    containerApp: {
        flex: 1,
        paddingTop: 20,
    },
    container: {
        backgroundColor: '#434343',
        borderColor: 'grey',
        borderWidth: 1,
        marginLeft: 15,
        marginTop: '15%',
        marginRight: 15,
        paddingTop: 15,
        maxHeight: '85%',
        overflow: 'hidden',
    },
    card: {
        maxHeight: '100%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        flex: 1,
        color: '#CABDEC',
        marginBottom: 5,
        fontWeight: 'bold',
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
    noTask: {
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 70,
        color: 'grey'
    },
    listItem: {
        marginTop: 5,
        marginBottom: 5,
        uncheckedColor: {
            color: '#CABDEC'
        }
    },
    completedItem: {
        backgroundColor: '#73A565',
    },
    boldText: {
        fontWeight: 'bold',
        color: 'white'
    },
    descriptionText: {
        fontSize: 12,
        color: 'white'
    },
    button: {
        marginTop: 10,
        alignSelf: 'center',
    },
    orderButton: {
        marginTop: 5,
        alignSelf: 'center',
        borderColor: '#CABDEC',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        fontSize: 16,
        backgroundColor: '#9E7BF8',
        labelStyle: {
            color: 'white',
            fontSize: 14
        },
        width: '80%'
    },
    filterButton: {
        paddingVertical: 10,
        labelStyle: {
            color: '#CABDEC'
        }
    },
    modalCard: {
        backgroundColor: '#808080',
        radioButtonModal: {
            color: '#CABDEC'
        },
        labelStyle: {
            color: 'white'
        },
        marginBottom: 10
    }
});
