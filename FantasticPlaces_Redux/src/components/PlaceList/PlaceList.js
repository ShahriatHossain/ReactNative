import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
    console.log(props.places);
    return (
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <ListItem placeName={info.item.name} placeImage={info.item.image} onItemSelected={() => props.onPlaceSelected(info.item.key)} />
            )} 
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});

export default placeList;