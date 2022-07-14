import { useState } from "react";
import styled from "styled-components"


export default function App() {
  const [arquivo, setArquivo] = useState([]); 
  const [imagem, setImagem] = useState("");


  function ShowImagem(arquivo) {
    const reader = new FileReader(); 
    reader.readAsDataURL(arquivo); 
    reader.addEventListener("load", (event) => {
      console.log("Todos os recursos terminaram o carregamento!")
      setImagem(event.target.result);
    });
  }

  console.log(arquivo);
  if (imagem) {
    return (
      <Conteiner image={imagem}>
        <Content>
          <h1>Selecione uma imagem e veja a mágica haha</h1>
          <label htmlFor="arquivos"><h3>selecionar img</h3></label>
          <input
            type="file"
            name="files"
            id="arquivos" // o htmlFor = "aqui tem que fazer referencia ao id"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(event) => {
              console.log(event.target.files);
              ShowImagem(event.target.files[0]);
              setArquivo([...event.target.files]);
            }}
          />
          <button>mágica/upload</button>
        </Content>
      </Conteiner>
    );
  }
  if (!imagem) {
    return (
      <Conteiner image={imagem}>
        <Content>
          <h1>Selecione uma imagem e veja a mágica haha</h1>
          <label htmlFor="arquivos"><h3>selecionar img</h3></label>
          <input
            type="file"
            name="files"
            id="arquivos" // o htmlFor = "aqui tem que fazer referencia ao id"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(event) => {
              console.log(event.target.files);
              ShowImagem(event.target.files[0]); // possivel passar mais de um arquivo  
              setArquivo([...event.target.files]);
            }}
          />
          <p>pode clicar no botão acima , e escolher algo</p>
          <button>mágica/upload</button>
        </Content>
      </Conteiner>
    );
  }

}

const Conteiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: plum;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => (props.image ? `url(${props.image})` : "")}; 
  background-size: cover;
`;

const Content = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    border-radius: 10px;
    margin-bottom: 40px;
    text-align: center;
    height: 30px;
    background-color: violet;

    h3{
      color: purple;
    }
  }
  button{
    border-style: none;
    color: purple;
    width: 50%;
    border-radius: 10%;
    height: 20px;
  
  }
  h1 {
    text-align: center;
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  label:hover {
    cursor: pointer;
    text-transform:uppercase;
}
button:hover{
  cursor: pointer;
    text-transform:capitalize;
}
`;