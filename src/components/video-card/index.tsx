import React, { Component } from 'react'
import { Text, View,StyleSheet} from 'react-native'

interface PropsType{
    data:any
}

export default class VideoCard extends Component<PropsType> {
    render() {
        return (
            <View style={styles.card}>
                <Text>{(this.props as any).data.key}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card:{
        width:'100%',
        height:325,
        alignSelf:'center',
        backgroundColor:'#fff',
        marginBottom:8
    }
})