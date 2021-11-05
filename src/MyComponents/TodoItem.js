import React from 'react'
import { FaTrash } from "react-icons/fa"
import { FaCheck } from "react-icons/fa"

export const TodoItem = ({ todo, onDelete, onEdit , index }) => {

 
    function refreshPage() {
        window.location.reload(false);
    }


    let listItem = {
        fontFamily: 'cursive',
        marginTop: '10px',
        marginBottom: '10px',
        borderBottom: '1px solid black',
        padding: '10px'
    }


    let descSecy = {
        width: '500px',
        height: 'auto',
        marginRight: '20px',
        padding: '5px',
        borderRight: '1px solid black',
    }

    let tableitems = {
        borderRight: '1px solid black',
        textAlign: 'center'
    }

    let fmark = {
        backgroundColor: '#04bb0c',
        float: 'right',
        padding: '3px',
        borderRadius: '50%',
        borderBottomRightRadius: '50%',
        borderTopRightRadius: 2,
        width: '30px',
        fontSize: '15px',
        color: 'white',

    }

    let deletebtn = {
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '23px',
        padding: '5px'
    }

    let declarebtn = {
        backgroundColor: '#04bb0c',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        fontSize: '15px',
        padding: '5px',
    }
    let btnscontainer = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        padding: '10px'

    }

    
    return (
        <tr className='' style={listItem}>
            <td style={tableitems}>{index}</td>
            <td style={tableitems}>{todo.title}</td>
            <td style={descSecy}>{todo.desc}</td>
            {
                todo.status !== 'Finished' ?
                    <td style={tableitems}>{todo.status}</td>
                    :
                    <td style={tableitems}>{todo.status}<span style={fmark}><FaCheck /></span></td>
            }
            <td style={tableitems}>{todo.initDate}</td>
            <td style={tableitems}>{todo.deadline}</td>
            <td style={tableitems, btnscontainer}>
                {
                    todo.status !== 'Finished' ?
                        <button className='btns' onClick={() => { onEdit(todo) }} style={declarebtn}>Declare<br />Finish</button>
                        :
                        <button className='btns' style={{
                            backgroundColor: 'grey', color: 'black', border: 'none',
                            borderRadius: '5px',
                            fontSize: '15px',
                            padding: '5px',cursor:'auto'
                        }}>Finished<br/>{todo.FinishedDate}</button>
                }

                &nbsp;
                <button className='btns' onClick={() => {
                    onDelete(todo)
                    refreshPage()
                }} style={deletebtn}><FaTrash /></button>
            </td>
        </tr>


    )
}



