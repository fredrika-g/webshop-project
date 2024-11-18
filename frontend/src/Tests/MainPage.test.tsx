import '@testing-library/jest-dom';
import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';

// component to test...
import { MainPage } from '../Pages/MainPage';

beforeEach(() => render(<MainPage />));

describe('Main Page Component', () => {
  it('should display the text MainPage', () => {
    expect(screen.getByText(/mainpage$/i)).toBeInTheDocument();
  });
});
