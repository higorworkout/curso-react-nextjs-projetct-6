import { HtmlContent, HtmlContentProps } from '.';
import mock from './mock'
export default {
  title: 'HtmlContent',
  component: HtmlContent,
  args: {
    html: mock
  },
  argTypes: {
    html: { type: 'string' },
  },
};

export const Template = (args) => (
  <div style={{ maxWidth: '800px', margin: "0 auto"}}>
    <HtmlContent {...args} />
  </div>
);
