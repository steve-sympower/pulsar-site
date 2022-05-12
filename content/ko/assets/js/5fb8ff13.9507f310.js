"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[57914],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),k=r,d=m["".concat(s,".").concat(k)]||m[k]||c[k]||l;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82471:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={id:"io-kafka-source",title:"Kafka source connector",sidebar_label:"Kafka source connector",original_id:"io-kafka-source"},s=void 0,p={unversionedId:"io-kafka-source",id:"version-2.10.0/io-kafka-source",title:"Kafka source connector",description:"The Kafka source connector pulls messages from Kafka topics and persists the messages to Pulsar topics.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-2.10.0/io-kafka-source.md",sourceDirName:".",slug:"/io-kafka-source",permalink:"/ko/docs/io-kafka-source",editUrl:"https://github.com/apache/pulsar/edit/master/site2/docs/io-kafka-source.md",tags:[],version:"2.10.0",frontMatter:{id:"io-kafka-source",title:"Kafka source connector",sidebar_label:"Kafka source connector",original_id:"io-kafka-source"}},u={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Schema Management",id:"schema-management",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2},{value:"Standalone cluster",id:"standalone-cluster",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Steps",id:"steps",level:4},{value:"On-premises cluster",id:"on-premises-cluster",level:3}],m={toc:c};function k(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Kafka source connector pulls messages from Kafka topics and persists the messages to Pulsar topics."),(0,l.kt)("p",null,"This guide explains how to configure and use the Kafka source connector."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"The configuration of the Kafka source connector has the following properties."),(0,l.kt)("h3",{id:"property"},"Property"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bootstrapServers")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"A comma-separated list of host and port pairs for establishing the initial connection to the Kafka cluster.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"groupId")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"A unique string that identifies the group of consumer processes to which this consumer belongs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fetchMinBytes")),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum byte expected for each fetch response.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"autoCommitEnabled")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"If set to true, the consumer's offset is periodically committed in the background.",(0,l.kt)("br",null),(0,l.kt)("br",null)," This committed offset is used when the process fails as the position from which a new consumer begins.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"autoCommitIntervalMs")),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"5000"),(0,l.kt)("td",{parentName:"tr",align:null},"The frequency in milliseconds that the consumer offsets are auto-committed to Kafka if ",(0,l.kt)("inlineCode",{parentName:"td"},"autoCommitEnabled")," is set to true.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"heartbeatIntervalMs")),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"3000"),(0,l.kt)("td",{parentName:"tr",align:null},"The interval between heartbeats to the consumer when using Kafka's group management facilities. ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Note: ",(0,l.kt)("inlineCode",{parentName:"strong"},"heartbeatIntervalMs")," must be smaller than ",(0,l.kt)("inlineCode",{parentName:"strong"},"sessionTimeoutMs")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sessionTimeoutMs")),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"30000"),(0,l.kt)("td",{parentName:"tr",align:null},"The timeout used to detect consumer failures when using Kafka's group management facility.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"topic")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"The Kafka topic that sends messages to Pulsar.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"consumerConfigProperties")),(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,l.kt)("td",{parentName:"tr",align:null},"The consumer configuration properties to be passed to consumers. ",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Note: other properties specified in the connector configuration file take precedence over this configuration"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"keyDeserializationClass")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.kafka.common.serialization.StringDeserializer"),(0,l.kt)("td",{parentName:"tr",align:null},"The deserializer class for Kafka consumers to deserialize keys.",(0,l.kt)("br",null)," The deserializer is set by a specific implementation of ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/kafka/src/main/java/org/apache/pulsar/io/kafka/KafkaAbstractSource.java"},(0,l.kt)("inlineCode",{parentName:"a"},"KafkaAbstractSource")),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"valueDeserializationClass")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"org.apache.kafka.common.serialization.ByteArrayDeserializer"),(0,l.kt)("td",{parentName:"tr",align:null},"The deserializer class for Kafka consumers to deserialize values.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"autoOffsetReset")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"earliest"),(0,l.kt)("td",{parentName:"tr",align:null},"The default offset reset policy.")))),(0,l.kt)("h3",{id:"schema-management"},"Schema Management"),(0,l.kt)("p",null,"This Kafka source connector applies the schema to the topic depending on the data type that is present on the Kafka topic. You can detect the data type from the ",(0,l.kt)("inlineCode",{parentName:"p"},"keyDeserializationClass")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"valueDeserializationClass")," configuration parameters."),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"valueDeserializationClass")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.kafka.common.serialization.StringDeserializer"),", you can set Schema.STRING() as schema type on the Pulsar topic."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"valueDeserializationClass")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"io.confluent.kafka.serializers.KafkaAvroDeserializer"),", Pulsar downloads the AVRO schema from the Confluent Schema Registry\xae and sets it properly on the Pulsar topic."),(0,l.kt)("p",null,"In this case, you need to set ",(0,l.kt)("inlineCode",{parentName:"p"},"schema.registry.url")," inside of the ",(0,l.kt)("inlineCode",{parentName:"p"},"consumerConfigProperties")," configuration entry of the source."),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"keyDeserializationClass")," is not ",(0,l.kt)("inlineCode",{parentName:"p"},"org.apache.kafka.common.serialization.StringDeserializer"),", it means that you do not have a String as key and the Kafka Source uses the KeyValue schema type with the SEPARATED encoding."),(0,l.kt)("p",null,"Pulsar supports AVRO format for keys."),(0,l.kt)("p",null,"In this case, you can have a Pulsar topic with the following properties:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Schema: KeyValue schema with SEPARATED encoding"),(0,l.kt)("li",{parentName:"ul"},"Key: the content of key of the Kafka message (base64 encoded)"),(0,l.kt)("li",{parentName:"ul"},"Value: the content of value of the Kafka message"),(0,l.kt)("li",{parentName:"ul"},"KeySchema: the schema detected from ",(0,l.kt)("inlineCode",{parentName:"li"},"keyDeserializationClass")),(0,l.kt)("li",{parentName:"ul"},"ValueSchema: the schema detected from ",(0,l.kt)("inlineCode",{parentName:"li"},"valueDeserializationClass"))),(0,l.kt)("p",null,"Topic compaction and partition routing use the Pulsar key, that contains the Kafka key, and so they are driven by the same value that you have on Kafka."),(0,l.kt)("p",null,"When you consume data from Pulsar topics, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"KeyValue")," schema. In this way, you can decode the data properly. If you want to access the raw key, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"Message#getKeyBytes()")," API."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("p",null,"Before using the Kafka source connector, you need to create a configuration file through one of the following methods."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"JSON"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'\n  {\n    "bootstrapServers": "pulsar-kafka:9092",\n    "groupId": "test-pulsar-io",\n    "topic": "my-topic",\n    "sessionTimeoutMs": "10000",\n    "autoCommitEnabled": false\n  }\n\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"YAML"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'\n  configs:\n    bootstrapServers: "pulsar-kafka:9092"\n    groupId: "test-pulsar-io"\n    topic: "my-topic"\n    sessionTimeoutMs: "10000"\n      autoCommitEnabled: false\n\n')))),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"You can make the Kafka source connector as a Pulsar built-in connector and use it on a standalone cluster or an on-premises cluster."),(0,l.kt)("h3",{id:"standalone-cluster"},"Standalone cluster"),(0,l.kt)("p",null,"This example describes how to use the Kafka source connector to feed data from Kafka and write data to Pulsar topics in the standalone mode."),(0,l.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install ",(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker"),"(Community Edition).")),(0,l.kt)("h4",{id:"steps"},"Steps"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download and start the Confluent Platform.")),(0,l.kt)("p",null,"For details, see the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/quickstart/ce-docker-quickstart.html#step-1-download-and-start-cp"},"documentation")," to install the Kafka service locally."),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Pull a Pulsar image and start Pulsar in standalone mode."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker pull apachepulsar/pulsar:latest\n\ndocker run -d -it -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-kafka-standalone apachepulsar/pulsar:latest bin/pulsar standalone\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a producer file ",(0,l.kt)("em",{parentName:"p"},"kafka-producer.py"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom kafka import KafkaProducer\nproducer = KafkaProducer(bootstrap_servers='localhost:9092')\nfuture = producer.send('my-topic', b'hello world')\nfuture.get()\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a consumer file ",(0,l.kt)("em",{parentName:"p"},"pulsar-client.py"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic', subscription_name='my-aa')\n\nwhile True:\n    msg = consumer.receive()\n    print msg\n    print dir(msg)\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy the following files to Pulsar."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker cp pulsar-io-kafka.nar pulsar-kafka-standalone:/pulsar\ndocker cp kafkaSourceConfig.yaml pulsar-kafka-standalone:/pulsar/conf\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a new terminal window and start the Kafka source connector in local run mode."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\ndocker exec -it pulsar-kafka-standalone /bin/bash\n\n./bin/pulsar-admin source localrun \\\n--archive ./pulsar-io-kafka.nar \\\n--tenant public \\\n--namespace default \\\n--name kafka \\\n--destination-topic-name my-topic \\\n--source-config-file ./conf/kafkaSourceConfig.yaml \\\n--parallelism 1\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a new terminal window and run the Kafka producer locally."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\npython3 kafka-producer.py\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a new terminal window and run the Pulsar consumer locally."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\npython3 pulsar-client.py\n\n")))),(0,l.kt)("p",null,"The following information appears on the consumer terminal window."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"```bash\n\nReceived message: 'hello world'\n\n```\n")),(0,l.kt)("h3",{id:"on-premises-cluster"},"On-premises cluster"),(0,l.kt)("p",null,"This example explains how to create a Kafka source connector in an on-premises cluster."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy the NAR package of the Kafka connector to the Pulsar connectors directory."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\ncp pulsar-io-kafka-{{connector:version}}.nar $PULSAR_HOME/connectors/pulsar-io-kafka-{{connector:version}}.nar\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Reload all ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/docs/en/next/io-connectors/"},"built-in connectors"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\nPULSAR_HOME/bin/pulsar-admin sources reload\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Check whether the Kafka source connector is available on the list or not."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\nPULSAR_HOME/bin/pulsar-admin sources available-sources\n\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a Kafka source connector on a Pulsar cluster using the ",(0,l.kt)("a",{parentName:"p",href:"http://pulsar.apache.org/tools/pulsar-admin/2.10.0-SNAPSHOT/#-em-create-em--14"},(0,l.kt)("inlineCode",{parentName:"a"},"pulsar-admin sources create"))," command."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"\nPULSAR_HOME/bin/pulsar-admin sources create \\\n--source-config-file <kafka-source-config.yaml>\n\n")))))}k.isMDXComponent=!0}}]);