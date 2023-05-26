import '../styles/Gallery.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import CatForm from './CatForm.js';
import CatCards from './CatCards.js';
import HomeButton from './HomeButton';
import Pagination from './Pagination';

function CatGallery( {handleTitleChange} ) {

    const [cats, setCats] = useState([]);

    const [groomParam, setGroomParam] = useState(3);
    const [playParam, setPlayParam] = useState(3);
    const [shedParam, setShedParam] = useState(3);

    const [page, setPage] = useState(0);

    const updateParams = (event, [groomValue, playValue, shedValue]) => {
        event.preventDefault();

        console.log(`values: groom ${groomValue}, play ${playValue}, shed ${shedValue}`);

        if (groomValue === null && playValue === null && shedValue === null) {
            alert("Please pick at least one trait!")
        }
        else {
            setGroomParam(groomValue);
            setPlayParam(playValue);
            setShedParam(shedValue);
        }

        console.log(`params: groom ${groomValue}, play ${playValue}, shed ${shedValue}`)
    }

    const nextPage = (event) => {
        event.preventDefault();

        const pageCopy = page;
        const newPage = pageCopy + 20;
        setPage(newPage);
    }

    const backPage = (event) => {
        event.preventDefault();

        const pageCopy = page;

        if (pageCopy === 0) {
            alert("You're already on the first page!")
        } else {
            const newPage = pageCopy - 20;
            setPage(newPage);
        }
    }

    useEffect(() => {

        axios("https://api.api-ninjas.com/v1/cats", {
            headers: { 'X-Api-Key': 'pyRsnD63J96idmPN3crKQQ==l3yrXFvEvPGLif1K' },
            contentType: "application/json",
            params: {
                grooming: groomParam,
                playfulness: playParam,
                shedding: shedParam,
                offset: page
            }
        })
        .then((apiData) => {
            if (apiData.data.length === 0 && page > 0) {
                alert("You're already on the last page!")
            } else if (apiData.data.length === 0) {
                alert("Please be less picky and try again!");
            }
            else {
                console.log(apiData.data);
                setCats(apiData.data);
            }
        })
        .catch((error) => {
            alert("Something went wrong, please try again later.");
            console.log(error);
        });
    }, [groomParam, playParam, shedParam, page]);

    return (
        <section className="gallery">
            <div className="wrapper">
                <HomeButton handleTitleChange={handleTitleChange}/>

                <CatForm handleSubmit={updateParams} />

                <p>Click on a breed to learn more!</p>

                <Pagination next={nextPage} back={backPage} />

                <ul className="galleryResults">
                    {cats.map((catObj) => {
                        return <CatCards
                            key={catObj.name}
                            name={catObj.name}
                            imgSource={catObj.image_link}
                            altText={catObj.name}
                            origin={catObj.origin}

                            kids={catObj.children_friendly}
                            fam={catObj.family_friendly}
                            others={catObj.other_pets_friendly}

                            smart={catObj.intelligence}
                            play={catObj.playfulness}

                            shed={catObj.shedding}
                            groom={catObj.grooming}

                            health={catObj.general_health}
                            minYears={catObj.min_life_expectancy}
                            maxYears={catObj.max_life_expectancy}
                            length={catObj.length}
                            minWeight={catObj.min_weight}
                            maxWeight={catObj.max_weight}
                        />
                    })
                    }
                </ul>
            </div>
        </section>
    )
}

export default CatGallery;
