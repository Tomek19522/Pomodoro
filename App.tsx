import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import ShowTasks from './components/ShowTasks';
import Clock from './components/Clock';
import AddingButton from './components/AddingButton';
import Animated from 'react-native-reanimated';
import { changeBackground } from './animations/ChangingColors';
import TasksContextProvider from './store/tasks-context';
import NormalButton from './components/NormalButton';

const times: {
	FOCUS_TIME: number;
	SHORT_BREAK_TIME: number;
} = {
	FOCUS_TIME: 10,
	SHORT_BREAK_TIME: 5,
};

export default function App() {
	const [currentState, setCurrentState] = useState<'focus' | 'shortBreak'>(
		'focus'
	);
	const [popOut, setPopOut] = useState<boolean>(false);
	const [changeStateByButton, setChangeStateByButton] =
		useState<boolean>(false);
	const rStyle = changeBackground(currentState, '#38858a', '#ba4949');
	return (
		<Animated.View style={[styles.container, rStyle]}>
			<TasksContextProvider>
				<View style={styles.buttons}>
					<NormalButton
						title='focus'
						onPress={() => {
							setCurrentState('focus');
							setChangeStateByButton(true);
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
							setChangeStateByButton(true);
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
					changeStateByButton={changeStateByButton}
					setChangeStateByButton={setChangeStateByButton}
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
			</TasksContextProvider>
			<StatusBar style='light' />
		</Animated.View>
	);
}

const styles = StyleSheet.create({
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
	buttons: {
		justifyContent: 'space-evenly',
		width: '100%',
		flexDirection: 'row',
	},
});
