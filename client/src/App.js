import React from 'react';
import Navbar from './component/Navbar';
import './index.css';
import Home from './component/Home';
import User from './component/User';
import Alert from './component/alert';
import About from './component/About';
import NotFound from './component/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//ContextAPI  Section
import GitHubState from './context/GitHub/GithubState';
import AlertState from './context/Actions/AlertState';

const App = () => {
	return (
		<GitHubState>
			<AlertState>
				<Router>
					<div className="App">
						<Navbar title="Github Apps" icon="fab fa-github" />
						<div id="container">
							<Alert />
							<Switch>
								<Route path="/" exact component={Home} />
								<Route exact path="/about" component={About} />
								<Route exact path="/user/:login" component={User} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GitHubState>
	);
};

export default App;
