import '../styles/Gallery.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Form from './Form.js';
import DogCards from './DogCards.js';

function Gallery() {

    const [dogs, setDogs] = useState([]);

    const [energyParam, setEnergyParam] = useState("3");
    const [shedParam, setShedParam] = useState("3");

    const updateParams = (event, energyValue, shedValue) => {
        event.preventDefault();
        setEnergyParam(energyValue);
        setShedParam(shedValue);
        ;
    }

    useEffect(() => {

        axios("https://api.api-ninjas.com/v1/dogs", {
            headers: { 'X-Api-Key': 'pyRsnD63J96idmPN3crKQQ==l3yrXFvEvPGLif1K' },
            contentType: "application/json",
            params: {
                energy: energyParam,
                shedding: shedParam
            }
        })
            .then((apiData) => {
                if (apiData.date === []) (
                    console.log("Please be less picky and try again!")
                )
                else (
                    setDogs(apiData.data)
                )
            })
    }, [energyParam, shedParam]);

    return (
        <section className="Gallery">
            <Form handleSubmit={updateParams} />

            <ul className="GalleryResults">
                { dogs.map((dogObj) => {
                    return <DogCards
                        key={dogObj.name}
                        name={dogObj.name}
                        imgSource={dogObj.image_link}
                        altText={dogObj.name}

                        kids={dogObj.good_with_children}
                        strangers={dogObj.good_with_strangers}
                        others={dogObj.good_with_other_dogs}

                        play={dogObj.playfulness}
                        train={dogObj.trainability}
                        energy={dogObj.energy}
                        bark={dogObj.barking}
                        protect={dogObj.protectiveness}

                        shed={dogObj.shedding}
                        groom={dogObj.grooming}
                        drool={dogObj.drooling}
                        coat={dogObj.coat_length}

                        minYears={dogObj.min_life_expectancy}
                        maxYears={dogObj.max_life_expectancy}

                        minHM={dogObj.min_height_male}
                        maxHM={dogObj.max_height_male}

                        minHF={dogObj.min_height_female}
                        maxHF={dogObj.max_height_female}

                        minWM={dogObj.min_weight_male}
                        maxWM={dogObj.max_weight_male}

                        minWF={dogObj.min_weight_female}
                        maxWF={dogObj.max_weight_female}
                    />
                    })
                }
            </ul>
        </section>
    )
}

export default Gallery;