import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import { pages } from "./routes/routes";
import { Route, Routes, BrowserRouter } from "react-router-dom";  // Добавляем BrowserRouter

function App() {
    return (
        <BrowserRouter>  {/* Оборачиваем в BrowserRouter */}
            <div className="App">
                <div className="sakura-bg" />
                <Header />
                <Routes>
                    {pages.map((page, index) => (
                        <Route
                            key={index}
                            path={page.path}
                            element={<page.component />}
                        />
                    ))}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
