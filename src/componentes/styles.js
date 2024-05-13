// styles.js
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: '#B69EF4',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    maxHeight: '98%',
    overflow: 'hidden',
  },
  card: {
    maxHeight: '100%',
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
});