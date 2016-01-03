import * as express from 'express';
import {Validator, ValidationResult} from '../../share/util/validator';
import * as Sequelize from 'sequelize';
import {try_catch} from './try_catch';

export function createCrud(app: express.Express, repository: Sequelize.Model<{}, {}>, clazz: any) {

    app.get('/', async (req, res) => {
        try_catch(req, res, async () => {
            console.log('get', clazz);
            var users = await repository.findAll()
            res.json(users);
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
            await repository.upsert(model);
            res.json(model);
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