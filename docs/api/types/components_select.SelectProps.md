# Type Alias: SelectProps\<T\>

> **SelectProps**\<`T`\> = `T` *extends* [`SelectOption`](components_select.SelectOption.md) ? [`SelectBaseProps`](components_select.SelectBaseProps.md)\<`T`\> & `Partial`\<\{ `isItemDisabled`: (`item`) => `boolean`; `itemToString`: (`item`) => `string`; `itemToValue`: (`item`) => `string`; \}\> : [`SelectCustomProps`](components_select.SelectCustomProps.md)\<`T`\>

Public root props. Built-in items use optional mappers; custom items require
both `itemToString` and `itemToValue`.

## Type Parameters

### T

`T` = [`SelectOption`](components_select.SelectOption.md)
