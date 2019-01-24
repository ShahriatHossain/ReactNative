import React from 'react';
import { Modal, View, Text, Image, Button, StyleSheet } from 'react-native';

const placeDetails = props => {
    let modalContent = null;

    if(props.selectedPlace !== null) {
        modalContent = (
            <View>
                <Image style={styles.placeImage} source={{uri: props.selectedPlace.image}} />
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        );
    }

    return (
        <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title="Delete" color="red" onPress={props.onItemDeleted}></Button>
                    <Button title="Close" onPress={props.onModalClosed}></Button>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: '100%',
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 28
    }
})

export default placeDetails;