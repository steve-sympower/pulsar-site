"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[98259],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294);function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},9877:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(87462),i=a(67294),r=a(72389),o=a(5979),l=a(86010),s="tabItem_LplD";function c(e){var t,a,r,c=e.lazy,p=e.block,u=e.defaultValue,m=e.values,d=e.groupId,h=e.className,g=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,o.lx)(k,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===u?u:null!=(t=null!=u?u:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=g[0])?void 0:r.props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.UB)(),N=v.tabGroupChoices,y=v.setTabGroupChoices,w=(0,i.useState)(b),C=w[0],T=w[1],E=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var P=N[d];null!=P&&P!==C&&k.some((function(e){return e.value===P}))&&T(P)}var x=function(e){var t=e.currentTarget,a=E.indexOf(t),n=k[a].value;n!==C&&(O(t),T(n),null!=d&&y(d,n))},S=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.currentTarget)+1;a=E[n]||E[0];break;case"ArrowLeft":var i=E.indexOf(e.currentTarget)-1;a=E[i]||E[E.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},h)},k.map((function(e){var t=e.value,a=e.label,r=e.attributes;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return E.push(e)},onKeyDown:S,onFocus:x,onClick:x},r,{className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),c?(0,i.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,r.Z)();return i.createElement(c,(0,n.Z)({key:String(t)},e))}},34782:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=a(9877),l=a(58215),s=["components"],c={id:"administration-geo",title:"Pulsar geo-replication",sidebar_label:"Geo-replication",original_id:"administration-geo"},p=void 0,u={unversionedId:"administration-geo",id:"version-2.10.0/administration-geo",title:"Pulsar geo-replication",description:"Enable geo-replication for a namespace",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-2.10.0/administration-geo.md",sourceDirName:".",slug:"/administration-geo",permalink:"/ja/docs/administration-geo",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/administration-geo.md",tags:[],version:"2.10.0",frontMatter:{id:"administration-geo",title:"Pulsar geo-replication",sidebar_label:"Geo-replication",original_id:"administration-geo"},sidebar:"version-2.10.0/docsSidebar",previous:{title:"ZooKeeper and BookKeeper",permalink:"/ja/docs/administration-zk-bk"},next:{title:"Pulsar Manager",permalink:"/ja/docs/administration-pulsar-manager"}},m={},d=[{value:"Enable geo-replication for a namespace",id:"enable-geo-replication-for-a-namespace",level:2},{value:"Local persistence and forwarding",id:"local-persistence-and-forwarding",level:2},{value:"Configure replication",id:"configure-replication",level:2},{value:"Connect replication clusters",id:"connect-replication-clusters",level:3},{value:"Grant permissions to properties",id:"grant-permissions-to-properties",level:3},{value:"Enable geo-replication",id:"enable-geo-replication",level:3},{value:"Enable geo-replication at namespace level",id:"enable-geo-replication-at-namespace-level",level:4},{value:"Enable geo-replication at topic level",id:"enable-geo-replication-at-topic-level",level:4},{value:"Use topics with geo-replication",id:"use-topics-with-geo-replication",level:3},{value:"Selective replication",id:"selective-replication",level:4},{value:"Topic stats",id:"topic-stats",level:4},{value:"Delete a geo-replication topic",id:"delete-a-geo-replication-topic",level:4},{value:"Replicated subscriptions",id:"replicated-subscriptions",level:2},{value:"Enable replicated subscription",id:"enable-replicated-subscription",level:3},{value:"Advantages",id:"advantages",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Migrate data between clusters using geo-replication",id:"migrate-data-between-clusters-using-geo-replication",level:2}],h={toc:d};function g(e){var t=e.components,c=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"enable-geo-replication-for-a-namespace"},"Enable geo-replication for a namespace"),(0,r.kt)("p",null,"You must enable geo-replication on a ",(0,r.kt)("a",{parentName:"p",href:"#concepts-multi-tenancy"},"per-tenant basis")," in Pulsar. For example, you can enable geo-replication between two specific clusters only when a tenant has access to both clusters."),(0,r.kt)("p",null,"Geo-replication is managed at the namespace level, which means you only need to create and configure a namespace to replicate messages between two or more provisioned clusters that a tenant can access."),(0,r.kt)("p",null,"Complete the following tasks to enable geo-replication for a namespace:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enable-geo-replication-at-namespace-level"},"Enable a geo-replication namespace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/docs/admin-api-namespaces/#configure-replication-clusters"},"Configure that namespace to replicate across two or more provisioned clusters"))),(0,r.kt)("p",null,"Any message published on ",(0,r.kt)("em",{parentName:"p"},"any")," topic in that namespace is replicated to all clusters in the specified set."),(0,r.kt)("h2",{id:"local-persistence-and-forwarding"},"Local persistence and forwarding"),(0,r.kt)("p",null,"When messages are produced on a Pulsar topic, messages are first persisted in the local cluster, and then forwarded asynchronously to the remote clusters."),(0,r.kt)("p",null,"In normal cases, when connectivity issues are none, messages are replicated immediately, at the same time as they are dispatched to local consumers. Typically, the network ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Round-trip_delay_time"},"round-trip time")," (RTT) between the remote regions defines end-to-end delivery latency."),(0,r.kt)("p",null,"Applications can create producers and consumers in any of the clusters, even when the remote clusters are not reachable (like during a network partition)."),(0,r.kt)("p",null,"Producers and consumers can publish messages to and consume messages from any cluster in a Pulsar instance. However, subscriptions cannot only be local to the cluster where the subscriptions are created but also can be transferred between clusters after replicated subscription is enabled. Once replicated subscription is enabled, you can keep subscription state in synchronization. Therefore, a topic can be asynchronously replicated across multiple geographical regions. In case of failover, a consumer can restart consuming messages from the failure point in a different cluster."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A typical geo-replication example with full-mesh pattern",src:a(20721).Z,width:"709",height:"349"})),(0,r.kt)("p",null,"In the aforementioned example, the ",(0,r.kt)("strong",{parentName:"p"},"T1")," topic is replicated among three clusters, ",(0,r.kt)("strong",{parentName:"p"},"Cluster-A"),", ",(0,r.kt)("strong",{parentName:"p"},"Cluster-B"),", and ",(0,r.kt)("strong",{parentName:"p"},"Cluster-C"),"."),(0,r.kt)("p",null,"All messages produced in any of the three clusters are delivered to all subscriptions in other clusters. In this case, ",(0,r.kt)("strong",{parentName:"p"},"C1")," and ",(0,r.kt)("strong",{parentName:"p"},"C2")," consumers receive all messages that ",(0,r.kt)("strong",{parentName:"p"},"P1"),", ",(0,r.kt)("strong",{parentName:"p"},"P2"),", and ",(0,r.kt)("strong",{parentName:"p"},"P3")," producers publish. Ordering is still guaranteed on a per-producer basis."),(0,r.kt)("h2",{id:"configure-replication"},"Configure replication"),(0,r.kt)("p",null,"This section guides you through the steps to configure geo-replicated clusters."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#connect-replication-clusters"},"Connect replication clusters")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#grant-permissions-to-properties"},"Grant permissions to properties")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#enable-geo-replication"},"Enable geo-replication")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#use-topics-with-geo-replication"},"Use topics with geo-replication"))),(0,r.kt)("h3",{id:"connect-replication-clusters"},"Connect replication clusters"),(0,r.kt)("p",null,"To replicate data among clusters, you need to configure each cluster to connect to the other. You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin"))," tool to create a connection."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Suppose that you have 3 replication clusters: ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"us-cent"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"us-east"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the connection from ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"us-east"),"."),(0,r.kt)("p",{parentName:"li"},"Run the following command on ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin clusters create \\\n  --broker-url pulsar://<DNS-OF-US-EAST>:<PORT> \\\n  --url http://<DNS-OF-US-EAST>:<PORT> \\\n  us-east\n\n")),(0,r.kt)("p",null,"   :::tip"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you want to use a secure connection for a cluster, you can use the flags ",(0,r.kt)("inlineCode",{parentName:"p"},"--broker-url-secure")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--url-secure"),". For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"pulsar-admin clusters create"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Different clusters may have different authentications. You can use the authentication flag ",(0,r.kt)("inlineCode",{parentName:"p"},"--auth-plugin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--auth-parameters")," together to set cluster authentication, which overrides ",(0,r.kt)("inlineCode",{parentName:"p"},"brokerClientAuthenticationPlugin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"brokerClientAuthenticationParameters")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"authenticationEnabled")," sets to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"broker.conf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"standalone.conf"),". For more information, see ",(0,r.kt)("a",{parentName:"p",href:"concepts-authentication"},"authentication and authorization"),"."),(0,r.kt)("p",{parentName:"li"},":::"))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the connection from ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"us-cent"),"."),(0,r.kt)("p",{parentName:"li"},"Run the following command on ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin clusters create \\\n  --broker-url pulsar://<DNS-OF-US-CENT>:<PORT> \\\n  --url http://<DNS-OF-US-CENT>:<PORT> \\\n  us-cent\n\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Run similar commands on ",(0,r.kt)("inlineCode",{parentName:"li"},"us-east")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"us-cent")," to create connections among clusters.")),(0,r.kt)("h3",{id:"grant-permissions-to-properties"},"Grant permissions to properties"),(0,r.kt)("p",null,"To replicate to a cluster, the tenant needs permission to use that cluster. You can grant permission to the tenant when you create the tenant or grant later."),(0,r.kt)("p",null,"Specify all the intended clusters when you create a tenant:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin tenants create my-tenant \\\n  --admin-roles my-admin-role \\\n  --allowed-clusters us-west,us-east,us-cent\n\n")),(0,r.kt)("p",null,"To update permissions of an existing tenant, use ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),"."),(0,r.kt)("h3",{id:"enable-geo-replication"},"Enable geo-replication"),(0,r.kt)("p",null,"You can enable geo-replication at ",(0,r.kt)("strong",{parentName:"p"},"namespace")," or ",(0,r.kt)("strong",{parentName:"p"},"topic")," level."),(0,r.kt)("h4",{id:"enable-geo-replication-at-namespace-level"},"Enable geo-replication at namespace level"),(0,r.kt)("p",null,"You can create a namespace with the following command sample."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin namespaces create my-tenant/my-namespace\n\n")),(0,r.kt)("p",null,"Initially, the namespace is not assigned to any cluster. You can assign the namespace to clusters using the ",(0,r.kt)("inlineCode",{parentName:"p"},"set-clusters")," subcommand:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin namespaces set-clusters my-tenant/my-namespace \\\n  --clusters us-west,us-east,us-cent\n\n")),(0,r.kt)("h4",{id:"enable-geo-replication-at-topic-level"},"Enable geo-replication at topic level"),(0,r.kt)("p",null,"You can set geo-replication at topic level using the command ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar-admin topics set-replication-clusters"),". For the latest and complete information about ",(0,r.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},"Pulsar admin doc"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin topics set-replication-clusters --clusters us-west,us-east,us-cent my-tenant/my-namespace/my-topic\n\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"You can change the replication clusters for a namespace at any time, without disruption to ongoing traffic. Replication channels are immediately set up or stopped in all clusters as soon as the configuration changes."),(0,r.kt)("li",{parentName:"ul"},"Once you create a geo-replication namespace, any topics that producers or consumers create within that namespace are replicated across clusters. Typically, each application uses the ",(0,r.kt)("inlineCode",{parentName:"li"},"serviceUrl")," for the local cluster.")))),(0,r.kt)("h3",{id:"use-topics-with-geo-replication"},"Use topics with geo-replication"),(0,r.kt)("h4",{id:"selective-replication"},"Selective replication"),(0,r.kt)("p",null,"By default, messages are replicated to all clusters configured for the namespace. You can restrict replication selectively by specifying a replication list for a message, and then that message is replicated only to the subset in the replication list."),(0,r.kt)("p",null,"The following is an example for the ",(0,r.kt)("a",{parentName:"p",href:"client-libraries-java"},"Java API"),". Note the use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"setReplicationClusters")," method when you construct the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/client/org/apache/pulsar/client/api/Message"},"Message")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nList<String> restrictReplicationTo = Arrays.asList(\n        "us-west",\n        "us-east"\n);\n\nProducer producer = client.newProducer()\n        .topic("some-topic")\n        .create();\n\nproducer.newMessage()\n        .value("my-payload".getBytes())\n        .setReplicationClusters(restrictReplicationTo)\n        .send();\n\n')),(0,r.kt)("h4",{id:"topic-stats"},"Topic stats"),(0,r.kt)("p",null,"You can check topic-specific statistics for geo-replication topics using one of the following methods."),(0,r.kt)(o.Z,{defaultValue:"pulsar-admin",values:[{label:"pulsar-admin",value:"pulsar-admin"},{label:"REST API",value:"REST API"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"pulsar-admin",mdxType:"TabItem"},(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/tools/pulsar-admin/"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-admin topics stats"))," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-admin topics stats persistent://my-tenant/my-namespace/my-topic\n\n"))),(0,r.kt)(l.Z,{value:"REST API",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#operation/getStats?version=@pulsar:version_number@&apiVersion=v2"},"GET /admin/v2/:schema/:tenant/:namespace/:topic/stats")))),(0,r.kt)("p",null,"Each cluster reports its own local stats, including the incoming and outgoing replication rates and backlogs."),(0,r.kt)("h4",{id:"delete-a-geo-replication-topic"},"Delete a geo-replication topic"),(0,r.kt)("p",null,"Given that geo-replication topics exist in multiple regions, directly deleting a geo-replication topic is not possible. Instead, you should rely on automatic topic garbage collection.\nIn Pulsar, a topic is automatically deleted when the topic meets the following three conditions: - no producers or consumers are connected to it; - no subscriptions to it; - no more messages are kept for retention. For geo-replication topics, each region uses a fault-tolerant mechanism to decide when deleting the topic locally is safe.\nYou can explicitly disable topic garbage collection by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"brokerDeleteInactiveTopicsEnabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in your ",(0,r.kt)("a",{parentName:"p",href:"/ja/docs/reference-configuration#broker"},"broker configuration"),".\nTo delete a geo-replication topic, close all producers and consumers on the topic, and delete all of its local subscriptions in every replication cluster. When Pulsar determines that no valid subscription for the topic remains across the system, it will garbage collect the topic."),(0,r.kt)("h2",{id:"replicated-subscriptions"},"Replicated subscriptions"),(0,r.kt)("p",null,"Pulsar supports replicated subscriptions, so you can keep subscription state in sync, within a sub-second timeframe, in the context of a topic that is being asynchronously replicated across multiple geographical regions.\nIn case of failover, a consumer can restart consuming from the failure point in a different cluster."),(0,r.kt)("h3",{id:"enable-replicated-subscription"},"Enable replicated subscription"),(0,r.kt)("p",null,"Replicated subscription is disabled by default. You can enable replicated subscription when creating a consumer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nConsumer<String> consumer = client.newConsumer(Schema.STRING)\n            .topic("my-topic")\n            .subscriptionName("my-subscription")\n            .replicateSubscriptionState(true)\n            .subscribe();\n\n')),(0,r.kt)("h3",{id:"advantages"},"Advantages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is easy to implement the logic."),(0,r.kt)("li",{parentName:"ul"},"You can choose to enable or disable replicated subscription."),(0,r.kt)("li",{parentName:"ul"},"When you enable it, the overhead is low, and it is easy to configure."),(0,r.kt)("li",{parentName:"ul"},"When you disable it, the overhead is zero.")),(0,r.kt)("h3",{id:"limitations"},"Limitations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When you enable replicated subscription, you're creating a consistent distributed snapshot to establish an association between message ids from different clusters. The snapshots are taken periodically. The default value is ",(0,r.kt)("inlineCode",{parentName:"li"},"1 second"),". It means that a consumer failing over to a different cluster can potentially receive 1 second of duplicates. You can also configure the frequency of the snapshot in the ",(0,r.kt)("inlineCode",{parentName:"li"},"broker.conf")," file."),(0,r.kt)("li",{parentName:"ul"},"Only the base line cursor position is synced in replicated subscriptions while the individual acknowledgments are not synced. This means the messages acknowledged out-of-order could end up getting delivered again, in the case of a cluster failover.")),(0,r.kt)("h2",{id:"migrate-data-between-clusters-using-geo-replication"},"Migrate data between clusters using geo-replication"),(0,r.kt)("p",null,"Using geo-replication to migrate data between clusters is a special use case of the ",(0,r.kt)("a",{parentName:"p",href:"/ja/docs/concepts-replication/#active-active-replication"},"active-active replication pattern")," when you don't have a large amount of data."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create your new cluster."),(0,r.kt)("li",{parentName:"ol"},"Add the new cluster to your old cluster.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n  bin/pulsar-admin cluster create new-cluster\n\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Add the new cluster to your tenant.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n  bin/pulsar-admin tenants update my-tenant --cluster old-cluster,new-cluster\n\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Set the clusters on your namespace.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n  bin/pulsar-admin namespaces set-clusters my-tenant/my-ns --cluster old-cluster,new-cluster\n\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Update your applications using ",(0,r.kt)("a",{parentName:"li",href:"#replicated-subscriptions"},"replicated subscriptions"),"."),(0,r.kt)("li",{parentName:"ol"},"Validate subscription replication is active.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n  bin/pulsar-admin topics stats-internal public/default/t1\n\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Move your consumers and producers to the new cluster by modifying the values of ",(0,r.kt)("inlineCode",{parentName:"li"},"serviceURL"),".")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"The replication starts from step 4, which means existing messages in your old cluster are not replicated."),(0,r.kt)("li",{parentName:"ul"},"If you have some older messages to migrate, you can pre-create the replication subscriptions for each topic and set it at the earliest position by using ",(0,r.kt)("inlineCode",{parentName:"li"},"pulsar-admin topics create-subscription -s pulsar.repl.new-cluster -m earliest <topic>"),".")))))}g.isMDXComponent=!0},20721:function(e,t,a){t.Z=a.p+"assets/images/geo-replication-34036a887215513a9173d150f92e093e.png"}}]);