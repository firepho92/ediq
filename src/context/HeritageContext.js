import React from 'react'
import { fetchProducts } from '../api/ProductsAPI'

const HeritageContext = React.createContext()

const { Provider, Consumer } = HeritageContext

function HeritageProvider(props) {
  const [heritage, setHeritage] = React.useState()

  React.useEffect(() => {
    async function fetch() {
      const response = await fetchProducts()
      if(response.status === 200) {
        setHeritage(response.data)
      } else {
        console.log('error')
      }
      
    }
    fetch()
  }, [])

  return (
    <Provider value={{ heritage, setHeritage }}>
      { props.children }
    </Provider>
  )
}

export default HeritageContext
export { HeritageProvider, Consumer as HeritageContext }