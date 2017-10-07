import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Cell from "./Cell";
import styled from "styled-components";
import devUI from "./devUI";
import { initGrid, exportGrid } from "./actions";

let counter = 0;
const GridContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: bottom;
  z-index: 1;
`;
//background-image: url('https://s3-us-west-2.amazonaws.com/acatmoreimages/background/centeredforest.jpg');
const Grid = styled.div`top: 3em;`;

const Row = styled.div`
  &:last-child {
    border-bottom: 1px solid #eee;
  }
`;
const Title = styled.div`
  text-align: center;
  display: block;
  color: white;
  font-size: 2em;
  width: 200px;
  height: 100px;
  position: fixed;
  top: 0em;
  right: 80%;
`;
const StyledDevUI = styled.div``;

const LeftWindow = styled.div`
  position: fixed;
  top: 8em;
  left: 1em;
  width: 250px;
  height: 500px;
  border: 2px solid white;
  background-color: rgba(249, 209, 164, .7);
  z-index: 5;
`;

const RightWindow = styled.div`
  position: fixed;
  top: 8em;
  right: 1em;
  width: 250px;
  height: 500px;
  border: 2px solid white;
  background-color: rgba(249, 209, 164, .7);
  z-index: 5;
`;

export class App extends Component {
  componentWillMount() {
    this.props.dispatch(initGrid(30, 20));
  }
  render() {
    return (
      <GridContainer>
        <Title>Tile Monster</Title>
        <StyledDevUI />
        <Grid>
          {this.props.grid.map((row, y, final) =>
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
/*<LeftWindow>
          </LeftWindow>
          <RightWindow>
          </RightWindow>*/
