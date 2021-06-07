import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from '../Pages/home'

export const RouterView = () => {
    return (<Router>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    </Router>)
}