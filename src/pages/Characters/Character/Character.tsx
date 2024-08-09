import styles from "./Character.module.css";
import axios from "axios";
import { Header } from "../../../components/Header/Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../../components/Card/Card";
import { LoadingPage } from "../../../components/LoadingPage/LoadingPage";
import { TransformationCard } from "../../../components/TransformationCard/TransformationCard";

interface Planet {
    id: number;
    name: string;
    isDestroyed: boolean;
    description: string;
    image: string;
    deletedAt: null;
}

interface Transformation {
    id: number;
    name: string;
    image: string;
    ki: string;
    deletedAt: null;
}

interface Character {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    deletedAt: null;
    originPlanet?: Planet;
    transformations?: Transformation[];
}

export const Character = () => {
    const params = useParams();
    const id = params.id;

    const [character, setCharacter] = useState<null | Character>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const oneCharacter = async () => {
            const res: Character = (
                await axios.get(
                    `https://dragonball-api.com/api/characters/${id}`
                )
            ).data;
            setCharacter(res);
            setIsLoading(false);
        };

        oneCharacter();
    }, []);
    console.log(character);
    if (isLoading) return <LoadingPage />;
    else
        return (
            <>
                <Header />
                <div className={styles.mainContainer}>
                    {character != null ? (
                        <div className={styles.container}>
                            <div className={styles.card}>
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
                            </div>
                            <div className={styles.description}>
                                <h2 className={styles.descriptionTitulo}>Descripción</h2>
                                <p className={styles.descriptionText}>{character.description}</p>
                            </div>
                            <div className={styles.planetAndTransformations}>
                                <div className={styles.planet}></div>
                                <div className={styles.transformationsContainer}>
                                    {
                                        character.transformations && character.transformations.length > 0 ? 
                                        <h2 className={styles.transformationsTitulo}>Transformaciones</h2> :
                                        <h2 className={styles.transformationsTitulo}>No Tiene Transformaciones</h2>
                                    }
                                    <div className={styles.transformations}>
                                        {character.transformations &&
                                        character.transformations.length > 0
                                            ? character.transformations.map(
                                                (transformation) => (
                                                    <TransformationCard
                                                        key={transformation.id}
                                                        id={transformation.id}
                                                        image={transformation.image}
                                                        ki={transformation.ki}
                                                        name={transformation.name}
                                                    />
                                                )
                                            )
                                            : ""}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </>
        );
};
