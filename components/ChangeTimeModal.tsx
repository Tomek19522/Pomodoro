import { FC, useState } from 'react';
import {
	Modal,
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native';
import NormalButton from './NormalButton';
import { floor } from 'react-native-reanimated';
import CustomForm from './CustomFrom';

interface ChangeTimeModalProps {
	show: boolean;
	setShow: (state: boolean) => void;
	current: 'focus' | 'shortBreak';
	setTimes: (time: { FOCUS_TIME: number; SHORT_BREAK_TIME: number }) => void;
	changeState: (state: boolean) => void;
	style?: {};
}
const ChangeTimeModal: FC<ChangeTimeModalProps> = (props) => {
	const closeModalHandler = () => {
		props.setShow(false);
	};
	return (
		<Modal
			transparent={true}
			animationType='slide'
			visible={props.show}
			style={styles.modal}
			onRequestClose={() => {
				props.setShow(false);
			}}>
			<TouchableOpacity
				style={{ flex: 1 }}
				activeOpacity={1}
				onPress={closeModalHandler}>
				<View></View>
			</TouchableOpacity>
			<View
				style={[
					styles.container,
					props.current === 'focus'
						? { backgroundColor: '#ed8484' }
						: { backgroundColor: '#41a7b3' },
					,
					props.style,
				]}>
				<View style={styles.titleBox}>
					<Text style={styles.title}>Set timer</Text>
				</View>
				<CustomForm
					setTimes={props.setTimes}
					close={closeModalHandler}
					changeState={props.changeState}
					current={props.current}
				/>
			</View>
		</Modal>
	);
};
export default ChangeTimeModal;
const styles = StyleSheet.create({
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
