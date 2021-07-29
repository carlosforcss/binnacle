const express = require('express');

class DefaultRouter {

    /*

        Default Router is used to create a CRUD based arquitecture
        for project's models.

        'name' str: It's how urls are going to be called.
            new DefaultRouter(myApp, "users", controller) -> "/users"
        
        'controller': The controller attr has to extended by or has the same structure that
            DefaultController in src/utils/controllers.js

    */

    constructor(name, controller) {
        this.name = name
        this.controller = controller
    }

    setRoutes(root) {
        root.get(`/${this.name}`, (req, res) => this.getAll(req, res))
        root.get(`/${this.name}/:objectId`, (req, res) => this.get(req, res))
        root.post(`/${this.name}`, (req, res) => this.create(req, res))
        root.put(`/${this.name}/:objectId`, (req, res) => this.update(req, res))
        root.delete(`/${this.name}/:objectId`, (req, res) => this.delete(req, res))
    }

    async get(request, response) {
        const result = await this.controller.get(request.params.objectId)
        return response.status(200).json(result)
    }

    async getAll(request, response) {
        const results = await this.controller.getAll({})
        return response.status(200).json(results)
    }

    async create(request, response) {
        const data = request.body
        const new_object = await this.controller.create(data) 
        return response.status(200).json(new_object)
    }

    async update(request, response) {
        const data = request.body
        const id = request.params.objectId
        const updated_object = await this.controller.update(id, data)
        return await response.status(200).json(updated_object)
    }

    async delete(request, response) { 
        await this.controller.delete(request.params.objectId)
        return await response.status(200).json(true)
    }

}

module.exports = DefaultRouter