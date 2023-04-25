import './App.css'
import Evaluacion from './components/Evaluacion'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {

  return (
    <Provider store={store}>
      <Evaluacion/>
    </Provider>
  )
}

export default App
