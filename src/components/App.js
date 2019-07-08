import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PATHS } from '../utils/variables';
import { Movie } from './Movie';
import { MainNav } from './MainNav'
import { PrivateRoute} from './PrivateRoute';
import { Login } from './Login';
import { GlobalStyle } from '../style/base/global';

const App = () => {
    return(
        <div>
            <GlobalStyle />
            <MainNav />
            <Switch>
                <Route path={PATHS.LOGIN.PATH} component={Login} />
                <Route exact path={PATHS.HOME.PATH} component={Home} />
                <Route path={PATHS.MOVIE.PATH} component={Movie} />
                <PrivateRoute component={Dashboard} /> 
            </Switch>
        </div>
    )
}

export const Home = () => (
    <div>
        <h2>Home</h2>
        <p>Wecome to the application main page</p>
    </div>
);
export const About = () => (
    <div>
        <h2>About</h2>
    </div>
);
export const Dashboard = ({ match }) => (
    <div>
        <h2>Dashboard</h2>
        <p>Lorem ipsum</p>
    </div>
);

export default App;