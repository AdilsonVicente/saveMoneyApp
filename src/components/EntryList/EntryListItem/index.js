/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';

import Svg, {Circle, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../../styles/Colors';

const EntryListItem = ({entry, isFirstItem, isLastItem, onEntryPress}) => {
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 25 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);
  // const bulletColor = entry.category.color || Colors.white;
  const bulletColor = Colors.white;

  return (
    <TouchableOpacity
      onPress={() => {
        onEntryPress && onEntryPress(entry);
      }}>
      <View style={styles.container}>

        <View style={styles.bullet}>
          <Svg height="50" width="30">
            {showBulletLine && (
              <Rect
                x="9"
                y={bulletLineY}
                width="1.5"
                height={bulletLineHeight}
                fill={Colors.background}
              />
            )}

            <Circle
              cx="10"
              cy="25"
              r="8"
              stroke={Colors.background}
              strokeWidth="1.5"
              fill={bulletColor}
            />
          </Svg>
        </View>

        <View style={styles.description}>
            <Text style={styles.descriptionText}>{entry.description}}</Text>

          <View style={styles.details}>
            <Icon style={styles.entryAtIcon} name="access-time" size={12}/>
            <Text style={styles.entryAtText} >{entry.entryAt.toString()}</Text>
            {entry.address && (
              <>
                <Icon style={styles.addressIcon} name="person-pin" size={12}/>
                <Text style={styles.addressText}>{entry.address}</Text>
              </>
            )}
          </View>
        </View>

        <View style={styles.amount}>
          <Text style={styles.amountText}>{entry.amount}</Text>
        </View>

      </View>
    </TouchableOpacity>
   );
};

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection: 'row',
   },
   bullet: {
   // backgroundColor: Colors.yellow,
   },
   description: {
     flex: 1,
     justifyContent: 'center',
   // backgroundColor: Colors.blue,
   },
   details: {
    flexDirection: 'row',
  },
  entryAtIcon: {
    marginLeft: 5,
    marginRight: 2,
    marginTop: 2,
    color: Colors.metal,
  },
  entryAtText: {
    fontSize: 12,
    color: Colors.metal,
  },
  addressIcon: {
    marginLeft: 5,
    marginRight: 2,
    marginTop: 2,
    color: Colors.metal,
  },
  addressText: {
    fontSize: 12,
    color: Colors.metal,
  },
   amount: {
    //backgroundColor: Colors.green,
    justifyContent: 'center',
   },
   amountText: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: 'bold',
   },
   descriptionText: {
    fontSize: 14,
    color: Colors.white,
   },
 });

export default EntryListItem;
