

export const Card = (Props) =>{
return (
  <div
      style={{
        backgroundColor:'#303030',
        padding:20,
        margin:20,
        borderRadius:20,
        width:200,
        cursor:'pointer'
      }}
  >
    <img src={Props.imagem} width='100%' />
    <h2
      style={{
        marginTop:10,
        textAlign:'center'
      }}
    >{Props.texto}</h2>
  </div>

);



}
