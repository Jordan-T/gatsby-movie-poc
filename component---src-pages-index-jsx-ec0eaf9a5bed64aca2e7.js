(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{158:function(e,a,t){"use strict";t.r(a),t.d(a,"pageQuery",function(){return v});var r=t(9),n=t.n(r),l=t(0),i=t.n(l),c=t(165),o=t.n(c),s=t(56),m=t(166),p=t(200),d=t(199),u=t(164),E=t.n(u),h=function(e){function a(){return e.apply(this,arguments)||this}return n()(a,e),a.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return i.a.createElement(m.a,null,i.a.createElement("main",{id:"col-main"},i.a.createElement(o.a,{title:E.a.siteTitle}),i.a.createElement(d.a,null),i.a.createElement("div",{className:"dashboard-container"},i.a.createElement("h1",{className:"my-5"},i.a.createElement(s.Link,{to:"/movie"},"> Test movie page <")),i.a.createElement("hr",null),i.a.createElement(p.a,{postEdges:e}))))},a}(i.a.Component);a.default=h;var v="1014838814"},164:function(e,a,t){t(36);var r={siteTitle:"Gatsby Advanced Starter",siteTitleShort:"GA Starter",siteTitleAlt:"GatsbyJS Advanced Starter",siteLogo:"/logos/logo-1024.png",siteUrl:"https://vagr9k.github.io",pathPrefix:"/gatsby-movies-poc",siteDescription:"A GatsbyJS stater with Advanced design in mind.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-47311644-5",disqusShortname:"https-vagr9k-github-io-gatsby-advanced-starter",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Advanced User",userEmail:"AdvancedUser@example.com",userTwitter:"",userLocation:"North Pole, Earth",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"GitHub",url:"https://github.com/Vagr9K/gatsby-advanced-starter",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/Vagr9K",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:vagr9k@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2019. Advanced User",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===r.pathPrefix?r.pathPrefix="":r.pathPrefix="/"+r.pathPrefix.replace(/^\/|\/$/g,""),"/"===r.siteUrl.substr(-1)&&(r.siteUrl=r.siteUrl.slice(0,-1)),r.siteRss&&"/"!==r.siteRss[0]&&(r.siteRss="/"+r.siteRss),e.exports=r},166:function(e,a,t){"use strict";t.d(a,"a",function(){return d});var r=t(9),n=t.n(r),l=t(0),i=t.n(l),c=t(165),o=t.n(c),s=t(56),m=t(164),p=t.n(m),d=(t(177),t(178),t(179),t(180),t(181),function(e){function a(){return e.apply(this,arguments)||this}return n()(a,e),a.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",{id:"sidebar-bg"},i.a.createElement(o.a,null,i.a.createElement("meta",{name:"description",content:p.a.siteDescription})),i.a.createElement("header",{id:"videohead-pro",className:"sticky-header"},i.a.createElement("div",{id:"video-logo-background"},i.a.createElement(s.Link,{to:"/"},i.a.createElement("img",{src:p.a.pathPrefix+"/skrn/images/logo-video-layout.png",alt:"Logo"}))),i.a.createElement("div",{id:"video-search-header"},i.a.createElement("div",{id:"search-icon-more"}),i.a.createElement("input",{type:"text",placeholder:"Search for Movies or TV Series","aria-label":"Search"}),i.a.createElement("div",{id:"video-search-header-filtering"},i.a.createElement("form",{id:"video-search-header-filtering-padding"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm extra-padding"},i.a.createElement("h5",null,"Type:"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm"},i.a.createElement("label",{className:"checkbox-pro-container"},"Movies",i.a.createElement("input",{type:"checkbox",checked:"checked",id:"movies-type"}),i.a.createElement("span",{className:"checkmark-pro"})),i.a.createElement("label",{className:"checkbox-pro-container"},"TV Series",i.a.createElement("input",{type:"checkbox",id:"tv-type"}),i.a.createElement("span",{className:"checkmark-pro"}))),i.a.createElement("div",{className:"col"},i.a.createElement("label",{className:"checkbox-pro-container"},"New Arrivals",i.a.createElement("input",{type:"checkbox",id:"movie-type"}),i.a.createElement("span",{className:"checkmark-pro"})),i.a.createElement("label",{className:"checkbox-pro-container"},"Documentary",i.a.createElement("input",{type:"checkbox",id:"documentary-type"}),i.a.createElement("span",{className:"checkmark-pro"})))),i.a.createElement("div",{className:"dotted-dividers-pro"})),i.a.createElement("div",{className:"col-sm extra-padding"},i.a.createElement("h5",null,"Genres:"),i.a.createElement("select",{className:"custom-select"},i.a.createElement("option",{selected:!0},"All Genres"),i.a.createElement("option",{value:"1"},"Action"),i.a.createElement("option",{value:"2"},"Adventure"),i.a.createElement("option",{value:"3"},"Drama"),i.a.createElement("option",{value:"4"},"Animation"),i.a.createElement("option",{value:"5"},"Documentary"),i.a.createElement("option",{value:"6"},"Drama"),i.a.createElement("option",{value:"7"},"Horror"),i.a.createElement("option",{value:"8"},"Thriller"),i.a.createElement("option",{value:"9"},"Fantasy"),i.a.createElement("option",{value:"10"},"Romance"),i.a.createElement("option",{value:"11"},"Sci-Fi"),i.a.createElement("option",{value:"12"},"Western")),i.a.createElement("div",{className:"dotted-dividers-pro"})),i.a.createElement("div",{className:"col-sm extra-padding"},i.a.createElement("h5",null,"Country:"),i.a.createElement("select",{className:"custom-select"},i.a.createElement("option",{selected:!0},"All Countries"),i.a.createElement("option",{value:"1"},"Argentina"),i.a.createElement("option",{value:"2"},"Australia"),i.a.createElement("option",{value:"3"},"Bahamas"),i.a.createElement("option",{value:"4"},"Belgium"),i.a.createElement("option",{value:"5"},"Brazil"),i.a.createElement("option",{value:"6"},"Canada"),i.a.createElement("option",{value:"7"},"Chile"),i.a.createElement("option",{value:"8"},"China"),i.a.createElement("option",{value:"9"},"Denmark"),i.a.createElement("option",{value:"10"},"Ecuador"),i.a.createElement("option",{value:"11"},"France"),i.a.createElement("option",{value:"12"},"Germany"),i.a.createElement("option",{value:"13"},"Greece"),i.a.createElement("option",{value:"14"},"Guatemala"),i.a.createElement("option",{value:"15"},"Italy"),i.a.createElement("option",{value:"16"},"Japan"),i.a.createElement("option",{value:"17"},"asdfasdf"),i.a.createElement("option",{value:"18"},"Korea"),i.a.createElement("option",{value:"19"},"Malaysia"),i.a.createElement("option",{value:"20"},"Monaco"),i.a.createElement("option",{value:"21"},"Morocco"),i.a.createElement("option",{value:"22"},"New Zealand"),i.a.createElement("option",{value:"23"},"Panama"),i.a.createElement("option",{value:"24"},"Portugal"),i.a.createElement("option",{value:"25"},"Russia"),i.a.createElement("option",{value:"26"},"United Kingdom"),i.a.createElement("option",{value:"27"},"United States")),i.a.createElement("div",{className:"dotted-dividers-pro"})),i.a.createElement("div",{className:"col-sm extra-padding extra-range-padding"},i.a.createElement("h5",null,"Average Rating:"),i.a.createElement("input",{className:"range-example-rating-input",type:"text",min:"0",max:"10",value:"4,10",step:"1"}))),i.a.createElement("div",{id:"video-search-header-buttons"},i.a.createElement("a",{href:"#!",className:"btn btn-green-pro"},"Filter Search"),i.a.createElement("a",{href:"#!",className:"btn"},"Reset"))))),i.a.createElement("div",{id:"mobile-bars-icon-pro",className:"noselect"},i.a.createElement("i",{className:"fas fa-bars"})),i.a.createElement("div",{id:"header-user-profile"},i.a.createElement("div",{id:"header-user-profile-click",className:"noselect"},i.a.createElement("img",{src:p.a.pathPrefix+"/skrn/images/demo/user-profile.jpg",alt:"Suzie"}),i.a.createElement("div",{id:"header-username"},"Suzie Smith"),i.a.createElement("i",{className:"fas fa-angle-down"})),i.a.createElement("div",{id:"header-user-profile-menu"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"dashboard-profile.html"},i.a.createElement("span",{className:"icon-User"}),"My Profile")),i.a.createElement("li",null,i.a.createElement("a",{href:"dashboard-favorites.html"},i.a.createElement("span",{className:"icon-Favorite-Window"}),"My Favorites")),i.a.createElement("li",null,i.a.createElement("a",{href:"dashboard-account.html"},i.a.createElement("span",{className:"icon-Gears"}),"Account Details")),i.a.createElement("li",null,i.a.createElement("a",{href:"#!"},i.a.createElement("span",{className:"icon-Life-Safer"}),"Help/Support")),i.a.createElement("li",null,i.a.createElement("a",{href:"index.html"},i.a.createElement("span",{className:"icon-Power-3"}),"Log Out"))))),i.a.createElement("div",{id:"header-user-notification"},i.a.createElement("div",{id:"header-user-notification-click",className:"noselect"},i.a.createElement("i",{className:"far fa-bell"}),i.a.createElement("span",{className:"user-notification-count"},"3")),i.a.createElement("div",{id:"header-user-notification-menu"},i.a.createElement("h3",null,"Notifications"),i.a.createElement("div",{id:"header-notification-menu-padding"},i.a.createElement("ul",{id:"header-user-notification-list"},i.a.createElement("li",null,i.a.createElement("a",{href:"#!"},i.a.createElement("img",{src:p.a.pathPrefix+"/skrn/images/demo/user-profile-2.jpg",alt:"Profile"}),"Lorem ipsum dolor sit amet, consec tetur adipiscing elit."," ",i.a.createElement("div",{className:"header-user-notify-time"},"21 hours ago"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#!"},i.a.createElement("img",{src:p.a.pathPrefix+"/skrn/images/demo/user-profile-3.jpg",alt:"Profile"}),"Donec vitae lacus id arcu molestie mollis."," ",i.a.createElement("div",{className:"header-user-notify-time"},"3 days ago"))),i.a.createElement("li",null,i.a.createElement("a",{href:"#!"},i.a.createElement("img",{src:p.a.pathPrefix+"/skrn/images/demo/user-profile-4.jpg",alt:"Profile"}),"Aenean vitae lectus non purus facilisis imperdiet."," ",i.a.createElement("div",{className:"header-user-notify-time"},"5 days ago")))),i.a.createElement("div",{className:"clearfix"})))),i.a.createElement("div",{className:"clearfix"}),i.a.createElement("nav",{id:"mobile-navigation-pro"},i.a.createElement("ul",{id:"mobile-menu-pro"},i.a.createElement("li",null,i.a.createElement("a",{href:"dashboard-home.html"},i.a.createElement("span",{className:"icon-Old-TV"}),"TV Series")),i.a.createElement("li",null,i.a.createElement("a",{href:"dashboard-movies.html"},i.a.createElement("span",{className:"icon-Reel"}),"Movies")),i.a.createElement("li",null,i.a.createElement("a",{href:"dashboard-playlists.html"},i.a.createElement("span",{className:"icon-Movie"}),"Playlists")),i.a.createElement("li",null,i.a.createElement("a",{href:"dashboard-new-arrivals.html"},i.a.createElement("span",{className:"icon-Movie-Ticket"}),"New Arrivals")),i.a.createElement("li",null,i.a.createElement("a",{href:"dashboard-coming-soon.html"},i.a.createElement("span",{className:"icon-Clock"}),"Coming Soon")),i.a.createElement("li",null,i.a.createElement("a",{href:"#!"},i.a.createElement("i",{className:"far fa-bell"}),i.a.createElement("span",{className:"user-notification-count"},"3"),"Notifications"))),i.a.createElement("div",{className:"clearfix"}),i.a.createElement("div",{id:"search-mobile-nav-pro"},i.a.createElement("input",{type:"text",placeholder:"Search for Movies or TV Series","aria-label":"Search"})))),i.a.createElement("nav",{id:"sidebar-nav"},i.a.createElement("ul",{id:"vertical-sidebar-nav",className:"sf-menu"},i.a.createElement("li",{className:"normal-item-pro"},i.a.createElement("a",{href:"dashboard-home.html"},i.a.createElement("span",{className:"icon-Old-TV"}),"TV Series")),i.a.createElement("li",{className:"normal-item-pro"},i.a.createElement("a",{href:"dashboard-movies.html"},i.a.createElement("span",{className:"icon-Reel"}),"Movies")),i.a.createElement("li",{className:"normal-item-pro"},i.a.createElement("a",{href:"dashboard-playlists.html"},i.a.createElement("span",{className:"icon-Movie"}),"Playlists")),i.a.createElement("li",{className:"normal-item-pro"},i.a.createElement("a",{href:"dashboard-new-arrivals.html"},i.a.createElement("span",{className:"icon-Movie-Ticket"}),"New Arrivals")),i.a.createElement("li",{className:"normal-item-pro"},i.a.createElement("a",{href:"dashboard-coming-soon.html"},i.a.createElement("span",{className:"icon-Clock"}),"Coming Soon"))),i.a.createElement("div",{className:"clearfix"})),e)},a}(l.PureComponent))},172:function(e,a,t){var r,n,l;l=function(){return function(){return function(e){var a=[];if(e[0].match(/^[^\/:]+:\/*$/)&&e.length>1){var t=e.shift();e[0]=t+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var n=e[r];if("string"!=typeof n)throw new TypeError("Url must be a string. Received "+n);""!==n&&(r>0&&(n=n.replace(/^[\/]+/,"")),n=r<e.length-1?n.replace(/[\/]+$/,""):n.replace(/[\/]+$/,"/"),a.push(n))}var l=a.join("/"),i=(l=l.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return l=i.shift()+(i.length>0?"?":"")+i.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=l():void 0===(n="function"==typeof(r=l)?r.call(a,t,a,e):r)||(e.exports=n)},199:function(e,a,t){"use strict";var r=t(9),n=t.n(r),l=t(0),i=t.n(l),c=t(165),o=t.n(c),s=t(172),m=t.n(s),p=t(164),d=t.n(p),u=function(e){function a(){return e.apply(this,arguments)||this}return n()(a,e),a.prototype.render=function(){var e,a,t,r,n=this.props,l=n.postNode,c=n.postPath,s=n.postSEO;if(s){var p=l.frontmatter;e=p.title,a=p.description?p.description:l.excerpt,t=p.cover,r=m()(d.a.siteUrl,d.a.pathPrefix,c)}else e=d.a.siteTitle,a=d.a.siteDescription,t=d.a.siteLogo;t=m()(d.a.siteUrl,d.a.pathPrefix,t);var u=m()(d.a.siteUrl,d.a.pathPrefix),E=[{"@context":"http://schema.org","@type":"WebSite",url:u,name:e,alternateName:d.a.siteTitleAlt?d.a.siteTitleAlt:""}];return s&&E.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:e,image:t}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:u,name:e,alternateName:d.a.siteTitleAlt?d.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:t},description:a}),i.a.createElement(o.a,null,i.a.createElement("meta",{name:"description",content:a}),i.a.createElement("meta",{name:"image",content:t}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(E)),i.a.createElement("meta",{property:"og:url",content:s?r:u}),s?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:a}),i.a.createElement("meta",{property:"og:image",content:t}),i.a.createElement("meta",{property:"fb:app_id",content:d.a.siteFBAppID?d.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:d.a.userTwitter?d.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:e}),i.a.createElement("meta",{name:"twitter:description",content:a}),i.a.createElement("meta",{name:"twitter:image",content:t}))},a}(l.Component);a.a=u},200:function(e,a,t){"use strict";var r=t(9),n=t.n(r),l=t(0),i=t.n(l),c=t(56),o=function(e){function a(){return e.apply(this,arguments)||this}n()(a,e);var t=a.prototype;return t.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(a){e.push({path:a.node.fields.slug,tags:a.node.frontmatter.tags,cover:a.node.frontmatter.cover,title:a.node.frontmatter.title,date:a.node.fields.date,excerpt:a.node.excerpt,timeToRead:a.node.timeToRead})}),e},t.render=function(){var e=this.getPostList();return i.a.createElement("div",null,e.map(function(e){return i.a.createElement(c.Link,{to:e.path,key:e.title},i.a.createElement("h1",null,e.title))}))},a}(i.a.Component);a.a=o}}]);
//# sourceMappingURL=component---src-pages-index-jsx-ec0eaf9a5bed64aca2e7.js.map