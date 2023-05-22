"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var expo_status_bar_1 = require("expo-status-bar");
var react_native_1 = require("react-native");
var react_1 = require("react");
var ShowTasks_1 = require("./components/ShowTasks");
var AddTask_1 = require("./components/AddTask");
var Clock_1 = require("./components/Clock");
var react_native_reanimated_1 = require("react-native-reanimated");
var times = {
    FOCUS_TIME: 10,
    SHORT_BREAK_TIME: 5,
    LONG_BREAK_TIME: 8,
};
function App() {
    var _a = (0, react_1.useState)('light'), theme = _a[0], setTheme = _a[1];
    var progress = (0, react_native_reanimated_1.useDerivedValue)(function () {
        return theme === 'dark' ? (0, react_native_reanimated_1.withTiming)(1) : (0, react_native_reanimated_1.withTiming)(0);
    }, [theme]);
    var rStyle = (0, react_native_reanimated_1.useAnimatedStyle)(function () {
        // const progress = useSharedValue(0);
        var backgroundColor = (0, react_native_reanimated_1.interpolateColor)(progress.value, [0, 1], ['green', 'blue']);
        return { backgroundColor: backgroundColor };
    });
    var _b = (0, react_1.useState)([]), tasks = _b[0], setTasks = _b[1];
    var _c = (0, react_1.useState)('focus'), currentState = _c[0], setCurrentState = _c[1];
    var change = function () {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    };
    var addTaskHanlder = function (task) {
        setTasks(function (prevTask) { return __spreadArray(__spreadArray([], prevTask, true), [task], false); });
    };
    return (<react_native_1.View style={[
            styles.container,
            { backgroundColor: currentState === 'focus' ? '#ba4949' : '#38858a' },
        ]}>
			<react_native_1.Text>Przyciski -- do zrobienia</react_native_1.Text>
			<react_native_1.Text style={styles.mainText}>Pomodoro</react_native_1.Text>
			<react_native_1.Text>Loading bar -- do zrobienia</react_native_1.Text>
			{/* <Svg style={styles.cos}>
            <Rect
                x='0'
                y='0'
                width='60'
                height='30'
                stroke='red'
                strokeWidth='2'
                fill='yellow'
            />
        </Svg> */}
			<Clock_1.default times={times} current={currentState} changeState={setCurrentState}/>
			<react_native_1.Text style={styles.text}>
				{currentState === 'focus' ? 'Focus' : 'Break'} time!
			</react_native_1.Text>
			<ShowTasks_1.default tasks={tasks}/>
			<AddTask_1.default onAdd={addTaskHanlder}/>
			<react_native_reanimated_1.default.View style={[styles.edit, rStyle]}></react_native_reanimated_1.default.View>
			<react_native_1.Button title='zmien' onPress={change}/>
			<expo_status_bar_1.StatusBar style='light'/>
		</react_native_1.View>);
}
exports.default = App;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        fontSize: 45,
        color: '#eeeeee',
        marginBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        marginVertical: 10,
    },
    cos: { backgroundColor: 'blue', width: '70%', height: 30 },
    edit: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
    },
});
