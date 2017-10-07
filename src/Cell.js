import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { turnBlue, turnBrown, turnGreen, turnGrey, creMount } from "./actions";

const StyledCell = styled.div`
  display: inline-block;

  z-index: 3;
  width: 3vw;
  height: 3vw;
  cursor: pointer;
  user-select: none;
  background-image: url(${props => props.cell.number});
  background-size: cover;
`;
//  background-color: ${props => props.cell.backgroundColor || "rgba(0,58,96,1)"};
let mouseDown = 0;
const pointsX = [];
const pointsY = [];
let start = {};
let p0 = {};
let p1 = {};

export class Cell extends Component {
  //interpolation of missed cells, enter events that didnt release, caluclate path between
  //grid[y][x]
  constructor(props) {
    super(props);
  }

  lerp(start, end, t) {
    return start + t * (end - start);
  }

  lerpPoint(p0, p1, t) {
    return;
    this.lerp(p0.x, p1.x, t), this.lerp(p0.y, p1.y, t);
  }

  // for (step = 0; step <= N; step++) {
  //   var t = step / N;
  //   points.push(lerpPoint(p0, p1, t));
  // }

  // diagonalDistance(point0, point1) {
  //   var diagonalX = point1.x - point0.x;
  //   var diagonalY = point1.y - point0.y;
  //   return Math.max(Math.abs(diagonalX, Math.abs(diagonalY))
  // }

  // roundPoint(point) {
  //  return new Point(Math.round(p.x), Math.round(p.y));
  // }
  // line(point0, point1) {
  //  var points = [];
  //  var N = diagonalDistance(point0, point1);
  //  for (i = 0; i <= N; i++) {
  //       var t = N == 0? 0.0 : i / N;
  //       points.push(round_point(lerp_point(point0, point1, t)));
  //     }
  //     return points
  // }

  // handleBezier(startPoint, control1, control2, endPoint) {
  //   this.startPoint = startPoint;
  //   this.control1 = control1;
  //   this.control2 =  control2;
  //   this.endPoint = endPoint;

  // }

  //   walk_grid(p0, p1) {
  //     var dx = p1.x-p0.x, dy = p1.y-p0.y;
  //     var nx = Math.abs(dx), ny = Math.abs(dy);
  //     var sign_x = dx > 0? 1 : -1, sign_y = dy > 0? 1 : -1;

  //     var p = new Point(p0.x, p0.y);
  //     var points = [new Point(p.x, p.y)];
  //     for (var ix = 0, iy = 0; ix < nx || iy < ny;) {
  //         if ((0.5+ix) / nx < (0.5+iy) / ny) {
  //             // next step is horizontal
  //             p.x += sign_x;
  //             ix++;
  //         } else {
  //             // next step is vertical
  //             p.y += sign_y;
  //             iy++;
  //         }
  //         points.push(new Point(p.x, p.y));
  //     }
  //     return points;
  // }
  point(t, start, c1, c2, end) {
    return (
      start * (1.0 - t) * (1.0 - t) * (1.0 - t) +
      3.0 * c1 * (1.0 - t) * (1.0 - t) * t +
      3.0 * c2 * (1.0 - t) * t * t +
      end * t * t * t
    );
  }

  // handleBezierLength() {
  //   var steps = 10;
  //   var length = 0;
  //   var px = void 0;
  //   var py = void 0;

  //   for (var i = 0; i <= steps; i += 1) {
  //     var t = i /steps;
  //     var cx = point(
  //       t,
  //       this.startPoint.x,
  //       this.control1.x,
  //       this.control2.x,
  //       this.endPoint.x);
  //     var cy = point(
  //       t,
  //       this.startPoint.y,
  //       this.control1.y,
  //       this.control2.y,
  //       this.endPoint);

  //       if (i > 0) {
  //         var xDiff = cx - px;
  //         var yDiff = cy - py;
  //         length += Math.sqrt(xDiff * xDiff + yDiff * yDiff);
  //       }
  //       px = cx;
  //       py = cy;
  //   }
  //   console.log(length);
  //   return length
  // };

  handleMouseEnter(e) {
    if (mouseDown === 1) {
      p0.x = this.props.x;
      p0.y = this.props.y;
      pointsX.push(p0.x);
      pointsY.push(p0.y);
      console.log(p0.x, p0.y);
      if (this.props.cell.clickedNum === 0) {
        this.props.dispatch(turnGreen(this.props.x, this.props.y));
      } else if (this.props.cell.clickedNum === 1) {
        this.props.dispatch(turnBlue(this.props.x, this.props.y));
      } else if (this.props.cell.clickedNum === 2) {
        this.props.dispatch(turnBrown(this.props.x, this.props.y));
      } else if (this.props.cell.clickedNum === 3) {
        this.props.dispatch(turnGrey(this.props.x, this.props.y));
      }
      //console.log(e.screenX, e.screenY);
    }
  }

  handleMouseDown(e) {
    mouseDown++;
    if (this.props.cell.clickedNum === 0) {
      this.props.dispatch(turnGreen(this.props.x, this.props.y));
    } else if (this.props.cell.clickedNum === 1) {
      this.props.dispatch(turnBlue(this.props.x, this.props.y));
    } else if (this.props.cell.clickedNum === 2) {
      this.props.dispatch(turnBrown(this.props.x, this.props.y));
    } else if (this.props.cell.clickedNum === 3) {
      this.props.dispatch(turnGrey(this.props.x, this.props.y));
    }
  }

  handleMouseUp(e) {
    mouseDown--;
    for (let i = pointsX.length; i > 0; i--) {
      //if cells around cell[pointsY[i]][pointsX[i]] are not colored
      //linear bezier curve from cell[pointY[i][pointX[i]]]
      console.log(
        "I need to create a bezier curve from " +
          pointsX[i] +
          "," +
          pointsY[i] +
          "to" +
          pointsX[i - 1] +
          "," +
          pointsY[i - 1]
      );
    }
    // console.log(pointsX);
    // console.log(pointsY);
    // new pointsX = [];
    // new pointsY = [];
  }

  render() {
    return (
      <StyledCell
        cell={this.props.cell}
        onMouseDown={e => this.handleMouseDown(e)}
        onMouseOut={e => this.handleMouseEnter(e)}
        onMouseExit={e => this.handleMouseExit(e)}
        onMouseUp={e => this.handleMouseUp(e)}
        onkeydown={e => this.handleOne(e)}
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
