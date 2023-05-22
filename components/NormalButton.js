"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var NormalButton = function (props) {
    return (<react_native_1.Pressable onPress={props.onPress} style={[styles.container, props.style]}>
			<react_native_1.Text style={styles.text}>{props.title}</react_native_1.Text>
		</react_native_1.Pressable>);
};
exports["default"] = NormalButton;
var styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        padding: 2,
        minWidth: '20%',
        borderWidth: 1,
        borderColor: 'white'
    },
    text: {
        color: 'white',
        fontSize: 16
    }
});
