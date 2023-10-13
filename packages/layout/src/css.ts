import { css } from 'lit';

//! css form tailwindcss
export const tailwindStyles = css`
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .flex {
    display: flex;
  }

  .max-w-6xl {
    max-width: 72rem;
  }

  .max-w-none {
    max-width: none;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .flex-col {
    flex-direction: column;
  }

  .items-center {
    align-items: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .gap-5 {
    gap: 1.25rem;
  }

  .gap-x-2 {
    -moz-column-gap: 0.5rem;
    column-gap: 0.5rem;
  }

  .gap-y-1 {
    row-gap: 0.25rem;
  }

  .gap-y-1\.5 {
    row-gap: 0.375rem;
  }

  .overflow-hidden {
    overflow: hidden;
  }

  .scroll-smooth {
    scroll-behavior: smooth;
  }

  .rounded-md {
    border-radius: 0.375rem;
  }

  .px-1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }

  .py-10 {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .py-6 {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .pt-5 {
    padding-top: 1.25rem;
  }

  .font-serif {
    font-family:
      ui-serif,
      Georgia,
      Cambria,
      Times New Roman,
      Times,
      serif;
  }

  .text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }

  .font-bold {
    font-weight: 700;
  }

  @media (min-width: 640px) {
    .sm\:px-14 {
      padding-left: 3.5rem;
      padding-right: 3.5rem;
    }

    .sm\:py-10 {
      padding-top: 2.5rem;
      padding-bottom: 2.5rem;
    }
  }

  @media (min-width: 768px) {
    .md\:px-24 {
      padding-left: 6rem;
      padding-right: 6rem;
    }
  }

  @media (min-width: 1024px) {
    .lg\:px-32 {
      padding-left: 8rem;
      padding-right: 8rem;
    }
  }
`;
