import { useState } from 'react'

import Bai1 from './Bai1'
import Bai2 from './Bai2'
import Bai3 from './Bai3'
import Bai4 from './Bai4'
import Bai5 from './Bai5'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
    </>
  )
}

export default App
