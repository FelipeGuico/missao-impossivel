export const Card = (Props) => {
  // Este é um componente de card que recebe propriedades (Props) como entrada.

  return (
    <div
      onClick={() => Props.onClick()}
      style={{
        backgroundColor: '#303030',
        padding: 20,
        margin: 20,
        borderRadius: 20,
        width: 200,
        cursor: 'pointer'
      }}
    >
      {/* Este é o conteúdo do card. Ele é um elemento div que pode ser clicado. */}

      <img src={Props.imagem} width='100%' />
      {/* Aqui, exibimos uma imagem com base na propriedade 'imagem' passada como entrada. */}

      <h2
        style={{
          marginTop: 10,
          textAlign: 'center'
        }}
      >
        {Props.titulo}
      </h2>
      {/* Exibimos o título do filme com base na propriedade 'titulo' passada como entrada. */}
    </div>
  );
}


//Este componente Card representa um card de filme que pode ser clicado para exibir detalhes adicionais sobre o filme.
//Ele recebe propriedades como entrada, como a imagem, o título e uma função de clique (onClick) que será executada quando o card for clicado.
//O card é estilizado com um fundo cinza escuro, margens, bordas arredondadas e um cursor de ponteiro para indicar que é clicável.
