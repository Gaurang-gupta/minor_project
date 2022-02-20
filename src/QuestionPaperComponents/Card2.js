import React, { useEffect, useState } from 'react'
import "./Card.css"
import { list } from '../firebase';
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

            if (responses && responses.length > 0 && paperLinks.length === 0) {
                try {
                    let links = [];
                    responses?.map(async response => {
                        try {
                            response?.getDownloadURL(response?._delegate?._location?.path_)?.then(async url => {
                                await console.log(url);
                                await links.push(url);
                            }).catch(e => console.log(e))
                        } catch (e) { }
                    })
                    setPaperLinks(links);
                } catch (e) { }
            }
        }
        await files();
        // await downloadLinks();
    }, [path])

    console.log('response array = ', responses);
    console.log('Paper links array = ', paperLinks);

    return (
        <div className="card">
            <div className="card__headingContainer">
                <h1 className="card__heading">{heading}</h1>
            </div>
            <div className="card__listContainer card2">

                <ul className="card__list">
                    {papers.length > 0 ? papers.map((paper, index) => (
                        <li className="card__listItem" key={index}>
                            <a target="_blank" rel="noreferrer" href={paperLinks[index]}>{paper}</a>
                        </li>
                    )) : (
                        <li className="card__listItem" key={0}>
                            Files Will Be Available Soon
                        </li>
                    )}
                </ul>

            </div>
        </div>
    )
}

export default Card2