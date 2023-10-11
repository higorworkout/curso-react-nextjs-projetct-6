import ReactMarkdown from 'react-markdown';
import * as Styled from './styles';
import { Heading } from '../Heading'

export type HtmlContentProps = {
  html: string
};


export const HtmlContent = ({ html }: HtmlContentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{__html: html}}/>
};

