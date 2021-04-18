import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

function reducer(state, action) {
    switch (action.type) {
        case 'clear':
            return { posts: []}
        case 'get_data':
            return {...state, posts: action.payload.posts}
        default:
            return { posts: []}
    }
}

export default function useFetchJobs(params, page) {

    {/* an alternative to useState. Accepts a reducer of type (state, action) => newState*/}
    const [state, dispatch] = useReducer(reducer, {posts: []} ) // last part is the initial state
    
    useEffect(() => {
        dispatch({type: 'clear'})
        axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    dispatch({type: 'get_data', payload: {posts: res.data}})
                })
                .catch((e) => {
                    dispatch({type: 'error'})
                })
    }, [params, page])

    return state
}
