import rm from "../components/img/rm.jpg"

export default function Home() {
    return(
        <div className="Home">
            <h3>Welcome to the Rick and Morty App</h3>
            <img src={rm} alt="rm.jpg" />
        </div>
    )
}