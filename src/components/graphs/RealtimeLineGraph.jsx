import React from "react";
import * as d3 from "d3";
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid'
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";

import { useStyles } from '../../theme';
import realtimeLineGraph from "../../utils/lineGraph";


const RealtimeLineGraph = (props) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={12} lg={6}>
        <Paper className={fixedHeightPaper}>
          { realtimeLineGraph() }
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Paper className={fixedHeightPaper}>
          { realtimeLineGraph() }
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Paper className={fixedHeightPaper}>
          { realtimeLineGraph() }
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Paper className={fixedHeightPaper}>
          { realtimeLineGraph() }
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RealtimeLineGraph;
