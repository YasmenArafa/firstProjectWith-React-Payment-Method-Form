import "./Form.css";
import {useState} from 'react';
import Modal from './Modal.js'
export default function Form() {

    const [showModal, setShowModal] = useState(false);
    const [formInputs, setFormInputs] = useState({
        name: "",
        email: "",
        address: "",
        cardNo: "",
        cvv: "",
        expireDate: "",
    });
    function handleFormSubmit(event) {
        event.preventDefault();
        setShowModal(true);
    }
    const btnIsDisabled = formInputs.name === "" || formInputs.email === "" || formInputs.address === "" || formInputs.cardNo=== "" || formInputs.cvv === "" || formInputs.expireDate === "";

    function handleDevClick(){
        if(showModal){
            setShowModal(false);
        }
    }
    return(
        <div onClick={handleDevClick}>
        <div style={{width: "50%",position: "absolute", top: "50%",right: "50%",transform: "translate(50%,-50%)", backgroundColor: "#FC6736", padding: "40px", borderRadius: "25px", fontSize: "20px", boxShadow: "10px 5px 6px black"}}>
            <form style={{color: "white"}}>
                <h1 style={{fontSize: "40px", marginBottom: "30px"}}>Payment Method</h1>

                <label>Card Holder</label>
                <input value={formInputs.name} onChange={(event) => {
                    setFormInputs({...formInputs, name: event.target.value})
                }} type="text" />
<br/>
                <label>Email</label>
                <br/>
                <input value={formInputs.email} onChange={(event) => {
                    setFormInputs({...formInputs, email: event.target.value})
                }} type="text" />
<br/>

                <label>Billing Address</label>
                <input value={formInputs.address} onChange={(event) => {
                    setFormInputs({...formInputs, address: event.target.value})
                }} type="text" />
<br/>

<div style={{display: "flex" ,flexDirection: "row"}}>
<div>
            <label>Card No</label>  
            <br/>  
            <input value={formInputs.cardNo} onChange={(event) => {
                    setFormInputs({...formInputs, cardNo: event.target.value})
                }} style={{width: "91%"}} type="text" />
        </div>
        <div style={{marginRight: "-20px"}}>
            <label>CCV</label>
            <br/>
            <input value={formInputs.cvv} onChange={(event) => {
                    setFormInputs({...formInputs, cvv: event.target.value})
                }} style={{width: "85%"}} type="text" />
        </div>
        <div style={{marginRight: "-70px"}}>
                <label>Expiry</label>
                <br/>
                <input value={formInputs.expireDate} onChange={(event) => {
                    setFormInputs({...formInputs, expireDate: event.target.value})
                }} style={{width: "50%"}} type="text" />
        </div>
</div>



                <button className={btnIsDisabled ? "disabled" : ""} disabled={btnIsDisabled} onClick={handleFormSubmit} style={{boxShadow: "10px 5px 6px black"}}>Add New Method</button>

            </form>

        </div>
        <Modal isvisible={showModal}/>
        </div>
    )
}