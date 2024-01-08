import React from "react";
import BookTable from "../components/BookTable";
import Layout from "./Layout";
import { useNavigate } from 'react-router-dom'
const Home = ({books, setBooks}) => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex items-center w-full ">
        <p className="text-white laptop:mb-10 text-2xl font-bold mr-auto">List Buku</p>
        <a
          onClick={() => navigate('tambah-buku')}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 laptop:px-12 mobile-sm:px-6 focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Tambah Buku
        </a>
      </div>
      <BookTable books={books} setBooks={setBooks} />
    </Layout>
  );
};

export default Home;