import { useRouter } from 'next/router'
import styles from '@/styles/nav.module.css'
import React from 'react'
import Link from 'next/link'
const NavigationPage = (): JSX.Element => {
    const [navigate, setNavigate] = React.useState(false)

    const router = useRouter()

    React.useEffect(()=> {
        if (navigate) {
            router.push("/contact")
        }
    },[navigate])
  return (
    <div className={styles.main}>
        <div className={styles.first}>
            <img src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg" alt="logo" className={styles.logo} />
            
                <input type="text" className={styles.search} placeholder="🔍 Search movies, TV, actors, more..." />
        </div>

        <div className={styles.second}>
        <div className={styles.navLinks}>
            <Link className={styles.navInfo} href="#">What is what</Link>
            <Link className={styles.navInfo} href="#">Critics</Link>
            <Link className={styles.navInfo} href="#">Login Sign in</Link>
            </div>
            <div className={styles.navLinks}>
            <Link className={styles.navLink} href="#">MOVIES</Link>
            <Link className={styles.navLink} href="#">TV SHOWS</Link>
            <Link className={styles.navLink} href="#">MOVIE TRIVIA</Link>
            <Link className={styles.navLink} href="#">NEWS</Link>
            <Link className={styles.navLink} href="#">SHOWTIMES</Link>
            </div>
            
            {/* <button onClick={() => setNavigate(true)}>Contact</button> */}
        </div>
    </div>
  )
}

export default NavigationPage