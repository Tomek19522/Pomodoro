import { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface NormalButtonProps {
	onPress: () => void;
	title: string;
	style?: {};
}

const NormalButton: FC<NormalButtonProps> = (props) => {
	return (
		<Pressable onPress={props.onPress} style={[styles.container, props.style]}>
			<Text style={styles.text}>{props.title}</Text>
		</Pressable>
	);
};
export default NormalButton;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		padding: 2,
		minWidth: '20%',
		borderWidth: 1,
		borderColor: 'white',
	},
	text: {
		color: 'white',
		fontSize: 16,
	},
});
