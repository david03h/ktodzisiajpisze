import * as React from 'react';
import * as ReactDOM from 'react-dom';
import colors from '../../data/lessons.json';
import { spawn } from 'child_process';

export default class Lesson extends React.Component<any,any>{
    render(){

        var style;
        for(let lesson of colors){
            if(lesson.lesson == this.props.name){
                style = {
                    backgroundColor: lesson.color
                };
            }
        }
        return(
            <div className="row">
                <p>
                    <p>
                        <p>{this.props.hours[0]}</p>
                        <p>{this.props.hours[1]}</p>
                    </p>
                    {this.props.write ? <span style={style}>{this.props.name}</span> : <span className="blank">{this.props.name}</span>} 
                    {this.props.write ? this.props.person : null}
                </p>
            </div>
        );
    }
}