import React from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';

export  default interface RouteObject {
    path: string | Array<string>;
    component?:
    | React.ComponentType<any>
    | React.ComponentType<RouteComponentProps<any, StaticContext, unknown>>
    | undefined;
    redirect?: string;
    exact?: boolean;
    strict?: boolean;
    sensitive?: boolean;
    location?: any;
}

