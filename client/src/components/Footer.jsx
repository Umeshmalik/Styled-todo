import axios from 'axios'
import React from 'react'
import {useSetRecoilState, useRecoilState} from "recoil"
import { StyledRow, SectionOne, SectionTwo, SectionThree } from '../styles/Footer'
import {taskCountAtom, taskAtom } from "../data/atoms"

const Footer = () => {
  const setTasks = useSetRecoilState(taskAtom);
  const [taskCount, setTaskCount] = useRecoilState(taskCountAtom)
  const deleteAll = async () => {
    axios.delete(`${import.meta.env.VITE_SERVER_ENDPOINT}/task`).then(async res=> {
      const { data } = await axios.get(`${import.meta.env.VITE_SERVER_ENDPOINT}/task`)
      setTasks(data)
      setTaskCount(data.length || 0)
    })
  }
  return (
    <StyledRow>
        <SectionOne>
            {taskCount} items left
        </SectionOne>
        <SectionTwo>
            All Active Completed
        </SectionTwo>
        <SectionThree onClick={deleteAll}>
            Clear Completed
        </SectionThree>
    </StyledRow>
  )
}

export default Footer