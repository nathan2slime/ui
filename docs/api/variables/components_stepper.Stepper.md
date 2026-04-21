# Variable: Stepper

> `const` **Stepper**: (`__namedParameters`) => `Element` & `object`

## Type Declaration

### Description()

> **Description**: (`__namedParameters`) => `Element` = `StepperDescription`

Renders supporting copy below the step title.

#### Parameters

##### \_\_namedParameters

`StepperDescriptionProps`

#### Returns

`Element`

#### Example

```tsx
<Stepper.Description>Confirm your delivery details.</Stepper.Description>
```

### Indicator()

> **Indicator**: (`__namedParameters`) => `Element` = `StepperIndicator`

Renders the numeric or status indicator for the current step.

#### Parameters

##### \_\_namedParameters

`StepperIndicatorProps`

#### Returns

`Element`

#### Example

```tsx
<Stepper.Indicator />
```

### Item()

> **Item**: (`props`) => `Element` = `StepperItem`

Renders an individual step button with state, keyboard support, and shared styling.

#### Parameters

##### props

`StepperItemProps`

#### Returns

`Element`

#### Example

```tsx
<Stepper.Item value="payment">
  <Stepper.Indicator />
  <Stepper.Title>Payment</Stepper.Title>
</Stepper.Item>
```

### List()

> **List**: (`__namedParameters`) => `Element` = `StepperList`

Renders the ordered list that coordinates item order and roving focus behavior.

#### Parameters

##### \_\_namedParameters

`StepperListProps`

#### Returns

`Element`

#### Example

```tsx
<Stepper.List>
  <Stepper.Item value="account">...</Stepper.Item>
</Stepper.List>
```

### Root()

> **Root**: (`__namedParameters`) => `Element` = `StepperRoot`

Provides shared stepper state, layout options, and accessibility semantics.

#### Parameters

##### \_\_namedParameters

`StepperRootProps`

#### Returns

`Element`

#### Example

```tsx
<Stepper.Root defaultValue="account">
  <Stepper.List />
</Stepper.Root>
```

### Separator()

> **Separator**: (`__namedParameters`) => `Element` = `StepperSeparator`

Renders the connector line from the current step to the next one.

#### Parameters

##### \_\_namedParameters

`StepperSeparatorProps`

#### Returns

`Element`

#### Example

```tsx
<Stepper.Separator />
```

### Title()

> **Title**: (`__namedParameters`) => `Element` = `StepperTitle`

Renders the primary label for a step item.

#### Parameters

##### \_\_namedParameters

`StepperTitleProps`

#### Returns

`Element`

#### Example

```tsx
<Stepper.Title>Shipping</Stepper.Title>
```
