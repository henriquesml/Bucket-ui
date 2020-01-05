Exemplo de uso do componente Navbar

```jsx
import Narbar from "./NavBar";
import Container from "./Container";

<Container>
  <Narbar theme='artia'>
    <h1 style={{color: '#FFF', fontFamily: 'sans-serif'}}>Artia</h1>
  </Narbar>

  <br/>

  <Narbar theme='fleeg'>
    <h1 style={{color: '#FFF', fontFamily: 'sans-serif'}}>Fleeg</h1>
  </Narbar>

  <br/>

  <Narbar theme='twygo'>
    <h1 style={{color: '#FFF', fontFamily: 'sans-serif'}}>Twygo</h1>
  </Narbar>

  <br/>

  <Narbar>
    <h1 style={{color: '#333', fontFamily: 'sans-serif'}}>Padrão</h1>
  </Narbar>
</Container>
```