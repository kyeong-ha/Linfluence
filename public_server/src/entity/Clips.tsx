import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

//? Entity: DB table을 정의하기 전에 실행해야 하는 데코레이터
//? Entity는 클래스명에 매핑되므로, 테이블명의 지정은 option이다
@Entity()
export class User extends BaseEntity { 
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        length: 20
    })
    name: string;

    @Column()
    age: number;

    @Column()
    date: Date;
}