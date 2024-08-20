import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const { Navigator, Screen } = createMaterialTopTabNavigator();

function Tab1() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tab 1</Text>
        </View>
    );
}

function Tab2(props: any) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                title="Logout"
                onPress={props.onLogout}
            />
        </View>
    );
}

const PostAuthScreen = (props: any) => {

    const [showTab2, setShowTab2] = useState(true);

    const onLogout = () => {
        setShowTab2(false);
        setTimeout(() => {
            props.setIsSignedIn(false);
        }, 0)
    };

    return (
        <View style={{ flex: 1 }}>
            <Navigator>
                <Screen name="Tab1" component={Tab1} />
                {showTab2 &&
                    <Screen
                        name="Tab2">
                        {(props: any) => <Tab2 {...props} onLogout={onLogout} />}
                    </Screen>}
            </Navigator>
        </View>
    );

};

export default PostAuthScreen;