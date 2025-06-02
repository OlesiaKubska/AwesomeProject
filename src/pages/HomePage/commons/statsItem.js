import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const StatsItem = ({statsAll, statsDay, terms}) => {
  return (
    <View style={styles.statsBlock}>
      <Image
        source={require('../../../icon/helmet.png')}
        defaultSource={require('../../../icon/helmet.png')}
        style={styles.statsImage}
      />
      <View>
        <View style={styles.statsNumbers}>
          <Text style={styles.statsAll}>{statsAll}</Text>
          <Text style={styles.statsDay}>({statsDay})</Text>
        </View>
        <Text style={styles.statsText}>{terms}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  statsImage: {
    width: 75,
    height: 85,
    marginRight: 30,
    marginLeft: 10,
  },
  statsNumbers: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  statsAll: {
    fontSize: 24,
    color: 'black',
    fontWeight: '900',
  },
  statsDay: {
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
    fontWeight: '800',
  },
  statsText: {
    fontSize: 18,
    color: 'black',
  },
});

export default StatsItem;
