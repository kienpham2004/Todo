import React from "react";
import "./App.css";
import TaskFrom from "./components/TaskForm";
import Control from "./components/control";
import TaskList from "./components/TaskList";
import TastEdit from "./components/TaskEdit";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskEditing: null,
    };
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var a = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: a,
      });
    }
  }

  // onGenerateData = () => {
  //   var tasks = [
  //     { id: this.generateID(), name: "Học lập trình", status: true },
  //     { id: this.generateID(), name: "Đi bơi", status: false },
  //     { id: this.generateID(), name: "Ngủ", status: true },
  //   ];
  //   this.setState({
  //     tasks: tasks,
  //   });
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // };

  generateID() {
    var randomstring = require("randomstring");
    return (
      randomstring.generate(3) +
      "-" +
      randomstring.generate(7) +
      "-" +
      randomstring.generate(3) +
      "-" +
      randomstring.generate(3)
    );
  }

  // lấy theo id và thêm vào mảng task khai báo ở this state
  onSubmit = (data) => {
    var { tasks } = this.state;
    data.id = this.generateID();
    tasks.push(data);
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // update trạng thái
  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };

  //tìm id
  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      } else {
        return result;
      }
    });
    return result;
  };

  //xóa theo id
  onDelete = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index != -1) {
      tasks.splice(index, 1);
    }
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing,
    });
  };

  render() {
    // var tasks = this.state.tasks;
    // var taskEditing = this.state.taskEditing;

    var { tasks, taskEditing } = this.state;
    var elmTaskForm = <TaskFrom task={taskEditing}></TaskFrom>;
    return (
      <div className="container">
        <div className="text-center">
          <h1>Work Manage</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <TaskFrom onSubmit={this.onSubmit} />
            <TastEdit />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button
              type="button"
              className="btn  btn-primary"
              data-toggle="modal"
              data-target="#myModal"
            >
              Add Work
            </button>
            {/* <button
              type="button"
              className="btn  btn-danger"
              onClick={this.onGenerateData}
            >
              Generate Data
            </button> */}
            <br></br>
            <br></br>
            <Control />
            <br></br>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList
                  //props của tasklist
                  task={tasks}
                  onUpdateStatus={this.onUpdateStatus}
                  onDelete={this.onDelete}
                  onUpdate={this.onUpdate}
                  // onUpdate={this.onUpdate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
