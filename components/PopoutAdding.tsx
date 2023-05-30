import { FC } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import NormalButton from './NormalButton';
interface PopOutAddingProps {
	text: string;
	setText: (text: string) => void;
	error: boolean;
	showPopOut: () => void;
	addTask: () => void;
}
const PopOutAdding: FC<PopOutAddingProps> = (props) => {
	return (
		<View style={styles.popOut}>
			<View style={styles.inputContainer}>
				<TextInput
					onChangeText={(newText) => props.setText(newText)}
					value={props.text}
					placeholder={
						props.error
							? 'Error! Enter correct value'
							: 'What are you working on?'
					}
					placeholderTextColor={props.error ? 'red' : 'black'}
					style={styles.input}
				/>
			</View>
			<View style={styles.buttons}>
				<NormalButton
					title='Cancel'
					onPress={props.showPopOut}
					style={styles.button}
				/>
				<NormalButton
					title='Add'
					onPress={props.addTask}
					style={styles.button}
				/>
			</View>
		</View>
	);
};
export default PopOutAdding;
const styles = StyleSheet.create({
	popOut: {
		width: '70%',
		height: 80,
		backgroundColor: 'white',
		borderRadius: 4,
	},
	inputContainer: {
		width: '100%',
		height: '60%',
		padding: 10,
	},
	input: {
		fontSize: 18,
	},
	buttons: {
		width: '100%',
		height: '40%',
		alignItems: 'center',
		justifyContent: 'flex-end',
		flexDirection: 'row',
		backgroundColor: '#ddd',
		borderRadius: 4,
	},
	button: { marginRight: 15 },
	container: {
		flex: 1,
	},
	inner: {
		padding: 24,
		flex: 1,
		justifyContent: 'space-around',
	},
	header: {
		fontSize: 36,
		marginBottom: 48,
	},
	textInput: {
		height: 40,
		borderColor: '#000000',
		borderBottomWidth: 1,
		marginBottom: 36,
	},
	btnContainer: {
		backgroundColor: 'white',
		marginTop: 12,
	},
});
