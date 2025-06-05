import {StyleSheet, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CalendarItem from './commons/calendarItem';

const CalendarPage = () => {
  return (
    <SafeAreaView style={styles.calendar}>
      <LinearGradient
        colors={['#0057b8', '#FFF', '#FFD600']}
        start={{x: 0.0, y: 0.3}}
        end={{x: 0.7, y: 1.0}}
        locations={[0, 0.45, 0.75]}
        style={styles.linearGradient}>
        <CalendarItem
          item={{
            title: 'Sample Event',
            date: '2023-10-01',
            description: 'This is a sample event description.',
          }}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
    padding: 15,
  },
});

export default CalendarPage;
