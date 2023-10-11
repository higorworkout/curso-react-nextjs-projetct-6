import { renderTheme } from '../../styles/render-theme';
import { HtmlContent } from '.';
import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<HtmlContent html={'<b>Children</b>'}/>);
    const element = screen.getByText(/The text/i);
    expect(element).toBeInTheDocument();
  });

  it('should match a snapshot', () => {
    const { container } = renderTheme(<HtmlContent html={'<b>Children</b>'}/>);
    expect(container).toMatchSnapshot();
  });
});
