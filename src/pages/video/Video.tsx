import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Header from "../../components/header";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import VideoTabs from "./components/VideoTabs";
import VideoList from "./components/VideoList";
import { inject, observer } from "mobx-react";
import { Store } from "../../store"

interface PropsType {
    store: Store
    [propsName: string]: any
}

@inject("store")
@observer
export default class Video extends Component<PropsType> {
    state = {
        id: 9104
    }
    async componentDidMount() {
        await this.props.store.videoStore.getVideoTags();
        await this.props.store.videoStore.getVideoList(this.state.id);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <VideoTabs tabs={this.props.store.videoStore.videoTags} />
                {/* <VideoList /> */}
            </View>
        )
    }
}

export const VideoHeader: React.FC = () => {
    return <View style={S.header}>
        <Header
            height={36} leftContent={<MaterialIcons name="videocam" size={28} ></MaterialIcons>}
            content={<Content />}
            rightContent={<MaterialIcons name="insert-chart" size={28} ></MaterialIcons>}

        />
    </View>
}

function Content() {
    return <Text>视频</Text>
}

const S = StyleSheet.create({
    header: {
        marginBottom: 20,
        marginTop: 22,
    }
})