import { useState } from "react"
import { AnimalTab } from "../../components/AnimalTab/AnimalTab"
import { animals, type Animal } from "../../data/animals";
import { Card } from "../../components/Card/Card";
import styles from "./styles.module.css"

export const MainPage = () => {

    function compareAnimals(a1: Animal, a2: Animal): number{
        switch (selectedSort){
            case "name": {
                return a1.name > a2.name ? 1 : -1;
            }
            case "age": {
                return a1.age - a2.age;
            }
        }
        return 0;
    }

    const [selectedTab, setTab] = useState<string>("all");

    const [selectedSort, setSort] = useState<string>("name");

    const filteredAnimals = animals.filter(animal => animal.species == selectedTab || selectedTab == "all").sort(compareAnimals)

    return (
        <div className={styles.page}>
            <h2 className={styles.header}>Приют экзотических животных</h2>
            <div className={styles.tools}>
                <div className={styles.tabs}>
                    <AnimalTab
                    animal="All"
                    onClick={() => {setTab("all")}}/>

                    <AnimalTab
                    animal="Snakes"
                    onClick={() => {setTab("snake")}}/>

                    <AnimalTab
                    animal="Fishes"
                    onClick={() => {setTab("fish")}}/>

                    <AnimalTab
                    animal="Birds"
                    onClick={() => {setTab("bird")}}/>
                </div>
                <div className={styles.sortTools}>
                    <label htmlFor="species-select">Sort: </label>
                    <select name="species" id="species-select" onChange={(e) => setSort(e.target.value)}>
                        <option value="name">Name</option>
                        <option value="age">Age</option>
                    </select>
                </div>
            </div>
            <div className={styles.cards}>
                {
                    filteredAnimals.map(animal => (
                        <Card
                        key={animal.id}
                        id={animal.id}
                        name={animal.name}
                        species={animal.species}
                        age={animal.age}
                        description={animal.description}/>
                    ))
                }
            </div>
        </div>
    )
}