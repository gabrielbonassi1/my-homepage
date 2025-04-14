// src/components/Footer.js
'use client'

import React from 'react'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: new Date().getFullYear()
        };
    };

    render() {
        return (
            <footer className="bg-gray-200 text-gray-700 py-6 mt-12">
                <div className="max-w-4xl mx-auto px-4 text-center">
                  <p className="text-sm">
                    © {this.state.year} Gabriel Lujan Bonassi. Todos os direitos reservados.
                  </p>
                  <div className="mt-2 flex justify-center gap-4">
                    <a
                      href="https://github.com/gabrielbonassi1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/gabriel-lujan-bonassi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
            </footer>
        )
    }
}