import styles from './alert.module.css'
import cn from 'classnames'

export default function Alert({ children, type }) {
  return (
    <div
      className={
        styles.alert + ' ' +
        cn({
          [styles.success]: type === 'success',
          [styles.error]: type === 'error',
          [styles.warning]: type === 'warning'
        })}
    >
      <p>{children}</p>
    </div>
  )
}