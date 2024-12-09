import { useUserContext } from '@/store/user'
import styles from './index.module.less'
import { useRouter } from '@/hooks'
import { ROUTE_KEY } from '@/route/menus'

function Home() {
  const { store } = useUserContext()
  const router = useRouter()
  console.log(store)
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <button onClick={() => router.go(ROUTE_KEY.MY)}>goto my page</button>
    </div>
  )
}

export default Home
