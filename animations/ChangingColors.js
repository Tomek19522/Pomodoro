"use strict";
exports.__esModule = true;
exports.changeTextColor = exports.changeBackground = void 0;
var react_native_reanimated_1 = require("react-native-reanimated");
var changeBackground = function (changingValue, firstColor, secondColor) {
    var progress = (0, react_native_reanimated_1.useDerivedValue)(function () {
        return changingValue === 'focus' ? (0, react_native_reanimated_1.withTiming)(1) : (0, react_native_reanimated_1.withTiming)(0);
    }, [changingValue]);
    var rStyle = (0, react_native_reanimated_1.useAnimatedStyle)(function () {
        var backgroundColor = (0, react_native_reanimated_1.interpolateColor)(progress.value, [0, 1], [firstColor, secondColor]);
        return { backgroundColor: backgroundColor };
    });
    return rStyle;
};
exports.changeBackground = changeBackground;
var changeTextColor = function (changingValue, firstColor, secondColor) {
    var progress = (0, react_native_reanimated_1.useDerivedValue)(function () {
        return changingValue === 'focus' ? (0, react_native_reanimated_1.withTiming)(1) : (0, react_native_reanimated_1.withTiming)(0);
    }, [changingValue]);
    var rStyle = (0, react_native_reanimated_1.useAnimatedStyle)(function () {
        var color = (0, react_native_reanimated_1.interpolateColor)(progress.value, [0, 1], [firstColor, secondColor]);
        return { color: color };
    });
    return rStyle;
};
exports.changeTextColor = changeTextColor;
