
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import styles from '../styles/header.module.css'
export default function Header() {
 
      const {data: session, status } = useSession()
        const loading = status === 'loading'
        console.log(session)

      
    const handleLogin = (e : any) => {
        e.preventDefault()
        signIn()
      
    }
    const handleLogout = (e : any) => {
        e.preventDefault()
        signOut()
    }
  return (
    <header>
       <noscript>
            <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
       </noscript>
        <div>
            
                {
                    !session && (
                        <div className={styles.signedInStatus}>
                            <span>You are not signed in</span>
                            <br />
                            <a href="/api/auth/signin" onClick={handleLogin}>
                                
                                Sign in
                            </a>
                        </div>
                    )
                }

                {session?.user && (
                    <div>
                        {session.user.image && (
                            <span
                                style={{ backgroundImage: `url(${session.user.image})` }}
                                className={styles.avatar}
                            />)}
                        <span className={styles.signedInStatus}>
                            <small>Signed in as</small>
                            <br />
                            <strong>{session.user.email || session.user.name}</strong>
                            </span>
                            <a href={`/api/auth/signout`}
                                className={styles.button}
                                onClick={handleLogout}
                            >
                                Sign out
                            </a>
                    </div>
                )}
            
        </div>
    </header>
  )
}
