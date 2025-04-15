// src/components/Header.js
'use client'

import Link from 'next/link';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
            <motion.header
                initial={{ opacity: 0, y: -20 }} // comeca invisivel e um pouco acima
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut'}}>
                    <header className="p-6 bg-card-bg shadow"> {/* padding: 24px, white background, shadow effect around the element */}
                        <div className="max-w-4xl mx-auto flex justify-between items-center"> {/* max-width: 896px, auto-align margins, display box tipe: flex, justify elements space-between, align items on center*/}
                            <div>
                                <h1 className="text-3xl text-black font-bold">Gabriel Lujan Bonassi</h1> {/* text 2 times larger (24px),  */}
                                <p className="text-gray-800">Desenvolvedor Frontend</p> {/* gray text number 600 */}
                            </div>
                            <motion.button 
                                onClick={this.toggleMenu}
                                className="mt-4 p-2 bg-primary text-text rounded hover:bg-primary-hover"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}>{this.state.menuOpen ? 'Fechar menu' : 'Abrir menu'}</motion.button> {/* font size 14px, underline button when hovered */}
                        </div>

                        <AnimatePresence>
                            {this.state.menuOpen && (
                                <motion.nav className="mt-4 flex justify-center"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}> {/* margin top: 16px */}
                                    <motion.ul className="flex gap-6"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 },}}> {/* vertical space between elements */}
                                        <motion.li><Link href="/about" className="mt-4 p-2 bg-primary text-text rounded hover:bg-primary-hover">Sobre</Link></motion.li>
                                        <motion.li><Link href="/projects" className="mt-4 p-2 bg-primary text-text rounded hover:bg-primary-hover">Projetos</Link></motion.li>
                                        <motion.li><Link href="/contact" className="mt-4 p-2 bg-primary text-text rounded hover:bg-primary-hover">Contato</Link></motion.li>
                                    </motion.ul>
                                </motion.nav>
                            )}
                        </AnimatePresence>
                    </header>
            </motion.header>
        )
    }
}