import * as express from 'express';

export class JsonUtil {

    static sendJson(req: express.Request, res: express.Response) {
        return function(err, data) {
            if (err) {
                res.status(400).json(err);
                return;
            }
            return res.json(data);
        }
    }

}