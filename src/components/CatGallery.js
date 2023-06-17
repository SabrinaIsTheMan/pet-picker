import '../styles/Gallery.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import CatForm from './CatForm.js';
import CatCard from './CatCard.js';
import HomeButton from './HomeButton';
import Pagination from './Pagination';

function CatGallery( {handleTitleChange} ) {

    const [cats, setCats] = useState([]);

    const [groomParam, setGroomParam] = useState(3);
    const [playParam, setPlayParam] = useState(3);
    const [shedParam, setShedParam] = useState(3);

    const [page, setPage] = useState(0);

    const [backDisabled, setBackDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(false);

    const [formText, setFormText] = useState("");

    const updateParams = (event, [groomValue, playValue, shedValue]) => {
        event.preventDefault();

        if (groomValue === null && playValue === null && shedValue === null) {
            setFormText("Please select at least one trait!");
            setNextDisabled(true);
        }
        else {
            setGroomParam(groomValue);
            setPlayParam(playValue);
            setShedParam(shedValue);
            setPage(0);
        }
    }

    const nextPage = (event) => {
        event.preventDefault();

        setPage(page + 20);
        setBackDisabled(false);
    }

    const backPage = (event) => {
        event.preventDefault();

        if (page === 0) {
            setBackDisabled(true);
        } else {
            setPage(page - 20);
        }
    }

    useEffect(() => {

        // first, check if we're on the first page - if so, disabled back button
        if (page === 0) {
            setBackDisabled(true);
        }

        // check if next page (next offset of 20) returns an empty array - if so, disable next button
        axios("https://api.api-ninjas.com/v1/cats", {
            headers: { 'X-Api-Key': 'pyRsnD63J96idmPN3crKQQ==l3yrXFvEvPGLif1K' },
            contentType: "application/json",
            params: {
                grooming: groomParam,
                playfulness: playParam,
                shedding: shedParam,
                offset: (page + 20)
            }
        })
        .then((apiDataNext) => {
            if (apiDataNext.data.length === 0) {
                setNextDisabled(true);
            } else {
                setNextDisabled(false);
            }
        })

        // now save the actual data (aka current page) into state
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
            if (apiData.data.length === 0) {
                setFormText("Please be less picky and try again!");
            }
            else {
                setFormText("");
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

                <p>Select a breed to learn more!</p>

                <Pagination next={nextPage} back={backPage} backDisabled={backDisabled} nextDisabled={nextDisabled} />

                {
                (formText !== "")
                ?
                    <div className="textResult">
                        <p>{formText}</p>
                    </div>
                :
                    <ul className="galleryResults">
                        {cats.map((catObj) => {
                            return <CatCard
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
                }
            </div>
        </section>
    )
}

export default CatGallery;
