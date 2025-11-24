import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { loginUsuario, registrarUsuario, Usuario } from '@urna/auth';
import { UsuarioPrisma } from './usuario.prisma';
import * as jwt from 'jsonwebtoken';
import BcryptProvider from './bcrypt.provider';

@Controller('auth')
export class AuthController {
  constructor(
    private repo: UsuarioPrisma,
    private cripto: BcryptProvider,
  ) {}

  @Post('login')
  async login(@Body() usuarioInformado: Partial<Usuario>) {
    const usuario = await loginUsuario({
      repo: this.repo,
      cripto: this.cripto,
      email: usuarioInformado.email!,
      senha: usuarioInformado.senha!,
    });
    return {
      token: jwt.sign(usuario, 'chave', {
        expiresIn: '15d',
      }),
    };
  }

  @Post('registrar')
  async registrar(@Body() usuario: Partial<Usuario>) {
    await registrarUsuario({
      repo: this.repo,
      cripto: this.cripto,
      usuario,
    });
  }
}
