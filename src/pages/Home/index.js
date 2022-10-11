
import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function PaginaInicial({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Bem Vindo!!</Header>
      <Paragraph>
        Escolha Uma Opção Abaixo Para Iniciar Sua Navegção.
      </Paragraph>
    </Background>
  )
}
