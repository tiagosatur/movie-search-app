import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PATHS } from '../utils/variables';
import { MainNav, PrivateRoute, Grid } from '.'
import { Home, Movie, Dashboard, Login } from '../pages';
import { GlobalStyle } from '../style/base/global';

const App = () => {
    return(
        <div>
            <GlobalStyle />
            <MainNav />
            <Grid>
                <Switch>
                    <Route path={PATHS.LOGIN.PATH} component={Login} />
                    <Route exact path={PATHS.HOME.PATH} component={Home} />
                    <Route path={PATHS.MOVIE.PATH} component={Movie} />
                    <PrivateRoute component={Dashboard} /> 
                </Switch>
            </Grid>
        </div>
    )
}


export default App;