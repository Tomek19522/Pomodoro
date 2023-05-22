"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var NormalButton_1 = require("./NormalButton");
var PopOutAdding = function (props) {
    return (<react_native_1.View style={styles.popOut}>
			<react_native_1.View style={styles.inputContainer}>
				<react_native_1.TextInput onChangeText={function (newText) { return props.setText(newText); }} value={props.text} placeholder={props.error
            ? 'Error! Enter correct value'
            : 'What are you working on?'} placeholderTextColor={props.error ? 'red' : 'black'} style={styles.input}/>
			</react_native_1.View>
			<react_native_1.View style={styles.buttons}>
				<NormalButton_1["default"] title='Cancel' onPress={props.showPopOut}/>
				<NormalButton_1["default"] title='Add' onPress={props.addTask}/>
			</react_native_1.View>
		</react_native_1.View>);
};
exports["default"] = PopOutAdding;
var styles = react_native_1.StyleSheet.create({
    popOut: {
        width: '70%',
        height: 100,
        backgroundColor: 'white',
        borderRadius: 4
    },
    inputContainer: {
        width: '100%',
        height: '65%',
        padding: 10
    },
    input: {
        fontSize: 18
    },
    buttons: {
        width: '100%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        backgroundColor: '#ddd'
    }
});
