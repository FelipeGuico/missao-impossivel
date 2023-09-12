import React, { useRef, useState } from 'react'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { Footer } from './components/Footer'

import Modal, { ModalBody, ModalHeader } from './components/Modal'

import banner from './imagens/banner.jpg'
import card1 from './imagens/card1.jpg'
import card2 from './imagens/card2.jpg'
import card3 from './imagens/card3.jpg'
import card4 from './imagens/card4.jpg'

import styles from './styles.module.css'
import './styles/global.css'

// npm install
// npm run start

// https://github.com/profchines
// https:dontpad.com/profchines

const requisicao = [
  {
    "id": 1,
    "titulo": "Missão Impossível 2",
    "imagem": card1,
    "data": "22 de junho de 2000",
    "direcao": "John Woo",
    "elenco": "Tom Cruise, Dougray Scott, Thandiwe Newton",
    "sinopse": "O agente secreto Ethan Hunt retorna para liderar sua equipe em uma missão que pretende capturar um vírus mortal antes que ele seja liberado por terroristas. A sua missão é fazer o impossível, até porque ele não é a única pessoa procurando as amostras da doença."
  },
  {
    "id": 2,
    "titulo": "Missão Impossível 3",
    "imagem": card2,
    "data": "5 de maio de 2006",
    "direcao": "J.J. Abrams",
    "elenco": "Tom Cruise, Philip Seymour Hoffman, Ving Rhames",
    "sinopse": "Aposentado do serviço ativo e treinando recrutas para a Força Missão Impossível, o agente Ethan Hunt enfrenta o inimigo mais difícil de sua carreira: Owen Davian, um negociante internacional de armas e informação que é tão esperto quanto implacável."
  },
  {
    "id": 3,
    "titulo": "Missão Impossível 5",
    "imagem": card3,
    "data": "13 de agosto de 2015",
    "direcao": "Christopher McQuarrie",
    "elenco": "Tom Cruise, Jeremy Renner, Simon Pegg",
    "sinopse": "Ethan Hunt luta para expor uma organização secreta chamada Sindicato."
  },
  {
    "id": 4,
    "titulo": "Missão Impossível 7",
    "imagem": card4,
    "data": "13 de julho de 2023",
    "direcao": "Christopher McQuarrie",
    "elenco": "Tom Cruise, Hayley Atwell, Ving Rhames",
    "sinopse": "No novo capítulo da franquia Missão Impossível, o agente Ethan Hunt e sua equipe partem em um novo desafio para rastrear uma arma que, se cair em mãos erradas, pode ameaçar toda a humanidade."
  },
]
function App() {

  const refFilmeModal = useRef({
    titulo: '',
    data: '',
    direcao: '',
    elenco: '',
    sinopse: '',
  })

  const [showModal, setShowModal] = useState(false);

  function onClickCard(filme) {
    refFilmeModal.current = filme
    setShowModal(true)
  }

  return (
    <>
      <Header />
      <img width="100%" src={banner} />

      <h1
        style={{
          margin: 15,
          textAlign: 'center'
        }}
      >Filmes</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}
      >
        {
          requisicao.map((filme) => {
            return (
              <Card
              titulo={filme.titulo}
                key={filme.id}
                imagem={filme.imagem}
                onClick={() => onClickCard(filme)}
              />
            )
          })

        }


        {/*<Card imagem={card1} texto={"Missão Impossivel 1"} />
        <Card imagem={card2} texto={"Missão Impossivel 2"} />
        <Card imagem={card3} texto={"Missão Impossivel 3"} />
      <Card imagem={card4} texto={"Missao Impossivel 4"} />*/}


      </div>
      <Modal
        show={showModal}
        setShow={setShowModal}
      >
        <ModalHeader>
          <h2>{refFilmeModal.current.titulo}</h2>
        </ModalHeader>
        <ModalBody>
          <p
            style={{
              fontSize: '0.8rem',
              marginBottom: 10
            }}
          >
            {refFilmeModal.current.data}
          </p>
          <div
            style={{
              display: 'flex',
              marginBottom: 10
            }}
          >
            <p
              style={{
                fontSize: '0.8rem',
                marginBottom: 10
              }}
            >
              Direção:
            </p>
            <p
              style={{
                fontSize: '0.8rem',
                marginBottom: 10
              }}
            >
              {refFilmeModal.current.direcao}
            </p>

          </div>
          <div
            style={{
              display: 'flex',
              marginBottom: 10
            }}
          >
            <p
              style={{
                fontSize: '0.8rem',
                marginBottom: 10
              }}
            >
              Elenco:
            </p>
            <p
              style={{
                fontSize: '0.8rem',
                marginBottom: 10
              }}
            >
              {refFilmeModal.current.elenco}
            </p>
          </div>
          <p
            style={{
              textAlign: 'justify'
            }}
          >
            {refFilmeModal.current.sinopse}
          </p>
        </ModalBody>
      </Modal>
      <Footer />

    </>

  );

}

export default App;
