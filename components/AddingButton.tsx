import { FC, useState, useContext } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { changeBackground } from '../animations/ChangingColors';
import Animated from 'react-native-reanimated';
import PopOutAdding from './PopoutAdding';
import { TasksContext } from '../store/tasks-context';
interface AddingButtonProps {
	current: 'focus' | 'shortBreak';
	popOut: boolean;
	setPopOut: (state: boolean) => void;
}
const AddingButton: FC<AddingButtonProps> = (props) => {
	const tasksCtx = useContext(TasksContext);
	const [error, setError] = useState<boolean>(false);
	const [text, setText] = useState<string>('');
	const rStyle = changeBackground(props.current, '#35686c', '#954242');
	const showPopOut = () => {
		setError(false);
		props.popOut ? props.setPopOut(false) : props.setPopOut(true);
	};
	const addTask = () => {
		if (text.trim().length > 0) {
			tasksCtx?.addTask(text);
			setText('');
			showPopOut();
			setError(false);
		} else {
			setError(true);
		}
	};
	return (
		<>
			{props.popOut === false ? (
				<Pressable style={styles.OuterContainer} onPress={showPopOut}>
					<Animated.View style={[styles.container, rStyle]}>
						<Ionicons color='white' size={24} name='add-circle' />
						<Text style={styles.text}>Add task</Text>
					</Animated.View>
				</Pressable>
			) : (
				<PopOutAdding
					text={text}
					setText={setText}
					error={error}
					addTask={addTask}
					showPopOut={showPopOut}
				/>
			)}
		</>
	);
};
export default AddingButton;
const styles = StyleSheet.create({
	OuterContainer: {
		width: '70%',
		height: 40,
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
		marginTop: 10,
	},
	text: {
		color: 'white',
		fontSize: 24,
	},
});
