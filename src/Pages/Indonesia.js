import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar'
import firebase from '../config/Firebase.js'
const Indonesia = () => {

    

    const [indo, setIndo] = useState([])
    useEffect(()=> {
        firebase.database().ref('DataIndonesia').on('value', (res) => {
            if (res.val()){
                const rawMeta = res.val()
                const indoArr = [];
                Object.keys(rawMeta).map((item) => (
                    indoArr.push({
                        id : item,
                        ...rawMeta[item],
                    })
                    ))
                setIndo(indoArr)
            }
        })
    }, [])


    return (
        <div className="container">
            <Navbar/>
            <h1>Data Indonesia</h1>
            <hr/>
            <br/>
            <div class="card text-white bg-warning col-3">
            {indo.map((item) => (
                        <tr key={item.id}>
                            <br/>
                           <strong><p>Positif : {item.positif}</p></strong>
                            <br/>
                            <strong><p>Sembuh :{item.sembuh}</p></strong>
                            <br/>
                            <strong><p>Meninggal : {item.meninggal}</p></strong>
                            
                        </tr>
                        
                    ))}
            </div>
        </div>
    )
}

export default Indonesia
