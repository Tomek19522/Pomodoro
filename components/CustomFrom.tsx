import { View, TextInput, StyleSheet, Button, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FC } from 'react';
import NormalButton from './NormalButton';
interface CustomFormProps {
	setTimes: (time: { FOCUS_TIME: number; SHORT_BREAK_TIME: number }) => void;
	close: () => void;
	changeState: (state: boolean) => void;
	current: 'focus' | 'shortBreak';
}
interface FormInput {
	FOCUS_TIME: number;
	SHORT_BREAK_TIME: number;
}
const CustomForm: FC<CustomFormProps> = (props) => {
	const schema = yup.object().shape({
		FOCUS_TIME: yup
			.number()
			.typeError('Expected number')
			.min(1, 'Number must be greater than 0')
			.required('Value is required'),
		SHORT_BREAK_TIME: yup
			.number()
			.typeError('expected number')
			.min(1, 'Number must be greater than 0')
			.required('Value is required'),
	});
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInput>({ resolver: yupResolver(schema) });
	const submit = (data: FormInput) => {
		props.setTimes(data);
		props.changeState(true);
		props.close();
	};
	return (
		<View style={styles.container}>
			<View style={styles.inputsBox}>
				<View style={styles.input}>
					<Text style={styles.inputTitle}>Pomodoro</Text>
					<Controller
						control={control}
						name='FOCUS_TIME'
						render={({ field: { onBlur, onChange } }) => (
							<TextInput
								onBlur={onBlur}
								onChangeText={onChange}
								style={styles.inputText}
							/>
						)}
					/>
				</View>
				<View style={styles.input}>
					<Text style={styles.inputTitle}>Break</Text>
					<Controller
						control={control}
						name='SHORT_BREAK_TIME'
						render={({ field: { onBlur, onChange } }) => (
							<TextInput
								onBlur={onBlur}
								onChangeText={onChange}
								style={styles.inputText}
							/>
						)}
					/>
				</View>
			</View>
			<View style={styles.errorBox}>
				<Text style={styles.error}>{errors.FOCUS_TIME?.message}</Text>
				<Text style={styles.error}>{errors.SHORT_BREAK_TIME?.message}</Text>
			</View>

			<View style={styles.buttons}>
				<NormalButton
					title='Cancel'
					onPress={props.close}
					style={[
						styles.button,
						props.current === 'focus'
							? { backgroundColor: '#ba4949' }
							: { backgroundColor: '#255052' },
					]}
				/>
				<NormalButton
					title='Accept'
					onPress={handleSubmit(submit)}
					style={[
						styles.button,
						props.current === 'focus'
							? { backgroundColor: '#ba4949' }
							: { backgroundColor: '#255052' },
					]}
				/>
			</View>
		</View>
	);
};

export default CustomForm;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	buttons: {
		flexDirection: 'row',
		width: '100%',
		height: '25%',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	button: {
		height: '60%',
		width: '25%',
	},
	inputsBox: {
		flexDirection: 'row',
		width: '100%',
		height: '50%',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	input: {
		minHeight: '50%',
		width: '35%',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	inputTitle: {
		fontSize: 20,
		color: 'white',
	},
	inputText: {
		fontSize: 20,
		backgroundColor: 'white',
		color: 'black',
		width: '100%',
		padding: 4,
		marginTop: 10,
		borderRadius: 5,
	},
	errorBox: {
		height: '25%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	error: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'white',
	},
});
