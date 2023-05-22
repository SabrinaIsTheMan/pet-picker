import '../styles/Gallery.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import CatForm from './CatForm.js';
import CatCards from './CatCards.js';

function CatGallery() {

    const [cats, setCats] = useState([]);

    const [smartParam, setSmartParam] = useState(3);
    const [playParam, setPlayParam] = useState(3);
    const [shedParam, setShedParam] = useState(3);

    const updateParams = (event, [smartValue, playValue, shedValue]) => {
        event.preventDefault();

        // console.log(`values: smart ${smartValue}, play ${playValue}, shed ${shedValue}`);

        if (smartValue === null && playValue === null && shedValue === null) {
            alert("Please pick at least one trait!")
        }
        else {
            setSmartParam(smartValue);
            setPlayParam(playValue);
            setShedParam(shedValue);
        }

        // console.log(`params: smart ${smartValue}, play ${playValue}, shed ${shedValue}`)
    }

    useEffect(() => {

        axios("https://api.api-ninjas.com/v1/cats", {
            headers: { 'X-Api-Key': 'pyRsnD63J96idmPN3crKQQ==l3yrXFvEvPGLif1K' },
            contentType: "application/json",
            params: {
                intelligence: smartParam,
                playfulness: playParam,
                shedding: shedParam,
                offset: null
            }
        })
            .then((apiData) => {
                if (apiData.data.length === 0) {
                    alert("Please be less picky and try again!");
                }
                else {
                    console.log(apiData.data)
                    setCats(apiData.data);
                }
            })
    }, [smartParam, playParam, shedParam]);

    return (
        <section className="gallery">
            <div className="wrapper">
                <CatForm handleSubmit={updateParams} />

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
