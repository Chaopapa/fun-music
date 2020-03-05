import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";

const menuData = [
    {
        icon: 'calendar',
        title: '每日推荐',
        id: 1

    },
    {
        icon: 'profile',
        title: '歌单',
        id: 2
    },
    {
        icon: 'barchart',
        title: '排行榜',
        id: 3
    },
    {
        icon: 'customerservice',
        title: '电台',
        id: 4
    },
    {
        icon: 'videocamera',
        title: '直播',
        id: 5
    }
]



export default class MenuList extends Component {
    render() {
        return (
            <View style={S.menu}>
                {menuData.map(item => {
                    return (
                        <View style={S.item} key={item.id}>
                            <View style={S.itemImg}>
                                <AntDesign name={item.icon} color="#fff" size={28} />
                            </View>
                            <Text style={S.itemText}>{item.title}</Text>
                        </View>
                    )
                })}
            </View>
        )
    }
}

const S = StyleSheet.create({
    menu: {
        height: 112,
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1,
        paddingLeft: 17,
        paddingRight: 17,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    item: {
        justifyContent: 'center',

    },
    itemText: {
       textAlign:"center",
       color:'#7b7b7b'
    },
    itemImg: {
        width: 46,
        height: 46,
        borderRadius: 46,
        backgroundColor: '#ff4a41',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:12
    }

})


