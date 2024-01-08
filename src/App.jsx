import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AddBookPage from "./pages/AddBookPage";
import EditBookPage from "./pages/EditBookPage";
import { useState } from "react";
function App() {

  const [books, setBooks] = useState([
  ])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/books-app" exact element={<Home books={books} setBooks={setBooks} />} />
          <Route path="/books-app/tambah-buku" exact element={<AddBookPage books={books} setBooks={setBooks}/>} />
          <Route path="/books-app/edit-buku/:id" exact element={<EditBookPage books={books} setBooks={setBooks}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;