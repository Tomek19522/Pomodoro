"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var react_native_reanimated_1 = require("react-native-reanimated");
var ChangingColors_1 = require("../animations/ChangingColors");
var CountingButton = function (props) {
    var rStyle = (0, ChangingColors_1.changeTextColor)(props.current, '#38858a', '#ba4949');
    return (<react_native_1.Pressable style={[styles.buttonContainer, props.style]} onPress={props.onClick}>
			<react_native_1.View>
				<react_native_reanimated_1["default"].Text style={[styles.textButton, rStyle]}>
					{props.title}
				</react_native_reanimated_1["default"].Text>
			</react_native_1.View>
		</react_native_1.Pressable>);
};
exports["default"] = CountingButton;
var styles = react_native_1.StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 40,
        borderRadius: 5
    },
    textButton: {
        fontSize: 20,
        textTransform: 'uppercase'
    }
});
