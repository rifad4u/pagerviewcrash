import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PreAuthScreen from "./src/PreAuthScreen";
import PostAuthScreen from "./src/PostAuthScreen";

const { Screen, Navigator } = createNativeStackNavigator();

function App() {

    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <NavigationContainer>
            <Navigator>
                {!isSignedIn ?
                    <Screen
                        name="Pre Auth Screen">
                        {(props: any) => <PreAuthScreen {...props} setIsSignedIn={setIsSignedIn} />}
                    </Screen>
                    :
                    <Screen
                        name="Post Auth Screen">
                        {(props: any) => <PostAuthScreen {...props} setIsSignedIn={setIsSignedIn} />}
                    </Screen>
                }
            </Navigator>
        </NavigationContainer>
    );
};

export default App;