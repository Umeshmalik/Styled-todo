import React, {useState, useEffect, Fragment } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import axios from 'axios';
import { Card, HR, Row } from '../styles/TaskList';
import { taskAtom, taskCountAtom } from "../data/atoms"

const TaskList = () => {
    const [tasks, setTasks] = useRecoilState(taskAtom);
    const taskCount = useSetRecoilState(taskCountAtom)
    useEffect(()=> {
        getTasks()
    },[]);


    const getTasks = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_SERVER_ENDPOINT}/task`)
        setTasks(data)
        taskCount(data.length || 0)
    }

    const updateTask = async (status, taskId) => {
        await axios.patch(`${import.meta.env.VITE_SERVER_ENDPOINT}/task`, {taskId, status})
        await getTasks();
    }

    return (
        <Card>
            {
                tasks?.map(task => <Fragment  key={task.id}>
                <Row cross={task?.status} onClick={() =>updateTask(!task?.status, task?.id)}>{task?.title}</Row>
                <HR/>
                </Fragment>)
            }
        </Card>
    )
}

export default TaskList