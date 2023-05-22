"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_reanimated_1 = require("react-native-reanimated");
var react_native_svg_1 = require("react-native-svg");
var AnimatedLine = react_native_reanimated_1["default"].createAnimatedComponent(react_native_svg_1.Line);
var LoadingBar = function (props) {
    var proggres = (0, react_native_reanimated_1.useSharedValue)(0);
    (0, react_1.useEffect)(function () {
        if (props.isRunning) {
            proggres.value = (0, react_native_reanimated_1.withTiming)(1, {
                duration: props.time * 1000
            });
        }
        else if (props.reset) {
            proggres.value = 0;
        }
        else if (proggres.value >= 0.99) {
            proggres.value = 0;
        }
        else {
            (0, react_native_reanimated_1.cancelAnimation)(proggres);
        }
    }, [props.current, props.isRunning, props.reset]);
    var AnimatedProps = (0, react_native_reanimated_1.useAnimatedProps)(function () { return ({
        strokeDashoffset: 243 * (1 - proggres.value)
    }); });
    return (<react_native_1.View style={styles.container}>
			<react_native_svg_1["default"] style={styles.svg}>
				<react_native_svg_1.Rect x='5%' y={5} width='90%' height={15} fill={props.current === 'focus' ? '#ba4949' : '#38858a'}/>
				<AnimatedLine x1='6%' y1='12' x2='94%' y2='12' stroke='white' strokeWidth={8} strokeDasharray='243' animatedProps={AnimatedProps}/>
			</react_native_svg_1["default"]>
		</react_native_1.View>);
};
exports["default"] = LoadingBar;
var styles = react_native_1.StyleSheet.create({
    container: {
        width: '100%',
        height: 30
    },
    svg: {
        width: '100%',
        height: '100%'
    }
});
