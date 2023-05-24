import '../styles/Gallery.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import CatForm from './CatForm.js';
import CatCards from './CatCards.js';

function CatGallery() {

    const [cats, setCats] = useState([]);

    const [groomParam, setGroomParam] = useState(3);
    const [playParam, setPlayParam] = useState(3);
    const [shedParam, setShedParam] = useState(3);

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

    useEffect(() => {

        axios("https://api.api-ninjas.com/v1/cats", {
            headers: { 'X-Api-Key': 'pyRsnD63J96idmPN3crKQQ==l3yrXFvEvPGLif1K' },
            contentType: "application/json",
            params: {
                grooming: groomParam,
                playfulness: playParam,
                shedding: shedParam
            }
        })
            .then((apiData) => {
                if (apiData.data.length === 0) {
                    alert("Please be less picky and try again!");
                }
                else {
                    console.log(apiData.data);
                    setCats(apiData.data);
                }
            })
    }, [groomParam, playParam, shedParam]);

    return (
        <section className="gallery">
            <div className="wrapper">
                <CatForm handleSubmit={updateParams} />
                <p>Click on a breed to learn more!</p>
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
