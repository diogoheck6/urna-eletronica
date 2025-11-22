"use client"
import ContextoAutenticacao from "@/data/contexts/ContextoAutenticacao"
import { useContext } from "react"

export default function Home() {
	const { usuario } = useContext(ContextoAutenticacao)

	return (
		<div className="flex flex-col">
			<span>{usuario.id}</span>
			<span>{usuario.nome}</span>
		</div>
	)
}
