"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[675],{5911:function(e,a,t){t.d(a,{Z:function(){return u}});var r=t(1082),n=t(7294),l=t(498),i=t(7660),m=function(e){var a=e.icon,t=e.className,r=void 0===t?"":t,l=i.$s[a].icon;return n.createElement(l,{className:r})},s=function(e){var a=e.data,t=e.className,r=void 0===t?"":t;return n.createElement("ul",{className:"list-none grid grid-flow-col-dense auto-cols-auto "+r},a.map((function(e){var a,t=e[0],r=e[1],l=(null===(a=i.$s[t])||void 0===a?void 0:a.url)+"/"+r;return(/^(?:https?:\/\/)/.test(r)||/^mailto:/.test(r))&&(l=r),n.createElement("li",{key:t},n.createElement("a",{href:l,target:"_blank",rel:"noreferrer"},n.createElement(m,{className:"site-link",icon:t})))})))},c=(0,n.memo)(s),o=function(e){var a=e.bio,t=e.name,i=e.initial,m=e.avatar,s=m.normal,o=m.className,u=void 0===o?"h-32 w-32":o,d=e.sns,g=e.className,f=void 0===g?"":g,v=e.yamlId;return n.createElement("div",{className:f+" flex flex-wrap space-x-0 sm:space-x-8"},n.createElement("div",{className:"w-full sm:w-auto text-center"},n.createElement(l.Z,{className:"mb-4 "+u,initial:i,image:s})),n.createElement("div",{className:"flex flex-col items-stretch justify-between flex-1 text-center sm:text-left"},n.createElement("h3",{className:"leading-tight md:leading-tight"},t,v&&n.createElement(r.rU,{to:"/authors/@"+v,className:"site-link mx-2"},n.createElement("small",null,"@",v))),n.createElement("p",{className:"text-base"},a),n.createElement(c,{className:"max-w-lg text-xl my-0",data:d})))},u=(0,n.memo)(o)},498:function(e,a,t){var r=t(7294),n=t(3723),l=function(e){var a=e.image,t=e.initial,l=e.className,i=void 0===l?"":l,m=(0,n.c)(a);return m?r.createElement(n.G,{className:"rounded-full z-0 ring-2 ring-white dark:ring-gray-600 avatar avatar-rounded "+i,image:m,alt:""}):r.createElement("figure",{className:"avatar avatar-rounded bg-gray-500 text-white ring ring-white "+i,"data-initial":t})};a.Z=(0,r.memo)(l)},9586:function(e,a,t){var r=t(7294),n=t(1082),l=function(e){var a=e.categories,t=e.className;return a&&a.length?r.createElement("div",{className:"flex flex-wrap gap-3 "+t},a.map((function(e,a){return r.createElement(n.rU,{className:"site-tag block",key:a,to:"/categories/"+e},e)}))):r.createElement(r.Fragment,null)};a.Z=(0,r.memo)(l)},9554:function(e,a,t){var r=t(7294),n=t(1082),l=function(e){var a=e.pageInfo,t=a.currentPage,l=a.hasNextPage,i=a.hasPreviousPage,m=a.pageCount,s=e.path,c=function(e){return t==e+1?"pagination-item active":"pagination-item"};return r.createElement("ul",{className:"pagination text-center"},i?r.createElement("li",{className:"pagination-item"},r.createElement(n.rU,{to:"/"+s+"/"+(t-1)},"Prev")):null,Array.from({length:m}).map((function(e,a){return r.createElement("li",{key:a+1,className:c(a)},r.createElement(n.rU,{to:"/"+s+"/"+(a+1)},a+1))})),l?r.createElement("li",{className:"pagination-item"},r.createElement(n.rU,{to:"/"+s+"/"+(t+1)},"Next")):null)};a.Z=(0,r.memo)(l)},197:function(e,a,t){var r=t(7294),n=function(e){var a=e.timeToRead,t=e.date,n=e.className,l=void 0===n?"":n;return r.createElement("span",{className:"text-gray-500 "+l},t," • ",a," min read")};a.Z=(0,r.memo)(n)},8188:function(e,a,t){t.d(a,{Z:function(){return u}});var r=t(7294),n=t(1082),l=t(3723),i=t(9586),m=t(197),s=function(e){var a=e.title,t=e.description,s=e.date,c=e.categories,o=e.hero,u=e.timeToRead,d=e.slug,g=(0,l.c)(null==o?void 0:o.normal);return r.createElement("div",{className:"panel"},r.createElement(n.rU,{to:d},g?r.createElement("div",{className:"panel-image"},r.createElement(l.G,{image:g,alt:""})):null,r.createElement("h3",null,a)),r.createElement("p",{className:"panel-content"},t),r.createElement(i.Z,{categories:c}),r.createElement("br",null),r.createElement("span",{className:"panel-footer"},r.createElement(m.Z,{timeToRead:u,date:s})))},c=(0,r.memo)(s),o=function(e){var a=e.posts,t=e.className,n=void 0===t?"":t;return r.createElement("div",{className:n},a.map((function(e){var a=e.id,t=e.timeToRead,n=e.frontmatter,l=n.categories,i=n.date,m=n.description,s=n.hero,o=n.title,u=e.fields.slug;return r.createElement(c,{key:a,title:o,description:m,date:i,categories:l,hero:s,slug:u,timeToRead:t})})))},u=(0,r.memo)(o)},6979:function(e,a,t){t.r(a);var r=t(7294),n=t(2961),l=t(9554),i=t(5911),m=t(8188),s=t(5648);a.default=function(e){var a=e.data,t=a.allMdx,c=t.nodes,o=t.pageInfo,u=a.authorsYaml,d=u.bio,g=u.name,f=u.initial,v=u.avatar,E=u.sns,p=e.pageContext.authorId,N=(0,s.$W)().siteUrl;return r.createElement(n.Z,{pageUrl:N+"/authors/@"+p,pageTitle:"Posts of "+g},r.createElement(i.Z,{className:"mb-24 p-8 bg-gray-50 border border-solid border-gray-100 dark:bg-gray-800 dark:border-gray-800 rounded mx-auto max-w-2xl",bio:d,name:g,initial:f,avatar:v,sns:E}),r.createElement(m.Z,{posts:c,className:"grid relative grid-cols-1 md:grid-cols-2 gap-8"}),r.createElement("div",{className:"my-24"},r.createElement(l.Z,{pageInfo:o,path:"authors/@"+p})))}}}]);
//# sourceMappingURL=component---node-modules-pitayan-gatsby-theme-pitayan-src-templates-author-posts-index-tsx-270f878e1f533d5ed806.js.map