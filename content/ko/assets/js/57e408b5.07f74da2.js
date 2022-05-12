"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[45789],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),h=i,g=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},23612:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],s={id:"concepts-replication",title:"Geo Replication",sidebar_label:"Geo Replication"},c=void 0,l={unversionedId:"concepts-replication",id:"concepts-replication",title:"Geo Replication",description:"Regardless of industries, when an unforeseen event occurs and brings day-to-day operations to a halt, an organization needs a well-prepared disaster recovery plan to quickly restore service to clients. However, a disaster recovery plan usually requires a multi-datacenter deployment with geographically dispersed data centers. Such a multi-datacenter deployment requires a geo-replication mechanism to provide additional redundancy in case a data center fails.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/concepts-replication.md",sourceDirName:".",slug:"/concepts-replication",permalink:"/ko/docs/next/concepts-replication",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/concepts-replication.md",tags:[],version:"current",frontMatter:{id:"concepts-replication",title:"Geo Replication",sidebar_label:"Geo Replication"},sidebar:"docsSidebar",previous:{title:"Clients",permalink:"/ko/docs/next/concepts-clients"},next:{title:"Multi Tenancy",permalink:"/ko/docs/next/concepts-multi-tenancy"}},p={},u=[{value:"Replication mechanisms",id:"replication-mechanisms",level:2},{value:"Asynchronous geo-replication in Pulsar",id:"asynchronous-geo-replication-in-pulsar",level:3},{value:"Synchronous geo-replication via BookKeeper",id:"synchronous-geo-replication-via-bookkeeper",level:3},{value:"Replication patterns",id:"replication-patterns",level:2},{value:"Full-mesh replication",id:"full-mesh-replication",level:3},{value:"Active-active replication",id:"active-active-replication",level:3},{value:"Active-standby replication",id:"active-standby-replication",level:3},{value:"Aggregation replication",id:"aggregation-replication",level:3}],d={toc:u};function h(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Regardless of industries, when an unforeseen event occurs and brings day-to-day operations to a halt, an organization needs a well-prepared disaster recovery plan to quickly restore service to clients. However, a disaster recovery plan usually requires a multi-datacenter deployment with geographically dispersed data centers. Such a multi-datacenter deployment requires a geo-replication mechanism to provide additional redundancy in case a data center fails."),(0,r.kt)("p",null,"Pulsar's geo-replication mechanism is typically used for disaster recovery, enabling the replication of persistently stored message data across multiple data centers. For instance, your application is publishing data in one region and you would like to process it for consumption in other regions. With Pulsar\u2019s geo-replication mechanism, messages can be produced and consumed in different geo-locations."),(0,r.kt)("p",null,"The diagram below illustrates the process of ",(0,r.kt)("a",{parentName:"p",href:"administration-geo"},"geo-replication"),". Whenever three producers (P1, P2 and P3) respectively publish messages to the T1 topic in three clusters, those messages are instantly replicated across clusters. Once the messages are replicated, two consumers (C1 and C2) can consume those messages from their clusters."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A typical geo-replication example with full-mesh pattern",src:a(69645).Z,width:"1260",height:"614"})),(0,r.kt)("h2",{id:"replication-mechanisms"},"Replication mechanisms"),(0,r.kt)("p",null,"The geo-replication mechanism can be categorized into synchronous geo-replication and asynchronous geo-replication strategies. Pulsar supports both replication mechanisms."),(0,r.kt)("h3",{id:"asynchronous-geo-replication-in-pulsar"},"Asynchronous geo-replication in Pulsar"),(0,r.kt)("p",null,"An asynchronous geo-replicated cluster is composed of multiple physical clusters set up in different datacenters. Messages produced on a Pulsar topic are first persisted to the local cluster and then replicated asynchronously to the remote clusters by brokers."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An example of asynchronous geo-replication mechanism",src:a(13020).Z,width:"1100",height:"830"})),(0,r.kt)("p",null,"In normal cases, when there are no connectivity issues, messages are replicated immediately, at the same time as they are dispatched to local consumers. Typically, end-to-end delivery latency is defined by the network round-trip time (RTT) between the data centers. Applications can create producers and consumers in any of the clusters, even when the remote clusters are not reachable (for example, during a network partition)."),(0,r.kt)("p",null,"Asynchronous geo-replication provides lower latency but may result in weaker consistency guarantees due to the potential replication lag that some data hasn\u2019t been replicated."),(0,r.kt)("h3",{id:"synchronous-geo-replication-via-bookkeeper"},"Synchronous geo-replication via BookKeeper"),(0,r.kt)("p",null,"In synchronous geo-replication, data is synchronously replicated to multiple data centers and the client has to wait for an acknowledgment from the other data centers. As illustrated below, when the client issues a write request to one cluster, the written data will be replicated to the other two data centers. The write request is only acknowledged to the client when the majority of data centers (in this example, at least 2 data centers) have acknowledged that the write has been persisted."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An example of synchronous geo-replication mechanism",src:a(11766).Z,width:"980",height:"830"})),(0,r.kt)("p",null,"Synchronous geo-replication in Pulsar is achieved by BookKeeper. A synchronous geo-replicated cluster consists of a cluster of bookies and a cluster of brokers that run in multiple data centers, and a global Zookeeper installation (a ZooKeeper ensemble is running across multiple data centers). You need to configure a BookKeeper region-aware placement policy to store data across multiple data centers and guarantee availability constraints on writes."),(0,r.kt)("p",null,"Synchronous geo-replication provides the highest availability and also guarantees stronger data consistency between different data centers. However, your applications have to pay an extra latency penalty across data centers."),(0,r.kt)("h2",{id:"replication-patterns"},"Replication patterns"),(0,r.kt)("p",null,"Pulsar provides a great degree of flexibility for customizing your replication strategy. You can set up different replication patterns to serve your replication strategy for an application between multiple data centers."),(0,r.kt)("h3",{id:"full-mesh-replication"},"Full-mesh replication"),(0,r.kt)("p",null,"Using full-mesh replication and applying the ",(0,r.kt)("a",{parentName:"p",href:"/ko/docs/next/administration-geo/#selective-replication"},"selective message replication"),", you can customize your replication strategies and topologies between any number of datacenters."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An example of full-mesh replication pattern",src:a(69645).Z,width:"1260",height:"614"})),(0,r.kt)("h3",{id:"active-active-replication"},"Active-active replication"),(0,r.kt)("p",null,"Active-active replication is a variation of full-mesh replication, with only two data centers. Producers are able to run at any data center to produce messages, and consumers can consume all messages from all data centers."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An example of active-active replication pattern",src:a(2475).Z,width:"1042",height:"643"})),(0,r.kt)("p",null,"For how to use active-active replication to migrate data between clusters, refer to ",(0,r.kt)("a",{parentName:"p",href:"/ko/docs/next/administration-geo/#migrate-data-between-clusters-using-geo-replication"},"here"),"."),(0,r.kt)("h3",{id:"active-standby-replication"},"Active-standby replication"),(0,r.kt)("p",null,"Active-standby replication is a variation of active-active replication. Producers send messages to the active data center while messages are replicated to the standby data center for backup. If the active data center goes down, the standby data center takes over and becomes the active one."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An example of active-standby replication pattern",src:a(51928).Z,width:"1096",height:"366"})),(0,r.kt)("h3",{id:"aggregation-replication"},"Aggregation replication"),(0,r.kt)("p",null,"The aggregation replication pattern is typically used when replicating messages from the edge to the cloud. For example, assume you have 3 clusters in 3 fronting datacenters and one aggregated cluster in a central data center, and you want to replicate messages from multiple fronting datacenters to the central data center for aggregation purposes. You can then create an individual namespace for the topics used by each fronting data center and assign the aggregated data center to those namespaces."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An example of aggregation replication pattern",src:a(28013).Z,width:"1020",height:"528"})))}h.isMDXComponent=!0},2475:function(e,t,a){t.Z=a.p+"assets/images/active-active-replication-793ab74d71125d28d47a15d3f48d6f48.svg"},51928:function(e,t,a){t.Z=a.p+"assets/images/active-standby-replication-8c51cab5bc6442bcb7912869df8ff628.svg"},28013:function(e,t,a){t.Z=a.p+"assets/images/aggregation-replication-f0f1bb40b2515b97a150d944e99b4cfe.svg"},69645:function(e,t,a){t.Z=a.p+"assets/images/full-mesh-replication-6fd4bcbb7413ea942b9eb338cd8b050a.svg"},13020:function(e,t,a){t.Z=a.p+"assets/images/geo-replication-async-782b820f9a56bedf610ed91885714780.svg"},11766:function(e,t,a){t.Z=a.p+"assets/images/geo-replication-sync-569a3c1ef3dd2e0d73adfdb91b1e6c48.svg"}}]);