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
				<NormalButton title='Cancel' onPress={props.showPopOut} />
				<NormalButton title='Add' onPress={props.addTask} />
			</View>
		</View>
	);
};
export default PopOutAdding;
const styles = StyleSheet.create({
	popOut: {
		width: '70%',
		height: 100,
		backgroundColor: 'white',
		borderRadius: 4,
	},
	inputContainer: {
		width: '100%',
		height: '65%',
		padding: 10,
	},
	input: {
		fontSize: 18,
	},
	buttons: {
		width: '100%',
		height: '35%',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		flexDirection: 'row',
		backgroundColor: '#ddd',
	},
});
