import { MenuLink } from '.';
import { Meta } from '@storybook/react/'
import { theme } from "../../styles/theme"

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
    link: 'https://www.google.com.br/',
  },
  argTypes: {
    children: { type: 'string' },
  },

  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta;

export const Template = (args) => {
  return (
    <div style={{maxWidth: '320px', background: theme.colors.primary, padding: theme.spacings.large}}>
      <MenuLink {...args} />
      <MenuLink {...args} />
      <MenuLink {...args} />
      <MenuLink {...args} />
    </div>
  );
};
