"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
				<NormalButton_1.default title='Cancel' onPress={props.showPopOut} style={styles.button}/>
				<NormalButton_1.default title='Add' onPress={props.addTask} style={styles.button}/>
			</react_native_1.View>
		</react_native_1.View>);
};
exports.default = PopOutAdding;
var styles = react_native_1.StyleSheet.create({
    popOut: {
        width: '70%',
        height: 80,
        backgroundColor: 'white',
        borderRadius: 4,
    },
    inputContainer: {
        width: '100%',
        height: '60%',
        padding: 10,
    },
    input: {
        fontSize: 18,
    },
    buttons: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        backgroundColor: '#ddd',
        borderRadius: 4,
    },
    button: { marginRight: 15 },
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
});
