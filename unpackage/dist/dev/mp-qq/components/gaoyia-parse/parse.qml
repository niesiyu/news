<view class="{{['wxParse _div',className]}}" style="{{('user-select:'+userSelect)}}"><block qq:for="{{nodes}}" qq:for-item="node" qq:for-index="index" qq:key="index"><block qq:if="{{!loading}}"><block><weixin-parse-template vue-id="{{'5881762b-1-'+index}}" node="{{node}}" bind:__l="__l"></weixin-parse-template></block></block></block></view>