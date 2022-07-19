import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerText: {textAlign: 'center', fontWeight: 'bold'},
  listItem: {
    backgroundColor: '#ddd',
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10
  },
  listName: {
    flex: 0.5,
    alignItems: 'flex-start',
    textAlign: 'center',
  },
});

export {styles};
