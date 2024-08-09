import styles from "./Characters.module.css";
import axios from "axios";
import audio from "../../assets/characters.mp3";
import { Header } from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { Character } from "./Character/Character";
import { Card } from "../../components/Card/Card";
import { LoadingPage } from "../../components/LoadingPage/LoadingPage";

interface Character {
    affiliation: string;
    deletedAt: null;
    description: string;
    gender: string;
    id: number;
    image: string;
    ki: string;
    maxKi: string;
    name: string;
    race: string;
};

export const Characters = () => {
    const [characters, setCharacters] = useState<null | Character[]>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const allCharacters = async () => {
            const res: Character[] = (
                await axios.get(
                    "https://dragonball-api.com/api/characters?limit=58"
                )
            ).data.items;
            setCharacters(res);
            setIsLoading(false);
        };

        allCharacters();
    }, []);

    console.log(characters);

    if (isLoading) {
        return <LoadingPage />;
    } else
        return (
            <>
                <audio className={styles.audio} autoPlay loop>
                    <source src={audio} type="audio/mpeg" />
                </audio>
                <Header />
                <div className={styles.mainContainer}>
                    <h2 className={styles.titulo}>Characters</h2>
                    <div className={styles.cardsContainer}>
                        {characters?.map((character) => (
                            <Card 
                                key={character.id} 
                                id={character.id} 
                                name={character.name}
                                ki={character.ki}
                                maxKi={character.maxKi} 
                                race={character.race}
                                gender={character.gender}
                                description={character.description}
                                image={character.image}
                                affiliation={character.affiliation}
                                deletedAt={character.deletedAt}
                            />
                        ))}
                    </div>
                </div>
            </>
        );
};
