import React from 'react'
import styles from '@/styles/nav.module.css'
const NavigationBar = (): JSX.Element => {
  return (
    <div>
        <img src="https://www.rottentomatoes.com/assets/pizza-pie/images/rottentomatoes_logo_40.336d6fe66ff.png" alt="logo" className={styles.logo} />
    </div>
  )
}

export default NavigationBar