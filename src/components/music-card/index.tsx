import React, { Component } from 'react'
import { Text, View, StyleSheet,Image} from 'react-native'

interface PropsType {
    imgUrl: string,
    name: string
}

export default class MusicCard extends Component<PropsType> {
    render() {
        return (
            <View style={styles.card} >
                <View style={styles.cardImg}>
                    <Image source={{uri:this.props.imgUrl}} style={{width:'100%',height:'100%'}} />
                </View>
                <Text numberOfLines={2} ellipsizeMode="tail" style={styles.cardText}>{this.props.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: 108,
        height: 145,
        borderRadius:6,
        justifyContent:'space-between'
    },
    cardImg: {
        width: 108,
        height: 108,
        backgroundColor:'#e6e6e6'
    },
    cardText: {
       color:"#343434",
       fontSize:12,
    }
})
