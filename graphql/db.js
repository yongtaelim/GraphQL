export const animals = [
    {
        id: 0,
        name: 'cat',
        age: 17,
    }, 
    {
        id: 1,
        name: 'dog',
        age: 18,
    },
    {
        id: 2,
        name: 'elephant',
        age: 19,
    },
    {
        id: 3,
        name: 'zeebra',
        age: 20,
    },
    {
        id: 4,
        name: 'tiger',
        age: 21,
    },
    {
        id: 5,
        name: 'bear',
        age: 22,
    },
];

export const getById = id => {
    const filteredAnimals = animals.filter(animal => animal.id === id);
    return  filteredAnimalse[0]
};

export const getAllAnimals = () => {
    return animals;
}

export const addAnimal = (name, age) => {
    const newAnimal = {
        id: animals.length + 1,
        name,
        age,
    };
    animals.push(newAnimal);
    return newAnimal;
}