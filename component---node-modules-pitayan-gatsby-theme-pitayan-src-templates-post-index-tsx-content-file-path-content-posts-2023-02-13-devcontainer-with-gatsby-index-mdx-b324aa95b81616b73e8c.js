"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6428],{7543:function(e,a,n){n.r(a),n.d(a,{default:function(){return j}});var t=n(1151),s=n(7294);function o(e){const a=Object.assign({h1:"h1",a:"a",span:"span",p:"p",h2:"h2",blockquote:"blockquote",img:"img"},(0,t.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(a.h1,{id:"how-to-setup",style:{position:"relative"}},s.createElement(a.a,{href:"#how-to-setup","aria-label":"how to setup permalink",className:"heading-anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}})),"How to setup"),"\n",s.createElement(a.p,null,"In order to provide a straightforward method for our engineers to add new blog posts to our Gatsby blog (here), I decided to experiment with ",s.createElement(a.a,{href:"https://code.visualstudio.com/docs/devcontainers/containers",target:"_blank",rel:"noreferrer"},"Visual Studio Code Dev Containers")," After trying it out, I can confidently say that it is a fantastic tool!"),"\n",s.createElement(a.p,null,"Visual Studio Code Dev Containers allow developers to work in a fully-featured development environment, regardless of their local setup. This makes it easy for our engineers to update our blog, as they can do so within a consistent and reliable environment."),"\n",s.createElement(a.p,null,"Overall, I was extremely impressed with the ease of use and functionality of Visual Studio Code Dev Containers. I believe it will be a valuable tool for our team."),"\n",s.createElement(a.p,null,"Our blog is built on ",s.createElement(a.a,{href:"http://gatsbyjs.com",target:"_blank",rel:"noreferrer"},"Gatsby")," with ",s.createElement(a.a,{href:"https://github.com/remiks/gatsby-theme-pitayan",target:"_blank",rel:"noreferrer"},"A theme from Pitayan")),"\n",s.createElement(a.p,null,"Let us jump into how I configured this."),"\n",s.createElement(a.h2,{id:"pre-prerequisites",style:{position:"relative"}},s.createElement(a.a,{href:"#pre-prerequisites","aria-label":"pre prerequisites permalink",className:"heading-anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}})),"Pre prerequisites"),"\n",s.createElement(a.p,null,"You need Docker desktop and vscode installed on your system. Follow the quick setup guide ",s.createElement(a.a,{href:"https://code.visualstudio.com/docs/devcontainers/tutorial",target:"_blank",rel:"noreferrer"},"here")),"\n",s.createElement(a.h2,{id:"1-create-folder-structure",style:{position:"relative"}},s.createElement(a.a,{href:"#1-create-folder-structure","aria-label":"1 create folder structure permalink",className:"heading-anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}})),"1. Create folder structure"),"\n",s.createElement(a.p,null,"First create a folder named ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">.devcontainer</code>'}})," in your Gatsby root directory."),"\n",s.createElement(a.h2,{id:"2-create-devcontainerjson",style:{position:"relative"}},s.createElement(a.a,{href:"#2-create-devcontainerjson","aria-label":"2 create devcontainerjson permalink",className:"heading-anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}})),"2. Create devcontainer.json"),"\n",s.createElement(a.p,null,"Create a new file named ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">devcontainer.json</code>'}})),"\n",s.createElement(a.p,null,"This config will also install necessary extensions in your vscode instance to work better with markdown."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="sh"><pre class="language-sh"><code class="language-sh">// For <span class="token function">format</span> details, see https://aka.ms/devcontainer.json. For config options, see the\n// README at: https://github.com/devcontainers/templates/tree/main/src/javascript-node\n<span class="token punctuation">{</span>\n\t<span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Fortytwo Blog container"</span>,\n\t\n\t// The image to use <span class="token keyword">for</span> the container, <span class="token keyword">in</span> this <span class="token keyword">case</span> a JavaScript Node environment\n\t<span class="token string">"image"</span><span class="token builtin class-name">:</span> <span class="token string">"mcr.microsoft.com/devcontainers/javascript-node:0-18"</span>,\n\n\t// A volume <span class="token function">mount</span> <span class="token keyword">for</span> the node_modules folder to persist across container restarts\n    <span class="token string">"mounts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>\n\t\t<span class="token string">"source=<span class="token variable">${localWorkspaceFolderBasename}</span>-node_modules,target=<span class="token variable">${containerWorkspaceFolder}</span>/node_modules,type=volume"</span>\n\t<span class="token punctuation">]</span>,\n\n\t// A list of ports to forward from the container to the <span class="token function">host</span> machine\n\t<span class="token string">"forwardPorts"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>\n\t\t// Port <span class="token keyword">for</span> the Gatsby server\n\t\t<span class="token number">8000</span>,\n\t\t// Port <span class="token keyword">for</span> the Live reload server\n\t\t<span class="token number">8000</span>\n\t<span class="token punctuation">]</span>,\n\n\t// A <span class="token builtin class-name">command</span> to run after the container is created\n\t<span class="token string">"postCreateCommand"</span><span class="token builtin class-name">:</span> <span class="token string">"sh .devcontainer/post-create.sh"</span>,\n\n\t// Customizations specific to the VS Code editor\n    <span class="token string">"customizations"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>\n        <span class="token string">"vscode"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>\n          <span class="token string">"extensions"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>\n            <span class="token string">"yzhang.markdown-all-in-one"</span>,\n            <span class="token string">"DavidAnson.vscode-markdownlint"</span>,\n            <span class="token string">"bierner.markdown-emoji"</span>,\n            <span class="token string">"streetsidesoftware.code-spell-checker"</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>,\n\n\t// Option to run the container as the root user <span class="token punctuation">(</span>uncomment to use<span class="token punctuation">)</span>\n\t// <span class="token string">"remoteUser"</span><span class="token builtin class-name">:</span> <span class="token string">"root"</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",s.createElement(a.h2,{id:"3-create-post-createsh-file",style:{position:"relative"}},s.createElement(a.a,{href:"#3-create-post-createsh-file","aria-label":"3 create post createsh file permalink",className:"heading-anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}})),"3. Create post-create.sh file"),"\n",s.createElement(a.p,null,"I am using a simple ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">post-create.sh</code>'}})," file to have more control of the commands that I want to run after the container has started."),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="bash"><pre class="language-bash"><code class="language-bash"><span class="token shebang important">#!/bin/sh</span>\n\n<span class="token comment"># Jump into correct folder</span>\n<span class="token builtin class-name">cd</span> /workspaces/amestofortywo-blog\n\n<span class="token comment"># Install Gatsby CLI</span>\n<span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> gatsby-cli\n\n<span class="token comment"># Setup and install prereqs </span>\n<span class="token function">sudo</span> <span class="token function">npm</span> <span class="token function">install</span>\n\n<span class="token comment"># Increase node memory allocation</span>\n<span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_OPTIONS</span><span class="token operator">=</span><span class="token string">"--max-old-space-size=5096"</span>\n\n<span class="token comment"># Wipe all cache node_modules and package-lock.json file</span>\ngatsby clean\n\n<span class="token comment"># Run development instance</span>\ngatsby develop</code></pre></div>'}}),"\n",s.createElement(a.h2,{id:"4-open-container",style:{position:"relative"}},s.createElement(a.a,{href:"#4-open-container","aria-label":"4 open container permalink",className:"heading-anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}})),"4. Open container"),"\n",s.createElement(a.p,null,"Now, open your project in vscode and choose"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<figure class="gatsby-resp-image-figure" style="">\n    <span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 596px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 46.14093959731543%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAHnReKUC//EABYQAQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAQABBQJVx//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABkQAAIDAQAAAAAAAAAAAAAAAAABEFFxgf/aAAgBAQABPyHg6mRT/9oADAMBAAIAAwAAABCHP//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPxCRj//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/EKr/xAAbEAACAgMBAAAAAAAAAAAAAAAAARFBITFhcf/aAAgBAQABPxDCU0VE9o6x8DRDHXh//9k=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Open folder in dev container"\n        title=""\n        src="/static/0275a355eb6dd55719559650d09ceb1d/b5c09/open_container.jpg"\n        srcset="/static/0275a355eb6dd55719559650d09ceb1d/b5c09/open_container.jpg 596w"\n        sizes="(max-width: 596px) 100vw, 596px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>\n    <figcaption class="gatsby-resp-image-figcaption">Open folder in dev container</figcaption>\n  </figure>'}}),"\n",s.createElement(a.p,null,"You container should start building now, first time it will take some time. Next time it will connect right away!"),"\n",s.createElement(a.blockquote,null,"\n",s.createElement(a.p,null,"vscode will actually let you know when the site us up and running. :D"),"\n"),"\n",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<figure class="gatsby-resp-image-figure" style="">\n    <span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 463px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 37.796976241900644%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAIABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAECBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAHKsXEA/8QAFhABAQEAAAAAAAAAAAAAAAAAABIR/9oACAEBAAEFAsSl/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Bqv/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AYj/xAAVEAEBAAAAAAAAAAAAAAAAAAAQMv/aAAgBAQAGPwKX/8QAGhAAAgIDAAAAAAAAAAAAAAAAAAEhMXGh8P/aAAgBAQABPyHIUrTOwz//2gAMAwEAAgADAAAAEPPP/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Qtb//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPxCUv//EAB4QAAEDBAMAAAAAAAAAAAAAAAEAETEhQVFxocHw/9oACAEBAAE/EHtd0U2uWI+EQHrpf//Z\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Container ready"\n        title=""\n        src="/static/922ac7e0cd911904fb82e9f51de77fe8/cb193/container_ready.jpg"\n        srcset="/static/922ac7e0cd911904fb82e9f51de77fe8/cb193/container_ready.jpg 463w"\n        sizes="(max-width: 463px) 100vw, 463px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>\n    <figcaption class="gatsby-resp-image-figcaption">Container ready</figcaption>\n  </figure>'}}),"\n",s.createElement(a.h2,{id:"5-browse-and-build",style:{position:"relative"}},s.createElement(a.a,{href:"#5-browse-and-build","aria-label":"5 browse and build permalink",className:"heading-anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}})),"5. Browse and build"),"\n",s.createElement(a.p,null,"Your Gatsby site should now be available on ",s.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">http://localhost:8000/</code>'}})," and reload everytime you write something in vscode."),"\n",s.createElement(a.h2,{id:"extra-the-button",style:{position:"relative"}},s.createElement(a.a,{href:"#extra-the-button","aria-label":"extra the button permalink",className:"heading-anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}})),"Extra: The button"),"\n",s.createElement(a.a,{href:"https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/amestofortytwo/blog",target:"_blank",rel:"noreferrer"},s.createElement(a.img,{src:"https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode",alt:"Open in Dev Containers"})),"\n",s.createElement(a.p,null,"Oh, it is also possible to add a button to you repo that automatically clone and opens everything in vscode for you"),"\n",s.createElement(a.blockquote,null,"\n",s.createElement(a.p,null,"NB: I do have some difficulties passing Github SSH keys to the container because im using 1Password for mye keys. Cloning and using HTTPS from Github should work better until I figure this one out. ",s.createElement(a.a,{href:"https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials",target:"_blank",rel:"noreferrer"},"Read more here")),"\n"),"\n",s.createElement(a.h2,{id:"conclusion",style:{position:"relative"}},s.createElement(a.a,{href:"#conclusion","aria-label":"conclusion permalink",className:"heading-anchor before"},s.createElement(a.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}})),"Conclusion"),"\n",s.createElement(a.p,null,"Setting up Visual Studio Code Dev Containers for a Gatsby blog is a straightforward process that can greatly benefit a team of engineers. The Dev Container offers a consistent and reliable environment for developers to work in and eliminates the need for a locally set up environment. With the steps outlined in this blog post, you can easily set up Dev Containers for your own Gatsby blog of whatever you want to develop."))}var l=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?s.createElement(a,e,s.createElement(o,e)):o(e)},r=n(1883),i=n(9352),c=n(8032),A=n(7896),p=n(5916),m=n(197),d=n(5911),u=n(8762),g=n(9586),h=n(9951),b=n(9286),f=n(2271),k=n(5437),E=n(5555),y=n(5648),v=n(7660),w=n(8188);const x=e=>{let{image:a}=e;return a?s.createElement(c.G,{className:"gatsby-resp-image-image",image:a,alt:""}):null},B=e=>{let{data:{mdx:{body:a,tableOfContents:n,frontmatter:{author:o,title:l,date:B,categories:j,hero:N,description:I,keywords:C},fields:{slug:Q},timeToRead:_,relatedPosts:D}},pageContext:{tableOfContentsLevels:Y,previous:T,next:R},children:S}=e;const M=(0,s.useRef)(null),P=(0,c.c)(null==N?void 0:N.medium),{siteUrl:H}=(0,y.$W)(),{href:G}=(0,A.useLocation)(),L=o.map((e=>{let{id:a,yamlId:n,name:t,bio:s,sns:o}=e;return{id:a,yamlId:n,name:t,bio:s,socialUrls:o.filter((e=>"mailto"!=e[0]&&"url"!=e[0])).map((e=>`${v.$s[e[0]].url}/${e[1]}`))}}));return s.createElement(p.Z,{postDescription:I,pageImage:P.images.fallback.src,pageUrl:`${H}${Q}`,postTitle:l,pageTitle:l,keywords:C,date:B,timeToRead:_,authors:L},s.createElement(f.Z,{ref:M}),s.createElement("div",{className:"hidden md:block"},s.createElement(k.Z,{className:"fixed right-[6%] bottom-[6%] flex flex-col justify-center z-50"},s.createElement(h.Z,null))),s.createElement("div",{className:"max-w-lg md:max-w-2xl mx-auto mb-24"},s.createElement("h1",{className:"text-center"},l),s.createElement(m.Z,{className:"block mb-4 text-center",date:B,timeToRead:_}),s.createElement("div",{className:"block sm:flex flex-wrap items-center justify-center sm:justify-between"},s.createElement(b.Z,{data:o}),s.createElement(u.Z,{url:G,title:l,hashtags:j.join(","),description:I,className:"space-x-6 text-xl py-4 justify-center",twitter:!0,facebook:!0,linkedin:!0,pocket:!0,copy:!0}))),s.createElement("div",{className:"text-center mb-24"},s.createElement(x,{image:P})),s.createElement("div",{className:"lg:grid lg:grid-cols-9 lg:gaps-5"},s.createElement(u.Z,{url:G,title:l,hashtags:j.join(","),description:I,className:"hidden lg:flex text-xl mt-12 flex-col lg:col-start-1 lg:col-end-3 top-[2rem] sticky self-start max-h-full overflow-y-auto space-y-6",twitter:!0,facebook:!0,linkedin:!0,pocket:!0,copy:!0}),s.createElement("article",{className:"markdown lg:col-start-3 lg:col-end-8",ref:M},s.createElement(t.Zo,{components:{}},S)),s.createElement(E.Z,{className:"hidden lg:block lg:col-span-2 mt-12 top-[2rem] sticky self-start text-xs font-semibold ml-12 mr-auto mb-6 overflow-y-auto max-h-full",items:n.items,ref:M,levels:Y})),s.createElement("div",{className:"my-8 max-w-lg md:max-w-2xl mx-auto"},s.createElement("div",{className:"block sm:flex flex-wrap items-center justify-center sm:justify-between"},s.createElement(g.Z,{className:"my-8 justify-center",categories:j}),s.createElement(u.Z,{url:G,title:l,hashtags:j.join(","),description:I,className:"space-x-6 text-xl my-8 justify-center",twitter:!0,facebook:!0,linkedin:!0,pocket:!0,copy:!0})),s.createElement("div",{className:"flex justify-around flex-wrap text-base mt-12 mb-24"},s.createElement("div",{className:"p-4 my-4 bg-gray-50 border border-solid border-gray-100 dark:bg-gray-800 dark:border-gray-800 rounded mr-auto w-full md:w-[49%]"},s.createElement(r.Link,{to:T.slug,className:"site-link my-2 block"},s.createElement("div",{className:"flex items-start space-x-2"},s.createElement(i.YG0,{className:"block h-6 w-6"}),s.createElement("span",null,T.title)))),s.createElement("div",{className:"p-4 my-4 bg-gray-50 border border-solid border-gray-100 dark:bg-gray-800 dark:border-gray-800 rounded ml-auto w-full md:w-[49%]"},s.createElement(r.Link,{to:R.slug,className:"site-link my-2 block text-right"},s.createElement("div",{className:"flex items-start space-x-2 justify-end"},s.createElement("span",null,R.title),s.createElement(i.nzV,{className:"block h-6 w-6"}))))),s.createElement("h5",{className:"text-center mb-12"},"Written by"),o.map((e=>{let{bio:a,name:n,initial:t,avatar:o,sns:l,yamlId:r}=e;return s.createElement(d.Z,{className:"p-8 mb-4 bg-gray-50 border border-solid border-gray-100 dark:bg-gray-800 dark:border-gray-800 rounded",key:r,bio:a,name:n,initial:t,avatar:o,sns:l,yamlId:r})}))),s.createElement("div",{className:"my-24 max-w-lg sm:max-w-full mx-auto"},s.createElement("h5",{className:"mb-12 text-center"},"Related Posts"),s.createElement(w.Z,{posts:D,className:"grid sm:grid-cols-3 row-auto auto-cols-auto gap-8"})))};function j(e){return s.createElement(B,e,s.createElement(l,e))}}}]);
//# sourceMappingURL=component---node-modules-pitayan-gatsby-theme-pitayan-src-templates-post-index-tsx-content-file-path-content-posts-2023-02-13-devcontainer-with-gatsby-index-mdx-b324aa95b81616b73e8c.js.map