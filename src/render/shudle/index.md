---
author: admin
comments: false
date: 2016-03-10 07:11:39+00:00
layout: page
slug: shudle
title: Расписание занятий
wordpress_id: 2767
---


<table cellpadding="0" border="2" cellspacing="0" id="mainTable" >
[insert_php]
nocache_headers();
echo implode(file("http://sh.2d-it.ru/latest.html"), "");  

[/insert_php]
</table>
