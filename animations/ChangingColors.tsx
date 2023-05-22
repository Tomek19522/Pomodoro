import {
	interpolateColor,
	useAnimatedStyle,
	useDerivedValue,
	withTiming,
} from 'react-native-reanimated';

export const changeBackground = (
	changingValue: 'focus' | 'shortBreak',
	firstColor: string,
	secondColor: string
) => {
	const progress = useDerivedValue(() => {
		return changingValue === 'focus' ? withTiming(1) : withTiming(0);
	}, [changingValue]);
	const rStyle = useAnimatedStyle(() => {
		const backgroundColor = interpolateColor(
			progress.value,
			[0, 1],
			[firstColor, secondColor]
		);
		return { backgroundColor };
	});
	return rStyle;
};

export const changeTextColor = (
	changingValue: 'focus' | 'shortBreak',
	firstColor: string,
	secondColor: string
) => {
	const progress = useDerivedValue(() => {
		return changingValue === 'focus' ? withTiming(1) : withTiming(0);
	}, [changingValue]);
	const rStyle = useAnimatedStyle(() => {
		const color = interpolateColor(
			progress.value,
			[0, 1],
			[firstColor, secondColor]
		);

		return { color };
	});
	return rStyle;
};
