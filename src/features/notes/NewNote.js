import NewNoteForm from './NewNoteForm'
import { useGetUsersQuery } from "../users/usersApiSlice"
import PulseLoader from "react-spinners/PulseLoader"

const NewNote = () => {
    const { users } = useGetUsersQuery('usersList', {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        })
    })

    if (!users?.length) return <PulseLoader color={'#fff'} />

    const content = users ? <NewNoteForm users={users} /> : <PulseLoader color={'#fff'} />

    return content
}   

export default NewNote