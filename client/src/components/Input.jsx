import React, {useRef, useEffect } from 'react'
import axios from 'axios';

import { InputContainer } from '../styles/Input'

const Input = () => {
    const input = useRef();

    useEffect(()=> {
        input.current.addEventListener('keydown', async (e)=> {
            if(e.key === 'Enter'){
                await axios.post(`${import.meta.env.VITE_SERVER_ENDPOINT}/task`, {task: input.current.value})
                    .then(res => console.log(res))
                    .catch(err => console.error(err))
            }
        })
        return ()=> {
            input.current.addEventListener('keydown', ()=> null)
        }
    }, [])

    return (
        <InputContainer ref = {input} placeholder='Create a new todo...'/>
    )
}

export default Input