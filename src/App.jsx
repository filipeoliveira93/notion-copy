// import React from "react";
import "./App.css";

export default function App() {
	return (
		<>
			<div className=' min-h-screen text-zinc-900 bg-gradient-to-b from-sky-400 to-sky-200 p-8'>
				<div className='bg-white h-5/6 w-full mx-auto rounded-xl min-h-[700px] shadow-lg border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]'>
					<aside className='bg-red-50'>
						<div className='flex group gap-2 my-2 mx-2 hover:ease duration-1000 '>
							<button className='rounded-full w-3 h-3 bg-zinc-300 ease duration-300 group-hover:bg-red-400'></button>
							<button className='rounded-full w-3 h-3 bg-zinc-300 ease duration-300 group-hover:bg-yellow-400'></button>
							<button className='rounded-full w-3 h-3 bg-zinc-300 ease duration-300 group-hover:bg-green-400'></button>
						</div>
					</aside>
					<main className='bg-white p-5'>
						<div className='max-w-[700px] mx-auto pt-16 prose'>
							<h1>Tailwind CSS: Uma Visão Geral</h1>
							<p>
								Tailwind CSS é uma estrutura de CSS de baixo nível altamente
								personalizável que oferece a você todos os blocos de construção de que
								precisa para construir designs personalizados sem quaisquer estilos
								predefinidos que você tenha que lutar para substituir.
							</p>

							<h2>Por que usar Tailwind CSS?</h2>
							<ul>
								<li>
									<strong>Personalização:</strong> Tailwind CSS permite que você
									personalize seu design sem restrições.
								</li>
								<li>
									<strong>Responsivo:</strong> Com Tailwind CSS, você pode criar designs
									responsivos com facilidade.
								</li>
								<li>
									<strong>Comunidade:</strong> Tailwind CSS tem uma comunidade ativa e
									crescente que está sempre pronta para ajudar.
								</li>
							</ul>

							<h2>Exemplo de Código</h2>
							<p>Aqui está um exemplo de código intermediário usando Tailwind CSS:</p>
							<pre>
								<code>
									&lt;div class="flex items-center bg-gray-200 p-6"&gt; &lt;div
									class="flex-1 text-center"&gt; &lt;p class="text-blue-500
									text-xl"&gt;Hello, Tailwind CSS!&lt;/p&gt; &lt;/div&gt; &lt;/div&gt;
								</code>
							</pre>

							<p>
								Este exemplo cria uma div com um fundo cinza, padding de 6 unidades, e
								conteúdo centralizado. O texto dentro da div é azul e tem tamanho xl.
							</p>

							<h2>Recursos Adicionais</h2>
							<ul>
								<li>
									<a href='https://tailwindcss.com/docs'>
										Documentação Oficial do Tailwind CSS
									</a>
								</li>
								<li>
									<a href='https://tailwindcss.com/components'>
										Componentes do Tailwind CSS
									</a>
								</li>
								<li>
									<a href='https://tailwindcss.com/resources'>
										Recursos do Tailwind CSS
									</a>
								</li>
							</ul>

							<h2>Exemplos de Código Interativos</h2>
							<p>
								Para exemplos de código interativos, visite o{" "}
								<a href='https://play.tailwindcss.com/'>Tailwind CSS Play</a>, um
								playground online para experimentar o Tailwind CSS.
							</p>

							<h2>Conclusão</h2>
							<p>
								Tailwind CSS é uma ferramenta poderosa para desenvolvedores web. Com sua
								abordagem de baixo nível e alta personalização, permite que você crie
								designs únicos sem a necessidade de lutar contra estilos predefinidos.
								Experimente você mesmo e veja como ele pode melhorar seu fluxo de
								trabalho de desenvolvimento web.
							</p>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}
