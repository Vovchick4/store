import { lazy } from "react";

import { urls } from './urls'

const routes = [
    {
        path: urls.home,
        exact: true,
        component: lazy(() => import('../pages/Home')),
    },
    {
        path: urls.catalog,
        exact: true,
        component: lazy(() => import('../pages/Catalog')),
    },
    {
        path: urls.catalog + '/:productId',
        exact: true,
        component: lazy(() => import('../pages/CatalogItem')),
    },
]

export default routes