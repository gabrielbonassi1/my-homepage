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
            <section id="about" className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-4xl text-text font-bold mb-4">Sobre Mim</h1>
                <p className="text-text">
                    Sou estudante de Engenharia Elétrica com ênfase em Sistemas Eletrônicos pela Escola Politécnica da USP.
                </p>
                <h2 className="">Experiências</h2>
                <p className="mt-4 text-text">
                        Trabalhei como estagiário em desenvolvimento de Firmware, e atualmente trabalho como estagiário em Pesquisa e Desenvolvimento.
                </p>
            </section>
        )
    }
}