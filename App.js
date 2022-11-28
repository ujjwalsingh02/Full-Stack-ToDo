import { BrowserRouter, Route, Routes } from "react-router-dom";   //changed
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import { UpdateTodo } from "./components/updateTodo";
import "./App.scss";

function App() {
    return (
        <div className="app-contents">
            <BrowserRouter>
            
                <Routes>   
                    <Route exact path="/" element={<ShowTodoList/>} />  
                    <Route path="/create-todo" element={<CreateTodo/>} /> 
                    <Route path="/update-todo" element={<UpdateTodo/>} /> 
                </Routes>
            
            </BrowserRouter>
        </div>
    );
}

export default App;