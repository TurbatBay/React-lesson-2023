import { useState } from "react";

export default function List () {
    let nextId = 0;
    const [name, setName] = useState("");
    const [books, setBooks] = useState([])
    return (
        <>
            <h1>Book List:</h1>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button
                onClick={() => {
                    setName("");
                    setBooks([...books, { id: nextId++, name: name}]);
                }}
            >add</button>

            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.name}</li>
                ))}
            </ul>
        </>
    )
    
}