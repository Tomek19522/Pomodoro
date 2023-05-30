"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var CustomFrom_1 = require("./CustomFrom");
var ChangeTimeModal = function (props) {
    var closeModalHandler = function () {
        props.setShow(false);
    };
    return (<react_native_1.Modal transparent={true} animationType='slide' visible={props.show} style={styles.modal} onRequestClose={function () {
            props.setShow(false);
        }}>
			<react_native_1.TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={closeModalHandler}>
				<react_native_1.View></react_native_1.View>
			</react_native_1.TouchableOpacity>
			<react_native_1.View style={[
            styles.container,
            props.current === 'focus'
                ? { backgroundColor: '#ed8484' }
                : { backgroundColor: '#41a7b3' },
            ,
            props.style,
        ]}>
				<react_native_1.View style={styles.titleBox}>
					<react_native_1.Text style={styles.title}>Set timer</react_native_1.Text>
				</react_native_1.View>
				<CustomFrom_1.default setTimes={props.setTimes} close={closeModalHandler} changeState={props.changeState} current={props.current}/>
			</react_native_1.View>
		</react_native_1.Modal>);
};
exports.default = ChangeTimeModal;
var styles = react_native_1.StyleSheet.create({
    modal: { backgroundColor: 'blue' },
    container: {
        width: 300,
        height: 300,
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 10,
    },
    titleBox: {
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
});
