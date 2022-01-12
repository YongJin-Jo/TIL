import { Route, Routes } from 'react-router-dom';
import HomeView from './view/HomeView';
import { TodoDetailView } from './view/TodoDetailView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeView/>}/>
        <Route path="/:id" element={<TodoDetailView/>}/>
      </Routes>
    </div>
  );
}
export default App;