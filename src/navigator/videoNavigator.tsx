import { createStackNavigator } from "react-navigation-stack";
import Video from "../pages/video/Video";
import {VideoHeader} from "../pages/video/Video";
import React from "react";

export default createStackNavigator({
    video: {
        screen: Video,
        navigationOptions: {
            header: ({ scene, previous, navigation }) => { 
                return <VideoHeader />
            }

        }
    }
})