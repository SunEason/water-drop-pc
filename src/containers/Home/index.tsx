import { useUserContext } from '../../store/user'

function Home() {
  const { store } = useUserContext()
  console.log(store)
  return (
    <div className="container">
      <h1>Home</h1>
    </div>
  )
}

export default Home
