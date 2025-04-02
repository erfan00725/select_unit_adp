# Generic Entity Detail Page Components

This directory contains reusable components for creating entity detail pages in a standardized way. These components help reduce code duplication and provide a consistent approach to displaying entity details across the application.

## Components

### EntityDetailPage

A generic component for displaying entity details. It handles error checking and rendering the entity data in a standardized format using the `ProductInfoCard` component.

```tsx
<EntityDetailPage
  entityData={data}
  entityKey="student"
  configGenerator={generateStudentConfig}
/>
```

### withEntityDetailPage

A higher-order component (HOC) that creates a detail page for an entity. It handles:

- Fetching the entity data by ID
- Handling not-found cases
- Suspense wrapping for loading states
- Page header rendering

```tsx
const StudentDetailPage = withEntityDetailPage(
  getStudentById,
  "student",
  generateStudentConfig,
  "Student Info"
);

export default StudentDetailPage;
```

## How to Use

1. Create a config generator function for your entity:

```tsx
const generateEntityConfig = (entity: YourEntityType): InfoPageConfig => ({
  id: entity.id.toString(),
  title: entity.name,
  createdAt: entity.createdAt.toDateString(),
  modifiedAt: entity.updatedAt.toDateString(),
  rows: [
    {
      label: "Name",
      value: entity.name,
      type: "text",
    },
    // Add more rows as needed
  ],
});
```

2. Use the `withEntityDetailPage` HOC to create your detail page:

```tsx
const EntityDetailPage = withEntityDetailPage(
  getEntityById, // Your fetch function
  "entity", // The key in the response that contains the entity
  generateEntityConfig, // Your config generator function
  "Entity Info" // Page title
);

export default EntityDetailPage;
```

## Benefits

- **Standardized Structure**: All entity detail pages follow the same structure
- **Reduced Code Duplication**: Common logic is extracted into reusable components
- **Type Safety**: TypeScript generics ensure type safety across different entity types
- **Centralized Error Handling**: Error handling is done in one place
- **Consistent UI**: All entity detail pages have a consistent look and feel
- **Easy to Add New Entities**: Just create a config generator and use the HOC
