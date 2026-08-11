# Variable: Select

> `const` **Select**: \<`T`\>(`props`) => `ReactElement` & `object`

Public hybrid Select component with internally managed popup items.

Compound parts are available as `Select.Label`, `Select.Control`, and
`Select.HelperText`; item registration remains owned by the root collection.

## Type Declaration

### Control()

> **Control**: (`__namedParameters`) => `Element` = `SelectControl`

Renders the button trigger backed by Zag's control and trigger getters.

#### Parameters

##### \_\_namedParameters

[`SelectControlProps`](../types/components_select.SelectControlProps.md)

#### Returns

`Element`

#### Example

```tsx
<Select.Control placeholder="Choose a country" />
```

### HelperText()

> **HelperText**: (`__namedParameters`) => `Element` = `SelectHelperText`

Renders helper text referenced by the select trigger through
`aria-describedby`.

#### Parameters

##### \_\_namedParameters

[`SelectHelperTextProps`](../types/components_select.SelectHelperTextProps.md)

#### Returns

`Element`

#### Example

```tsx
<Select.HelperText>Choose one option.</Select.HelperText>
```

### Label()

> **Label**: (`__namedParameters`) => `Element` = `SelectLabel`

Renders a label associated with the Zag select trigger and hidden native
select.

#### Parameters

##### \_\_namedParameters

[`SelectLabelProps`](../types/components_select.SelectLabelProps.md)

#### Returns

`Element`

#### Example

```tsx
<Select.Label>Country</Select.Label>
```
