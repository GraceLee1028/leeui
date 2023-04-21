# zhyx-ui
## element-ui 的二次封装业务组件
## install
```
npm i zhyx-ui
```

### 全局引入
```
import zhyxUi from 'zhyx-ui'
Vue.use(zhyxUi)
```
### 按需引入
```
import {Select} from 'zhyx-ui'
Vue.use(Select)
```
### select使用
```
# select组件
<zhyx-select v-model="value" :label.sync="label" :params="{value:'value',label:'name'}"></zhyx-select>
```

