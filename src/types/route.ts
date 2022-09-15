import { FunctionComponent, LazyExoticComponent } from 'react';

export interface RouteTypes {
  key: string;
  path: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  element: LazyExoticComponent<FunctionComponent<{}>>;
  role: string;
  backUrl: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  children?: Array<RouteTypes> | undefined | LazyExoticComponent<FunctionComponent<{}>>;
}
