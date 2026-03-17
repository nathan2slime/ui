# Variable: Tabs

> `const` **Tabs**: (`__namedParameters`) => `Element` & `object`

## Type Declaration

### Content()

> **Content**: (`__namedParameters`) => `Element` \| `null` = `TabsContent`

Renders the panel associated with a matching trigger value.

#### Parameters

##### \_\_namedParameters

`TabsContentProps`

#### Returns

`Element` \| `null`

#### Example

```tsx
<Tabs.Content value="account">Account settings</Tabs.Content>
```

### List()

> **List**: (`__namedParameters`) => `Element` = `TabsList`

Wraps tab triggers with the correct `tablist` semantics.

#### Parameters

##### \_\_namedParameters

`TabsListProps`

#### Returns

`Element`

#### Example

```tsx
<Tabs.List>
  <Tabs.Trigger value="account">Account</Tabs.Trigger>
</Tabs.List>
```

### Trigger()

> **Trigger**: (`__namedParameters`) => `Element` = `TabsTrigger`

Activates a matching tabs content panel.

#### Parameters

##### \_\_namedParameters

`TabsTriggerProps`

#### Returns

`Element`

#### Example

```tsx
<Tabs.Trigger value="account">Account</Tabs.Trigger>
```
