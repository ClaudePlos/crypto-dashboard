import NewsFeed from './componetns/NewsFeed'
import CurrencyConvertor from './componetns/CurrencyConvertor'

const App = () => {
  return (
    <div className="app">
        <h1>Crypto Dashboard</h1>
        <div className="app-wrapper">
            <CurrencyConvertor />
            <NewsFeed />
        </div>


    </div>
  )
}

export default App
