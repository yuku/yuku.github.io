(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{3074:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var r=a(809),n=a.n(r),o=a(5311),s=a(5893),i=(a(7294),a(7871)),p=a(6265),l=a(8347),c=a(3905);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){(0,p.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={};function h(e){var t=e.components,a=(0,l.Z)(e,["components"]);return(0,c.kt)("wrapper",u(u(u({},d),a),{},{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Pyspark 2.4.1 provides two packages for machine learning, ",(0,c.kt)("a",u({parentName:"p"},{href:"https://spark.apache.org/docs/2.4.1/api/python/pyspark.ml.html"}),(0,c.kt)("inlineCode",{parentName:"a"},"pyspark.ml"))," and ",(0,c.kt)("a",u({parentName:"p"},{href:"https://spark.apache.org/docs/2.4.1/api/python/pyspark.mllib.html"}),(0,c.kt)("inlineCode",{parentName:"a"},"pyspark.mllib")),"."),(0,c.kt)("p",null,"When there are two packages for similar purposes, one of them may have a more primitive implementation with finer control, while it may be too flexible and difficult to use, thus the other one wraps it for ease of use. However, it seems that we are in the process of transitioning from ",(0,c.kt)("inlineCode",{parentName:"p"},"pyspark.mllib")," to ",(0,c.kt)("inlineCode",{parentName:"p"},"pyspark.ml"),"."),(0,c.kt)("h2",null,"RDD \u2192 DataFrame / Dataset"),(0,c.kt)("p",null,"Spark internally distributes a data structure called RDD (Resilient Distributed Dataset) across a cluster while processing. Since RDD does not need to be structured, it can contain whatever kind of data, for example media streams."),(0,c.kt)("p",null,"On the other hand, most of the data targeted by distributed processing tasks have some kind of structure. For example, in a two-dimensional matrix operation, each piece of data can be represented by three sets of rows, columns, and values. There is room for optimization here, and a new data structure called DataFrame / Dataset has been built on top of RDD."),(0,c.kt)("p",null,"Dataset can not only handle structured data, but can also be categorized into strongly typed and untyped APIs, with the untyped API being called a DataFrame. As you can see from the name, it has a similar structure to Pandas' DataFrame, and since Python does not have compile-time type safety, you can use only DataFrame."),(0,c.kt)("p",null,"Using a DataFrame not only reduces memory usage and improves performance, but also increases productivity by using more abstract functions, and allows you to display your data neatly in a tabular format in a Jupyter Notebook."),(0,c.kt)("h2",null,"pyspark.mllib \u2192 pyspark.ml"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"pyspark.mllib")," and ",(0,c.kt)("inlineCode",{parentName:"p"},"pyspark.ml")," provide APIs based on RDD and DataFrame, respectively."),(0,c.kt)("p",null,"Since machine learning algorithms are often formulated as matrix operations, they are a perfect fit for DataFrame replacement."),(0,c.kt)("p",null,"It seems ",(0,c.kt)("inlineCode",{parentName:"p"},"pyspark.mllib")," is already in maintenance mode and will be deprecated in Spark 3.0, so you should use ",(0,c.kt)("inlineCode",{parentName:"p"},"pyspark.ml"),"."),(0,c.kt)("h2",null,"See also"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",u({parentName:"li"},{href:"https://databricks.com/blog/2016/07/14/a-tale-of-three-apache-spark-apis-rdds-dataframes-and-datasets.html"}),"RDD vs DataFrames and Datasets: A Tale of Three Apache Spark APIs")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",u({parentName:"li"},{href:"https://techvidvan.com/tutorials/apache-spark-rdd-vs-datasets/"}),"Comparison between RDD vs DataSets- Apache Spark \u2013 TechVidvan"))))}h.isMDXComponent=!0;var k=function(e){var t=e.meta;return(0,s.jsx)(i.i,{meta:t,children:(0,s.jsx)(h,{})})};k.getInitialProps=(0,o.Z)(n().mark((function e(){var t,r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a(405),r=t.entries,e.abrupt("return",{meta:r["blog/2019/04/pyspark-ml-vs-mllib"]});case 2:case"end":return e.stop()}}),e)})));var f=k},3073:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2019/04/pyspark-ml-vs-mllib",function(){return a(3074)}])}},function(e){e.O(0,[885,663,774,888,179],(function(){return t=3073,e(e.s=t);var t}));var t=e.O();_N_E=t}]);