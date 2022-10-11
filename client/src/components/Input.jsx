import React, {useRef, useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil';
import axios from 'axios';
import { taskAtom, taskCountAtom } from "../data/atoms"
import { InputContainer } from '../styles/Input'

const Input = () => {
    const input = useRef();
    const setTasks = useSetRecoilState(taskAtom);
    const taskCount = useSetRecoilState(taskCountAtom)

    useEffect(()=> {
        input.current.addEventListener('keyup', async (e)=> {
            if(e.key === 'Enter'){
                await axios.post(`${import.meta.env.VITE_SERVER_ENDPOINT}/task`, {task: input.current.value})
                    .then(async res => {
                        const { data } = await axios.get(`${import.meta.env.VITE_SERVER_ENDPOINT}/task`)
                        setTasks(data)
                        taskCount(data.length || 0)
                    })
                    .catch(err => console.error(err))
            }
        })
    }, [])

    return (
        <InputContainer ref = {input} placeholder='Create a new todo...'/>
    )
}

export default Input