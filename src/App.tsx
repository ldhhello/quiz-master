import QuizSystem from './QuizSystem'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import QuizSelect from './QuizSelect'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizSelect/>} />
        <Route path="/quiz/:quizName" element={<QuizSystem/>} />
        <Route path="/*" element={<>없는 페이지입니다.</>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
