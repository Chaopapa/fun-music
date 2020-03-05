import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import VideoList from "./VideoList"



interface TabData {
    key?: string;
    title: React.ReactNode;
    /** for user's custom extends */
    [key: string]: any;
}
interface PropsType {
    tabs: Array<{ key: any, title: string, [propsName: string]: any }>
}

export default class VideoTabs extends Component<PropsType> {
    tabs = null
    render() {
       
        return (
            <View style={{ flex: 1 }}>
                <Tabs ref={(ref:any)=>this.tabs=ref} tabs={this.props.tabs} onTabClick={this.handleTabClick}
                    tabBarUnderlineStyle={{ backgroundColor: '#ff4a41' }}
                    tabBarActiveTextColor="#ff4a41"

                >
                    <VideoList />
                </Tabs>
            </View>
        )
    }

    handleTabClick=(e)=>{
      console.log(this.tabs.state);
    }
}

const style = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
        backgroundColor: 'red',
    }
});