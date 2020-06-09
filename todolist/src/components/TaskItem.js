import React from "react";

class TaskItem extends React.Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };

  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  };

  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  };
  
  render() {
    var { task, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span
            className={
              task.status ? "label label-success" : "label label-danger"
            }
            onClick={this.onUpdateStatus}
          >
            {task.status ? "Active" : "Disable"}
          </span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-success"
            data-toggle="modal"
            data-target="#onEdit"
            onClick={this.onUpdate}
          >
            Edit
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.onDelete}
          >
            <span className="fa fa-trash mr-5"></span>Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
