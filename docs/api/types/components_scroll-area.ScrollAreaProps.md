# Type Alias: ScrollAreaProps

> **ScrollAreaProps** = `PropsWithChildren`\<`Omit`\<`ZagScrollAreaProps`, `"id"`\> & `Partial`\<\{ `className`: `string`; `contentClassName`: `string`; `id`: `string`; `orientation`: [`ScrollAreaOrientation`](components_scroll-area.ScrollAreaOrientation.md); `scrollbarClassName`: `string`; `size`: [`ScrollAreaSize`](components_scroll-area.ScrollAreaSize.md); `style`: `CSSProperties`; `thumbClassName`: `string`; `viewportClassName`: `string`; \}\>\>

Props accepted by the Zag-backed scroll area component.

## Example

```tsx
<ScrollArea>
  <p>Scrollable content</p>
</ScrollArea>
```
