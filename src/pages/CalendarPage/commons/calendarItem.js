import {View, Text, StyleSheet} from 'react-native';

const CalendarItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    color: '#666',
  },
  description: {
    color: '#333',
  },
});

export default CalendarItem;
