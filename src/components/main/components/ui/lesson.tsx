import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class Lesson extends React.Component<any,any>{
    render(){
        return(
            <div className="row"><p>{this.props.name}</p></div>
        );
    }
}