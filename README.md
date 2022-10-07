
###   VueX工作流

  组件 => commit => mutation => state => 视图
  
 
      1、 组件 => dispatch => action
        
        2、 dispatch => type(actionType) => 某一个action
        
        3、action => commit (调用) => mutation
        
        4、mutation => change => state
        
        5、render：state => 数据流 => 视图
        

### 文件集合
        1、actionType   action类型
        
        2、actions      调用mutation的方法
        
        3、mutations    更改state的方法
        
        4、state        中央数据管理池
        
        5、store出口

### 组件划分
          TodoList
          
          TodoInput => 输入的组件
          
          TodoList => 列表组件
          
              TodoItem => 列表项
              
            1、完成或者未完成的选择 checkbox
            
            2、删除改项     button
            
            3、正在做       button
