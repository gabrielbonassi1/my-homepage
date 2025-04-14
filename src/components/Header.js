// src/components/Header.js
'use client'

import React from 'react'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        };
    };

    toggleMenu = () => {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen
        }));
    };

    render() {
        return (
            <header className="p-6 bg-white shadow"> {/* padding: 24px, white background, shadow effect around the element */}
                <div className="max-w-4xl mx-auto flex justify-between items-center"> {/* max-width: 896px, auto-align margins, display box tipe: flex, justify elements space-between, align items on center*/}
                    <div>
                        <h1 className="text-2xl font-bold">Gabriel Lujan Bonassi</h1> {/* text 2 times larger (24px),  */}
                        <p className="text-gray-600">Desenvolvedor Frontend</p> {/* gray text number 600 */}
                    </div>
                    <button onClick={this.toggleMenu} className="mt-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700">{this.state.menuOpen ? 'Fechar menu' : 'Abrir menu'}</button> {/* font size 14px, underline button when hovered */}
                </div>

                {this.state.menuOpen && (
                    <nav className="mt-4 flex justify-center"> {/* margin top: 16px */}
                        <ul className="flex gap-6"> {/* vertical space between elements */}
                            <li><a href="#about" className="mt-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Sobre</a></li>
                            <li><a href="#projects" className="mt-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Projetos</a></li>
                            <li><a href="#contact" className="mt-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Contato</a></li>
                        </ul>
                    </nav>
                )}
            </header>
        )
    }
}