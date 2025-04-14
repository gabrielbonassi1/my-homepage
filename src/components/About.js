// src/components/About.js
'use client'

import React from 'react'

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        };
    };

    toggleExpand = () => {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }));
    };

    render() {
        return (
            <section id="about" className="max-w-4xl mx-auto px-4 py-12">
                <h2 className="text-3x1 font-bold mb-4">Sobre mim</h2>
                <p className="text-gray-700">
                    Sou estudante de Engenharia Elétrica com ênfase em Sistemas Eletrônicos pela Escola Politécnica da USP.
                </p>

                {this.state.expanded && (
                    <p className="mt-4 text-gray-600">
                        Trabalhei como estagiário em desenvolvimento de Firmware, e atualmente trabalho como estagiário em Pesquisa e Desenvolvimento.
                    </p>
                )}

                <button onClick={this.toggleExpand} className="mt-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700">{this.state.expanded ? 'Mostrar menos' : 'Mostrar mais'}</button>
            </section>
        )
    }
}