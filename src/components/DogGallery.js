import '../styles/Gallery.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import DogForm from './DogForm.js';
import DogCards from './DogCards.js';

function DogGallery() {

    const [dogs, setDogs] = useState([]);

    const [barkParam, setBarkParam] = useState(3);
    const [energyParam, setEnergyParam] = useState(3);
    const [shedParam, setShedParam] = useState(3);
    const [trainParam, setTrainParam] = useState(3);

    const updateParams = (event, [barkValue, energyValue, shedValue, trainValue]) => {
        event.preventDefault();

        // console.log(`values: bark ${barkValue}, e ${energyValue}, shed ${shedValue}, train ${trainValue}`)

        if (barkValue === null && energyValue === null && shedValue === null && trainValue === null) {
            alert("Please pick at least one trait!")
        }
        else {
            setBarkParam(barkValue);
            setEnergyParam(energyValue);
            setShedParam(shedValue);
            setTrainParam(trainValue);
        }

        // console.log(`params: bark ${barkParam}, e ${energyParam}, shed ${shedParam}, train ${trainParam}`)
    }

    useEffect(() => {

        axios("https://api.api-ninjas.com/v1/dogs", {
            headers: { 'X-Api-Key': 'pyRsnD63J96idmPN3crKQQ==l3yrXFvEvPGLif1K' },
            contentType: "application/json",
            params: {
                barking: barkParam,
                energy: energyParam,
                shedding: shedParam,
                trainability: trainParam
            }
        })
            .then((apiData) => {
                if (apiData.data.length === 0) {
                    alert("Please be less picky and try again!");
                }
                else {
                    console.log(apiData.data)
                    setDogs(apiData.data);
                }
            })
    }, [barkParam, energyParam, shedParam, trainParam]);

    return (
        <section className="gallery">
            <div className="wrapper">
                <DogForm handleSubmit={updateParams} />

                <ul className="galleryResults">
                    {dogs.map((dogObj) => {
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
            </div>
        </section>
    )
}

export default DogGallery;
