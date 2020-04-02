import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'
import { Container, Header, Aside, Main } from 'element-ui'

import { Menu, MenuItem, Submenu, MenuItemGroup } from 'element-ui'
import { Breadcrumb, BreadcrumbItem } from 'element-ui'
import { Card } from 'element-ui'
import { Row, Col } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Main)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.prototype.$message = Message
