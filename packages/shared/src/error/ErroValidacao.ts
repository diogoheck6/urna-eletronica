export default class ErroValidacao extends Error {
	readonly status = 400

	constructor(mensagem: string) {
		super(mensagem)
	}
}
