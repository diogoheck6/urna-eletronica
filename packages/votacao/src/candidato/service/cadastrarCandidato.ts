import { ErroValidacao } from "@urna/shared"
import Candidato from "../model/Candidato"
import RepositorioCandidato from "../provider/RepositorioCandidato"

export default async function cadastrarCandidato(props: {
	repo: RepositorioCandidato
	candidato: Partial<Candidato>
}) {
	const { repo, candidato } = props

	const candidatoExistente = await repo.obterPorNumero(candidato.numero!)
	if (candidatoExistente) throw new ErroValidacao("Candidato já existe.")

	// Validar Candidato

	await repo.salvar(candidato as Candidato)
}
