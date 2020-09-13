import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from 'qiankun';
import {registerApplication} from 'single-spa'

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
/**
 * Step1 初始化应用
 */

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


function loader(loading: boolean) {
  console.log(`loading:${loading}`);
}

function genActiveRule(urlList: Array<string>) {
  return (location) => {
    for(let url of urlList) {
      if (location.hash === url) {
        return true;
      }
    }
    return false;
  }
}

function navigateTo(hash) {
  window.location.hash = hash;
}

  /**
  * Step2 注册子应用
  */
 
 registerMicroApps(
   [
     {
       name: 'angular9',
       entry: '//localhost:7103',
       container: '#subapp-viewport',
       loader,
       activeRule: genActiveRule(['#/angular9']),
     },
     {
       name: 'angularjs',
       entry: '//localhost:7105',
       container: '#subapp-viewport',
       loader,
       activeRule: genActiveRule(['#/angularjs']),
     }
   ],
   {
     beforeLoad: [
       app => {
         console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
         return Promise.resolve();
       },
     ],
     beforeMount: [
       app => {
         console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
         return Promise.resolve();
       },
     ],
     afterUnmount: [
       app => {
         console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
         return Promise.resolve();
       },
     ],
   },
 );
 
 const { onGlobalStateChange, setGlobalState } = initGlobalState({
   user: 'qiankun',
 });
 
 onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));
 
 setGlobalState({
   ignore: 'master',
   user: {
     name: 'master',
   },
 });
 
 /**
  * Step3 设置默认进入的子应用
  */
 navigateTo('#/angular9');
 
 /**
  * Step4 启动应用
  */
 start();
 
 runAfterFirstMounted(() => {
   console.log('[MainApp] first app mounted');
 });
