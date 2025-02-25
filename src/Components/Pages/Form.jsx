import { useState } from "react";

const Form = () => {
const [formDetails, setFormDetails] = useState({
        name: "",
        email: "",
        message: ""
})
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            console.log("formDetails", formDetails)
            const response = await fetch(`https://portfolio-63sa.onrender.com/submit`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formDetails)
            });
console.log("response", response)
        }catch(error){
            console.log(error)
        }
    }
    return (
        <>
            <div className="form">
                <h1 className="f-head">Contact Me</h1>
                <form onSubmit={handleSubmit} className="f-form">
                    <div className="f-form-group">
                        <label htmlFor="name">Name</label>
                        <input onChange={(e)=>{
                            setFormDetails({...formDetails, name: e.target.value})
                        }} type="text" id="name" name="name" required />
                    </div>
                    <div className="f-form-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={(e)=>{
                            setFormDetails({...formDetails, email: e.target.value})
                        }} type="email" id="email" name="email" required />
                    </div>
                    <div className="f-form-group">
                        <label htmlFor="message">Message</label>
                        <textarea onChange={(e)=>{
                            setFormDetails({...formDetails, message: e.target.value})
                        }} id="message" name="message" required />
                    </div>
                    <button type="submit" className="f-btn">
                        Send
                    </button>
                </form>
            </div>
        </>
    )
}

export default Form
