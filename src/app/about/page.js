// src/components/AboutPage.js
'use client'

import React from 'react'

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    };

    render() {
        return (
            <section id="about" className="text-text max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-4xl text-text font-bold mb-4">Sobre Mim</h1>
                <p className="text-text">
                    Sou estudante de Engenharia Elétrica com ênfase em Sistemas Eletrônicos pela Escola Politécnica da USP.
                </p>
                <h2 className="text-2xl font-bold mb-6 text-center">Experiência</h2>

                {/* TREND Medical */}
                <div className="mb-6">
                  <h3 className="font-semibold">
                    Estagiário de Pesquisa e Desenvolvimento, <span className="italic">TREND Medical</span> — São Paulo, SP
                    <span className="float-right text-sm font-normal">Fevereiro 2025 — Atualmente</span>
                  </h3>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Atuo no desenvolvimento de novos produtos, particularmente nas áreas de firmware (utilizando C/C++) e PCBs (utilizando KiCAD).</li>
                    <li>Realizo pesquisas e testes de validação de novos componentes a serem utilizados nos produtos.</li>
                  </ul>
                </div>

                {/* Control iD */}
                <div className="mb-6">
                  <h3 className="font-semibold">
                    Estagiário de desenvolvimento de firmware, <span className="italic">Control iD</span> — São Paulo, SP
                    <span className="float-right text-sm font-normal">Maio 2023 — Janeiro 2025</span>
                  </h3>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Atuei no desenvolvimento de novas funcionalidades e na criação de novos produtos para a linha de controle de acesso da empresa, seguindo metodologias ágeis como Scrum e Kanban para garantir entregas eficientes e contínuas.</li>
                    <li>Desenvolvi a funcionalidade de intertravamento via rede nos produtos da linha de controle de acesso, amplamente elogiada pelos clientes, aplicando conceitos de redes de computadores e programação multithread em C++ com libcurl.</li>
                    <li>Implementei a funcionalidade de envio de SMS em um roteador 4G/WiFi, permitindo a automação de mensagens via rede GSM, utilizando técnicas de multithreading em C++.</li>
                    <li>Trabalhei na identificação e resolução de bugs no firmware dos produtos de controle de acesso, utilizando tecnologias como JavaScript, C++, Python (Flask) e Yocto Project, contribuindo para a melhoria contínua do software dentro de pipelines CI/CD.</li>
                  </ul>
                </div>

                {/* Poli Racing */}
                <div className="mb-6">
                  <h3 className="font-semibold">
                    Projetista, <span className="italic">Equipe Poli Racing</span> — São Paulo, SP
                    <span className="float-right text-sm font-normal">Janeiro 2019 — Novembro 2019</span>
                  </h3>
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Trabalhei no desenvolvimento de um carro para a competição da Fórmula SAE, particularmente no projeto do motor do carro.</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-6 text-center">Habilidades</h2>

                <div className="space-y-4">
                  <div>
                    <span className="font-semibold">CAD:</span>{' '}
                    <span>Siemens NX, KiCAD</span>
                  </div>
                  <div>
                    <span className="font-semibold">Programação:</span>{' '}
                    <span>
                      C/C++, Python, JavaScript, Shell, Yocto Project, SQL Server, Lua, VHDL, MATLAB, R, React, Tailwind CSS
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold">Operacional:</span>{' '}
                    <span>Jira, Git/GitHub, MS Office</span>
                  </div>
                </div>
            </section>
        )
    }
}