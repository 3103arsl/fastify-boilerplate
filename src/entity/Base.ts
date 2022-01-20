import {BaseEntity, CreateDateColumn, DeleteDateColumn, UpdateDateColumn} from "typeorm";

export abstract class Base extends BaseEntity {

    @CreateDateColumn({name: "created_at"})
    createdAt;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt;

    @DeleteDateColumn({name: "deleted_at"})
    deletedAt;

}
