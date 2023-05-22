import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useContext, FC, useState } from 'react';
import Animated from 'react-native-reanimated';
import { changeBackground } from '../animations/ChangingColors';
import { TasksContext } from '../store/tasks-context';

interface FavItemProps {
	current: 'focus' | 'shortBreak';
	text: string;
	id: string;
}

const FavItem: FC<FavItemProps> = (props) => {
	const tasksCtx = useContext(TasksContext);
	const deleteCurrrencyHandler = () => {
		tasksCtx!.removeTask(props.id);
	};
	const changeCheckedValue = () => {
		tasksCtx?.changeCheck(props.id);
		tasksCtx?.getChecedValue(props.id);
		setStatus(tasksCtx?.getChecedValue(props.id));
	};
	const [status, setStatus] = useState<boolean | undefined>(
		tasksCtx?.getChecedValue(props.id)
	);

	const rStyle = changeBackground(props.current, '#5d9ea3', '#dd7878');
	return (
		<Animated.View style={[styles.inputContainer, rStyle]}>
			<Ionicons
				name={status ? 'checkmark-circle' : 'checkmark-circle-outline'}
				color='white'
				size={24}
				onPress={changeCheckedValue}
				style={styles.icon}
			/>
			<View style={styles.textBox}>
				<Text style={styles.text}>{props.text}</Text>
			</View>
			<Ionicons
				name='close'
				color='white'
				size={24}
				onPress={deleteCurrrencyHandler}
				style={styles.icon}
			/>
		</Animated.View>
	);
};

export default FavItem;

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 4,
		paddingHorizontal: 6,
		marginVertical: 5,
		borderWidth: 2,
		borderRadius: 8,
		borderColor: 'white',
	},
	textBox: {
		width: '70%',
	},
	text: {
		fontSize: 16,
		color: 'white',
	},
	icon: {
		padding: 4,
	},
});
