import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import ShowTasks from './components/ShowTasks';
import Clock from './components/Clock';
import AddingButton from './components/AddingButton';
import Animated from 'react-native-reanimated';
import { changeBackground } from './animations/ChangingColors';
import TasksContextProvider from './store/tasks-context';
import NormalButton from './components/NormalButton';
import ChangeTimeModal from './components/ChangeTimeModal';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const width = Dimensions.get('window').width;
export default function App() {
	const [times, setTimes] = useState<{
		FOCUS_TIME: number;
		SHORT_BREAK_TIME: number;
	}>({
		FOCUS_TIME: 10,
		SHORT_BREAK_TIME: 5,
	});
	const [showModal, setShowModal] = useState<boolean>(false);
	const [currentState, setCurrentState] = useState<'focus' | 'shortBreak'>(
		'focus'
	);
	const [popOut, setPopOut] = useState<boolean>(false);
	const [changeState, setChangeState] = useState<boolean>(false);
	const rStyle = changeBackground(currentState, '#38858a', '#ba4949');
	return (
		<>
			<Animated.View style={[styles.container, rStyle]}>
				<KeyboardAwareScrollView
					contentContainerStyle={{
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}
					keyboardShouldPersistTaps='handled'
					enableOnAndroid
					extraScrollHeight={210}>
					<TasksContextProvider>
						<View style={styles.buttons}>
							<NormalButton
								title='focus'
								onPress={() => {
									setCurrentState('focus');
									setChangeState(true);
								}}
								style={
									currentState === 'focus'
										? { backgroundColor: '#934141' }
										: { backgroundColor: '#38858a' }
								}
							/>
							<NormalButton
								title='break'
								onPress={() => {
									setCurrentState('shortBreak');
									setChangeState(true);
								}}
								style={
									currentState === 'focus'
										? { backgroundColor: '#ba4949' }
										: { backgroundColor: '#255052' }
								}
							/>
						</View>
						<Text style={styles.mainText}>Pomodoro</Text>
						<Clock
							times={times}
							current={currentState}
							changeState={setCurrentState}
							changeStateByButton={changeState}
							setChangeStateByButton={setChangeState}
						/>
						<Text style={styles.text}>
							{currentState === 'focus' ? 'Focus' : 'Break'} time!
						</Text>
						<ShowTasks current={currentState} />

						<AddingButton
							current={currentState}
							popOut={popOut}
							setPopOut={setPopOut}
						/>

						<Ionicons
							name={showModal ? 'settings' : 'settings-outline'}
							color='white'
							size={40}
							style={styles.icon}
							onPress={() => {
								setShowModal(true);
							}}
						/>
						<ChangeTimeModal
							show={showModal}
							setShow={setShowModal}
							current={currentState}
							setTimes={setTimes}
							changeState={setChangeState}
							style={styles.modal}
						/>
					</TasksContextProvider>
				</KeyboardAwareScrollView>
			</Animated.View>
			<StatusBar style='light' />
		</>
	);
}

const styles = StyleSheet.create({
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
