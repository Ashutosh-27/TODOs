import React from 'react'
import { Link } from 'react-router-dom'
import illustration from './illustration.jpg'

export const About = () => {
    // let piston={
    //     display:'grid',
    //     gridAutoColumn: '1fr 1fr',
        
    // }
    return (
        <div style={{ width: '70%', margin: 'auto', marginTop: '2em' }}>
            <h3 className='text-center my-3' style={{ fontFamily: "'Patrick Hand', cursive", fontSize: '5em', fontWeight: '500',}}>About Section of ToDo's</h3><hr />
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',width:'90%',margin:'auto'}}>
                <p style={{ fontFamily: "'Ubuntu Condensed', sans-serif", fontSize: '2em', fontWeight: '300',marginTop:'2em' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam dolor debitis, vitae magni ratione nulla praesentium aspernatur culpa veniam labore blanditiis officiis vel. Odio corporis quaerat voluptatibus officiis modi dolorem nobis, alias quae laborum repellat, at beatae dolores voluptatum eius?
                </p>
                <img style={{width:'100%',height:'auto'}} src={illustration}></img>
            </div>

            <div style={{ width: '100%', textAlign: 'center' ,marginTop:'3em',minHeight:'300px'}}>
                <button style={{ border: '2px', borderRadius: '5%', fontSize: '1.3em', backgroundColor: '#6705f3f0', height: '45px', color: 'white', paddingLeft: '15px', paddingRight: '15px' }}><Link style={{ color: 'white', textDecoration: 'none' }} to="/">Go Back</Link></button>
            </div>
        </div>
    )
}
