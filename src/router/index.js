import Vue from 'vue'
import VueRouter from 'vue-router'
///官方元件

import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
import child from '@/components/pages/child';
import child2 from '@/components/pages/child2';
import child3 from '@/components/pages/child3';
import Menu from '@/components/pages/menu'
///自訂的分頁元件

Vue.use(VueRouter);

export default new VueRouter({
    // mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            name: '首頁', //元件呈現的名稱
            path: '/index', //對應的虛擬路徑
            component: Home ,//對應的元件
        },
        {
            //name: '分頁', //元件呈現的名稱
            path: '/page', //對應的虛擬路徑
            //component: Page ,//對應的元件
            components: {
                default: Page,
                menu: Menu,


            },
            children: [
                {
                    name: '卡片1', 
                    path: '', ///此時沒填東西時，預設/page時呈現這個
                    component: child,
                },
                {
                    name: '卡片2', 
                    path: 'child2', 
                    component: child2,
                },
                {
                    name: '卡片3', 
                    path: 'child/', 
                    component: child3,
                },
                

            ]
        }
    ]
})