import './style.css';

const Modal = (props) => {
  return (
    <div
      className="modal"
      style={{
        opacity: props.show ? 1 : 0, // Define a opacidade do modal com base na propriedade 'show'.
        visibility: props.show ? 'visible' : 'hidden'// Define a visibilidade do modal com base na propriedade 'show'.
      }}
    >
      <div
        className="modal_content"
        style={{
          opacity: props.show ? 1 : 0, // Define a opacidade do conteúdo do modal com base na propriedade 'show'.
          visibility: props.show ? 'visible' : 'hidden'// Define a visibilidade do conteúdo do modal com base na propriedade 'show'.
        }}
      >
        <span
          onClick={() => props.setShow(false)} // Define uma função de clique para fechar o modal quando o "x" for clicado.
          className='modal_close'
        >
          &times;
          {/* Exibe um "x" como um ícone para fechar o modal. */}
        </span>
        {props.children}
        {/* Renderiza o conteúdo do modal. */}
      </div>
    </div>
  );
};

export default Modal;

export const ModalHeader = (props) => {
  return (
    <div className="modal_header">
      {props.children}
      {/* Renderiza o conteúdo do cabeçalho do modal. */}
    </div>
  );
};

export const ModalBody = (props) => {
  return (
    <div className="modal_body">
      {props.children}
      {/* Renderiza o conteúdo do corpo do modal. */}
    </div>
  );
};

//Este código define um componente de modal chamado Modal e dois componentes internos ModalHeader e ModalBody.
//O Modal é responsável por exibir um modal na interface do usuário com base na propriedade show.
//Os componentes ModalHeader e ModalBody são usados para renderizar o cabeçalho e o corpo do modal, respectivamente.
//O modal é estilizado com base em classes CSS definidas em um arquivo externo de estilo (style.css).
//O "x" no canto superior direito do modal é usado para fechar o modal quando clicado.
