import {FC} from 'react'
import styles from './myButton.module.scss'

interface MyButtonProps {
  children: string,
  type?: "button" | "submit" | "reset",
}

const MyButton:FC<MyButtonProps> = ({children, type}) => {
  return (
    <button type={type} className={styles.myButton}>
      {children}
    </button>
  )
}

export default MyButton