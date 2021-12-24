import {useEffect, useState} from "react";
import axios from "axios";

const NewsFeed = () => {

    const [articles, setArticles] = useState(null)

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://crypto-news-live.p.rapidapi.com/news/coindesk',
            headers: {
                'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
                'x-rapidapi-key': '2cb0a55d57msh85bf1ccdaa49d80p1c030cjsnac60e2e01572'
            }
        }

        axios.request(options).then((response) => {
            console.log(response.data)
            setArticles(response.data)
        }).catch((error) => {
            console.error(error)
        })

    })

    const first10articles = articles?.slice(0,10) //  if exist then cut to 10 articles


    return (
        <div className="news-feed">
            <h2>News Feed</h2>
            {first10articles?.map((article, _index) => (
                <div key={_index}>
                    <a href={article.url}><p>{article.title}</p></a>
                </div>))}
        </div>
    )
}

export default NewsFeed