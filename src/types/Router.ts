import { FunctionComponent } from 'react';

export interface IRouter {
  key: string;
  path: string;
  component: FunctionComponent;
}
