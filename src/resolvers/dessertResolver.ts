import { Resolver, Mutation, Arg, Query} from 'type-graphql';
import { Dessert } from '../entity/dessert';

// @InputType()
// class DessertInput {
//     @Field()
//     name!: string;

//     @Field()
//     ingredients: string;
// }

@Resolver()
 export class DessertResolver {

    @Mutation(() => Boolean)
    async createDessert(
        @Arg("name") name: string,
        @Arg("price") price: number,
        @Arg("ingredients") ingredients: string,
        @Arg("description") description: string,

    ){
        await Dessert.insert({name, price, ingredients, description})
        return true;
    }

    @Query(() => [Dessert])
        getDesserts(){
        return Dessert.find()
    }

 }

//     @Mutation(() => Dessert)
//     async createDessert(
//         @Arg("variables", () => DessertInput) variables: DessertInput
//     ){
//         const newDessert = Dessert.create(variables);
//         console.log(newDessert);
//         return await newDessert.save();
        
//     }


// }