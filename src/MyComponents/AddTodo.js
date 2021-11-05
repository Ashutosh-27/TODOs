import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [status, setStaus] = useState("TO Start");
    const [initDate, setinitDate] = useState("");
    const [deadline, setDeadline] = useState("");



    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    date = yyyy + '/' + mm + '/' + dd;
    let Fdate = ''

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc || !status) {
            alert('Title or Description Cannot be Blank')
        }
        else {
            if (status !== 'Finished') {

                addTodo(title, desc, status, initDate, deadline, Fdate);
                setTitle("");
                setDesc("");
                setStaus("Select");
                setinitDate("");
                setDeadline("");
            }
            else {
                Fdate = date
                addTodo(title, desc, status, initDate, deadline, Fdate);
                setTitle("");
                setDesc("");
                setStaus("Select");
                setinitDate("");
                setDeadline("");
            }


        }
    }




    let formcontainer = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }


    let descstayle = {
        position: 'relative',
        height: '100px',
        width: '600px',
        fontFamily: 'cursive',
        padding: '5px',
    }

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <>
            <div className="container my-3" style={{ width: '70%' }}>
                <form onSubmit={submit} style={formcontainer}>
                    <div style={{ width: '700px' }}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Todo Title</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" style={{ width: '600px', }} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label">Todo Description</label>
                            <textarea type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" style={descstayle} />
                        </div>
                        <button type="submit" className="btn  btn-dark" onClick={refreshPage}>ADD <FaPlus /></button>
                    </div>

                    <div style={{ width: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
                        <span>
                            <label for='status'>Select Status</label> :&nbsp;
                            <select name='status' value={status} onChange={(e) => {
                                const statusState = e.target.value
                                setStaus(statusState)
                            }} required>
                                <option value=''>Select..</option>
                                <option value='TO Start'>TO Start</option>
                                <option value='In Progress'>In Progress</option>
                                <option value='Finished'>Finished</option>
                            </select>
                        </span>
                        <span>
                            <label for='start Date'>Start Date :</label>&nbsp;
                            <input type='date' value={initDate} onChange={(e) => setinitDate(e.target.value)} style={{ width: '150px' }}></input>
                        </span>
                        <span>
                            <label for='deadline'>Deadline :</label>&nbsp;
                            <input type='date' value={deadline} onChange={(e) => setDeadline(e.target.value)} style={{ width: '150px' }}></input>
                        </span>
                    </div>
                </form>
            </div>
            <hr />
        </>
    )
}