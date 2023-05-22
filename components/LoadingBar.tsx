import { FC, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, {
	cancelAnimation,
	useAnimatedProps,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated';
import Svg, { Rect, Line } from 'react-native-svg';

const AnimatedLine = Animated.createAnimatedComponent(Line);
interface LoadingBarProps {
	time: number;
	current: 'focus' | 'shortBreak';
	isRunning: NodeJS.Timer | null;
	reset: boolean;
}
const LoadingBar: FC<LoadingBarProps> = (props) => {
	const proggres = useSharedValue(0);
	useEffect(() => {
		if (props.isRunning) {
			proggres.value = withTiming(1, {
				duration: props.time * 1000,
			});
		} else if (props.reset) {
			proggres.value = 0;
		} else if (proggres.value >= 0.99) {
			proggres.value = 0;
		} else {
			cancelAnimation(proggres);
		}
	}, [props.current, props.isRunning, props.reset]);
	const AnimatedProps = useAnimatedProps(() => ({
		strokeDashoffset: 243 * (1 - proggres.value),
	}));
	return (
		<View style={styles.container}>
			<Svg style={styles.svg}>
				<Rect
					x='5%'
					y={5}
					width='90%'
					height={15}
					fill={props.current === 'focus' ? '#ba4949' : '#38858a'}
				/>
				<AnimatedLine
					x1='6%'
					y1='12'
					x2='94%'
					y2='12'
					stroke='white'
					strokeWidth={8}
					strokeDasharray='243'
					animatedProps={AnimatedProps}
				/>
			</Svg>
		</View>
	);
};
export default LoadingBar;
const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 30,
	},
	svg: {
		width: '100%',
		height: '100%',
	},
});
