import React from "react";
import Search from "./Search";
import Sort from "./Sort";

class Control extends React.Component {
  render() {
    return (
      <div className="row mt-15">
        {/* search */}
        <Search />

        {/* sort */}
        <Sort />
      </div>
    );
  }
}

export default Control;
