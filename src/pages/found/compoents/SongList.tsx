import React, { Component } from 'react';
import { Text, View,StyleSheet} from 'react-native';
import  MusicCard from "../../../components/music-card";
import {observer,inject} from "mobx-react";

@inject("store")
@observer
export default class SongList extends Component {
    constructor(props){
        super(props);
    }
    async componentDidMount(){
        await (this.props as any).store.foundStore.getSongList();
    }
    render() {
        return (
            <View style={styles.song}>
               <View style={styles.header}>
                   <Text style={styles.headerLeft}>推荐歌单</Text>
                    <Text style={styles.headerRight}>歌单广场</Text>
               </View>
               <View style={styles.list}>
                   {(this.props as any).store.foundStore.songList.map(item=>{
                       console.log(item.picUrl);
                       return <MusicCard  name={item.name} imgUrl={item.picUrl} key={item.id}  />
                   })}
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    song:{
        marginTop:19
    },
    header:{
        height:27,
        paddingLeft:17,
        paddingRight:17,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:15,

    },
    headerLeft:{
        fontSize:18,
        fontWeight:'bold'
    },
    headerRight:{
        paddingHorizontal:13,
        borderRadius:25/2,
        borderWidth:2,
        lineHeight:25,
        borderColor:'#e6e6e6'
    },
    headerRightText:{
        
        
    },
    list:{
        paddingHorizontal:17,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
        height:312,
        alignContent:'space-between'
    }

})