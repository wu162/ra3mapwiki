import{_ as s,V as t,W as p,X as a,Z as i,$ as e,a0 as g,Y as l,C as o}from"./framework-0db74b66.js";const c="/ra3mapwiki/assets/img-f1e3939e.png",m="/ra3mapwiki/assets/img_1-5e4ceb32.png",r="/ra3mapwiki/assets/img_2-3f694b67.png",u="/ra3mapwiki/assets/img_3-a52edc58.png",_="/ra3mapwiki/assets/img_4-8135c622.png",d="/ra3mapwiki/assets/img_5-8c8ed62b.png",f="/ra3mapwiki/assets/img_6-b2ab236e.png",k="/ra3mapwiki/assets/img_7-27e84576.png",b="/ra3mapwiki/assets/img_8-32e6cbe8.png",x="/ra3mapwiki/assets/img_9-6fadb6b8.png",h="/ra3mapwiki/assets/img_10-5b082129.png",v="/ra3mapwiki/assets/img_11-e4903939.png",y={},w=l('<h1 id="添加自定义战役进官方战役里" tabindex="-1"><a class="header-anchor" href="#添加自定义战役进官方战役里" aria-hidden="true">#</a> 添加自定义战役进官方战役里</h1><blockquote><p>作者：物wu</p></blockquote><blockquote><p>其实就是替换官方战役，需要有mod制作的基础知识</p></blockquote><p>请先确保你有一下基础：</p><ul><li>会做一张像样的遭遇战战役地图，包括玩家列表的更改，会添加脚本，对脚本比较了解</li><li>有一些制作mod的基础，比如添加地图进mod，会修改一些局部数据</li></ul><p>关键的xml：CampaignTemplates.xml和MapMetaData.xml</p><p>修改如下</p><figure><img src="'+c+'" alt="img.png" tabindex="0" loading="lazy"><figcaption>img.png</figcaption></figure><p>第一个是修改地图名字，第二个是修改任务目标，这里我新建了3个新的任务目标，具体内容可到gamestrings.csf里修改</p><figure><img src="'+m+`" alt="img_1.png" tabindex="0" loading="lazy"><figcaption>img_1.png</figcaption></figure><p>这些地方也需做修改，startposition和borderSize这些数值可到自己地图里的map.xml里搜索MapMetaData看到</p><p>要在MapMetaData.xml里注册CampaignTemplates，也就是在MapMetaData.xml里面添加以下代码：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Includes</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Include</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>all<span class="token punctuation">&quot;</span></span> <span class="token attr-name">source</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CampaignTemplates.xml<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Includes</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后弄放好源码和地图</p><figure><img src="`+r+'" alt="img_2.png" tabindex="0" loading="lazy"><figcaption>img_2.png</figcaption></figure><figure><img src="'+u+'" alt="img_3.png" tabindex="0" loading="lazy"><figcaption>img_3.png</figcaption></figure><figure><img src="'+_+'" alt="img_4.png" tabindex="0" loading="lazy"><figcaption>img_4.png</figcaption></figure><p>到这里，添加战役的主题流程就已基本结束</p><p>剩下的是一些地图设置和ai等等的细节</p><p>官方战役地图的玩家列表和脚本和遭遇战的有些不同</p><p>首先是玩家列表</p><figure><img src="'+d+'" alt="img_5.png" tabindex="0" loading="lazy"><figcaption>img_5.png</figcaption></figure><ul><li>这个选项决定了是否为电脑控制，官方战役里，除了主指挥官外，其他玩家都应该勾选，包括副官</li><li>这里选择阵营颜色以及雷达显示的颜色，</li><li>这里必须选择与该玩家符合的阵营名称，如不选则雷达将一直处于关闭状态</li><li>这里选择敌友关系</li><li>电脑控制的玩家这里要选择一个性格，不能是DefaultPersonality，至于应该如何选择，后面再说</li></ul><p>战役里玩家名字可以任意起，只要按照上一楼的规则来就行</p><p>关于让电脑会使用建筑和部队，遭遇战里的transfer脚本已经没用，要用以下这条脚本</p><figure><img src="'+f+'" alt="img_6.png" tabindex="0" loading="lazy"><figcaption>img_6.png</figcaption></figure><p>并且，每当有新的建筑要让ai使用，就要加这条脚本</p><p>需要注意的是，这条脚本会让ai使用所有已经在地图上属于他的东西，包括地图外的要进攻的单位，所以，若</p><p>要让地图外的电脑单位按照脚本进攻，就必须再设置一个玩家，这个玩家专门控制这些进攻部队</p><p>现在说一下ai问题，编辑器的玩家列表那里可以选择ai性格基本都只会防守，所以，若要让ai按照预定的方式进攻，就得自己设计ai</p><p>以设计一个盟军ai为例</p><p>步骤如下：</p><p>1</p><figure><img src="'+k+'" alt="img_7.png" tabindex="0" loading="lazy"><figcaption>img_7.png</figcaption></figure><p>先要复制这5个文件到自己的mod文件夹里</p><p>2.然后打开AlliedCoopBaseSkirmishPersonality.xml，用这个做模板做新的ai，修改他的继承和id</p><figure><img src="'+b+'" alt="img_8.png" tabindex="0" loading="lazy"><figcaption>img_8.png</figcaption></figure><p>id可以自己随便起个名字</p><p>3</p><figure><img src="'+x+'" alt="img_9.png" tabindex="0" loading="lazy"><figcaption>img_9.png</figcaption></figure>',40),z=a("p",null,"Unit Preferences下面是调节这个ai喜欢出哪些单位",-1),q=a("p",null,"关于进攻策略，不能只是修改策略文件的内容而不修改策略的id，这样会导致闪退，策略文件的位置如下",-1),M=a("figure",null,[a("img",{src:h,alt:"img_10.png",tabindex:"0",loading:"lazy"}),a("figcaption",null,"img_10.png")],-1),C=a("p",null,"最后说一点注意：地图里不要出现中文！！！非常重要，否则地图打包不会成功",-1),S=a("p",null,"最后放个替换成功的截图",-1),D=a("figure",null,[a("img",{src:v,alt:"img_11.png",tabindex:"0",loading:"lazy"}),a("figcaption",null,"img_11.png")],-1);function V(B,N){const n=o("Side");return t(),p("div",null,[w,a("p",null,[i("必须加上"),e(n,null,{default:g(()=>[i("Allies")]),_:1}),i("这行代码，然后Main Offensive States下面是这个ai的进攻策略，")]),z,q,M,C,S,D])}const I=s(y,[["render",V],["__file","index.html.vue"]]);export{I as default};