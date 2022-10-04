import React from 'react'
import { Card, HR, Row } from '../styles/TaskList';
import {tasks} from "../data/tasks"

const TaskList = () => {

    return (
        <Card>
            {
                tasks?.map(task => <>
                <Row key={task.id}>{task?.title}</Row>
                <HR/>
                </>)
            }
        </Card>
    )
}

export default TaskList