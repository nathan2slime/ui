# Type Alias: RadioGroupProps

> **RadioGroupProps** = `Omit`\<`ZagRadioGroupProps`, `"id"`\> & `object`

Props accepted by the Zag-backed radio group component.

## Type Declaration

### className?

> `readonly` `optional` **className**: `string`

Class name applied to the root radiogroup element.

### color?

> `readonly` `optional` **color**: [`RadioGroupColor`](components_radio-group.RadioGroupColor.md)

Applies a semantic color treatment to the checked state.

#### Default Value

```ts
'default'
```

### id?

> `readonly` `optional` **id**: `string`

Stable id used by the Zag radio group machine.

### itemClassName?

> `readonly` `optional` **itemClassName**: `string`

Class name applied to each item root.

### itemControlClassName?

> `readonly` `optional` **itemControlClassName**: `string`

Class name applied to each item control element.

### items

> `readonly` **items**: readonly [`RadioGroupItem`](components_radio-group.RadioGroupItem.md)[]

Options rendered by the radio group.

### itemTextClassName?

> `readonly` `optional` **itemTextClassName**: `string`

Class name applied to each item text element.

### label

> `readonly` **label**: `ReactNode`

Accessible and visible label for the radio group.

### labelClassName?

> `readonly` `optional` **labelClassName**: `string`

Class name applied to the visible group label.

### size?

> `readonly` `optional` **size**: [`RadioGroupSize`](components_radio-group.RadioGroupSize.md)

Controls item dimensions and text size.

#### Default Value

```ts
'md'
```

### style?

> `readonly` `optional` **style**: `CSSProperties`

Inline styles applied to the root and merged with Zag layout styles.

## Example

```tsx
<RadioGroup
  label="Fruits"
  items={[{ value: 'apple', label: 'Apples' }]}
/>
```
