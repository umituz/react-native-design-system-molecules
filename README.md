# React Native Design System Molecules

A comprehensive collection of molecule-level React Native components built with atomic design principles. This package provides reusable, theme-aware UI components that follow SOLID principles and best practices.

## 🚀 Features

- **Atomic Design**: Built with atomic design principles (molecules level)
- **TypeScript First**: Full TypeScript support with strict type checking
- **Theme Aware**: Integrates seamlessly with design system themes
- **Performance Optimized**: Memoized components and no memory leaks
- **Accessible**: Built with accessibility in mind
- **Customizable**: Highly configurable with sensible defaults
- **Production Ready**: 0 lint errors, 0 TypeScript errors

## 📦 Components

### FormField
Complete form input with label, error states, and helper text.

```tsx
import { FormField } from 'react-native-design-system-molecules';

<FormField
  label="Email Address"
  placeholder="Enter your email"
  error={emailError}
  required
  requiredIndicator=" *"
  onChangeText={setEmail}
  value={email}
/>
```

### ListItem
Flexible list item with icons, subtitles, and press handling.

```tsx
import { ListItem } from 'react-native-design-system-molecules';

<ListItem
  title="Settings"
  subtitle="Manage your preferences"
  leftIcon="settings"
  onPress={handleSettingsPress}
/>
```

### SearchBar
Search input with clear functionality and customizable icons.

```tsx
import { SearchBar } from 'react-native-design-system-molecules';

<SearchBar
  value={searchQuery}
  onChangeText={setSearchQuery}
  onClear={handleClear}
  placeholder="Search items..."
  searchIconName="search"
  clearIconName="close"
/>
```

### ConfirmationModal
Universal confirmation dialog with multiple variants.

```tsx
import { ConfirmationModal, useConfirmationModal } from 'react-native-design-system-molecules';

const { showConfirmation, confirmationProps } = useConfirmationModal({
  title: "Delete Item?",
  message: "This action cannot be undone.",
  variant: "destructive",
  confirmText: "Delete",
  cancelText: "Cancel",
  onConfirm: handleDelete,
});

<ConfirmationModal {...confirmationProps} />
```

### ScreenHeader
Consistent screen header with back button and title.

```tsx
import { ScreenHeader } from 'react-native-design-system-molecules';

<ScreenHeader
  title="Profile Settings"
  onBackPress={navigation.goBack}
  backIconName="arrow-left"
  backIconColor="primary"
/>
```

### Section Components
- **SectionCard**: Card with title and content area
- **SectionContainer**: Section wrapper with optional title
- **SectionHeader**: Section header with title and subtitle
- **GridContainer**: Responsive grid layout system
- **IconContainer**: Standardized icon container

## 🎨 Theming

All components automatically use the design system theme:

```tsx
import { useAppDesignTokens } from '@umituz/react-native-design-system-theme';

// Components automatically adapt to theme changes
```

## 🛠️ Installation

```bash
npm install react-native-design-system-molecules
```

### Peer Dependencies

Make sure you have these installed:

```bash
npm install react react-native
npm install @umituz/react-native-design-system-atoms
npm install @umituz/react-native-design-system-theme
```

## 📋 Requirements

- React >= 18.0.0
- React Native >= 0.70.0
- TypeScript >= 5.0.0

## 🔧 Configuration

The package is designed to be zero-config but fully customizable:

```tsx
// All props are optional with sensible defaults
<FormField
  label="Custom Label"
  requiredIndicator=" **"  // Custom required indicator
  containerStyle={{ marginBottom: 20 }}  // Custom styling
/>
```

## 🧪 Development

```bash
# Install dependencies
npm install

# Type checking
npm run type-check

# Linting
npm run lint

# Build
npm run build
```

## 📝 API Reference

### FormField Props
- `label?: string` - Field label
- `error?: string` - Error message
- `helperText?: string` - Helper text (shown when no error)
- `required?: boolean` - Show required indicator
- `requiredIndicator?: string` - Custom required indicator (default: " *")
- `containerStyle?: ViewStyle` - Container style override
- `style?: ViewStyle` - Alias for containerStyle

### ListItem Props
- `title: string` - Main title text
- `subtitle?: string` - Optional subtitle
- `leftIcon?: string` - Left icon name
- `rightIcon?: string` - Right icon name
- `onPress?: () => void` - Press handler
- `disabled?: boolean` - Disable interaction
- `style?: ViewStyle` - Custom style

### SearchBar Props
- `value?: string` - Current search value
- `onChangeText?: (text: string) => void` - Text change handler
- `onClear?: () => void` - Clear button handler
- `placeholder?: string` - Placeholder text
- `searchIconName?: string` - Search icon name (default: "Search")
- `clearIconName?: string` - Clear icon name (default: "X")
- `containerStyle?: ViewStyle` - Container style

### ConfirmationModal Props
- `visible: boolean` - Modal visibility
- `title: string` - Modal title
- `message: string` - Modal message
- `variant?: 'default' | 'destructive' | 'warning' | 'success'` - Visual variant
- `confirmText: string` - Confirm button text
- `cancelText: string` - Cancel button text
- `icon?: string` - Custom icon name
- `onConfirm: () => void` - Confirm handler
- `onCancel: () => void` - Cancel handler
- `showBackdrop?: boolean` - Show backdrop (default: true)
- `backdropDismissible?: boolean` - Allow backdrop dismiss (default: true)
- `style?: ViewStyle` - Modal container style
- `testID?: string` - Test identifier

## 🎯 Best Practices

1. **Consistent Theming**: Always use design system theme
2. **Accessibility**: Provide proper testIDs and accessibility labels
3. **Performance**: Components are already optimized, avoid unnecessary re-renders
4. **Type Safety**: Use TypeScript for all props
5. **Responsive**: Design for different screen sizes

## 🤝 Contributing

1. Follow the existing code style
2. Add TypeScript types for new props
3. Ensure 0 lint errors and 0 TypeScript errors
4. Keep components under 200 lines
5. Follow SOLID principles

## 📄 License

MIT

## 🔗 Related Packages

- [@umituz/react-native-design-system-atoms](https://npmjs.com/package/@umituz/react-native-design-system-atoms) - Atomic components
- [@umituz/react-native-design-system-theme](https://npmjs.com/package/@umituz/react-native-design-system-theme) - Design system themes








