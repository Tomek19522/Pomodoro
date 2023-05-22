import {
	useAnimatedStyle,
	useDerivedValue,
	withTiming,
} from 'react-native-reanimated';
export const changePositionButton = (
	changingValue: boolean,
	direction: 'right' | 'left'
) => {
	const progress = useDerivedValue(() => {
		return changingValue ? withTiming(3) : withTiming(0);
	}, [changingValue]);
	const rStyle = useAnimatedStyle(() => {
		if (direction === 'right')
			return {
				transform: [{ translateX: 85 + progress.value * 20 }],
			};
		else {
			return {
				transform: [{ translateX: 85 - progress.value * 20 }],
			};
		}
	});
	return rStyle;
};
