import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { turnBlue } from "./actions";

const StyledCell = styled.div`
  display: inline-block;
  border-left: 1px solid black;
  border-top: 1px solid black;
  &:last-child {
    border-right: 1px solid black;
  }
  width: 75px;
  height: 75px;
  cursor: pointer;
  user-select: none;
  background-color: ${props => props.cell.backgroundColor || "#eee"};
`;

export class Cell extends Component {
  handleClick() {
    this.props.dispatch(turnBlue(this.props.x, this.props.y));
  }

  render() {
    return (
      <StyledCell cell={this.props.cell} onClick={() => this.handleClick()}>
        &nbsp;
      </StyledCell>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    cell: state.grid[props.y][props.x]
  };
};

export default connect(mapStateToProps)(Cell);
