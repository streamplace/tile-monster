import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Cell from "./Cell";
import styled from "styled-components";
import { initGrid } from "./actions";

const GridContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Grid = styled.div``;

const Row = styled.div`
  &:last-child {
    border-bottom: 1px solid #eee;
  }
`;

export class App extends Component {
  componentWillMount() {
    this.props.dispatch(initGrid(60, 34));
  }
  render() {
    return (
      <GridContainer>
        <Grid>
          {this.props.grid.map((row, y) =>
            <Row key={y}>
              {row.map((cell, x) => {
                return <Cell key={`${x}-${y}`} x={x} y={y} />;
              })}
            </Row>
          )}
        </Grid>
      </GridContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    grid: state.grid
  };
};

export default connect(mapStateToProps)(App);
