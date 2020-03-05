import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView,Image} from 'react-native';
import Header from "../../components/header";
import { Carousel } from "@ant-design/react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MenuList from "./compoents/MenuList";
import SongList from "./compoents/SongList";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class Found extends Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await (this.props as any).store.foundStore.getBanner();

    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#fff' }} >
                <View style={S.banner}>
                    <Carousel
                        style={S.wrapper}
                        selectedIndex={0}
                        autoplay
                        infinite
                    >
                        {
                            (this.props as any).store.foundStore.banner.map(item => {
                                return (
                                    <View
                                        style={[S.container]}
                                        key={item.targetId}
                                    >
                                       <Image source={{uri:item.pic}} 
                                       style={{width:'100%',height:'100%'}}
                                       />
                                    </View>
                                )
                            })
                        }
                    </Carousel>
                </View>
                <MenuList />
                <SongList />
                
            </ScrollView>
        )
    }
}

export const FoundHeader: React.FC = () => {
    return <View style={S.header}>
        <Header
            height={36} leftContent={<MaterialIcons name="keyboard-voice" size={28} ></MaterialIcons>}
            content={<Content />}
            rightContent={<MaterialIcons name="insert-chart" size={28} ></MaterialIcons>}

        />
    </View>
}

function Content() {
    return <Text>发现</Text>
}




const S = StyleSheet.create({
    header: {
        marginBottom: 20,
        marginTop: 22,
    },
    banner: {
        paddingRight: 17,
        paddingLeft: 17
    },
    wrapper: {
        backgroundColor: '#fff',


    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 135,
        width: '100%',
        alignSelf: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 36,
    },
})

