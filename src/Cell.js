import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { turnBlue, turnBrown, turnGreen, turnGrey } from "./actions";

const StyledCell = styled.div`
  display: inline-block;
  border-left: 1px solid #eee;
  border-top: 1px solid #eee;
  &:last-child {
    border-right: 1px solid #eee;
  }
  width: 20px;
  height: 20px;
  cursor: pointer;
  user-select: none;
  background-color: ${props => props.cell.backgroundColor || "white"};
`;

let mouseDown = 0;

export class Cell extends Component {
  //interpolation of missed cells, enter events that didnt release, caluclate path between

  handleMouseEnter(e) {
    if (mouseDown === 1) {
      if (this.props.cell.clickedNum === 0) {
        this.props.dispatch(turnBlue(this.props.x, this.props.y));
      } else if (this.props.cell.clickedNum === 1) {
        this.props.dispatch(turnBrown(this.props.x, this.props.y));
      } else if (this.props.cell.clickedNum === 2) {
        this.props.dispatch(turnGreen(this.props.x, this.props.y));
      } else if (this.props.cell.clickedNum === 3) {
        this.props.dispatch(turnGrey(this.props.x, this.props.y));
      }
      console.log(e.screenX, e.screenY);
    }
  }

  handleMouseDown(e) {
    // this.cell.e.addEventListener("mouseover", function() {
    mouseDown++;
    console.log(mouseDown);
    // })
  }

  handleMouseUp(e) {
    mouseDown--;
    console.log(mouseDown);
  }

  render() {
    return (
      <StyledCell
        cell={this.props.cell}
        onMouseDown={e => this.handleMouseDown(e)}
        onMouseEnter={e => this.handleMouseEnter(e)}
        onMouseUp={e => this.handleMouseUp(e)}
      >
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
