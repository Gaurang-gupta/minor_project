import React, { useEffect, useState } from 'react'
import "./Card.css"
import { list, db } from '../firebase';
function Card2({ heading, head, search }) {
    const br = head.split('/');
    const [papers, setPapers] = useState([]);
    const [responses, setResponses] = useState(["No files available"]);
    const [paperLinks, setPaperLinks] = useState([]);

    let path = '';
    path += br[2] + '/';
    if (search !== "?undefined") path += "programElective/"
    path += br[4] + "/";
    path += heading;
    console.log(path);
    let links = [];
    useEffect(async () => {
        const files = async () => {
            console.log(path);
            let names = [];
            let res = [...(await list(path))];
            setResponses(res);
            res.map((r) => (
                names.push(r._delegate.name)
            ))
            setPapers(names)
        }
        await files();
    }, [path])

    useEffect(async () => {
        const getLinks = async () => {
            const snapshot = await db?.collection(path)?.get()?.then(snapshot => {
                snapshot?.docs?.forEach(doc => {
                    console.log(doc.id, doc.data())
                    links.push({ link: doc.data() })
                })
            })
            setPaperLinks(links);
        }
        await getLinks();
    }, [links.length])

    console.log("paperlinks", paperLinks)

    return (
        <div className="card">
            <div className="card__headingContainer">
                <h1 className="card__heading">{heading}</h1>
            </div>
            <div className="card__listContainer card2">

                <ul className="card__list">
                    {papers.length > 0 ? papers.map((paper, index) => (
                        <li className="card__listItem" key={index}>
                            <a target="_blank" rel="noreferrer" href={paperLinks[index]?.link?.Link}>{paper}</a>
                        </li>
                    )) : (
                        <li className='card__listItem' key={"else"}>
                            Files will be uploaded soon
                        </li>
                    )}
                </ul>

            </div>
        </div>
    )
}

export default Card2