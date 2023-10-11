import { LogoLink } from './index';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'Logo',
    srcImg: 'public/assets/image/higor.png',
    link: 'http://localhost',
  }
};

export const Template = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
