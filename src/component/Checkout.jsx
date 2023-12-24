import { useEffect, useRef, useState } from "react"
import useFetch from "./useFetch"

export default function Checkout({ onClose, price, items }) {
    const fName = useRef()
    const email = useRef()
    const street = useRef()
    const city = useRef()
    const postalCode = useRef()
    const [submitStatus, setSubmitStatus] = useState({status: undefined, statusText: undefined, submit: undefined})

    

    function onSubmit(event) {
        event.preventDefault()

        setSubmitStatus({status: submitStatus.status, statusText: submitStatus.statusText, submit: "submiting"})

        fetch("http://localhost:3000/orders",{ 
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({order:{
                customer: {
                    name: fName.current.value,
                    email: email.current.value,
                    street: street.current.value,
                    "postal-code": postalCode.current.value,
                    city: city.current.value
                },
                items: [...items]
            }})
        }).then(res => setSubmitStatus({status: res.status, statusText: res.statusText, submit: "submited"}))
        .catch(setSubmitStatus({status: 0, statusText: "connection error, try again later", submit: "failed"}))
    }

    if(submitStatus.submit == "submiting"){
        return(
            <h2>sending order</h2>
        )
    }

    if(submitStatus.status == 201){
        return(
            <>
                <h2>Order Success</h2>
                <button className="button" onClick={()=>{onClose()}}>Go Back</button>
            </>
        )
    }

    return(
        <div className="control">
            <h2>Checkout</h2>
            <p>Total Amount: ${price.current}</p>

            <label>Full Name</label>
            <input name="Full Name" ref={fName}></input> <br></br>

            <label>E-Mail Address</label>
            <input name="E-Mail Address" ref={email}></input><br></br>

            <label>Street</label>
            <input name="Street" ref={street}></input><br></br>

            <label>City</label>
            <input name="City" ref={city}></input><br></br>

            <label>postal Code</label>
            <input name="Postal Code" ref={postalCode}></input>

            {submitStatus.status == 400 && 
                <>
                    <h3>{submitStatus.statusText + ". invalid inputs"}</h3><br/>
                </>
            }

            {submitStatus.submit == "failed" && 
                <>
                    <h3>{submitStatus.statusText}</h3><br/>
                </>
            }

            <div className="modal-actions">
                <button className="text-button" onClick={onClose}>Cancel</button>
                <button className="button" onClick={onSubmit}>Submit</button>
            </div>
        </div>
    )
};
