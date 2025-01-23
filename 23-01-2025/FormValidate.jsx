import { useForm } from "react-hook-form";

const FormValidate = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        alert(`Form Submitted Successfully. Name: ${data.name}`);
        console.log(data);
    };

    return (
        <div className="form-design">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name Validation */}
                <div className="form-grp">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter Your Name"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                </div>

                {/* Email Validation */}
                <div className="form-grp">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter Your Email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Enter a valid email address",
                            },
                        })}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                {/* Password Validation */}
                <div className="form-grp">
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter Your Password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters",
                            },
                        })}
                    />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>

                    {/* */}

                <div className="form-grp">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        id="phone"
                        type="tel"
                        placeholder="Enter Your Phone Number"
                        {...register("phone", {
                            required: "Phone Number is required",
                            pattern:{
                                value: /^[0-9]{10}$/, 
                                message:'Enter a Correct Phone Number',
                            },
                        })}
                    />
                    {errors.phone && <p className="error">{errors.phone.message}</p>}
                </div>
                <div className="form-grp">
                    <label htmlFor="gender">Gender</label>
                    <select 
                        id="gender"
                        {...register("gender", {
                            required: "Gender is required",

                        })}>

                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    

                    {errors.gender && <p className="error">{errors.gender.message}</p>}
                </div>

                <div className="form-grp">
                    <label htmlFor="termsCon" className="termsCon">You Should Agree to the terms and Conditions</label>
                    <input id="termsCon" type='checkbox'
                    {
                        ...register('termsCon',{
                            required:"Check the Box"
                        })
                    }/>
                    
                </div>
                    {errors.termsCon && <p className="error">{errors.termsCon.message}</p>}

                <button type="submit">Submit</button>

                    <footer className="form-footer">
                        
                    </footer>

            </form>
        </div>
    );
};

export default FormValidate;
