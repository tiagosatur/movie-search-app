import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { PATHS } from '../utils/variables';
import { MainNav, PrivateRoute, Grid } from '.'
import { Home, Movie, Dashboard, Login } from '../pages';
import { GlobalStyle } from '../style/base/global';

const App = () => {
    const {
        user: {
          isLogged,
        },
    } = useSelector(state => state);

    return(
        <div className='app'>
            <GlobalStyle />
            <MainNav />
            <Grid>
                <Switch>
                    <PrivateRoute exact path={PATHS.HOME.PATH} component={Home} />
                    <Route path={PATHS.MOVIE.PATH} component={Movie} />
                    <PrivateRoute isLogged={isLogged} component={Dashboard} /> 
                    <Route path={PATHS.LOGIN.PATH} component={Login} />
                </Switch>
            </Grid>
        </div>
    )
}


export default App;