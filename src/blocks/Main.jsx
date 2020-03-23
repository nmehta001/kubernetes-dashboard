import React from "react";
import Container from '@material-ui/core/Container';

const Main = ({ classes, children }) => (

<main className={classes.content}>
    <div className={classes.appBarSpacer} />
    <Container maxWidth="lg" className={classes.container}>
       { children }
    </Container>
    </main>
)

export default Main;