import LoginForm from '@/components/LoginForm/LoginForm'
import Link from 'next/link'

export default function Login() {
  return (
    <div className='pt-20'>
      <title>MiniMart | Login</title>
      <h2 className='md:text-4xl text-2xl font-bold text-center mt-10'>LOGIN TO YOUR ACCOUNT</h2>
        <LoginForm></LoginForm>
    </div>
  )
}