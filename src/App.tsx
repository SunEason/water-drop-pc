import { useState } from 'react'
import './App.css'
import { Button, DatePicker } from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button type="primary" onClick={() => setCount((prev) => prev + 1)}>
        count is {count}
      </Button>
    </>
  )
}

export default App
