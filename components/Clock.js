"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var CountingButton_1 = require("./CountingButton");
var react_native_reanimated_1 = require("react-native-reanimated");
var ChangingColors_1 = require("../animations/ChangingColors");
var MovingButton_1 = require("../animations/MovingButton");
var LoadingBar_1 = require("./LoadingBar");
var tasks_context_1 = require("../store/tasks-context");
var Clock = function (props) {
    var tasksCtx = (0, react_1.useContext)(tasks_context_1.TasksContext);
    var _a = (0, react_1.useState)(props.current === 'focus'
        ? props.times.FOCUS_TIME
        : props.times.SHORT_BREAK_TIME), time = _a[0], setTime = _a[1];
    var _b = (0, react_1.useState)(null), intervID = _b[0], setIntervID = _b[1];
    var _c = (0, react_1.useState)('Start'), title = _c[0], setTitle = _c[1];
    var _d = (0, react_1.useState)(false), showReset = _d[0], setShowReset = _d[1];
    var _e = (0, react_1.useState)(false), resetAniamation = _e[0], setResetAnimation = _e[1];
    var rStyle = (0, ChangingColors_1.changeBackground)(props.current, '#5d9ea3', '#dd7878');
    var rStyle2 = (0, MovingButton_1.changePositionButton)(showReset, 'left');
    var rStyle3 = (0, MovingButton_1.changePositionButton)(showReset, 'right');
    (0, react_1.useEffect)(function () {
        if (time === 0) {
            onStart();
            if (props.current === 'focus') {
                props.changeState('shortBreak');
                setTime(props.times.SHORT_BREAK_TIME);
                tasksCtx === null || tasksCtx === void 0 ? void 0 : tasksCtx.finishFocusTime();
            }
            else if (props.current === 'shortBreak') {
                props.changeState('focus');
                setTime(props.times.FOCUS_TIME);
            }
        }
        if (props.changeStateByButton) {
            props.setChangeStateByButton(false);
            if (intervID !== null) {
                clearInterval(intervID);
                setIntervID(null);
            }
            setShowReset(false);
            setTitle('Start');
            setResetAnimation(true);
            props.current === 'focus'
                ? setTime(props.times.FOCUS_TIME)
                : setTime(props.times.SHORT_BREAK_TIME);
        }
    }, [time, props.changeStateByButton]);
    var onStart = function () {
        if (intervID === null) {
            var id = setInterval(function () {
                setTime(function (prev) { return prev - 1; });
            }, 1000);
            setIntervID(id);
            setTitle('Pause');
            setShowReset(true);
            setResetAnimation(false);
        }
        else {
            clearInterval(intervID);
            setIntervID(null);
            setTitle('Start');
            setShowReset(false);
        }
    };
    var resetHandler = function () {
        onStart();
        setTime(props.current === 'focus'
            ? props.times.FOCUS_TIME
            : props.times.SHORT_BREAK_TIME);
        setResetAnimation(true);
    };
    return (<react_native_reanimated_1.default.View style={[styles.container, rStyle]}>
			<LoadingBar_1.default time={time} current={props.current} isRunning={intervID} reset={resetAniamation}/>
			<react_native_1.Text style={styles.mainText}>
				{Math.floor(time / 60)
            .toString()
            .padStart(2, '0')}
				:{(time % 60).toString().padStart(2, '0')}
			</react_native_1.Text>
			<react_native_1.View style={styles.buttonContainer}>
				<react_native_reanimated_1.default.View style={[styles.button, rStyle2]}>
					<CountingButton_1.default title='reset' onClick={resetHandler} current={props.current}/>
				</react_native_reanimated_1.default.View>
				<react_native_reanimated_1.default.View style={[styles.button, rStyle3]}>
					<CountingButton_1.default onClick={onStart} title={title} current={props.current} style={styles.button}/>
				</react_native_reanimated_1.default.View>
			</react_native_1.View>
		</react_native_reanimated_1.default.View>);
};
exports.default = Clock;
var styles = react_native_1.StyleSheet.create({
    container: {
        width: '70%',
        height: 200,
        borderRadius: 10,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainText: {
        fontSize: 50,
        color: '#ffffff',
    },
    buttonContainer: {
        marginTop: 25,
        width: '100%',
        height: 40,
        position: 'relative',
    },
    button: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
});
