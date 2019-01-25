import { EntityManager, UpdateResult, DeleteResult, getConnection } from "typeorm";

abstract class Service {

    private manager: EntityManager = getConnection().manager;
    abstract entity: any;
    abstract entityName: string;

    /**
     * Get method
     *
     * @param id 
     * @param options 
     */
    public get = async (id: number, options: any = {}): Promise<{}|undefined> =>  {
        return await this.manager.findOne(this.entity, id, options);
    };

    /**
     * List all method
     *
     * @param take 
     * @param options 
     */
    public all = async (take: number = 15, options: any = {}): Promise<{}[]> => {
        return await this.manager.find(this.entity, {...options, take});
    };

    /**
     * Create method
     * 
     * @param object 
     */
    public create = async (object: any): Promise<{}> => {
        return await this.manager.save(this.entity, object);
    };

    /**
     * Update method
     *
     * @param data 
     * @param id 
     */
    public update = async (data: any, id: any): Promise<UpdateResult> => {
        return await this.manager.update(this.entity, data, id);
    };

    /**
     * Delete method
     *
     * @param id 
     */
    public delete = async (id: any): Promise<DeleteResult> => {
        return await this.manager.delete(this.entity, id);
    };

}

export default Service;