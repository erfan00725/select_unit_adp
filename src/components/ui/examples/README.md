# Pagination Component

A reusable pagination component for tables and lists in the application.

## Features

- Displays current page range (e.g., "Showing 1 to 10 of 245 results")
- Previous/Next navigation buttons
- Dynamic page number display with ellipsis for large page counts
- Supports both client-side and server-side pagination
- Fully responsive design
- Matches the application's design system

## Usage

### Basic Usage with Client-side Pagination

```tsx
import Pagination from "@/components/ui/Pagination";

const MyComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 245;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Fetch or filter data based on the new page
  };

  return (
    <div>
      {/* Your table or list component */}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
```

### Server-side Pagination with URL Parameters

```tsx
import Pagination from "@/components/ui/Pagination";

const MyServerComponent = () => {
  // Get current page from URL or default to 1
  const currentPage = 1;
  const itemsPerPage = 10;
  const totalItems = 245;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      {/* Your table or list component */}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        baseUrl="/your-page-path"
      />
    </div>
  );
};
```

## Props

| Prop           | Type     | Required | Description                                                      |
| -------------- | -------- | -------- | ---------------------------------------------------------------- |
| `currentPage`  | number   | Yes      | The current active page                                          |
| `totalPages`   | number   | Yes      | Total number of pages                                            |
| `totalItems`   | number   | Yes      | Total number of items across all pages                           |
| `itemsPerPage` | number   | Yes      | Number of items displayed per page                               |
| `onPageChange` | function | No       | Callback function when page changes (for client-side pagination) |
| `baseUrl`      | string   | No       | Base URL for server-side pagination links                        |
| `className`    | string   | No       | Additional CSS classes to apply to the component                 |

## Example

See the `PaginationExample.tsx` file for a complete working example of the pagination component in action.
