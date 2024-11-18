import '@testing-library/jest-dom';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

// component to test...
import { MainPage } from '../Pages/MainPage';

describe('Main Page Component', () => {
  it('should display the text MainPage', () => {
    render(<MainPage />);

    expect(screen.getByText(/mainpage$/i)).toBeInTheDocument();
  });
});
