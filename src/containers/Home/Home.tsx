import styles from './index.module.less'
import { useRouter } from '@/hooks/router'
import { ROUTE_KEY } from '@/route/menus'
import { useUserContext } from '@/store/user'

function Home() {
  const { store } = useUserContext()
  const router = useRouter()
  return (
    <div className={styles.container}>
      <h1>{store.currentOrg}</h1>
      <button onClick={() => router.go(ROUTE_KEY.MY)}>goto my page</button>
    </div>
  )
}

export default Home
