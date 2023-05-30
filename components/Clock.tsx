import { useState, FC, useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountingButton from './CountingButton';
import Animated from 'react-native-reanimated';
import { changeBackground } from '../animations/ChangingColors';
import { changePositionButton } from '../animations/MovingButton';
import LoadingBar from './LoadingBar';
import { TasksContext } from '../store/tasks-context';
interface ClockProps {
	times: {
		FOCUS_TIME: number;
		SHORT_BREAK_TIME: number;
	};
	current: 'focus' | 'shortBreak';
	changeState: (state: 'focus' | 'shortBreak') => void;
	changeStateByButton: boolean;
	setChangeStateByButton: (state: boolean) => void;
}
const Clock: FC<ClockProps> = (props) => {
	const tasksCtx = useContext(TasksContext);
	const [time, setTime] = useState(
		props.current === 'focus'
			? props.times.FOCUS_TIME
			: props.times.SHORT_BREAK_TIME
	);
	const [intervID, setIntervID] = useState<NodeJS.Timer | null>(null);
	const [title, setTitle] = useState<string>('Start');
	const [showReset, setShowReset] = useState<boolean>(false);
	const [resetAniamation, setResetAnimation] = useState<boolean>(false);
	const rStyle = changeBackground(props.current, '#5d9ea3', '#dd7878');
	const rStyle2 = changePositionButton(showReset, 'left');
	const rStyle3 = changePositionButton(showReset, 'right');
	useEffect(() => {
		if (time === 0) {
			onStart();
			if (props.current === 'focus') {
				props.changeState('shortBreak');
				setTime(props.times.SHORT_BREAK_TIME);
				tasksCtx?.finishFocusTime();
			} else if (props.current === 'shortBreak') {
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

	const onStart = () => {
		if (intervID === null) {
			const id = setInterval(() => {
				setTime((prev) => prev - 1);
			}, 1000);
			setIntervID(id);
			setTitle('Pause');
			setShowReset(true);
			setResetAnimation(false);
		} else {
			clearInterval(intervID);
			setIntervID(null);
			setTitle('Start');
			setShowReset(false);
		}
	};
	const resetHandler = () => {
		onStart();
		setTime(
			props.current === 'focus'
				? props.times.FOCUS_TIME
				: props.times.SHORT_BREAK_TIME
		);
		setResetAnimation(true);
	};

	return (
		<Animated.View style={[styles.container, rStyle]}>
			<LoadingBar
				time={time}
				current={props.current}
				isRunning={intervID}
				reset={resetAniamation}
			/>
			<Text style={styles.mainText}>
				{Math.floor(time / 60)
					.toString()
					.padStart(2, '0')}
				:{(time % 60).toString().padStart(2, '0')}
			</Text>
			<View style={styles.buttonContainer}>
				<Animated.View style={[styles.button, rStyle2]}>
					<CountingButton
						title='reset'
						onClick={resetHandler}
						current={props.current}
					/>
				</Animated.View>
				<Animated.View style={[styles.button, rStyle3]}>
					<CountingButton
						onClick={onStart}
						title={title}
						current={props.current}
						style={styles.button}
					/>
				</Animated.View>
			</View>
		</Animated.View>
	);
};
export default Clock;

const styles = StyleSheet.create({
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
