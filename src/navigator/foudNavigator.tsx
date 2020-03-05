import React from 'react';
import { createStackNavigator} from "react-navigation-stack";

import Found,{FoundHeader} from "../pages/found/Found";


export default createStackNavigator({
    found: {
        screen: Found,
        navigationOptions: {
            header: ({ scene, previous, navigation }) =>{
                return  <FoundHeader  />
            }
        }
    }
})

