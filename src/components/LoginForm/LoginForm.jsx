"use client";

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import Swal from 'sweetalert2';

export default function LoginForm() {

    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (email === "admin@minimart.com" && password === "Admin@MiniMart") {
            document.cookie = "auth=true; path=/; max-age=172800";
            router.push("/items");
            Swal.fire({
                title: "Logged in Successfully!",
                icon: "success",
            });
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid Credentials!"
            });
        }
    }

    return (
        <div className='py-20'>
            <div className="card bg-base-300 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" name='email' />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" name='password' />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='text-xl font-bold py-2 text-center'>OR</p>
                    <button className="btn bg-white text-black">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p className='font-semibold'>Don&apos;t Have an account? <Link href={"/register"} className='text-blue-700 hover:underline'>Register</Link></p>
                </form>
            </div>
        </div>
    )
}
