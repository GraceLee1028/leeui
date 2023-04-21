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
<zhyx-select :url="url" v-model="value" :label.sync="label" :params="{value:'value',label:'name'}"></zhyx-select>

# download 组件
<zhyx-download :url="url" type="primary" plain >下载</zhyx-download>
```

