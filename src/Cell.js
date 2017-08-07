import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { turnBlue, turnBrown, turnGreen, turnGrey } from "./actions";

const StyledCell = styled.div`
  display: inline-block;
  border-left: 1px solid black;
  border-top: 1px solid black;
  &:last-child {
    border-right: 1px solid black;
  }
  width: 20px;
  height: 20px;
  cursor: pointer;
  user-select: none;
  background-color: ${props => props.cell.backgroundColor || "#eee"};
`;

export class Cell extends Component {
  handleClick() {
    if (this.props.cell.clickedNum === 0) {
      this.props.dispatch(turnBlue(this.props.x, this.props.y));
    } else if (this.props.cell.clickedNum === 1) {
      this.props.dispatch(turnBrown(this.props.x, this.props.y));
    } else if (this.props.cell.clickedNum === 2) {
      this.props.dispatch(turnGreen(this.props.x, this.props.y));
    } else if (this.props.cell.clickedNum === 3) {
      this.props.dispatch(turnGrey(this.props.x, this.props.y));
    }
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
