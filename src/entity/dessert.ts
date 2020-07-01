import { Entity, Column , PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
@Entity()
export class Dessert extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => Int)
    @Column("int", {default: 1000})
    price!: number;

    @Field()
    @Column()
    name!: string;

    @Field()
    @Column("text", {default: ''})
    ingredients: string;

    @Field()
    @Column("text", {default: ''})
    description: string;

    @Field(() => String)
    @CreateDateColumn({ type: 'timestamp' })
    createdAt!: string;
}