"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_hook_form_1 = require("react-hook-form");
var yup_1 = require("@hookform/resolvers/yup");
var yup = require("yup");
var NormalButton_1 = require("./NormalButton");
var CustomForm = function (props) {
    var _a, _b;
    var schema = yup.object().shape({
        FOCUS_TIME: yup
            .number()
            .typeError('Expected number')
            .min(1, 'Number must be greater than 0')
            .required('Value is required'),
        SHORT_BREAK_TIME: yup
            .number()
            .typeError('expected number')
            .min(1, 'Number must be greater than 0')
            .required('Value is required'),
    });
    var _c = (0, react_hook_form_1.useForm)({ resolver: (0, yup_1.yupResolver)(schema) }), control = _c.control, handleSubmit = _c.handleSubmit, errors = _c.formState.errors;
    var submit = function (data) {
        props.setTimes(data);
        props.changeState(true);
        props.close();
    };
    return (<react_native_1.View style={styles.container}>
			<react_native_1.View style={styles.inputsBox}>
				<react_native_1.View style={styles.input}>
					<react_native_1.Text style={styles.inputTitle}>Pomodoro</react_native_1.Text>
					<react_hook_form_1.Controller control={control} name='FOCUS_TIME' render={function (_a) {
            var _b = _a.field, onBlur = _b.onBlur, onChange = _b.onChange;
            return (<react_native_1.TextInput onBlur={onBlur} onChangeText={onChange} style={styles.inputText}/>);
        }}/>
				</react_native_1.View>
				<react_native_1.View style={styles.input}>
					<react_native_1.Text style={styles.inputTitle}>Break</react_native_1.Text>
					<react_hook_form_1.Controller control={control} name='SHORT_BREAK_TIME' render={function (_a) {
            var _b = _a.field, onBlur = _b.onBlur, onChange = _b.onChange;
            return (<react_native_1.TextInput onBlur={onBlur} onChangeText={onChange} style={styles.inputText}/>);
        }}/>
				</react_native_1.View>
			</react_native_1.View>
			<react_native_1.View style={styles.errorBox}>
				<react_native_1.Text style={styles.error}>{(_a = errors.FOCUS_TIME) === null || _a === void 0 ? void 0 : _a.message}</react_native_1.Text>
				<react_native_1.Text style={styles.error}>{(_b = errors.SHORT_BREAK_TIME) === null || _b === void 0 ? void 0 : _b.message}</react_native_1.Text>
			</react_native_1.View>

			<react_native_1.View style={styles.buttons}>
				<NormalButton_1.default title='Cancel' onPress={props.close} style={[
            styles.button,
            props.current === 'focus'
                ? { backgroundColor: '#ba4949' }
                : { backgroundColor: '#255052' },
        ]}/>
				<NormalButton_1.default title='Accept' onPress={handleSubmit(submit)} style={[
            styles.button,
            props.current === 'focus'
                ? { backgroundColor: '#ba4949' }
                : { backgroundColor: '#255052' },
        ]}/>
			</react_native_1.View>
		</react_native_1.View>);
};
exports.default = CustomForm;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    button: {
        height: '60%',
        width: '25%',
    },
    inputsBox: {
        flexDirection: 'row',
        width: '100%',
        height: '50%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    input: {
        minHeight: '50%',
        width: '35%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    inputTitle: {
        fontSize: 20,
        color: 'white',
    },
    inputText: {
        fontSize: 20,
        backgroundColor: 'white',
        color: 'black',
        width: '100%',
        padding: 4,
        marginTop: 10,
        borderRadius: 5,
    },
    errorBox: {
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});
