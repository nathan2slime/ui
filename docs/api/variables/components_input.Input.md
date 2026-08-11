# Variable: Input

> `const` **Input**: `ForwardRefExoticComponent`\<`Omit`\<`InputHTMLAttributes`\<`HTMLInputElement`\>, `"color"` \| `"size"`\> & `Partial`\<\{ `className`: `string`; `color`: `InputColor`; `errorText`: `ReactNode`; `fullWidth`: `boolean`; `helperText`: `ReactNode`; `helperTextClassName`: `string`; `inputClassName`: `string`; `label`: `ReactNode`; `labelClassName`: `string`; `size`: `InputSize`; `status`: `InputStatus`; `variant`: `InputVariant`; \}\> & `RefAttributes`\<`HTMLInputElement`\>\>

Renders a themed native input with optional label, helper text, and error text.

## Example

```tsx
<Input label="Email" placeholder="you@example.com" />
```
