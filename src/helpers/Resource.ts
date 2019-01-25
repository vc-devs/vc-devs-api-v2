import Controller from "./Controller";

class Resource {

    /**
     * Create resource with defaults controller functions
     *
     * @param router
     * @param {Controller} controller
     * @param except - [store, index, get, update, delete] - Array of controller functions to exclude
     * @return {any}
     */
    public static create(router: any, controller: Controller, except: any = []) {

        if(!except.includes('store'))
            router.post('/',   controller.store);

        if(!except.includes('index'))
            router.get('/',    controller.index);

        if(!except.includes('get'))
            router.get('/:id', controller.get);

        if(!except.includes('update'))
            router.put('/',    controller.update);

        if(!except.includes('delete'))
            router.delete('/', controller.delete);

        return router;
    }
}

export default Resource;