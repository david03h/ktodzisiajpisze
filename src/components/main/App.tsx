import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Table from './components/Table';

if(location.pathname == "/"){
    require('./css/main.css');
}

export default class App extends React.Component<any,any>{
    render(){
        return(
            <div id="container">
                <Table/>
            </div>
        );
    }
}