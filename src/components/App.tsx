import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from './main/App';

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
                            <Main/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}