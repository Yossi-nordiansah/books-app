import React from "react";
import { useNavigate } from 'react-router-dom'
const BookTable = ({ books, setBooks }) => {
    const handleDeleteBook = (bookId) => {
        setBooks(books.filter(book => book.id !== bookId));
    };
    const navigate = useNavigate();
    // const showData = 

    return (
        <div className="">
            <table className="w-full text-sm text-left text-white h">
                <thead className="text-xs uppercase bg-gray-700 text-white font-bold">
                    <tr>
                        <th scope="col" className="laptop:px-6 mobile-sm:px-2 mobile-sm:text-center py-3">
                            Judul
                        </th>
                        <th scope="col" className="laptop:px-6 mobile-sm:px-2 py-3">
                            Pengarang
                        </th>
                        <th scope="col" className="laptop:px-4 mobile-sm:px-2 py-3 mobile-sm:text-center">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id} className="border-gray-700 w-full bg-gray-800">
                            <th scope="row" className="laptop:px-6 mobile-sm:px-2 py-4 font-medium text-white">
                                {book.title}
                            </th>
                            <td className="laptop:px-6 mobile-sm:px-2 py-4">{book.author}</td>
                            <td className="laptop:px-4 mobile-sm:px-2 laptop:py-4 mobile-sm:py-2 flex justify-center flex-wrap">
                                <button
                                    type="button"
                                    onClick={() => navigate('edit-buku/' + book.id)}
                                    className="focus:outline-none laptop: text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm laptop:px-5 mobile-sm:px-3 py-2 mr-2 mb-2 dark:focus:ring-yellow-900"
                                >
                                    Ubah
                                </button>
                                <button
                                    type="button"
                                    className="focus:outline-none text-white bg-red-700 laptop:px-5 mobile-sm:px-2 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    onClick={() => handleDeleteBook(book.id)}
                                >
                                    Hapus
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookTable;