 import { Field, ObjectType, ID } from 'type-graphql';
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'

@ObjectType()
@Entity()
export class Location extends BaseEntity {

    @Field(()=> ID)
    @PrimaryGeneratedColumn()
    ID: number

    @Field()
    @Column('text', {unique: true})
    address: string;

    @Field()
    @Column('text')
    phone: string
}