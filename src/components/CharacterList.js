import { useEffect } from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import "../App.css";

export default function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState();

    useEffect(() => {
        const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    
    fetch(url)
        .then((res) => res.json())
        .then((apiData) => {
            setCharacters((previousCharacter) => {
                return [...previousCharacter, ...apiData.results];
            });
            setTotalPages(apiData.info.pages);
        });
    }, [page]);
    
    function handleLoadMore() {
        if (page < totalPages) {
            setPage(page + 1);
        }
    }

    function renderCharacters() {
        return characters.map((character) => {
            const {id, name, image, status} = character;
            return (
                <div key={id} className={(status === "Alive") ? "characterCardAive" : status === "Dead" ? "characterCardDead" : "characterCardUnknown"}>
                    <Link to={`/character/${id}`}>
                        <p>{name}</p>
                        <img src={image} alt={name} />
                    </Link>
                </div>
            );
        });
    }
        return (
            <div className="view">
                <ul className="characterList">{renderCharacters()}</ul>
                {page < totalPages && (
                    <button className="load-more-button" onClick={handleLoadMore}>Load more</button>
                )}
            </div>
        );
}
