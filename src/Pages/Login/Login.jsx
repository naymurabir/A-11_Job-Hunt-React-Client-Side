import { Link, useLocation, useNavigate } from "react-router-dom";
import googleImg from '../../assets/google 1.png'
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";


const Login = () => {

    const { signInUser, googleLogin } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()

    const handleSignIn = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User logged in successfully.',
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
                e.target.reset()
            })
            .catch(error => {
                console.log("Error:", error.message);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Your email / password is invalid.",
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                console.log(user);
                navigate(location?.state ? location.state : '/')
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User logged in successfully by google.',
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
            })
            .then(error => {
                console.log("Error:", error.message);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: "Your google account is invalid.",
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
            })
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="card flex-shrink-0  max-w-sm  border border-gray-500 lg:w-[50%]">
                    <form onSubmit={handleSignIn}>
                        <h2 className='text-2xl font-semibold text-center mt-5'>Log In</h2>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input
                                    name='email'
                                    type="email"
                                    placeholder="Email..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input
                                    name='password'
                                    type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <button className='text-white font-semibold bg-[#FF3811] px-3 py-2 rounded'>Login</button>
                            </div>

                            <div className='flex justify-center'>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div>
                                <div className='flex justify-center items-center gap-4 mt-3'>
                                    <button className="text-white font-semibold bg-[#FF3811] px-3 py-2 rounded w-full" onClick={handleGoogleLogin} >  <div className="flex justify-center gap-3">
                                        <img src={googleImg} alt="" /> Google</div> </button>
                                </div>
                            </div>


                            <div className='text-center'>
                                <h2 className='text-sm'>Do not have an account? <Link className='text-[#f3411d] font-semibold' to="/register">Sign Up</Link> </h2>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;