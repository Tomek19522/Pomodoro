"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.TasksContext = void 0;
var react_1 = require("react");
exports.TasksContext = (0, react_1.createContext)({
    tasks: [],
    addTask: function (text) { },
    removeTask: function (id) { },
    removeAllTasks: function () { },
    finishFocusTime: function () { },
    changeCheck: function (id) { },
    getChecedValue: function (id) {
        return false;
    }
});
var TasksContextProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)([]), taskList = _b[0], setTaskList = _b[1];
    var addTask = function (text) {
        var id = Math.random().toString();
        setTaskList(function (currentTaskList) { return __spreadArray(__spreadArray([], currentTaskList, true), [
            { id: id, text: text, checked: false },
        ], false); });
    };
    var removeTask = function (id) {
        setTaskList(function (currentTaskList) {
            return currentTaskList.filter(function (task) { return task.id !== id; });
        });
    };
    var removeAllTasks = function () {
        setTaskList([]);
    };
    var finishFocusTime = function () {
        setTaskList(function (currentTaskList) {
            return currentTaskList.filter(function (task) { return task.checked !== true; });
        });
    };
    var changeCheck = function (id) {
        taskList.forEach(function (task) {
            if (task.id === id)
                task.checked = !task.checked;
        });
    };
    var getChecedValue = function (id) {
        var newObj = taskList.find(function (task) { return task.id === id; });
        return newObj === null || newObj === void 0 ? void 0 : newObj.checked;
    };
    var value = {
        tasks: taskList,
        addTask: addTask,
        removeTask: removeTask,
        removeAllTasks: removeAllTasks,
        finishFocusTime: finishFocusTime,
        changeCheck: changeCheck,
        getChecedValue: getChecedValue
    };
    return (<exports.TasksContext.Provider value={value}>{children}</exports.TasksContext.Provider>);
};
exports["default"] = TasksContextProvider;
