"use strict";
exports.__esModule = true;
var react_native_1 = require("react-native");
var vector_icons_1 = require("@expo/vector-icons");
var react_1 = require("react");
var react_native_reanimated_1 = require("react-native-reanimated");
var ChangingColors_1 = require("../animations/ChangingColors");
var tasks_context_1 = require("../store/tasks-context");
var FavItem = function (props) {
    var tasksCtx = (0, react_1.useContext)(tasks_context_1.TasksContext);
    var deleteCurrrencyHandler = function () {
        tasksCtx.removeTask(props.id);
    };
    var changeCheckedValue = function () {
        tasksCtx === null || tasksCtx === void 0 ? void 0 : tasksCtx.changeCheck(props.id);
        tasksCtx === null || tasksCtx === void 0 ? void 0 : tasksCtx.getChecedValue(props.id);
        setStatus(tasksCtx === null || tasksCtx === void 0 ? void 0 : tasksCtx.getChecedValue(props.id));
    };
    var _a = (0, react_1.useState)(tasksCtx === null || tasksCtx === void 0 ? void 0 : tasksCtx.getChecedValue(props.id)), status = _a[0], setStatus = _a[1];
    var rStyle = (0, ChangingColors_1.changeBackground)(props.current, '#5d9ea3', '#dd7878');
    return (<react_native_reanimated_1["default"].View style={[styles.inputContainer, rStyle]}>
			<vector_icons_1.Ionicons name={status ? 'checkmark-circle' : 'checkmark-circle-outline'} color='white' size={24} onPress={changeCheckedValue} style={styles.icon}/>
			<react_native_1.View style={styles.textBox}>
				<react_native_1.Text style={styles.text}>{props.text}</react_native_1.Text>
			</react_native_1.View>
			<vector_icons_1.Ionicons name='close' color='white' size={24} onPress={deleteCurrrencyHandler} style={styles.icon}/>
		</react_native_reanimated_1["default"].View>);
};
exports["default"] = FavItem;
var styles = react_native_1.StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 6,
        marginVertical: 5,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: 'white'
    },
    textBox: {
        width: '70%'
    },
    text: {
        fontSize: 16,
        color: 'white'
    },
    icon: {
        padding: 4
    }
});
