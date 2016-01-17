'use strict';

import * as express from 'express';

export async function try_catch(req: express.Request, res: express.Response, fn: () => Promise<any>) {

    try {
        return await fn();
    } catch (e) {
        console.error(e, e.stack, fn);
        res.status(500).json(e);
    }

}