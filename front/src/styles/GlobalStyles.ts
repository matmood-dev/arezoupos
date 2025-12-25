import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Outfit', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: ${props => props.theme.gradients.background};
    background-attachment: fixed;
    min-height: 100vh;
    color: ${props => props.theme.colors.text};
    transition: background 0.3s ease, color 0.3s ease;
    font-size: 16px;
    line-height: 1.5;

    /* Mobile-first responsive font sizes */
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  /* Use Noto Sans Arabic font for Arabic (RTL) */
  html[dir="rtl"] body {
    font-family: 'Noto Sans Arabic', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  button {
    font-family: inherit;
    /* Ensure buttons are touch-friendly */
    min-height: 44px;
    min-width: 44px;

    @media (max-width: 768px) {
      min-height: 48px;
      min-width: 48px;
    }
  }

  input, select, textarea {
    font-family: inherit;
    /* Ensure form elements are touch-friendly */
    min-height: 44px;

    @media (max-width: 768px) {
      min-height: 48px;
    }
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.glassBorder};
    border-radius: 4px;
    backdrop-filter: blur(4px);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.accent};
  }

  /* Glass Utilities */
  .glass-panel {
    background: ${props => props.theme.colors.glass};
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid ${props => props.theme.colors.glassBorder};
    box-shadow: ${props => props.theme.shadows.medium};
  }

  .glass-card {
    background: ${props => props.theme.colors.surface};
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid ${props => props.theme.colors.glassBorder};
    box-shadow: ${props => props.theme.shadows.small};
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .glass-card:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.large};
    border-color: ${props => props.theme.colors.accent};
  }

  /* Responsive utilities */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 768px) {
      padding: 0 15px;
    }

    @media (max-width: 480px) {
      padding: 0 10px;
    }
  }

  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  .d-flex {
    display: flex;
  }

  .d-block {
    display: block;
  }

  .d-none {
    display: none;
  }

  .justify-center {
    justify-content: center;
  }

  .justify-between {
    justify-content: space-between;
  }

  .align-center {
    align-items: center;
  }

  .flex-column {
    flex-direction: column;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .w-100 {
    width: 100%;
  }

  .h-100 {
    height: 100%;
  }

  .m-0 {
    margin: 0;
  }

  .p-0 {
    padding: 0;
  }

  .mb-1 { margin-bottom: 0.25rem; }
  .mb-2 { margin-bottom: 0.5rem; }
  .mb-3 { margin-bottom: 1rem; }
  .mb-4 { margin-bottom: 1.5rem; }
  .mb-5 { margin-bottom: 3rem; }

  .mt-1 { margin-top: 0.25rem; }
  .mt-2 { margin-top: 0.5rem; }
  .mt-3 { margin-top: 1rem; }
  .mt-4 { margin-top: 1.5rem; }
  .mt-5 { margin-top: 3rem; }

  .pb-1 { padding-bottom: 0.25rem; }
  .pb-2 { padding-bottom: 0.5rem; }
  .pb-3 { padding-bottom: 1rem; }
  .pb-4 { padding-bottom: 1.5rem; }
  .pb-5 { padding-bottom: 3rem; }

  .pt-1 { padding-top: 0.25rem; }
  .pt-2 { padding-top: 0.5rem; }
  .pt-3 { padding-top: 1rem; }
  .pt-4 { padding-top: 1.5rem; }
  .pt-5 { padding-top: 3rem; }

  /* Responsive breakpoints */
  @media (max-width: 1200px) {
    .d-xl-none { display: none !important; }
    .d-xl-block { display: block !important; }
  }

  @media (max-width: 992px) {
    .d-lg-none { display: none !important; }
    .d-lg-block { display: block !important; }
  }

  @media (max-width: 768px) {
    .d-md-none { display: none !important; }
    .d-md-block { display: block !important; }
    .d-md-flex { display: flex !important; }

    .flex-md-column {
      flex-direction: column !important;
    }

    .text-md-center {
      text-align: center !important;
    }
  }

  @media (max-width: 576px) {
    .d-sm-none { display: none !important; }
    .d-sm-block { display: block !important; }
    .d-sm-flex { display: flex !important; }

    .flex-sm-column {
      flex-direction: column !important;
    }

    .text-sm-center {
      text-align: center !important;
    }
  }

  @media (max-width: 480px) {
    .d-xs-none { display: none !important; }
    .d-xs-block { display: block !important; }
    .d-xs-flex { display: flex !important; }

    .flex-xs-column {
      flex-direction: column !important;
    }

    .text-xs-center {
      text-align: center !important;
    }
  }

  /* Focus styles for accessibility */
  button:focus-visible,
  input:focus-visible,
  select:focus-visible,
  textarea:focus-visible {
    outline: 2px solid ${props => props.theme.colors.accent};
    outline-offset: 2px;
  }

  /* Prevent zoom on input focus on iOS */
  @media screen and (max-width: 768px) {
    input[type="text"],
    input[type="email"],
    input[type="number"],
    input[type="tel"],
    input[type="password"],
    select,
    textarea {
      font-size: 16px !important;
    }
  }

  /* Print rules - only show the receipt content by id */
  @media print {
    body * {
      visibility: hidden;
    }

    #receipt, #receipt * {
      visibility: visible;
    }

    #receipt {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      margin: 0;
      padding: 0;
      box-shadow: none;
      background: white;
    }
  }
`;