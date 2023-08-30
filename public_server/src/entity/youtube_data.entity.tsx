import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class youtube_data {
    @PrimaryGeneratedColumn()
    influencerId: string;

    @Column
    bio: string;

    @Column
    profileImg: string;

    @Column
    backgroundImg: string;

    @Column({ nullable: true })
    snsLinks: object;
}