import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar'
import firebase from '../config/Firebase.js'
const Internasional = () => {


    

    const [indo, setIndo] = useState([])
    useEffect(()=> {
        firebase.database().ref('DataInternasional').on('value', (res) => {
            if (res.val()){
                const rawMeta = res.val()
                const interArr = [];
                Object.keys(rawMeta).map((item) => (
                    interArr.push({
                        id : item,
                        ...rawMeta[item],
                    })
                    ))
                setIndo(interArr)
            }
        })
    }, [])


    return (
        <div className="container">
            <Navbar/>
            <h1>Data Internasional</h1>
            <hr/>
            <br/>
            <div class="card text-white bg-danger col-3">
            {indo.map((item) => (
                        <tr key={item.id}>
                            <br/>
                           <strong><p>Positif : {item.positive}</p></strong>
                            <br/>
                            <strong><p>Sembuh :{item.recovery}</p></strong>
                            <br/>
                            <strong><p>Meninggal : {item.death}</p></strong>
                            
                        </tr>
                        
                    ))}
            </div>
        </div>
    )
}

export default Internasional
