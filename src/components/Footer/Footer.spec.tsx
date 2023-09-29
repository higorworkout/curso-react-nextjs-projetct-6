import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { describe, it, expect } from 'vitest';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    renderTheme(<Footer />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
