import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HelloWorld1 from './main/App';

export default class App extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }

    render(){
        return(
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <HelloWorld1/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}