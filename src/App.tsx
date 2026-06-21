import StudyForm from './components/StudyForm'
import './App.css'

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>学習記録アプリ</h1>
        <p>日々の学習内容を記録し、学習時間や継続状況を可視化します。</p>
      </header>

      <StudyForm />
    </main>
  )
}

export default App
