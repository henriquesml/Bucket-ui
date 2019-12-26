### Padrão
```jsx
import Select from "./Select";
import SelectOption from "./SelectOption";

<Select size='small'>
    <SelectOption value='none' selected disabled hidden >Selecione banco</SelectOption>
    <SelectOption value='237'>Bradesco</SelectOption>
    <SelectOption value='104'>Caixa Econômica Federal</SelectOption>
    <SelectOption value='756'>Sicoob</SelectOption>
    <SelectOption value='001'>Banco do Brasil</SelectOption>
</Select>
```

### Propriedades: 

- Text, texto do botão
- Size, tamanho do botão (small, normal e large)
- stylization, estilos do botão (primary, artia)