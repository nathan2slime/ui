# Type Alias: SelectCustomProps\<T\>

> **SelectCustomProps**\<`T`\> = [`SelectBaseProps`](components_select.SelectBaseProps.md)\<`T`\> & `object`

Props accepted for custom item shapes. Both collection mappers are required
so Zag can derive stable values and typeahead text without inspecting data.

## Type Declaration

### isItemDisabled()?

> `optional` **isItemDisabled**: (`item`) => `boolean`

Reports whether a custom item cannot be selected.

#### Parameters

##### item

`T`

#### Returns

`boolean`

### itemToString()

> **itemToString**: (`item`) => `string`

Converts a custom item to the visible text used by Zag.

#### Parameters

##### item

`T`

#### Returns

`string`

### itemToValue()

> **itemToValue**: (`item`) => `string`

Converts a custom item to its submitted scalar value.

#### Parameters

##### item

`T`

#### Returns

`string`

## Type Parameters

### T

`T`
