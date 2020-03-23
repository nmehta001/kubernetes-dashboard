import React from "react";
import * as d3 from "d3";

import styled from "styled-components";

import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";

import realtimeLineGraph from "../../utils/lineGraph";

const Chart = styled.div`
  max-width: 600px;
  max-height: 400px;
  position: relative;

  .line {
    fill: none;
    stroke: #ffab00;
    stroke-width: 3;
  }
  
  .overlay {
    fill: none;
    pointer-events: all;
  }

  /* Style the dots by assigning a fill and stroke */
  .dot {
    fill: #ffab00;
    stroke: #fff;
  }
  
  .focus circle {
    fill: none;
    stroke: steelblue;
  }
`;

const RealtimeLineGraph = props => 
  (
    <Paper>
      <Card>
        {/* <Chart id="chart">
          { realtimeLineGraph() }
        </Chart> */}
      </Card>
    </Paper>
  );

export default RealtimeLineGraph;
