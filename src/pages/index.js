import css from './index.module.scss'

export async function getServerSideProps() { // appel du json pour rendre le contenu dynamique
    //const urlServ = process.env.NODE_ENV === "development" ?  "http://localhost:3000/" : "https://portfolio-tau-tawny.vercel.app/";
    const res = await fetch(`http://localhost:3000/data/data.json`)
    const dataFilms = await res.json()

    return {
        props: { 
            dataFilms
        }
    }
}

export default function Home({dataFilms}) {
    return (
        <main className={css.component}>
            {dataFilms.data.map((e) => {
                return (
                    <ul key={e.rank}>
                        <li><span>{e.rank}</span> - {e.title}</li>
                        <ul>
                            <li>- {e.boxOffice}</li>
                            <li>- {e.year}</li>
                        </ul>
                    </ul>
                )
                
            })}
        </main>
    )
}