// src/components/Contact.js
'use client'

import React from 'react'
export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            email: '',
            message: '',
            submitted: false
        };
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({ [name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // future API implementation
        this.setState({ submitted: true})
    }

    render() {
        return (
            <section id="contact" className="max-w-4xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold mb-4">Contato</h2>

                {this.state.submitted ? (
                  <p className="text-green-600">Mensagem enviada com sucesso! Entrarei em contato em breve.</p>
                ) : (
                  <form onSubmit={this.handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text">Nome</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text">E-mail</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text">Mensagem</label>
                      <textarea
                        id="message"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded"
                        rows="4"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="mt-4 p-2 bg-primary text-text rounded hover:bg-primary"
                    >
                      Enviar mensagem
                    </button>
                  </form>
                )}
            </section>
        )
    }
}