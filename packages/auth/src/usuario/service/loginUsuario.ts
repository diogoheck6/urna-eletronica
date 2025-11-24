import { ErroValidacao } from "@urna/shared"
import { ProvedorSenhaCriptografada } from "../../../dist"
import RepositorioUsuario from "../interface/RepositorioUsuario"
import Usuario from "../model/Usuario"

export default async function loginUsuario(props: {
	repo: RepositorioUsuario
	cripto: ProvedorSenhaCriptografada
	email: string
	senha: string
}): Promise<Usuario | never> {
	const { repo, cripto, senha, email } = props
	const usuario = await repo.buscarPorEmail(email)

	if (!usuario) {
		throw new ErroValidacao("Usuário não encontrado.")
	}

	const senhaCorreta = await cripto.comparar(senha, usuario.senha!)
	if (!senhaCorreta) throw new ErroValidacao("Senha incorreta.")

	return { ...usuario, senha: undefined }
}
