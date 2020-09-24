import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';

import { injectable, inject } from 'tsyringe';
import IUsersRepository from '../repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

import User from '../infra/typeorm/entities/User';

interface IRequest {
    email: string;
    password: string;
}
interface IResponse {
    user: User;
    token: string;
}
@injectable()
class AuthenticateUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ) {}
    public async execute({ email, password }: IRequest): Promise<IResponse> {
        console.log("email and password",[email,password]);
        
        const user = await this.usersRepository.findByEmail(email);
        if (!user) {
            throw new AppError('Incorrect email/password combination.', 401);
        }

        console.log("achou Email",[email,password]);
        // user.password - senha criptografada
        // password Semnha não criptografada
        const passwordMatched = this.hashProvider.compareHash(password, user.password);

        if (!passwordMatched) {
            throw new AppError('Incorrect email/password combination.', 401);
        }
        const { secret, expiresIn } = authConfig.jwt;

        //lshflshfksksjfhksdhfskjhlskjfhslakjh
        const token = sign({}, secret, {
            subject: user.id,
            expiresIn: expiresIn,
        });

        return { user, token };
    }
}

export default AuthenticateUserService;
