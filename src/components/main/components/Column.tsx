import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class Table extends React.Component<any,any>{

    render(){

        return(
            <div>
                <div className="col">
                    {this.props.children}
                </div>
            </div>
        );
    }
}