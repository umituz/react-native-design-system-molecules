/**
 * @umituz/react-native-design-system-molecules - Public API
 *
 * Molecule design components for React Native - Composite UI components
 * Built from atoms following atomic design principles
 *
 * Usage:
 * ```typescript
 * import { FormField, ListItem, SearchBar } from '@umituz/react-native-design-system-molecules';
 * ```
 */

// Component exports
export { FormField } from './FormField';
export { ListItem } from './ListItem';
export { SearchBar } from './SearchBar';
export { SectionCard } from './SectionCard';
export { IconContainer } from './IconContainer';
export { ScreenHeader } from './ScreenHeader';
export { EmptyState } from './EmptyState';
export { SectionHeader } from './SectionHeader';
export { SectionContainer } from './SectionContainer';
export { GridContainer } from './GridContainer';
export { AtomicConfirmationModal, useConfirmationModal } from './AtomicConfirmationModal';

// Type exports
export type { FormFieldProps } from './FormField';
export type { ListItemProps } from './ListItem';
export type { SearchBarProps } from './SearchBar';
export type { ScreenHeaderProps } from './ScreenHeader';
export type { AtomicConfirmationModalProps, ConfirmationModalVariant } from './AtomicConfirmationModal';

// Union type for all molecule props (used for type narrowing)
import type { FormFieldProps } from './FormField';
import type { ListItemProps } from './ListItem';
import type { SearchBarProps } from './SearchBar';
import type { ScreenHeaderProps } from './ScreenHeader';
import type { AtomicConfirmationModalProps } from './AtomicConfirmationModal';

export type MoleculeComponentProps =
  | FormFieldProps
  | ListItemProps
  | SearchBarProps
  | ScreenHeaderProps
  | AtomicConfirmationModalProps;
