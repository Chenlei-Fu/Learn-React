import React from 'react';
import loadable from 'react-loadable'

const LoadableComponent = loadable({
    loader: () => import('./'),
    loading() {
        return <div>loading...</div>
    }
})

export default () => <LoadableComponent/>;
