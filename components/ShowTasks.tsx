import { FC, useContext } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SimpleTask from './SimpleTask';
import { TasksContext } from '../store/tasks-context';
interface ShowTasksPropos {
	current: 'focus' | 'shortBreak';
}
const ShowTasks: FC<ShowTasksPropos> = (props) => {
	const tasksCtx = useContext(TasksContext);
	const clearAllTasks = () => {
		tasksCtx?.removeAllTasks();
	};
	return (
		<View style={styles.container}>
			<View style={styles.titleBox}>
				<Text style={styles.title}>Tasks</Text>
				<Ionicons
					color='white'
					size={24}
					name='trash'
					onPress={clearAllTasks}
					style={styles.icon}
				/>
			</View>
			<ScrollView style={styles.tasksContainer}>
				{tasksCtx?.tasks.map((task) => (
					<SimpleTask
						current={props.current}
						text={task.text}
						key={task.id}
						id={task.id}
					/>
				))}
			</ScrollView>
		</View>
	);
};
export default ShowTasks;

const styles = StyleSheet.create({
	container: {
		width: '70%',
	},
	titleBox: {
		paddingHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomColor: 'white',
		borderBottomWidth: 1,
		marginBottom: 5,
	},
	pressed: {
		opacity: 0.6,
	},
	title: {
		color: '#fff',
		fontSize: 24,
		marginVertical: 5,
	},
	taskBox: {
		width: '100%',
		backgroundColor: '#fff',
		flexDirection: 'row',
	},
	tasksContainer: {
		maxHeight: 200,
	},
	icon: {
		padding: 4,
	},
});
