"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expo_status_bar_1 = require("expo-status-bar");
var react_native_1 = require("react-native");
var react_1 = require("react");
var ShowTasks_1 = require("./components/ShowTasks");
var Clock_1 = require("./components/Clock");
var AddingButton_1 = require("./components/AddingButton");
var react_native_reanimated_1 = require("react-native-reanimated");
var ChangingColors_1 = require("./animations/ChangingColors");
var tasks_context_1 = require("./store/tasks-context");
var NormalButton_1 = require("./components/NormalButton");
var ChangeTimeModal_1 = require("./components/ChangeTimeModal");
var vector_icons_1 = require("@expo/vector-icons");
var react_native_keyboard_aware_scroll_view_1 = require("react-native-keyboard-aware-scroll-view");
var width = react_native_1.Dimensions.get('window').width;
function App() {
    var _a = (0, react_1.useState)({
        FOCUS_TIME: 10,
        SHORT_BREAK_TIME: 5,
    }), times = _a[0], setTimes = _a[1];
    var _b = (0, react_1.useState)(false), showModal = _b[0], setShowModal = _b[1];
    var _c = (0, react_1.useState)('focus'), currentState = _c[0], setCurrentState = _c[1];
    var _d = (0, react_1.useState)(false), popOut = _d[0], setPopOut = _d[1];
    var _e = (0, react_1.useState)(false), changeState = _e[0], setChangeState = _e[1];
    var rStyle = (0, ChangingColors_1.changeBackground)(currentState, '#38858a', '#ba4949');
    return (<>
			<react_native_reanimated_1.default.View style={[styles.container, rStyle]}>
				<react_native_keyboard_aware_scroll_view_1.KeyboardAwareScrollView contentContainerStyle={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }} keyboardShouldPersistTaps='handled' enableOnAndroid extraScrollHeight={210}>
					<tasks_context_1.default>
						<react_native_1.View style={styles.buttons}>
							<NormalButton_1.default title='focus' onPress={function () {
            setCurrentState('focus');
            setChangeState(true);
        }} style={currentState === 'focus'
            ? { backgroundColor: '#934141' }
            : { backgroundColor: '#38858a' }}/>
							<NormalButton_1.default title='break' onPress={function () {
            setCurrentState('shortBreak');
            setChangeState(true);
        }} style={currentState === 'focus'
            ? { backgroundColor: '#ba4949' }
            : { backgroundColor: '#255052' }}/>
						</react_native_1.View>
						<react_native_1.Text style={styles.mainText}>Pomodoro</react_native_1.Text>
						<Clock_1.default times={times} current={currentState} changeState={setCurrentState} changeStateByButton={changeState} setChangeStateByButton={setChangeState}/>
						<react_native_1.Text style={styles.text}>
							{currentState === 'focus' ? 'Focus' : 'Break'} time!
						</react_native_1.Text>
						<ShowTasks_1.default current={currentState}/>

						<AddingButton_1.default current={currentState} popOut={popOut} setPopOut={setPopOut}/>

						<vector_icons_1.Ionicons name={showModal ? 'settings' : 'settings-outline'} color='white' size={40} style={styles.icon} onPress={function () {
            setShowModal(true);
        }}/>
						<ChangeTimeModal_1.default show={showModal} setShow={setShowModal} current={currentState} setTimes={setTimes} changeState={setChangeState} style={styles.modal}/>
					</tasks_context_1.default>
				</react_native_keyboard_aware_scroll_view_1.KeyboardAwareScrollView>
			</react_native_reanimated_1.default.View>
			<expo_status_bar_1.StatusBar style='light'/>
		</>);
}
exports.default = App;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
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
    buttons: {
        justifyContent: 'space-evenly',
        width: '100%',
        flexDirection: 'row',
    },
    scroll: {
        backgroundColor: 'green',
    },
    icon: {
        position: 'absolute',
        top: 40,
        right: 10,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        position: 'absolute',
        top: 100,
        left: width / 2 - 150,
    },
});
