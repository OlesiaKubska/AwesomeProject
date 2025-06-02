import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';

const VidCalendar = () => {
  return (
    <View style={styles.blockCalendar}>
      <Pressable>
        <Image
          style={styles.btn}
          source={require('../../../icon/left-arrow.png')}
        />
      </Pressable>
      <Text style={styles.data}>Станом на : </Text>
      <Text style={styles.data}>7 червня</Text>
      <Pressable>
        <Image
          style={styles.btn}
          source={require('../../../icon/right-arrow.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  blockCalendar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10,
  },
  data: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
  },
  btn: {
    width: 15,
    height: 15,
  },
});

export default VidCalendar;
