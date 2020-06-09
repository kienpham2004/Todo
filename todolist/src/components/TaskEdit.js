import React from "react";

class TastEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: false,
    };
  }
  
  render() {
    return (
      <div className="modal fade" id="onEdit" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <h4 className="modal-title">Edit work</h4>
            </div>
            <div className="modal-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Name :</label>
                  <input type="text" className="form-control" name="name" />
                </div>
                <label>Status :</label>
                <select className="form-control" name="status">
                  <option>Active</option>
                  <option>Disable</option>
                </select>
                <br />
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success">
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
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

export default TastEdit;
