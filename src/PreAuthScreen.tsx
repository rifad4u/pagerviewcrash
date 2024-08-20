import React from "react";
import { Button, View } from "react-native";

const PreAuthScreen = (props: any) => {

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button
                title="Login"
                onPress={() => props.setIsSignedIn(true)}
            />
        </View>
    );

};

export default PreAuthScreen;