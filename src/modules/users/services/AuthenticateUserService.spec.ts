import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

describe('AuthenticateUSer', () => {
    it('should be able to authenticate', async () => {
        
        const fakeUsersRepository = new FakeUsersRepository();
        const fakeHashProvider = new FakeHashProvider();

        const createUser = new CreateUserService(
            fakeUsersRepository,
            fakeHashProvider,
        );
        const authenticateUser = new AuthenticateUserService(
            fakeUsersRepository,fakeHashProvider
        );

        const user = await createUser.execute({
            name:'teste',
            email:"vinicius@gmai.com",
            password:"123456",
        })
        console.log('Novo Usuário',user);
        const response = await authenticateUser.execute({
            email:"vinicius@gmai.com",
            password:"123456",
        });
        console.log( 'Auht',response);

        expect(response.user).toEqual(user);
        expect(response).toHaveProperty('token');
    });

});
