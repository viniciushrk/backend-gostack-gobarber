import { injectable, inject } from 'tsyringe';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import User from '@modules/users/infra/typeorm/entities/User';
import { classToClass } from 'class-transformer';

interface IRequest {
    user_id: string;
    cache?: boolean;
}

@injectable()
class ListProviderService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('CacheProvider')
        private cacheProvider: ICacheProvider,
    ) {}

    public async execute({ user_id, cache }: IRequest): Promise<User[]> {
        let users;

        if (!cache) {
            console.log('usou com cache');

            users = await this.cacheProvider.recover<User[]>(
                `providers-list:${user_id}`,
            );
        }

        if (!users) {
            console.log('usou sem cache');

            users = await this.usersRepository.findAllProviders({
                except_user_id: user_id,
            });

            await this.cacheProvider.save(
                `providers-list:${user_id}`,
                classToClass(users),
            );
        }

        return users;
    }
}
export default ListProviderService;
