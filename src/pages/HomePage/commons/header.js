import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Генеральний штаб ЗС України інформує</Text>
        <Text style={styles.titleBig}>
          Загальні бойові втрати російського окупанта
        </Text>
        <View style={styles.blockData}>
          <Text style={styles.data}>7 червня</Text>
          <Text style={styles.day}>469-й день війни</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
  titleBig: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
  blockData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  day: {
    fontSize: 20,
    color: '#FFD600',
    fontWeight: '600',
  },
  data: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
  },
});

export default Header;
