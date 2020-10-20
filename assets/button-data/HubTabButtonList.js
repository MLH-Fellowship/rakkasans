// Import Button Data
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import buttonArr from "./HubTabButtonData"

class ButtonList extends Component {
    state = {
        buttonArr: buttonArr
    }

    getButtonData = () => {
        return this.state.buttonArr.map(data => {
            return <SquareButton detail={data} key={data.id} />
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.getButtonData()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    }
});

export default ButtonList;