"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[858],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},48561:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=["components"],s={id:"deploy-dcos",title:"Deploy Pulsar on DC/OS",sidebar_label:"DC/OS"},i=void 0,p={unversionedId:"deploy-dcos",id:"deploy-dcos",title:"Deploy Pulsar on DC/OS",description:"To enable all built-in Pulsar IO connectors in your Pulsar deploymente, we recommend you use apachepulsar/pulsar-all image instead of apachepulsar/pulsar image; the former has already bundled all built-in connectors.",source:"@site/docs/deploy-dcos.md",sourceDirName:".",slug:"/deploy-dcos",permalink:"/zh-CN/docs/next/deploy-dcos",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/docs/deploy-dcos.md",tags:[],version:"current",frontMatter:{id:"deploy-dcos",title:"Deploy Pulsar on DC/OS",sidebar_label:"DC/OS"}},u=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Deploy Pulsar using the DC/OS command interface",id:"deploy-pulsar-using-the-dcos-command-interface",children:[],level:2},{value:"The BookKeeper group",id:"the-bookkeeper-group",children:[],level:2},{value:"The Pulsar broker group",id:"the-pulsar-broker-group",children:[],level:2},{value:"Monitor group",id:"monitor-group",children:[{value:"Prometheus",id:"prometheus",children:[],level:3},{value:"Grafana",id:"grafana",children:[],level:3}],level:2},{value:"Run a simple Pulsar consumer and producer on DC/OS",id:"run-a-simple-pulsar-consumer-and-producer-on-dcos",children:[{value:"Download and prepare the Pulsar Java tutorial",id:"download-and-prepare-the-pulsar-java-tutorial",children:[],level:3},{value:"Run the consumer and producer",id:"run-the-consumer-and-producer",children:[],level:3},{value:"View Grafana metric output",id:"view-grafana-metric-output",children:[],level:3}],level:2},{value:"Uninstall Pulsar",id:"uninstall-pulsar",children:[],level:2}],c={toc:u};function d(e){var t=e.components,s=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To enable all built-in ",(0,o.kt)("a",{parentName:"p",href:"io-overview"},"Pulsar IO")," connectors in your Pulsar deploymente, we recommend you use ",(0,o.kt)("inlineCode",{parentName:"p"},"apachepulsar/pulsar-all")," image instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"apachepulsar/pulsar")," image; the former has already bundled ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/next/io-overview#working-with-connectors"},"all built-in connectors"),"."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dcos.io/"},"DC/OS")," (the ",(0,o.kt)("strong",null,"D"),"ata",(0,o.kt)("strong",null,"C"),"enter ",(0,o.kt)("strong",null,"O"),"perating ",(0,o.kt)("strong",null,"S"),"ystem) is a distributed operating system for deploying and managing applications and systems on ",(0,o.kt)("a",{parentName:"p",href:"http://mesos.apache.org/"},"Apache Mesos"),". DC/OS is an open-source tool created and maintained by ",(0,o.kt)("a",{parentName:"p",href:"https://mesosphere.com/"},"Mesosphere"),"."),(0,o.kt)("p",null,"Apache Pulsar is available as a ",(0,o.kt)("a",{parentName:"p",href:"https://mesosphere.github.io/marathon/docs/application-groups.html"},"Marathon Application Group"),", which runs multiple applications as manageable sets."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You need to prepare your environment before running Pulsar on DC/OS."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"DC/OS version ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mesosphere.com/1.9/"},"1.9")," or higher")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mesosphere.com/1.9/installing/"},"DC/OS cluster")," with at least three agent nodes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mesosphere.com/1.9/cli/install/"},"DC/OS CLI tool")," installed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/deployment/dcos/PulsarGroups.json"},(0,o.kt)("inlineCode",{parentName:"a"},"PulsarGroups.json"))," configuration file from the Pulsar GitHub repo."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ curl -O https://raw.githubusercontent.com/apache/pulsar/master/deployment/dcos/PulsarGroups.json\n\n")))),(0,o.kt)("p",null,"Each node in the DC/OS-managed Mesos cluster must have at least:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"4 CPU"),(0,o.kt)("li",{parentName:"ul"},"4 GB of memory"),(0,o.kt)("li",{parentName:"ul"},"60 GB of total persistent disk")),(0,o.kt)("p",null,"Alternatively, you can change the configuration in ",(0,o.kt)("inlineCode",{parentName:"p"},"PulsarGroups.json")," accordingly to match your resources of the DC/OS cluster."),(0,o.kt)("h2",{id:"deploy-pulsar-using-the-dcos-command-interface"},"Deploy Pulsar using the DC/OS command interface"),(0,o.kt)("p",null,"You can deploy Pulsar on DC/OS using this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ dcos marathon group add PulsarGroups.json\n\n")),(0,o.kt)("p",null,"This command deploys Docker container instances in three groups, which together comprise a Pulsar cluster:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"3 bookies (1 ",(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/next/reference-terminology#bookie"},"bookie")," on each agent node and 1 ",(0,o.kt)("a",{parentName:"li",href:"http://bookkeeper.apache.org/docs/latest/admin/autorecovery/"},"bookie recovery")," instance)"),(0,o.kt)("li",{parentName:"ul"},"3 Pulsar ",(0,o.kt)("a",{parentName:"li",href:"/zh-CN/docs/next/reference-terminology#broker"},"brokers")," (1 broker on each node and 1 admin instance)"),(0,o.kt)("li",{parentName:"ul"},"1 ",(0,o.kt)("a",{parentName:"li",href:"http://prometheus.io/"},"Prometheus")," instance and 1 ",(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/"},"Grafana")," instance")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When you run DC/OS, a ZooKeeper cluster will be running at ",(0,o.kt)("inlineCode",{parentName:"p"},"master.mesos:2181"),", thus you do not have to install or start up ZooKeeper separately.")),(0,o.kt)("p",null,"After executing the ",(0,o.kt)("inlineCode",{parentName:"p"},"dcos")," command above, click the ",(0,o.kt)("strong",{parentName:"p"},"Services")," tab in the DC/OS ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mesosphere.com/latest/gui/"},"GUI interface"),", which you can access at ",(0,o.kt)("a",{parentName:"p",href:"http://m1.dcos"},"http://m1.dcos")," in this example. You should see several applications during the deployment."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DC/OS command executed",src:a(7515).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DC/OS command executed2",src:a(59385).Z})),(0,o.kt)("h2",{id:"the-bookkeeper-group"},"The BookKeeper group"),(0,o.kt)("p",null,"To monitor the status of the BookKeeper cluster deployment, click the ",(0,o.kt)("strong",{parentName:"p"},"bookkeeper")," group in the parent ",(0,o.kt)("strong",{parentName:"p"},"pulsar")," group."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DC/OS bookkeeper status",src:a(32504).Z})),(0,o.kt)("p",null,"At this point, the status of the 3 ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/next/reference-terminology#bookie"},"bookies")," are green, which means that the bookies have been deployed successfully and are running."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DC/OS bookkeeper running",src:a(84132).Z})),(0,o.kt)("p",null,"You can also click each bookie instance to get more detailed information, such as the bookie running log."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DC/OS bookie log",src:a(78370).Z})),(0,o.kt)("p",null,"To display information about the BookKeeper in ZooKeeper, you can visit ",(0,o.kt)("a",{parentName:"p",href:"http://m1.dcos/exhibitor"},"http://m1.dcos/exhibitor"),". In this example, 3 bookies are under the ",(0,o.kt)("inlineCode",{parentName:"p"},"available")," directory."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DC/OS bookkeeper in zk",src:a(61497).Z})),(0,o.kt)("h2",{id:"the-pulsar-broker-group"},"The Pulsar broker group"),(0,o.kt)("p",null,"Similar to the BookKeeper group above, click ",(0,o.kt)("strong",{parentName:"p"},"brokers")," to check the status of the Pulsar brokers."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DC/OS broker status",src:a(13286).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DC/OS broker running",src:a(56679).Z})),(0,o.kt)("p",null,"You can also click each broker instance to get more detailed information, such as the broker running log."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DC/OS broker log",src:a(88341).Z})),(0,o.kt)("p",null,"Broker cluster information in ZooKeeper is also available through the web UI. In this example, you can see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"loadbalance")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"managed-ledgers")," directories have been created."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DC/OS broker in zk",src:a(16745).Z})),(0,o.kt)("h2",{id:"monitor-group"},"Monitor group"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"monitory")," group consists of Prometheus and Grafana."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DC/OS monitor status",src:a(78853).Z})),(0,o.kt)("h3",{id:"prometheus"},"Prometheus"),(0,o.kt)("p",null,"Click the instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"prom")," to get the endpoint of Prometheus, which is ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.65.121:9090")," in this example."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DC/OS prom endpoint",src:a(90466).Z})),(0,o.kt)("p",null,"If you click that endpoint, you can see the Prometheus dashboard. All the bookies and brokers are listed on ",(0,o.kt)("a",{parentName:"p",href:"http://192.168.65.121:9090/targets"},"http://192.168.65.121:9090/targets"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DC/OS prom targets",src:a(78521).Z})),(0,o.kt)("h3",{id:"grafana"},"Grafana"),(0,o.kt)("p",null,"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"grafana")," to get the endpoint for Grafana, which is ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.65.121:3000")," in this example."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DC/OS grafana endpoint",src:a(90330).Z})),(0,o.kt)("p",null,"If you click that endpoint, you can access the Grafana dashboard."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DC/OS grafana targets",src:a(49853).Z})),(0,o.kt)("h2",{id:"run-a-simple-pulsar-consumer-and-producer-on-dcos"},"Run a simple Pulsar consumer and producer on DC/OS"),(0,o.kt)("p",null,"Now that you have a fully deployed Pulsar cluster, you can run a simple consumer and producer to show Pulsar on DC/OS in action."),(0,o.kt)("h3",{id:"download-and-prepare-the-pulsar-java-tutorial"},"Download and prepare the Pulsar Java tutorial"),(0,o.kt)("p",null,"You can clone a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/streamlio/pulsar-java-tutorial"},"Pulsar Java tutorial")," repo. This repo contains a simple Pulsar consumer and producer (you can find more information in the ",(0,o.kt)("inlineCode",{parentName:"p"},"README")," file in this repo)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ git clone https://github.com/streamlio/pulsar-java-tutorial\n\n")),(0,o.kt)("p",null,"Change the ",(0,o.kt)("inlineCode",{parentName:"p"},"SERVICE_URL")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar://localhost:6650")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar://a1.dcos:6650")," in both ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/streamlio/pulsar-java-tutorial/blob/master/src/main/java/tutorial/ConsumerTutorial.java"},(0,o.kt)("inlineCode",{parentName:"a"},"ConsumerTutorial.java"))," file and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/streamlio/pulsar-java-tutorial/blob/master/src/main/java/tutorial/ProducerTutorial.java"},(0,o.kt)("inlineCode",{parentName:"a"},"ProducerTutorial.java"))," file."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar://a1.dcos:6650")," endpoint is for the broker service. You can fetch the endpoint details for each broker instance from the DC/OS GUI. ",(0,o.kt)("inlineCode",{parentName:"p"},"a1.dcos")," is a DC/OS client agent that runs a broker, and you can replace it with the client agent IP address."),(0,o.kt)("p",null,"Now, you can change the message number from 10 to 10000000 in the main method in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/streamlio/pulsar-java-tutorial/blob/master/src/main/java/tutorial/ProducerTutorial.java"},(0,o.kt)("inlineCode",{parentName:"a"},"ProducerTutorial.java"))," file to produce more messages."),(0,o.kt)("p",null,"Then, you can compile the project code using the command below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ mvn clean package\n\n")),(0,o.kt)("h3",{id:"run-the-consumer-and-producer"},"Run the consumer and producer"),(0,o.kt)("p",null,"Execute this command to run the consumer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ mvn exec:java -Dexec.mainClass="tutorial.ConsumerTutorial"\n\n')),(0,o.kt)("p",null,"Execute this command to run the producer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\n$ mvn exec:java -Dexec.mainClass="tutorial.ProducerTutorial"\n\n')),(0,o.kt)("p",null,"You see that the producer is producing messages and the consumer is consuming messages through the DC/OS GUI."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DC/OS pulsar producer",src:a(92843).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DC/OS pulsar consumer",src:a(62703).Z})),(0,o.kt)("h3",{id:"view-grafana-metric-output"},"View Grafana metric output"),(0,o.kt)("p",null,"While the producer and consumer are running, you can access the running metrics from Grafana."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DC/OS pulsar dashboard",src:a(84929).Z})),(0,o.kt)("h2",{id:"uninstall-pulsar"},"Uninstall Pulsar"),(0,o.kt)("p",null,"You can shut down and uninstall the ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar")," application from DC/OS at any time in one of the following two ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the three dots at the right end of Pulsar group and choose ",(0,o.kt)("strong",{parentName:"p"},"Delete")," on the DC/OS GUI."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"DC/OS pulsar uninstall",src:a(58722).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the command below."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ dcos marathon group remove /pulsar\n\n")))))}d.isMDXComponent=!0},78370:function(e,t,a){t.Z=a.p+"assets/images/dcos_bookie_log-fde6f86884b7a184cb2938edafa6beb4.png"},61497:function(e,t,a){t.Z=a.p+"assets/images/dcos_bookkeeper_in_zookeeper-e7bb6e49a0a4531a6bf3ab040584a142.png"},84132:function(e,t,a){t.Z=a.p+"assets/images/dcos_bookkeeper_run-86a502879a6eb23519df95ad03cb7bcb.png"},32504:function(e,t,a){t.Z=a.p+"assets/images/dcos_bookkeeper_status-35b0e00bb98a7197dbab1a4f28e3f124.png"},16745:function(e,t,a){t.Z=a.p+"assets/images/dcos_broker_in_zookeeper-ebd85887a3c6dc76c6789744030aecd2.png"},88341:function(e,t,a){t.Z=a.p+"assets/images/dcos_broker_log-a3fd1035671e5d1a0d819ad892cf0cac.png"},56679:function(e,t,a){t.Z=a.p+"assets/images/dcos_broker_run-b00fb75fae76809180774d8eab91fd67.png"},13286:function(e,t,a){t.Z=a.p+"assets/images/dcos_broker_status-61b00a547048b71805aca8d4627f3d22.png"},7515:function(e,t,a){t.Z=a.p+"assets/images/dcos_command_execute-d9c06d76122ca2781ccc59c7ff4c9e3d.png"},59385:function(e,t,a){t.Z=a.p+"assets/images/dcos_command_execute2-fb42454bf26a1f30303104ef27c56d75.png"},62703:function(e,t,a){t.Z=a.p+"assets/images/dcos_consumer-007f4c668b3d19c351a4d95e755cb5c1.png"},49853:function(e,t,a){t.Z=a.p+"assets/images/dcos_grafana_dashboard-b7e18a783dd2aba213547239d450b2b2.png"},90330:function(e,t,a){t.Z=a.p+"assets/images/dcos_grafana_endpoint-0049ac82d448333d93ee80bf99824e30.png"},84929:function(e,t,a){t.Z=a.p+"assets/images/dcos_metrics-48ca960a972166bc4b51d7069f458278.png"},78853:function(e,t,a){t.Z=a.p+"assets/images/dcos_monitor_status-5892df5ca391d3b94645e13661a44dbc.png"},92843:function(e,t,a){t.Z=a.p+"assets/images/dcos_producer-d6f040c537d0eb2cdb57fbf2b6df5c47.png"},90466:function(e,t,a){t.Z=a.p+"assets/images/dcos_prom_endpoint-d9737c157b37712d993bc5cc301c0793.png"},78521:function(e,t,a){t.Z=a.p+"assets/images/dcos_prom_targets-067aeaed7d23b8bc14fc0a9ca007a6c5.png"},58722:function(e,t,a){t.Z=a.p+"assets/images/dcos_uninstall-5cf5889ea129f2f210acb61a3090c530.png"}}]);