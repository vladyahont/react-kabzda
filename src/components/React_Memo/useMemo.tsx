import React, {useCallback, useMemo, useState} from 'react'

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1


    resultA = useMemo(() => {
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            resultA = resultA * i
        }
        return resultA
    }, [a])

    resultB = useMemo(() => {
        for (let i = 1; i <= b; i++) {
            resultB = resultB * i
        }
        return resultB
    }, [b])

    return <>

        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>

    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("camel")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Vlad', 'Tanya'])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf("a") > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUser = [...users, 'Chang ' + new Date().getTime()]
        setUsers(newUser)
    }

    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    //console.log('likeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS'])

    const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf("a") > -1)
        return newArray
    }, [books])

    const addBook = () => {

    }

    const memoizedAddBook = useMemo(() => {
        return () => {
            const newUser = [...books, 'HTML ' + new Date().getTime()]
            setBooks(newUser)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
            const newUser = [...books, 'HTML ' + new Date().getTime()]
            setBooks(newUser)
    }, [books])

    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        {counter}
        <Book
            // books={newArray}
            addBook={memoizedAddBook2}/>
    </>
}

type BooksSecretType = {
    //books: Array<string>
    addBook: ()=> void }

const BooksSecret = (props: BooksSecretType) => {
    //console.log("books")
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {
            //props.books.map((b, i) => <div key={i}>{b}</div>)
        }
    </div>
}

const Book = React.memo(BooksSecret)