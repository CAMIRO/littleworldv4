
import { Resolver, Mutation, Arg, Query, InputType, Field, Int } from 'type-graphql';
import { Dessert } from '../entity/dessert';


@InputType()
class DessertInput {
    @Field()    
    name!: string

    @Field()  
    price!: number

    @Field()  
    ingredients!: string
    
    @Field()  
    description!: string
}

@InputType()
class DessertInputUpdate {

    @Field(() => String, { nullable: true})    
    name?: string

    @Field(() => Int, { nullable: true})  
    price?: number

    @Field(() => String, { nullable: true})  
    ingredients?: string
   
    @Field(() => String, { nullable: true})  
    description?: string

}

@Resolver()
 export class DessertResolver {

    // Add Dessert
    @Mutation(() => Dessert)
    async createDessert(
        @Arg("variables", () => DessertInput) variables: DessertInput,
    ){
        return await Dessert.create(variables).save();
    }
    // Delete Dessert
    @Mutation(() => Boolean)
    async deleteDessert(@Arg("id", () => Int) id: number){
        await Dessert.delete(id);
        return true
    }

    // Update Dessert
    @Mutation(()=> Boolean)
    async updateDessert(
        @Arg("id", () => Int) id: number, 
        @Arg("fields", () => DessertInputUpdate) fields: DessertInputUpdate
    ){
        await Dessert.update({id}, fields);
        return true

    }

    @Query(() => [Dessert])
        getDesserts(){
        return Dessert.find()
    }

 }