# Type Alias: SwitchProps

> **SwitchProps** = `PropsWithChildren`\<`Omit`\<`ZagSwitchProps`, `"id"` \| `"label"`\> & `Partial`\<\{ `checkedLabel`: `ReactNode`; `className`: `string`; `color`: [`SwitchColor`](components_switch.SwitchColor.md); `id`: `string`; `label`: `ReactNode`; `labelPlacement`: [`SwitchLabelPlacement`](components_switch.SwitchLabelPlacement.md); `size`: [`SwitchSize`](components_switch.SwitchSize.md); `uncheckedLabel`: `ReactNode`; \}\>\>

Props accepted by the Zag-backed switch component.

## Example

```tsx
<Switch label="Enable notifications" defaultChecked />
```
