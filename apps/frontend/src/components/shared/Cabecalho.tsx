import Link from "next/link"

export default function Cabecalho() {
	return (
		<header className="flex justify-between items-center h-24 bg-zinc-900">
			<div className="flex justify-between items-center container">
				<h1 className="text-white text-2xl font-bold ml-5">Eleições 2025</h1>
				<nav className="flex items-center gap-5 mr-5">
					<Link href="/">Início</Link>
					<Link href="/candidato">Candidatos</Link>
					<Link href="/eleitor">Eleitor</Link>
					<Link href="/auth" className="botao azul">
						Login
					</Link>
				</nav>
			</div>
		</header>
	)
}
