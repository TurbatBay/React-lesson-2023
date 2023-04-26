
import React from 'react'
import { useSession, signIn } from 'next-auth/react'
export default function Header() {
    const {data: session} = useSession()
    const handleLogin = (e : any) => {
        e.preventDefault()
        signIn('google')
    }
  return (
    <header>
        <div>
            
                {
                    !session && (
                        <div>
                            <span>You are not signed in</span>
                            <br />
                            <a href="/api/auth/signin" onClick={handleLogin}>
                                
                                Sign in
                            </a>
                        </div>
                    )
                }
            
        </div>
    </header>
  )
}
