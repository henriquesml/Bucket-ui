### Em Progresso

Exemplo de uso do componente Container

```jsx
import Narbar from "./NavBar";
import Container from "./Container";
import Button from "./Button";

function handleClick(){
  alert('Olá, eu sou um botão')
}

<Container
  style={{background: '#F9F9F9'}}
  width='100%'
  height='120px'
>
  <Narbar theme='artia'>
    <h1 style={{color: '#FFF', fontFamily: 'sans-serif'}}>Artia</h1>
  </Narbar>
  <br/>
  <Button theme='fleeg' text='Click-me' onClick={handleClick} />
</Container>