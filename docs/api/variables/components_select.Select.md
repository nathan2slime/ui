# Variable: Select

> `const` **Select**: (`__namedParameters`) => `Element` & `object`

## Type Declaration

### Control

> **Control**: `ForwardRefExoticComponent`\<`Omit`\<`SelectHTMLAttributes`\<`HTMLSelectElement`\>, `"size"`\> & `object` & `Partial`\<\{ `endContent`: `ReactNode`; `startContent`: `ReactNode`; \}\> & `RefAttributes`\<`HTMLSelectElement`\>\> = `SelectControl`

### HelperText()

> **HelperText**: (`__namedParameters`) => `Element` = `SelectHelperText`

Renders helper text associated with the select control.

#### Parameters

##### \_\_namedParameters

`SelectHelperTextProps`

#### Returns

`Element`

#### Example

```tsx
<Select.HelperText>Choose a valid option.</Select.HelperText>
```

### Item()

> **Item**: (`__namedParameters`) => `Element` = `SelectItem`

Renders a native option inside the select control.

#### Parameters

##### \_\_namedParameters

`SelectItemProps`

#### Returns

`Element`

#### Example

```tsx
<Select.Item value="support">Support</Select.Item>
```

### Label()

> **Label**: (`__namedParameters`) => `Element` = `SelectLabel`

Renders a label connected to the select control inside the same root.

#### Parameters

##### \_\_namedParameters

`SelectLabelProps`

#### Returns

`Element`

#### Example

```tsx
<Select.Label>Spell school</Select.Label>
```
