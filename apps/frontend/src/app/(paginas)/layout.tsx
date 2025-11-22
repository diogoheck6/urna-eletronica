"use client"
import { ProvedoraAutenticacao } from "@/data/contexts/ContextoAutenticacao"

export default function Layout(props: any) {
	return <ProvedoraAutenticacao>{props.children}</ProvedoraAutenticacao>
}
