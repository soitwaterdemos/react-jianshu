import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./index.js'), // 需要被懒加载的组件
  loading() {
    return <div>正在加载</div>
  }
});

export default () => <LoadableComponent />
