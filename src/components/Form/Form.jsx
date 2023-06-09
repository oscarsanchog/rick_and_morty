import { useState } from "react"
import validation from "../Validation/Validation"

const Form = ({ login }) => {
    const [errors, setErrors] = useState({})

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    name="email" 
                    type="email"
                    value={userData.email}
                    onChange={handleChange}
                />
                {
                    errors.email 
                    && <p style={{color: 'red'}}>{errors.email}</p>
                }
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input 
                    name='password' 
                    type="password"
                    value={userData.password}
                    onChange={handleChange}
                />
                {
                    errors.password 
                    && <p style={{color: 'red'}}>{errors.password}</p>
                }
            </div>

            <button>Submit</button>
        </form>
    )
}


export default Form