import * as React from 'react';
import * as ReactDOM from 'react-dom';
import data from '../data/data.json';
import peopleData from '../data/people.json';
import index from '../data/index.json';

import Column from './Column';
import Lesson from './ui/lesson';

export default class Table extends React.Component<any,any>{

    render(){
        let personIndex = index.index;
        var lessons = data.map((day,a) => {
            return(
                <Column key={a}>
                    <h2>{day.day}</h2>
                    {day.lessons.map((lesson,b) => {
                        let person = peopleData[personIndex];
                        personIndex == peopleData.length-1 ? personIndex = 0 : personIndex++;
                        return(
                            <Lesson name={lesson} person={person} key={b}/>
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