# @sjzx/ui-component

## startup

暂时没有私有npm仓库使用git暂存

### install

``` bash
$ npm i git+http://10.0.30.40:9191/wangbinyu/sjzx-ui-component.git#[TAG] -S
```

### update

``` bash
# 修改`package.json/dependencies/sjzx-ui-component` -> `xgit:http....`
$ npm i

# 目的是为了删除本地的 sjzx-ui-component 包

# 修改`package.json/dependencies/sjzx-ui-component` 到新 tag 版本
$ npm i
```

## usage

``` tsx
import 'sjzx-ui-component/dist/style.css'
```

``` tsx
// App.vue
import { FlexRow } from 'sjzx-ui-component'

<FlexRow>

</FlexRow>
```

## TODO

- [ ] 现阶段没有引入任何其他第三方依赖，还在评估整体技术选型。

## note

- shared 作为中间库没有bundle代码，这一操作会到最后的项目中进行。