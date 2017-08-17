import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledDevUI = styled.div`
  position: fixed;
  border: 1px solid black;
  top: 1em;
  right: 1em;
  width: 100px;
  height: 500px;
  background-color: red;
  z-index: 5;
`;

export class devUI extends Component {
  render() {
    return (
      <StyledDevUI>
        <button onClick={e => this.handleClick(e)}>save</button>
      </StyledDevUI>
    );
  }
}
const mapStateToProps = state => {
  return {
    devUI
  };
};
export default connect(mapStateToProps)(devUI);
