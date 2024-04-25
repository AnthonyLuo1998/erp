import type {
  RouteRecordRedirectOption,
  RouteRecordName,
  RouteMeta
} from "vue-router";

export interface RouteMetaPlus extends RouteMeta {
  roles?: Array<string>;
  icon?: string;
  isMenu?: boolean;
  title?: string;
}

export interface RouteRecordPlus {
  path: string;
  component?: any;
  redirect?: RouteRecordRedirectOption;
  name?: RouteRecordName;
  meta?: RouteMetaPlus;
  children?: RouteRecordPlus[];
}
