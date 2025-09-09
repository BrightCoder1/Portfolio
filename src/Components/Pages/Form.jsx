import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Form = () => {
    const [formDetails, setFormDetails] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://portfolio-63sa.onrender.com/submit`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formDetails)
            });

            if (response.ok) {
                toast.success("Email Sent Successfully!", {
                    position: "top-center",
                    autoClose: 3000
                });
                setFormDetails({
                    name: "",
                    email: "",
                    message: ""
                });
            } else {
                toast.error("Failed to send email.", {
                    position: "top-center",
                    autoClose: 3000
                });
            }
        } catch (error) {
            toast.error("An error occurred.", {
                position: "top-center",
                autoClose: 3000
            });
            console.log(error);
        }
    };



    return (
        <>
            <div className="form">
                <ToastContainer style={{ zIndex: "99999px" }} />
                <h1 className="f-head">Contact Me</h1>
                <form onSubmit={handleSubmit} className="f-form">
                    <div className="f-form-group">
                        <label htmlFor="name">Name</label>
                        <input onChange={(e) => {
                            setFormDetails({ ...formDetails, name: e.target.value })
                        }} type="text" id="name" name="name" required />
                    </div>
                    <div className="f-form-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => {
                            setFormDetails({ ...formDetails, email: e.target.value })
                        }} type="email" id="email" name="email" required />
                    </div>
                    <div className="f-form-group">
                        <label htmlFor="message">Message</label>
                        <textarea onChange={(e) => {
                            setFormDetails({ ...formDetails, message: e.target.value })
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
