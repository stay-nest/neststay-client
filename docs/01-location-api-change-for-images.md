# Plan: Consume new `featured_image` and `images` API fields

## Context

The backend API for locations has changed. The listing endpoint now returns a `featured_image` object (instead of a plain `imageUrl` string), and the detail endpoint returns both `featured_image` and an `images` array of image objects. These are optional — locations without images should fall back to the existing default image.

## Changes

### 1. Add `LocationImage` type and update `Location` / `LocationDetail` types

**File:** `app/types/location.ts`

- Add a new `LocationImage` type matching the API shape:
  ```ts
  export type LocationImage = {
    filename: string;
    file_path: string;
    url: string;
    alt_text: string;
    is_featured: boolean;
    sort_order: number;
    created_at: string;
  };
  ```
- On `Location`: replace `imageUrl?: string` with `featured_image?: LocationImage | null`
- On `LocationDetail`: replace `images?: string[]` with `images?: LocationImage[]`

### 2. Update `SquarePropertyCard` to use `featured_image`

**File:** `app/components/SquarePropertyCard.tsx`

- Change line 19 from `location.imageUrl ?? fallbackImageUrl` to `location.featured_image?.url ?? fallbackImageUrl`

### 3. Update `TallPropertyCard` to use `featured_image`

**File:** `app/components/TallPropertyCard.tsx`

- Change line 19 from `location.imageUrl ?? fallbackImageUrl` to `location.featured_image?.url ?? fallbackImageUrl`

### 4. Update `LocationGallery` to accept image objects

**File:** `app/components/LocationGallery.tsx`

- Change the `images` prop type from `string[]` to `LocationImage[]` (import `LocationImage` from types)
- Extract `url` and `alt_text` from each image object when rendering
- Use `image.alt_text` for `aria-label` instead of the generic placeholder text
- Fallback logic stays the same: if `images` is empty, show the fallback image

### 5. Update detail page to pass new image shape

**File:** `app/locations/[slug]/page.tsx`

- Update the `images` variable construction (lines 68-73) to build from `location.images` (already an array of objects) or wrap `location.featured_image` in an array, or fall back to `[]`
- The gallery component now receives `LocationImage[]` instead of `string[]`

## Verification

- Run `npm run build` to confirm no type errors
- Visit `/locations` listing page — cards should show `featured_image.url` images (or fallback)
- Visit a location detail page — gallery should show all images from the `images` array (or fallback)
- Test with a location that has `featured_image: null` to confirm fallback works
