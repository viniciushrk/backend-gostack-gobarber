import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProvidersService from '@modules/appointments/services/ListProvidersService';
import { classToClass } from 'class-transformer';

interface teste {
    cache?: boolean;
}
export default class ProvidersController {
    public async index(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const user_id = request.user.id;
        const { cache }: teste = request.query;
        // console.log(cache);

        const listProviders = container.resolve(ListProvidersService);

        const providers = await listProviders.execute({
            user_id,
            cache,
        });

        return response.json(classToClass(providers));
    }
}
