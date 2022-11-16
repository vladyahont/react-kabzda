import React, {useState} from 'react'

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("camal")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const ExampleReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Vlad', 'Tanya'])

    const addUser = () => {
        const newUser = [...users, 'Chong ' + new Date().getTime()]
        setUsers(newUser)
    }

    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        <button onClick={addUser}>add user</button>
    <NewMessageCounter count={counter}/>
    <Users users={users}/>
    </>
}