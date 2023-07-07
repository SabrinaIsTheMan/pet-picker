import '../styles/Gallery.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import DogForm from './DogForm.js';
import DogCard from './DogCard.js';
import HomeButton from './HomeButton';
import Pagination from './Pagination';

function DogGallery({ handleTitleChange } ) {

    const [dogs, setDogs] = useState([]);

    const [barkParam, setBarkParam] = useState(3);
    const [energyParam, setEnergyParam] = useState(3);
    const [shedParam, setShedParam] = useState(3);
    const [trainParam, setTrainParam] = useState(3);

    const [page, setPage] = useState(0);

    const[backDisabled, setBackDisabled] = useState(true);
    const[nextDisabled, setNextDisabled] = useState(false);

    const [formText, setFormText] = useState("");

    const updateParams = (event, [barkValue, energyValue, shedValue, trainValue]) => {
        event.preventDefault();

        if (barkValue === null && energyValue === null && shedValue === null && trainValue === null) {
            setFormText("Please select at least one trait!");
            setNextDisabled(true);
        }
        else {
            setBarkParam(barkValue);
            setEnergyParam(energyValue);
            setShedParam(shedValue);
            setTrainParam(trainValue);
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
        axios("https://api.api-ninjas.com/v1/dogs", {
            headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY },
            contentType: "application/json",
            params: {
                barking: barkParam,
                energy: energyParam,
                shedding: shedParam,
                trainability: trainParam,
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
        axios("https://api.api-ninjas.com/v1/dogs", {
            headers: { 'X-Api-Key': 'pyRsnD63J96idmPN3crKQQ==l3yrXFvEvPGLif1K' },
            contentType: "application/json",
            params: {
                barking: barkParam,
                energy: energyParam,
                shedding: shedParam,
                trainability: trainParam,
                offset: page
            }
        })
        .then((apiData) => {
            if (apiData.data.length === 0) {
                setFormText("Please be less picky and try again!");
            }
            else {
                setFormText("");
                setDogs(apiData.data);
            }
        })
        .catch((error) => {
            alert("Something went wrong, please try again later.");
        });

    }, [barkParam, energyParam, shedParam, trainParam, page]);

    return (
        <section className="gallery">
            <div className="wrapper">
                <HomeButton handleTitleChange={handleTitleChange} />

                <DogForm handleSubmit={updateParams} />

                <p>Select a breed to learn more!</p>

                <Pagination next={nextPage} back={backPage} backDisabled={backDisabled} nextDisabled={nextDisabled}/>

                {
                (formText !== "")
                ?
                    <div className="textResult">
                        <p>{formText}</p>
                    </div>
                :
                    <ul className="galleryResults">
                        {dogs.map((dogObj) => {
                            return <DogCard
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
                        })}
                    </ul>
                }
            </div>
        </section>
    )
}

export default DogGallery;
