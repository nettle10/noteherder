import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'


const Main = () =>{
return(
    <div className="Main">
        className="Main"
        style = {style}
       <Sidebar/>
       <NoteList/>
       <NoteForm/>
    </div>
)
}

const style ={
    color'read',
    display:'flex',
    alignItems: 'stretch',
}
export default Main