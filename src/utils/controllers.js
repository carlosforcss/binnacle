class DefaultController {

    /*

        Default Controller is used to manage the business logic
        of each model, for default it creates a CRUD.

        'model': Sequelize model.
        
    */

    constructor(model) {
        this.model = model
    }

    async get(id) {
        const object = await this.model.findAll({
            where: {
                id: id,
            }
        })
    }

    async getAll(query) {
        const results = await this.model.findAll({
            where: query,
        })
        return results
    }

    async create(data) {
        const new_object = await this.model.create(data)
        return new_object
    }

    async update(object_id, data) {
        await this.model.update({...data}, {where: {"id": object_id}})
        const updated_object = await this.model.findAll({
            where: {id: object_id}
        })
        return updated_object
    }

    async delete(id) {
        const deleted_object = await this.model.destroy({where: {id: id}})
        return deleted_object
    }
}

module.exports = DefaultController;