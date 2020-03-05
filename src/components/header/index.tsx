import React, { Component, ReactNode} from 'react'
import { Text, View,StatusBar,StyleSheet,StatusBarProps,SafeAreaView} from 'react-native'



interface PropsType{
    statusBarStyle?:StatusBarProps,
    statusBackgroundColor?:string
    leftContent?:ReactNode,
    content?:ReactNode,
    rightContent?:ReactNode,
    height:number,
    backgroudColor?:string
}

export default class Header extends Component<PropsType> {
    constructor(props:PropsType){
        super(props);
    }
    render() {
        
        return (
            <SafeAreaView style={{backgroundColor:this.props.statusBackgroundColor||'#fff'}}>
               <StatusBar {...this.props.statusBarStyle} ></StatusBar>
               <View style={{height:this.props.height,backgroundColor:this.props.backgroudColor||'#fff',...S.header}}>
                    <View style={S.left}>
                        {this.props.leftContent}
                    </View>
                    <View style={S.content}>
                        {this.props.content}
                    </View>
                   <View style={S.right}>
                        {this.props.rightContent}
                   </View>
               </View>
            </SafeAreaView>
            
        )
    }
}

const S = StyleSheet.create({
   header:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       paddingLeft:10,
       paddingRight:10
   },
   content:{
       flex:1,
       flexDirection:'row',
       justifyContent:'center'
   },
   left:{

   },
   right:{

   }
})
