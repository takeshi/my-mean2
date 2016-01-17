'use strict';

import * as express from 'express';
import {Validator, ValidationResult} from '../../share/util/validator';
import * as Sequelize from 'sequelize';
import {try_catch} from './try_catch';

export function createCrud(app: express.Express, repository: Sequelize.Model<{}, {}>, clazz: any, option?: Sequelize.FindOptions) {

    app.get('/', async (req, res) => {
        try_catch(req, res, async () => {
            console.log('get', clazz);
            var users = await repository.findAll(option)
            res.json(users);
        });
    });

    app.get('/:id', async (req, res) => {
        try_catch(req, res, async () => {
            var id = req.param('id');
            if (!id) {
                res.status(404).json({ message: 'not found', id: id });
                return;
            }
            console.log('getById', clazz, id);
            var model = await repository.findById(id, option)
            if (!model) {
                res.status(404).json({ message: 'not found', id: id });
                return;
            }
            res.json(model);
        });
    });


    app.post('/', async (req, res) => {
        try_catch(req, res, async () => {
            console.log('post', clazz);
            var model = req.body;
            var result = Validator.validate(clazz, model);
            if (result) {
                res.status(400).json(result);
                return;
            }
            if (model.id) {
                var v = await repository.create(model);
                res.json(v);
            } else {
                await repository.insertOrUpdate(model);
                res.json(model);
            }
        });
    });

    app.delete('/:id', async (req, res) => {
        try_catch(req, res, async () => {
            console.log('delete', clazz);
            var id = req.param('id');
            var input = req.body;
            var model: any = await repository.findById(id);
            model.destroy();
            res.json('delete');
        });
    });

}