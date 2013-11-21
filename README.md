  创建这个repo主要是为了收集，整理一些angular在ie上出现的诡异问题。
  
  1：ieSelectFix:在ie(8,9,10)对于克隆节点不会及时更新,
  所以针对ng-options在ng-switch(主要是ng-transclude，存在克隆节点)后台options的model改变，不会及时更新。
  
      <select ng-options="xxx options" ie-select-fix="options" ></select>
