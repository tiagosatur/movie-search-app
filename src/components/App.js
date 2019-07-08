import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PATHS } from '../utils/variables';
import { Movie } from './Movie';
import { MainNav } from './MainNav'
import { PrivateRoute} from './PrivateRoute';
import { Login } from './Login';
import { Dashboard } from './Dashboard';
import { GlobalStyle } from '../style/base/global';
import styled, { css } from 'styled-components';
import { colorPallete, rem } from '../style'

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
const Grid = styled.div`
    padding: ${rem(16)};
    @media(min-width: ${rem(768)}) {
        padding: 0;
        width: 80%;
        margin: 0 auto;
    }
`;

export const Home = () => (
    <div>
        <h2>Home</h2>
        <p>Wecome to the application main page</p>
    </div>
);

export default App;