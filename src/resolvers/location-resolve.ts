import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Location } from '../entity/location';

@Resolver()
export class LocationResolver {
    @Query(()=> String)
    async helloWorld(){
        return " hello world camiro"
    }
    @Query(()=> [Location])
    async locations(){
        return Location.find()
    }
    @Mutation(()=> Location)
    async createLocation(
        @Arg("address") address: string,
        @Arg("phone") phone: string,
    ){
       return Location.create({ address, phone }).save()
    } 
}