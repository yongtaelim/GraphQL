import { animals, getById, getAllAnimals, addAnimal } from "./db";

const resolvers = {
    Query: {
        animals: () => animals, 
        getAnimals: (_, { id }) => getById(id),
        getAllAnimals: () => getAllAnimals(),
    },
    Mutation: {
        addAnimal: (_, {name, age}) => addAnimal(name, age)
    }  
  } 

export default resolvers;