# QiankunAngularAngularjs

基于qiankun,实现了在angular9主应用下挂angularjs子应用的范例。可实现angularjs和angular9优雅共存，增量迁移。本工程只是对qiankun官网样例的补充，如果想要详细了解qiankun请访问官网：`https://qiankun.umijs.org/`

## 工程启动
在主应用与子应用下先分别完成依赖的安装
```shell
npm install
```
### 启动主应用
```shell
npm run start:main 
```
### 启动 angularjs 子应用
```shell
npm run start:angularjs 
```
### 启动 angular9 子应用
```shell
npm run start:angular9
```


## 参考资料
qiankun: `https://qiankun.umijs.org/`

single-spa/ecosystem/angularjs: `https://single-spa.js.org/docs/ecosystem-angularjs`

single-spa-angularjs: `https://github.com/single-spa/single-spa-angularjs/`

