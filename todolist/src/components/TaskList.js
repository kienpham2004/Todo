import React from "react";
import TaskItem from "./TaskItem";

class TaskList extends React.Component {
  render() {
    var task = this.props.task;

    //vòng lặp để show dữ liệu trong mảng
    var elmTasks = task.map((taskmap, index) => {
      return (
        <TaskItem
          key={taskmap.id}
          index={index}
          task={taskmap}
          onUpdateStatus={this.props.onUpdateStatus}
          onDelete={this.props.onDelete}
          onUpdate={this.props.onUpdate}
        />
      );
    });
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">Series</th>
            <th className="text-center">Name</th>
            <th className="text-center">Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td></td>
            <td>
              <input type="text" className="form-control" />
            </td>
            <td>
              <select className="form-control">
                <option value="-1">Tất Cả</option>
                <option value="0">Ẩn</option>
                <option value="1">Kích Hoạt</option>
              </select>
            </td>
            <td></td>
          </tr> */}
          {elmTasks}
        </tbody>
      </table>
    );
  }
}

export default TaskList;
