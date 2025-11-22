"use client"
import ContextoAutenticacao from "@/data/contexts/ContextoAutenticacao"
import { log } from "console"
import { useContext, useState } from "react"

export default function TelaLogin() {
	const { login } = useContext(ContextoAutenticacao)

	const [email, setEmail] = useState("")
	const [senha, setSenha] = useState("")

	return (
		<div className="flex flex-col justify-center items-center gap-6 h-screen">
			<h1 className="text-3xl font-bold">Seja Bem Vindo(a)</h1>
			<div className="flex flex-col gap-6 bg-zinc-900 rounded-lg w-96 p-7">
				<div className="flex flex-col gap-1">
					<span>E-mail</span>
					<input
						type="text"
						value={email}
						className="input"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="flex flex-col gap-1">
					<span>Senha</span>
					<input
						type="password"
						value={senha}
						className="input"
						onChange={(e) => setSenha(e.target.value)}
					/>
				</div>
				<button className="botao azul" onClick={() => login(email, senha)}>
					Entrar
				</button>
			</div>
		</div>
	)
}
