import React from "react";

class TaskFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
    };
  }

  componentWillMount() {
    if (this.props.task != null) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.status,
      });
    }
    console.log(this.state);
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
  };
  onClear = () => {
    this.setState({
      name: "",
      status: false,
    });
  };
  render() {
    var { id } = this.state;
    return (
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">
                {id !== "" ? "Update Work" : "Add Work"}
              </h4>
            </div>
            <div className="modal-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Name :</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={this.onChange}
                    value={this.state.name}
                    required
                  />
                </div>
                <label>Status :</label>
                <select
                  className="form-control"
                  name="status"
                  onChange={this.onChange}
                  value={this.state.status}
                >
                  <option value={true}>Active</option>
                  <option value={false}>Disable</option>
                </select>
                <br />
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success">
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                    onClick={this.onClear}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskFrom;
