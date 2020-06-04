/* eslint-disable prettier/prettier */
import React from 'react';
import {Modal, View, FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';

import ActionFooter, {ActionPrimaryButton} from '../ActionFooter';

import Colors from '../../../styles/Colors';

const RelativeDaysModal = ({isVisible, onConfirm, onCancel}) => {
    const relativeDays = [1, 3, 7, 15, 21, 30, 45, 60, 90, 180, 365];
  return (
      <Modal animationType="slide" transparent={false} isVisible={isVisible}>
        <View style={styles.modal}>
            <FlatList
                data={relativeDays}
                keyExtractor={item => item.toString()}
                renderItem={({item}) => (
                <TouchableOpacity style={styles.modalItem} onPress={() => onConfirm(item)}>
                    <Text style={styles.modalItemText}>{`${item} dias`}</Text>
                </TouchableOpacity>
            )}/>
        </View>
        <ActionFooter>
            <ActionPrimaryButton title="Fechar" onPress={onCancel} />
        </ActionFooter>
      </Modal>
  );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
    },
    modalItem: {
        backgroundColor: Colors.asphalt,
        borderRadius: 15,
        marginVertical: 20,
        marginHorizontal: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    modalItemText: {
        fontSize: 22,
        color: Colors.white,
        textAlign: 'center',
    },
});

export default RelativeDaysModal;
