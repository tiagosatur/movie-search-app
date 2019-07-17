import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PATHS } from './utils/variables';
import { MainNav, PrivateRoute, Grid } from './components'
import { Home, Movie, Dashboard, Login, NotFound } from './pages';
import { GlobalStyle } from './style/base/global';

const App = () => {
    return(
        <div className='app'>
            <GlobalStyle />
            <MainNav />
            <Grid>
                <Switch>
                    <Route exact path={PATHS.HOME.PATH} component={Home} />
                    <PrivateRoute path={PATHS.DASHBOARD.PATH} component={Dashboard} /> 
                    <Route path={PATHS.MOVIE.PATH} component={Movie} />
                    <Route path={PATHS.LOGIN.PATH} component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </Grid>
        </div>
    )
}


export default App;