import { Footer, FooterProps } from '.';
import { Meta, Story} from '@storybook/react/types-6-0'

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Higor Soares</a></p>`,
  },
} as Meta;

export const Template: Story<FooterProps> = (args) => {
  return (
    <div  style={{ marginTop: '200px'}}>
      <Footer {...args} />
    </div>
  );
};
