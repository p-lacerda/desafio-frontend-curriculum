import React, { useEffect } from 'react'

function HomeScreen() {
  // const [arrayData, setArrayData] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem("data"));
    // setArrayData(JSON.parse(localStorage.getItem("data")))
  }, [])

  // const deleteCurriculum = () => {

  // };

  return (
    <div>
      {/* {arrayData.map(({ fullname }: { fullname: string }, i: number) => (
        <div key={i}>
          <p>{fullname}</p>
          <button>Acessar currículo</button>
          <button>Remover currículo</button>
        </div>
      ))} */}
    </div>
  )
}

export default HomeScreen
