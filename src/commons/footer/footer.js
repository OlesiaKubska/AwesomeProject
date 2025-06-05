import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faCalendarDay,
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <SafeAreaView style={styles.footer}>
      <Text style={styles.title}>Бажаєш збільшити статистику?</Text>
      <View style={styles.donate}>
        <FontAwesomeIcon icon={faArrowLeft} size={20} color="black" />
        <View style={styles.donateItem}>
          <FontAwesomeIcon icon={faHome} size={20} color="black" />
          <Text style={styles.donateName}>Повернись живим</Text>
        </View>
        <FontAwesomeIcon icon={faArrowRight} size={20} color="black" />
      </View>
      <View style={styles.contacts}>
        <Text style={styles.contactName}>Olesia Kubska</Text>
        <FontAwesomeIcon icon={faHome} size={20} color="black" />
        <FontAwesomeIcon icon={faCalendarDay} size={20} color="black" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: '900',
    padding: 10,
    textAlign: 'center',
  },
  donate: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  donateItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
  donateName: {
    color: 'black',
    fontSize: 20,
    fontWeight: '900',
    padding: 10,
    textAlign: 'center',
  },
  contacts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 20,
  },
  contactName: {
    color: 'black',
    fontSize: 16,
  },
});

export default Footer;
