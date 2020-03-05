import React, { Component, ReactElement } from 'react';
import { FlatList, Text, View } from 'react-native';
import VideoCard from "../../../components/video-card";

export default class VideoList extends Component {
    render() {
        return (
            <View style={{backgroundColor:"#f8f8f8"}}>
                <FlatList
                    data={[{ key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'a' }, { key: 'a' }, { key: 'a' }, { key: 'a' }, { key: 'a' }]}
                    renderItem={this.renderItem}

                />
            </View>

        )
    }

    renderItem = ({ item }) => {
        return <VideoCard data={item} />
    }
}
