import { FC } from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { changeTextColor } from '../animations/ChangingColors';
interface CountingButtonProps {
	onClick: () => void;
	title: string;
	current: 'focus' | 'shortBreak';
	style?: {};
}
const CountingButton: FC<CountingButtonProps> = (props) => {
	const rStyle = changeTextColor(props.current, '#38858a', '#ba4949');
	return (
		<Pressable
			style={[styles.buttonContainer, props.style]}
			onPress={props.onClick}>
			<View>
				<Animated.Text style={[styles.textButton, rStyle]}>
					{props.title}
				</Animated.Text>
			</View>
		</Pressable>
	);
};
export default CountingButton;

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: '#ffffff',
		justifyContent: 'center',
		alignItems: 'center',
		width: 100,
		height: 40,
		borderRadius: 5,
	},
	textButton: {
		fontSize: 20,
		textTransform: 'uppercase',
	},
});
