"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var vector_icons_1 = require("@expo/vector-icons");
var ChangingColors_1 = require("../animations/ChangingColors");
var react_native_reanimated_1 = require("react-native-reanimated");
var PopoutAdding_1 = require("./PopoutAdding");
var tasks_context_1 = require("../store/tasks-context");
var AddingButton = function (props) {
    var tasksCtx = (0, react_1.useContext)(tasks_context_1.TasksContext);
    var _a = (0, react_1.useState)(false), error = _a[0], setError = _a[1];
    var _b = (0, react_1.useState)(''), text = _b[0], setText = _b[1];
    var rStyle = (0, ChangingColors_1.changeBackground)(props.current, '#35686c', '#954242');
    var showPopOut = function () {
        props.popOut ? props.setPopOut(false) : props.setPopOut(true);
    };
    var addTask = function () {
        if (text.trim().length > 0) {
            tasksCtx === null || tasksCtx === void 0 ? void 0 : tasksCtx.addTask(text);
            setText('');
            showPopOut();
            setError(false);
        }
        else {
            setError(true);
        }
    };
    return (<>
			{props.popOut === false ? (<react_native_1.Pressable style={styles.OuterContainer} onPress={showPopOut}>
					<react_native_reanimated_1["default"].View style={[styles.container, rStyle]}>
						<vector_icons_1.Ionicons color='white' size={24} name='add-circle'/>
						<react_native_1.Text style={styles.text}>Add task</react_native_1.Text>
					</react_native_reanimated_1["default"].View>
				</react_native_1.Pressable>) : (<PopoutAdding_1["default"] text={text} setText={setText} error={error} addTask={addTask} showPopOut={showPopOut}/>)}
		</>);
};
exports["default"] = AddingButton;
var styles = react_native_1.StyleSheet.create({
    OuterContainer: {
        width: '70%',
        height: 40
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 4,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: 'white',
        marginTop: 10
    },
    text: {
        color: 'white',
        fontSize: 24
    }
});
