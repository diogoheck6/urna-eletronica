import { usuarios } from "../../constants/usuarios"
import Usuario from "../model/Usuario"

export default function loginUsuario(email: string, senha: string): Usuario | never {
	const usuario = usuarios.find((usuario) => usuario.email === email)

	if (!usuario) {
		throw new Error("Usuário não encontrado.")
	}

	if (usuario.senha !== senha) {
		throw new Error("Senha inválida.")
	}

	return { ...usuario, senha: undefined }
}
