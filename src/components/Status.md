### Tipos de Status

```jsx
import Status from "./Status";
import Container from "./Container";

<Container direction='row'>
  <Status size='normal' status='success'/>
  <Status style={{marginLeft: 10}} size='normal' status='warning'/>
  <Status style={{marginLeft: 10}} size='normal' status='error'/>
  <Status style={{marginLeft: 10}} size='normal' status='unknown'/>
</Container>

```
### Tipos de Tamanhos
```jsx
import Status from "./Status";
import Container from "./Container";

<Container direction='row'>
  <Status size='normal' size='small' status='success'/>
  <Status style={{marginLeft: 10}} size='normal' status='warning'/>
  <Status style={{marginLeft: 10}} size='large' status='error'/>
</Container>

```