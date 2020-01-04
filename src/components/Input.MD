Exemplo de uso do componente Input

```jsx
import Input from "./Input";

<Input placeholder="Seu nome" size='normal' />
```

```jsx
import Input from "./Input";

<Input placeholder="Seu email" error={true} size='normal' />
```

### Propriedades: 

- <span style="color:blue">Id [string]</span><br/>O ID do componente.<br/>

- <span style="color:blue">Type [string]</span><br/>Tipo do componente, deve ser um tipo de entrada válido conforme o HTML5.<br/>

- <span style="color:blue">theme [string]</span><br/>Estilos do inpcomponenteut (artia, twygo e fleeg).<br/>

- <span style="color:blue">style [object]</span><br/>Sobrescreva os estilos padrões do componente, deve ser um tipo de entrada válido conforme o CSS3.<br/>

- <span style="color:blue">error [boolean]</span><br/>Se o valor for true a entrada indicará um erro. Isso normalmente é obtido via contexto do FormControl.<br/>

- <span style="color:blue">value [any]</span><br/>O valor do componente, necessário para controle.<br/>

- <span style="color:blue">placeholder [string]</span><br/>Dica apresentada no input antes que o usuário insira um valor.<br/>

- <span style="color:blue">onChange [function]</span><br/>Um retorno de chamada é acionado quando o valor é alterado. o novo valor poderá ser obtido acessando event.target.value.<br/>
