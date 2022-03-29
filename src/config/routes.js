import { lazy } from "react";

import { urls } from './urls'

const routes = [
    {
        path: urls.home,
        exact: true,
        component: lazy(() => import('../pages/Home')),
    },
]

export default routes