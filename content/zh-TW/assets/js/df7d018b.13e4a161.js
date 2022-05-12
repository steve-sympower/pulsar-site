"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[55761],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42112:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"What\u2019s New in Apache Pulsar 2.10",date:new Date("2022-05-11T00:00:00.000Z"),author:"Penghui Li, Dave Duggins"},s=void 0,u={permalink:"/zh-TW/blog/2022/05/11/whats-new-in-pulsar-210",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website/blog/2022-05-11-whats-new-in-pulsar-210.md",source:"@site/blog/2022-05-11-whats-new-in-pulsar-210.md",title:"What\u2019s New in Apache Pulsar 2.10",description:"The Apache Pulsar community releases version 2.10. 99 contributors provided improvements and bug fixes that delivered over 800 commits.",date:"2022-05-11T00:00:00.000Z",formattedDate:"2022\u5e745\u670811\u65e5",tags:[],readingTime:5.27,truncated:!0,authors:[{name:"Penghui Li, Dave Duggins"}],frontMatter:{title:"What\u2019s New in Apache Pulsar 2.10",date:"2022-05-11T00:00:00.000Z",author:"Penghui Li, Dave Duggins"},prevItem:{title:"The Apache Pulsar Community Welcomes 500th Contributor!",permalink:"/zh-TW/blog/2022/05/11/apache-pulsar-community-welcomes-500th-contributor"},nextItem:{title:"What\u2019s New in Apache Pulsar 2.9.2",permalink:"/zh-TW/blog/2022/04/08/Apache-Pulsar-2-9-2"}},c={authorsImageUrls:[void 0]},p=[{value:"Cluster",id:"cluster",level:4},{value:"Pulsar cluster level auto failover on client side #13316",id:"pulsar-cluster-level-auto-failover-on-client-side-13316",level:5},{value:"Topic policy across multiple clusters #12517",id:"topic-policy-across-multiple-clusters-12517",level:5},{value:"Producer",id:"producer",level:4},{value:"Add lazy-loading feature to PartitionedProducer #10279",id:"add-lazy-loading-feature-to-partitionedproducer-10279",level:5},{value:"Client Introduce chunk message ID #12403",id:"client-introduce-chunk-message-id-12403",level:5},{value:"Broker",id:"broker",level:4},{value:"Broker extensions to allow operators of enterprise wide cluster better control and flexibility #12536",id:"broker-extensions-to-allow-operators-of-enterprise-wide-cluster-better-control-and-flexibility-12536",level:5},{value:"Consumer",id:"consumer",level:4},{value:"Redeliver command add epoch #10478",id:"redeliver-command-add-epoch-10478",level:5},{value:"Support pluggable entry filter in Dispatcher #12269",id:"support-pluggable-entry-filter-in-dispatcher-12269",level:5},{value:"Create init subscription before sending message to DLQ #13355",id:"create-init-subscription-before-sending-message-to-dlq-13355",level:5},{value:"Apply redelivery backoff policy for ack timeout #13707",id:"apply-redelivery-backoff-policy-for-ack-timeout-13707",level:5},{value:"Resolve produce chunk messages failed when topic level maxMessageSize is set #13599",id:"resolve-produce-chunk-messages-failed-when-topic-level-maxmessagesize-is-set-13599",level:5},{value:"Function",id:"function",level:4},{value:"Pulsar Functions: Preload and release external resources #13205",id:"pulsar-functions-preload-and-release-external-resources-13205",level:5},{value:"Update Authentication Interfaces to Include Async Authentication Methods #12104",id:"update-authentication-interfaces-to-include-async-authentication-methods-12104",level:5},{value:"AuthenticationProvider",id:"authenticationprovider",level:6},{value:"AuthenticationState",id:"authenticationstate",level:5},{value:"AuthenticationDataSource",id:"authenticationdatasource",level:5},{value:"Initial commit for TableView #12838",id:"initial-commit-for-tableview-12838",level:5},{value:"Topic",id:"topic",level:4},{value:"Support Topic metadata - PART-1 create topic with properties #12818",id:"support-topic-metadata---part-1-create-topic-with-properties-12818",level:5},{value:"Added Etcd MetadataStore implementation #13225",id:"added-etcd-metadatastore-implementation-13225",level:5}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Apache Pulsar community releases version 2.10. 99 contributors provided improvements and bug fixes that delivered over 800 commits."),(0,i.kt)("h1",{id:"highlights-of-this-release"},"Highlights of this release:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pulsar provides automatic failure recovery between the primary and backup clusters. #13316",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Original PIP ",(0,i.kt)("a",{parentName:"li",href:"https://www.google.com/url?q=https://github.com/apache/pulsar/issues/13315&sa=D&source=docs&ust=1646058957138073&usg=AOvVaw3mGki2sHW2QpIsoYf5pt3w"},"#13315")))),(0,i.kt)("li",{parentName:"ul"},"Fewer producers needed and more efficient use of broker memory with lazy-loading feature added to ",(0,i.kt)("inlineCode",{parentName:"li"},"PartitionedProducer"),". #10279"),(0,i.kt)("li",{parentName:"ul"},"Topic map support added with new ",(0,i.kt)("inlineCode",{parentName:"li"},"TableView")," type using key values in received messages.")),(0,i.kt)("p",null,"This blog documents the most noteworthy changes in this release. For the complete list including all features, enhancements, and bug fixes, check out the ",(0,i.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/release-notes/#placeholder"},"Pulsar 2.10.1 Release Notes"),"."),(0,i.kt)("h1",{id:"notable-bug-fixes-and-enhancements"},"Notable bug fixes and enhancements"),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"cluster"},"Cluster"),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"pulsar-cluster-level-auto-failover-on-client-side-13316"},"Pulsar cluster level auto failover on client side #13316"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue:")," A Pulsar administrator must manually failover a cluster."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resolution:")," Added Pulsar cluster-level auto-failover, which automatically and seamlessly switches from primary to one or more secondary clusters when a failover event is detected. When the primary cluster recovers, the client automatically switches back."),(0,i.kt)("h5",{id:"topic-policy-across-multiple-clusters-12517"},"Topic policy across multiple clusters #12517"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue:")," Some topic policies for a geo-replicated cluster affect the entire geo-replicated cluster while some only affect the local cluster. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resolution:")," Topic policies now support cross-cluster replication. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For local topic policies, set the ",(0,i.kt)("inlineCode",{parentName:"li"},"replicateTo")," property of the message to avoid being replicated to the remote."),(0,i.kt)("li",{parentName:"ul"},"Retention supports setting global parameters."),(0,i.kt)("li",{parentName:"ul"},"Added global topic policies for ",(0,i.kt)("inlineCode",{parentName:"li"},"SystemTopicBasedTopicPoliciesService"),". ")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"producer"},"Producer"),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"add-lazy-loading-feature-to-partitionedproducer-10279"},"Add lazy-loading feature to PartitionedProducer #10279"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue:")," With the number of partitions set according to the highest rate producer, the lowest rate producer does not always need to connect to every partition, so extra producers take up broker memory."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resolution:")," Reduced the number of producers to use broker memory more efficiently by introducing lazy-loading for partitioned producers; also added round-robin routing mode class to limit the number of partitions."),(0,i.kt)("h5",{id:"client-introduce-chunk-message-id-12403"},"[Client]"," Introduce chunk message ID #12403"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue:")," When sending chunked messages, the producer returns the message-id of the last chunk, causing incorrect behaviors in some processes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resolution:")," Introduced the new ",(0,i.kt)("inlineCode",{parentName:"p"},"ChunkMessage-ID")," type. The chunk message-id inherits from ",(0,i.kt)("inlineCode",{parentName:"p"},"MessageIdImpl")," and adds two new methods: ",(0,i.kt)("inlineCode",{parentName:"p"},"getFirstChunkMessageId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getLastChunkMessageID"),". For other method implementations, the ",(0,i.kt)("inlineCode",{parentName:"p"},"lastChunkMessageID")," is called directly, which is compatible with much of the existing business logic. "),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"broker"},"Broker"),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"broker-extensions-to-allow-operators-of-enterprise-wide-cluster-better-control-and-flexibility-12536"},"Broker extensions to allow operators of enterprise wide cluster better control and flexibility #12536"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue:")," Operators of enterprise Pulsar cluster(s) need greater flexibility and control to intercept broker events (including ledger writes/reads) for template validations, observability and access control."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resolution:")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enhanced org.apache.pulsar.broker.intercept.BrokerInterceptor interface to include additional events for tracing"),(0,i.kt)("li",{parentName:"ul"},"Created a new interface org.apache.pulsar.common.intercept.MessagePayloadProcessor to allow interception of ledger write/read operations"),(0,i.kt)("li",{parentName:"ul"},"Enhanced PulsarAdmin to give operators a control in managing super-users")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"consumer"},"Consumer"),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"redeliver-command-add-epoch-10478"},"Redeliver command add epoch #10478"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue:")," Pull and redeliver operations are asynchronous, so the client consumer may receive a new message, execute a cumulative ack based on a new messageID, and fail to consume older messages. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resolution:")," The Pulsar client synchronizes redeliver and pull messages operations using an incrementing epoch for the server and client consumer. "),(0,i.kt)("h5",{id:"support-pluggable-entry-filter-in-dispatcher-12269"},"Support pluggable entry filter in Dispatcher #12269"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue:")," Message tagging is not natively supported. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resolution:")," Implemented an entry filter framework at the broker level.  Working to support namespace and topic level in an upcoming release."),(0,i.kt)("h5",{id:"create-init-subscription-before-sending-message-to-dlq-13355"},"Create init subscription before sending message to DLQ #13355"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue:")," DLQ data in unprocessed messages is removed automatically without a data retention policy for the namespace or a subscription for the DLQ.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resolution:")," Initial subscription is now created before sending messages to the DLQ.\nWhen ",(0,i.kt)("inlineCode",{parentName:"p"},"deadLetterProducer")," is initialized, the consumer sets the initial subscription according to ",(0,i.kt)("inlineCode",{parentName:"p"},"DeadLetterPolicy"),"."),(0,i.kt)("h5",{id:"apply-redelivery-backoff-policy-for-ack-timeout-13707"},"Apply redelivery backoff policy for ack timeout #13707"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue:")," The redelivery backoff policy recently introduced in PIP 106 only applies to the negative acknowledgment API. If ack timeout is used to trigger the message\nredelivery instead of the negative acknowledgment API, the backoff policy is bypassed."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resolution:")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Applied message redelivery policy for ack timeout."),(0,i.kt)("li",{parentName:"ul"},"Alerted ",(0,i.kt)("inlineCode",{parentName:"li"},"NegativeAckBackoff")," interface to ",(0,i.kt)("inlineCode",{parentName:"li"},"RedeliveryBackoff"),"."),(0,i.kt)("li",{parentName:"ul"},"Exposed ",(0,i.kt)("inlineCode",{parentName:"li"},"AckTimeoutRedeliveryBackoff")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"ConsumerBuilder"),"."),(0,i.kt)("li",{parentName:"ul"},"Added unit test case.")),(0,i.kt)("p",null,"Currently only the Java client is modified."),(0,i.kt)("h5",{id:"resolve-produce-chunk-messages-failed-when-topic-level-maxmessagesize-is-set-13599"},"Resolve produce chunk messages failed when topic level maxMessageSize is set #13599"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue:")," Currently, chunk messages produce fails if topic level maxMessageSize is set to ","[1]",". "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resolution:")," Added ",(0,i.kt)("inlineCode",{parentName:"p"},"isChunked")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"PublishContext"),". Skips the",(0,i.kt)("inlineCode",{parentName:"p"},"maxMessageSize")," check if it's chunked."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"function"},"Function"),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"pulsar-functions-preload-and-release-external-resources-13205"},"Pulsar Functions: Preload and release external resources #13205"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue:"),"  External resource initialization and release was accomplished either manually or through use of a complicated initialization logic."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resolution:")," Introduced ",(0,i.kt)("inlineCode",{parentName:"p"},"RichFunction")," interface to extend ",(0,i.kt)("inlineCode",{parentName:"p"},"Function")," by providing a setup and tearDown API. "),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"update-authentication-interfaces-to-include-async-authentication-methods-12104"},"Update Authentication Interfaces to Include Async Authentication Methods #12104"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue:")," Pulsar's current ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthenticationProvider")," interface only exposes synchronous methods for authenticating a connection. To date, this has been sufficient because we do not have any providers that rely on network calls. However, in looking at the OAuth2.0 spec, there are some cases where network calls are necessary to verify a token."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resolution:")," "),(0,i.kt)("h6",{id:"authenticationprovider"},"AuthenticationProvider"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthenticationProvider#authenticateAsync"),". Included a default implementation that calls the authenticate method."),(0,i.kt)("li",{parentName:"ul"},"Deprecated ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthenticationProvider#authenticate"),"."),(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthenticationProvider#authenticateHttpRequestAsync"),"."),(0,i.kt)("li",{parentName:"ul"},"Deprecated ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthenticationProvider#authenticateHttpRequest"),".")),(0,i.kt)("h5",{id:"authenticationstate"},"AuthenticationState"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthenticationState#authenticateAsync"),"."),(0,i.kt)("li",{parentName:"ul"},"Deprecated ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthenticationState#authenticate"),". The preferred method is ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthenticationState#authenticateAsync"),"."),(0,i.kt)("li",{parentName:"ul"},"Deprecated ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthenticationState#isComplete"),". This method can be avoided by inferring authentication completeness from the result of ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthenticationState#authenticateAsync"),".")),(0,i.kt)("h5",{id:"authenticationdatasource"},"AuthenticationDataSource"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deprecated ",(0,i.kt)("inlineCode",{parentName:"li"},"AuthenticationDataSource#authenticate"),". There is no need for an async version of this method.")),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"initial-commit-for-tableview-12838"},"Initial commit for TableView #12838"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue:")," In many use cases, applications use Pulsar consumers or readers to fetch\nall the updates from a topic and construct a map with the latest value of each\nkey for received messages. This is common when constructing a local cache of the data. We do not offer support for This access pattern was not included in the Pulsar client API. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resolution:")," Added new ",(0,i.kt)("inlineCode",{parentName:"p"},"TableView")," type and updated the PulsarClient."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"topic"},"Topic"),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"support-topic-metadata---part-1-create-topic-with-properties-12818"},"Support Topic metadata - PART-1 create topic with properties #12818"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue:")," Can\u2019t store topic metadata."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resolution:")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added new storage methods in topics.java."),(0,i.kt)("li",{parentName:"ul"},"Added two new paths to REST API to reduce compatibility issues.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Metadata Store"),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"added-etcd-metadatastore-implementation-13225"},"Added Etcd MetadataStore implementation #13225"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Issue:")," We\u2019re working to add metadata backends that support non-Zookeeper implementations."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resolution:")," Added Etcd support for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Batching of read/write requests"),(0,i.kt)("li",{parentName:"ul"},"Session watcher"),(0,i.kt)("li",{parentName:"ul"},"Lease manager")))}m.isMDXComponent=!0}}]);