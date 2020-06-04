/* eslint-disable prettier/prettier */
import React from 'react';
import { Modal, View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

import useCategories from '../../hooks/useCategories';

import ActionFooter, { ActionPrimaryButton } from '../Core/ActionFooter';
import Colors from '../../styles/Colors';

const CategoryModal = ({categoryType, isVisible, onConfirm, onCancel}) => {
  const [debitCategories, creditCategories, allCategories] = useCategories();
  return (
    <View>
        <Modal
            textAlign="slide"
            transparent={false}
            visible={isVisible}>
            <View style={styles.modal}>
                <FlatList
                    data={
                        categoryType === 'all'
                        ? allCategories
                        : categoryType === 'debit'
                        ? debitCategories
                        : creditCategories
                    }
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.modalItem} onPress={() => onConfirm(item)}>
                            <Text style={[styles.modalItemText, {color: item.color}]}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />

            </View>

            <ActionFooter>
              <ActionPrimaryButton title="Fechar" onPress={onCancel} />
            </ActionFooter>

      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: Colors.background,
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

export default CategoryModal;
