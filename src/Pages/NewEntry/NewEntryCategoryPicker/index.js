/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import CategoryModal from '../../../components/CategoryModal';

import Colors from '../../../styles/Colors';

const NewEntryCategoryPicker = ({debit, category, onChangeCategoty}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const onCategoryPress = item => {
      onChangeCategoty(item);
      onclosePress();
    };

    const onclosePress = () => {
      setModalVisible(false);
    };

  return (
    <View>
      <TouchableOpacity style={styles.pickerButton} onPress={() => {
          setModalVisible(true);
      }}>
          <Text style={styles.pickerButtonText}>{category.name}</Text>
      </TouchableOpacity>
      <CategoryModal
        categoryType={debit ? 'debit' : 'credit'}
        isVisible={modalVisible}
        onConfirm={onCategoryPress}
        onCancel={onclosePress}
      />

    </View>
  );
};

const styles = StyleSheet.create({
    modal: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    pickerButton: {
        backgroundColor: Colors.asphalt,
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 20,
    },
    pickerButtonText: {
      fontSize: 28,
      color: Colors.white,
      textAlign: 'center',
    },
    modalItem: {
      backgroundColor: Colors.asphalt,
      borderRadius: 15,
      marginHorizontal: 10,
      marginVertical: 20,
      padding: 20,
    },
    modalItemText: {
      fontSize: 22,
      color: Colors.white,
      textAlign: 'center',
    },

});

export default NewEntryCategoryPicker;
