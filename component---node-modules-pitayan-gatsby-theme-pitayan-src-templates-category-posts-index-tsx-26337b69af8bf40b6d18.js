"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[286],{9586:function(e,t,a){var n=a(7294),r=a(1082),l=function(e){var t=e.categories,a=e.className;return t&&t.length?n.createElement("div",{className:"flex flex-wrap gap-3 "+a},t.map((function(e,t){return n.createElement(r.rU,{className:"site-tag block",key:t,to:"/categories/"+e},e)}))):n.createElement(n.Fragment,null)};t.Z=(0,n.memo)(l)},9554:function(e,t,a){var n=a(7294),r=a(1082),l=function(e){var t=e.pageInfo,a=t.currentPage,l=t.hasNextPage,c=t.hasPreviousPage,i=t.pageCount,m=e.path,o=function(e){return a==e+1?"pagination-item active":"pagination-item"};return n.createElement("ul",{className:"pagination text-center"},c?n.createElement("li",{className:"pagination-item"},n.createElement(r.rU,{to:"/"+m+"/"+(a-1)},"Prev")):null,Array.from({length:i}).map((function(e,t){return n.createElement("li",{key:t+1,className:o(t)},n.createElement(r.rU,{to:"/"+m+"/"+(t+1)},t+1))})),l?n.createElement("li",{className:"pagination-item"},n.createElement(r.rU,{to:"/"+m+"/"+(a+1)},"Next")):null)};t.Z=(0,n.memo)(l)},197:function(e,t,a){var n=a(7294),r=function(e){var t=e.timeToRead,a=e.date,r=e.className,l=void 0===r?"":r;return n.createElement("span",{className:"text-gray-500 "+l},a," • ",t," min read")};t.Z=(0,n.memo)(r)},8188:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(1082),l=a(3723),c=a(9586),i=a(197),m=function(e){var t=e.title,a=e.description,m=e.date,o=e.categories,s=e.hero,u=e.timeToRead,g=e.slug,d=(0,l.c)(null==s?void 0:s.normal);return n.createElement("div",{className:"panel"},n.createElement(r.rU,{to:g},d?n.createElement("div",{className:"panel-image"},n.createElement(l.G,{image:d,alt:""})):null,n.createElement("h3",null,t)),n.createElement("p",{className:"panel-content"},a),n.createElement(c.Z,{categories:o}),n.createElement("br",null),n.createElement("span",{className:"panel-footer"},n.createElement(i.Z,{timeToRead:u,date:m})))},o=(0,n.memo)(m),s=function(e){var t=e.posts,a=e.className,r=void 0===a?"":a;return n.createElement("div",{className:r},t.map((function(e){var t=e.id,a=e.timeToRead,r=e.frontmatter,l=r.categories,c=r.date,i=r.description,m=r.hero,s=r.title,u=e.fields.slug;return n.createElement(o,{key:t,title:s,description:i,date:c,categories:l,hero:m,slug:u,timeToRead:a})})))},u=(0,n.memo)(s)},3387:function(e,t,a){a.r(t);var n=a(7294),r=a(2961),l=a(9554),c=a(8188),i=a(5648);t.default=function(e){var t=e.data.allMdx,a=t.nodes,m=t.totalCount,o=t.pageInfo,s=e.pageContext.category,u=(0,i.$W)().siteUrl;return n.createElement(r.Z,{pageUrl:u+"/categories/"+s,pageTitle:"Category: "+s},n.createElement("h1",{className:"leading-tight md:leading-tight md:text-4xl text-3xl text-center mb-32"},s," (",m,")"),n.createElement(c.Z,{posts:a,className:"grid relative grid-cols-1 md:grid-cols-2 gap-8"}),n.createElement("div",{className:"my-24"},n.createElement(l.Z,{pageInfo:o,path:"categories/"+s})))}}}]);
//# sourceMappingURL=component---node-modules-pitayan-gatsby-theme-pitayan-src-templates-category-posts-index-tsx-26337b69af8bf40b6d18.js.map