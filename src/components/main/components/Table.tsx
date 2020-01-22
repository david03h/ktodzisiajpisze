import * as React from 'react';
import * as ReactDOM from 'react-dom';
import data from '../data/data.json';

import Column from './Column';
import Lesson from './ui/lesson';

export default class Table extends React.Component<any,any>{

    render(){

        var lessons = data.map(day => {
            return(
                <Column>
                    <h2>{day.day}</h2>
                    {day.lessons.map(lesson => {
                        return(
                            <Lesson name={lesson}/>
                        );
                    })}
                </Column>
            );
        });

        return(
            <div className="table">
                {lessons}
            </div>
        );
    };
}