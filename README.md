# @umituz/react-native-design-system-molecules

Molecule design components for React Native - Composite UI components built from atoms following Material Design 3 principles.

## ✨ Features

- 🎨 **Material Design 3** - Modern, accessible UI components
- ⚛️ **Pure React Native** - No external UI library dependencies
- 🧬 **Atomic Design** - Composite components (molecules) built from atoms
- 🌓 **Theme Support** - Built-in light/dark mode via `@umituz/react-native-design-system-theme`
- 📱 **Responsive** - Adaptive layouts for phones and tablets
- ♿ **Accessible** - WCAG AA compliant components
- 📦 **Zero Config** - Works out of the box
- 🪶 **Lightweight** - Smaller bundle size

## 📦 Installation

```bash
npm install @umituz/react-native-design-system-molecules
```

### Peer Dependencies

```bash
npm install @umituz/react-native-design-system-atoms @umituz/react-native-design-system-theme
npm install react@18.3.1 react-native@0.76.3
```

## 🚀 Usage

```typescript
import {
  FormField,
  ListItem,
  SearchBar,
  ScreenHeader,
  EmptyState,
} from '@umituz/react-native-design-system-molecules';

const MyComponent = () => {
  return (
    <>
      <ScreenHeader title="My Screen" />
      <FormField
        label="Email"
        placeholder="Enter your email"
        error="Invalid email"
      />
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <ListItem
        title="Item Title"
        subtitle="Item subtitle"
        onPress={() => {}}
      />
    </>
  );
};
```

## 🧩 Components

### Available Molecules

- `FormField` - Complete form input with label and error
- `ListItem` - Standard list item with icons
- `SearchBar` - Search input with icon and clear button
- `ScreenHeader` - Screen title header with navigation
- `EmptyState` - Empty state placeholder
- `SectionCard` - Card with section title
- `SectionHeader` - Section title header
- `SectionContainer` - Container for sections
- `IconContainer` - Icon container component
- `GridContainer` - Grid layout container
- `AtomicConfirmationModal` - Confirmation dialog modal
- And more...

## 🌓 Theme Integration

This package requires `@umituz/react-native-design-system-theme` and `@umituz/react-native-design-system-atoms`:

```typescript
import { ThemeProvider } from '@umituz/react-native-design-system-theme';
import { FormField } from '@umituz/react-native-design-system-molecules';

const App = () => (
  <ThemeProvider>
    <FormField
      label="Email"
      placeholder="Enter email"
    />
  </ThemeProvider>
);
```

## 📖 Documentation

Full documentation: [Coming Soon]

## 🤝 Contributing

Contributions welcome! This is part of the universal design system used across 100+ React Native apps.

## 📄 License

MIT © Umit Uz








