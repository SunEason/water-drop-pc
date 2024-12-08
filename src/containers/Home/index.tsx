import { useUserContext } from '@/store/user'
import styles from './index.module.less'

function Home() {
  const { store } = useUserContext()
  console.log(store)
  return (
    <div className={styles.container}>
      <h1>Home</h1>
    </div>
  )
}

export default Home
