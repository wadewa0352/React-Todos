import React from 'react';

export default class TodosListHeader extends React.Component {
    render(){
        return(
            <thead>
                <th>Task</th>
                <th>Actions</th>
            </thead>
        );
    }
}