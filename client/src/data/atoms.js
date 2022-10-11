import {atom} from "recoil"

export const taskAtom = atom({
    key: "tasks",
    default: []
})

export const taskCountAtom = atom({
    key: "taskCount",
    default: 0
})