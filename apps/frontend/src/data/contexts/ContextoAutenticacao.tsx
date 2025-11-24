"use client"
import { createContext, useState } from "react"
import { loginUsuario, Usuario } from "@urna/auth"
import { useRouter } from "next/navigation"
import useAPI from "../hooks/useAPI"

export interface ContextoAutenticacaoProps {
	usuario: Partial<Usuario> | null
	cadastrar: (usuario: Partial<Usuario>) => Promise<void>
	login: (email: string, senha: string) => Promise<void>
	logout: () => void
}

const ContextoAutenticacao = createContext<ContextoAutenticacaoProps>({} as any)

export function ProvedoraAutenticacao(props: any) {
	const [usuario, setUsuario] = useState<Partial<Usuario | null>>(null)
	const router = useRouter()

	const { httpGet } = useAPI()

	async function cadastrar(usuario: Partial<Usuario>) {
		const resultado = await httpGet("")
		alert(resultado)
	}

	async function login(email: string, senha: string) {
		// Chama a API via backend
		try {
			const usuario = loginUsuario(email, senha)
			setUsuario(usuario)

			router.push("/")
		} catch (e: any) {
			alert(e.message)
		}
	}

	function logout() {
		setUsuario(null)
	}

	return (
		<ContextoAutenticacao.Provider
			value={{
				usuario,
				cadastrar,
				login,
				logout,
			}}
		>
			{props.children}
		</ContextoAutenticacao.Provider>
	)
}

export default ContextoAutenticacao
