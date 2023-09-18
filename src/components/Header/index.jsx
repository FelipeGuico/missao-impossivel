export const Header = () => {
  // Este é um componente de cabeçalho.

  return (
    <header
      style={{
        backgroundColor: '#1d1d1d', // Define a cor de fundo do cabeçalho.
        padding: '1rem 1rem 1rem', // Adiciona preenchimento interno nas quatro direções.
        textAlign: "center", // Define o alinhamento do texto como centralizado.
        color: '#FF0000' // Define a cor do texto como vermelho.
      }}
    >
      <h1>
        Missao-Impossivel
      </h1>
      {/* Exibe um título h1 no cabeçalho com o texto "Missao-Impossivel". */}
    </header>
  )
}

//Este componente Header representa o cabeçalho da página. Ele possui um estilo de fundo escuro, preenchimento interno,
//texto centralizado e a cor do texto é vermelha.
//O título "Missao-Impossivel" é exibido como um cabeçalho principal (h1) no centro do cabeçalho.
