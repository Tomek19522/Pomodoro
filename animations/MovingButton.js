"use strict";
exports.__esModule = true;
exports.changePositionButton = void 0;
var react_native_reanimated_1 = require("react-native-reanimated");
var changePositionButton = function (changingValue, direction) {
    var progress = (0, react_native_reanimated_1.useDerivedValue)(function () {
        return changingValue ? (0, react_native_reanimated_1.withTiming)(3) : (0, react_native_reanimated_1.withTiming)(0);
    }, [changingValue]);
    var rStyle = (0, react_native_reanimated_1.useAnimatedStyle)(function () {
        if (direction === 'right')
            return {
                transform: [{ translateX: 85 + progress.value * 20 }]
            };
        else {
            return {
                transform: [{ translateX: 85 - progress.value * 20 }]
            };
        }
    });
    return rStyle;
};
exports.changePositionButton = changePositionButton;
