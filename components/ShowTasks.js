"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var vector_icons_1 = require("@expo/vector-icons");
var SimpleTask_1 = require("./SimpleTask");
var tasks_context_1 = require("../store/tasks-context");
var ShowTasks = function (props) {
    var tasksCtx = (0, react_1.useContext)(tasks_context_1.TasksContext);
    var clearAllTasks = function () {
        tasksCtx === null || tasksCtx === void 0 ? void 0 : tasksCtx.removeAllTasks();
    };
    return (<react_native_1.View style={styles.container}>
			<react_native_1.View style={styles.titleBox}>
				<react_native_1.Text style={styles.title}>Tasks</react_native_1.Text>
				<vector_icons_1.Ionicons color='white' size={24} name='trash' onPress={clearAllTasks} style={styles.icon}/>
			</react_native_1.View>
			<react_native_1.ScrollView style={styles.tasksContainer}>
				{tasksCtx === null || tasksCtx === void 0 ? void 0 : tasksCtx.tasks.map(function (task) { return (<SimpleTask_1["default"] current={props.current} text={task.text} key={task.id} id={task.id}/>); })}
			</react_native_1.ScrollView>
		</react_native_1.View>);
};
exports["default"] = ShowTasks;
var styles = react_native_1.StyleSheet.create({
    container: {
        width: '70%'
    },
    titleBox: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 5
    },
    pressed: {
        opacity: 0.6
    },
    title: {
        color: '#fff',
        fontSize: 24,
        marginVertical: 5
    },
    taskBox: {
        width: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    tasksContainer: {
        maxHeight: 200
    },
    icon: {
        padding: 4
    }
});
