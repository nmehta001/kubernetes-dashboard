import React from "react";
import Container from '@material-ui/core/Container';

const Main = ({ classes, children }) => (

<main className={classes.content}>
    <div className={classes.appBarSpacer} />
    <Container maxWidth="lg" className={classes.container}>
        { children }
        {/* <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
            <Chart />
            </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
            <Deposits />
            </Paper>
        </Grid>
        <Grid item xs={12}>
            <Paper className={classes.paper}>
            <Orders />
            </Paper>
        </Grid>
        </Grid> */}
    </Container>
    </main>
)

export default Main;