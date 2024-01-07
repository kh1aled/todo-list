
import './App.scss'
import { Route, Routes } from 'react-router-dom';
import Todo from './routes/Todo';

function App(){
    return(
        <>
        <Routes>
            <Route path='/' element={<Todo/>}/>
        </Routes>
        </>
    )
}
export default App