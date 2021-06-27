import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar'
import firebase from '../config/Firebase.js'
const Provinsi =() => {

    const [namaProvinsi, setNamaProvinsi] = useState('')
    const [kasusMeninggal, setKasusMeninggal] = useState('')
    const [kasusSembuh, setKasusSembuh] = useState('')
    const [kasusPositif, setKasusPositif] = useState('')
     const [button, setButton] = useState("Save Data")
     const [selectedProv, setSelectedProv] = useState({})
    const [prov, setProv] = useState([])
    useEffect(()=>{
        firebase.database().ref('DataProvinsi').on('value', (res) => {
            if(res.val()){
                const rawData = res.val();
                const ProvinsiArr = [];
               Object.keys(rawData).map(item => (
                   ProvinsiArr.push ({
                       id : item,
                       ...rawData[item],
                   })
                   ))
               setProv(ProvinsiArr)
            }
        })
    }, [])

    const resetForm = () => {
        setNamaProvinsi('');
        setKasusMeninggal('');
        setKasusSembuh('');
        setKasusPositif('');
        setButton('Save Data')
        setSelectedProv({})

    }

    const onSubmit = () => {
        const data = {
             namaProvinsi : namaProvinsi,
             kasusMeninggal : kasusMeninggal,
             kasusSembuh : kasusSembuh,
             kasusPositif : kasusPositif,
        }
        if(button === 'Save Data')
       {
           //save
        firebase.database().ref('DataProvinsi').push(data);
       }else{
           //update
           firebase.database().ref(`DataProvinsi/${selectedProv.id}`).set(data);
       }
       
       
       resetForm();
    } 

    const onUpdate = (item) => {
        setNamaProvinsi(item.namaProvinsi)
        setKasusMeninggal(item.kasusMeninggal)
        setKasusSembuh(item.kasusSembuh)
        setKasusPositif(item.kasusPositif)
        setButton('Update Data');
        setSelectedProv(item);
    };

    const onDeleteData = (item) => {
        firebase.database().ref(`DataProvinsi/${item.id}`).remove();
    }

    return (
        <div className="container mt-5">
            <Navbar/>
            <h1>Data Provinsi</h1>
            <div className="col-6">
                <p>Nama Provinsi</p>
            <input className="form-control" placeholder="Tuliskan Nama Provinsi" value={namaProvinsi} onChange={(e) => setNamaProvinsi(e.target.value)}/>
            <p>Kasus Sembuh</p>
            <input className="form-control" placeholder="Jumlah Kasus Sembuh" value={kasusSembuh} onChange={(e) => setKasusSembuh(e.target.value)}/>
            <p>Kauss Meninggal</p>
            <input className="form-control" placeholder="Jumlah Kasus Meninggal" value={kasusMeninggal} onChange={(e) => setKasusMeninggal(e.target.value)}/>
            <p>Kasus Positif</p>
            <input className="form-control" placeholder="Jumlah Kasus Positif" value={kasusPositif} onChange={(e) => setKasusPositif(e.target.value)}/>
            <hr/>
            <br/>
            <button className="btn btn-outline-dark" onClick={onSubmit}>{button}</button>
            {button === "Update Data" && (
                <button className = "btn btn-outline-warning" onClick={resetForm}>Cancel Data</button>
            )}
            </div>
            <hr/>
            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th>Nama Provinsi </th>
                        <th>Kasus Sembuh </th>
                        <th>Kasus Meninggal</th>
                        <th>Kasus Positif ➕</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        prov.map((item) => (
                            <tr key={item.id}>
                                <td>{item.namaProvinsi}</td>
                                <td>{item.kasusSembuh}</td>
                                <td>{item.kasusMeninggal}</td>
                                <td>{item.kasusPositif}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => onUpdate(item)}>Update Data</button>
                                    <button className="btn btn-light" onClick={()=> onDeleteData(item)}>Delete Data</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Provinsi
