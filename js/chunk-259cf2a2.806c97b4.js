(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-259cf2a2"],{"0115":function(t,a,i){"use strict";var n=i("dc3e"),e=i.n(n);e.a},"263d":function(t,a,i){t.exports=i.p+"img/timg.b0d936ef.gif"},"2b17":function(t,a,i){"use strict";i.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return t.isShow?n("div",[n("a-player",{ref:"aplayer",staticClass:"musicPlayer",attrs:{audio:t.audio,lrcType:3}}),n("table",{staticClass:"music-list"},[t._m(0),n("tbody",t._l(t.musicList,function(a,i){return n("tr",{key:a.id,on:{click:function(i){return t.clickHandle(a.id)}}},[n("td",[t._v(t._s(i+1))]),n("td",[t._v(t._s(a.name))]),n("td",[t._v(t._s(a.ar[0].name))])])}),0)])],1):n("div",{staticClass:"loading"},[n("img",{attrs:{src:i("263d"),alt:""}})])},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("thead",[i("tr",[i("th"),i("th",[t._v("歌曲标题")]),i("th",[t._v("歌手")])])])}],c=(i("7f7f"),{data:function(){return{audio:{name:"东西（Cover：林俊呈）",artist:"纳豆",url:"https://cdn.moefe.org/music/mp3/thing.mp3",cover:"https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300"},isShow:!1,musicList:[]}},created:function(){this.getData()},methods:{getData:function(){var t=this,a="https://bird.ioliu.cn/netease/playlist?id=947524264";axios.get(a).then(function(a){t.musicList=a.data.playlist.tracks,t.isShow=!0})},clickHandle:function(t){var a=this,i="https://bird.ioliu.cn/netease/song?id="+t;axios.get(i).then(function(t){console.log(t);var i={name:t.data.data.name,artist:t.data.data.ar[0].name,url:t.data.data.mp3.url,cover:t.data.data.al.picUrl};a.audio=i,a.$refs.aplayer.play()})}}}),s=c,r=(i("0115"),i("2877")),o=Object(r["a"])(s,n,e,!1,null,"1784ffbc",null);a["default"]=o.exports},"7f7f":function(t,a,i){var n=i("86cc").f,e=Function.prototype,c=/^\s*function ([^ (]*)/,s="name";s in e||i("9e1e")&&n(e,s,{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(t){return""}}})},dc3e:function(t,a,i){}}]);
//# sourceMappingURL=chunk-259cf2a2.806c97b4.js.map