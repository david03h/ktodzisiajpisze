import * as React from 'react';
import * as ReactDOM from 'react-dom';
import colors from '../../data/lessons.json';

export default class Lesson extends React.Component<any,any>{
    render(){

        var style;
        for(let lesson of colors){
            if(lesson.lesson == this.props.name){
                if(this.props.color) {
                    style = {
                        backgroundColor: lesson.darkColor
                    }
                }else {
                    style = {
                        backgroundColor: lesson.color
                    };
                }
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



function LightenDarkenColor(col:any, amt:any) {
    var usePound = false;
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
    var num = parseInt(col,16);
    var r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
    var b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
    var g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}