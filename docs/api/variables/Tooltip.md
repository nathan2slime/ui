# Variable: Tooltip

> `const` **Tooltip**: (`__namedParameters`) => `Element` & `object`

## Type Declaration

### Content()

> **Content**: (`__namedParameters`) => `Element` \| `null` = `TooltipContent`

Renders the floating tooltip content when the tooltip is open.

#### Parameters

##### \_\_namedParameters

[`TooltipContentProps`](../types/TooltipContentProps.md)

#### Returns

`Element` \| `null`

#### Example

```tsx
<Tooltip.Content>Helpful context</Tooltip.Content>
```

### Trigger()

> **Trigger**: (`__namedParameters`) => `Element` = `TooltipTrigger`

Wraps the interactive element that opens the tooltip on hover or focus.

#### Parameters

##### \_\_namedParameters

[`TooltipTriggerProps`](../types/TooltipTriggerProps.md)

#### Returns

`Element`

#### Example

```tsx
<Tooltip.Trigger>Inspect</Tooltip.Trigger>
```
