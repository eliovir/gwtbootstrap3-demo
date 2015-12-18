$wnd.GwtBootstrap3Demo.runAsyncCallback40("function RKc(){}\nfunction VKc(){}\nfunction XKc(){}\nfunction YKc(){YKc=Zbb;UKc=new XKc}\nfunction vqc(a){gtb.call(this,a);uqc(this)}\nfunction QKc(){vEb.call(this);tEb(this,SKc(new TKc))}\nfunction KKc(a,b,c){HDb();dEb.call(this,a,b,c,(Qqc(),Pqc))}\nfunction TKc(){this.a=(new VKc,YKc(),UKc);WKc(this.a)}\nfunction XOc(a){var b;if(!a.M){b=new QKc(new RKc);a.M=b}return a.M}\nfunction WOc(a){var b;if(!a.L){b=new KKc(gDb(KEb(a.a)),XOc(a),VOc(a));zDb((NEb(a.a),b),ZEb(NEb(a.a)));a.L=b}return a.L}\nfunction WKc(a){if(!a.a){a.a=true;fv((nB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction SKc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new f0b;CVb(a,(b=new UXb(xsd),CVb(b,(c=new L$b,c.a='Offline',K$b(c),c)),CVb(b,(d=new HWb,CVb(d,(e=new GYb((H8b(),E8b)),bgb(e.eb,'GPBYFDECM',true),Iqc(e.b,Jyd),DVb(e,e.b,0),e)),CVb(d,new Cqc((j=new NKb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Xdb(j.a)).a)),CVb(d,(f=new ZUc,W_b(f,(k=new NKb,k.a+=Kyd,new Xdb(k.a)).a),bgb(f.eb,Csd,true),f)),CVb(d,new Cqc((l=new NKb,l.a+=Lyd,new Xdb(l.a)).a)),CVb(d,(g=new ZUc,W_b(g,(m=new NKb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Xdb(m.a)).a),bgb(g.eb,Csd,true),g)),bgb(d.eb,'GPBYFDEBM',true),d)),CVb(b,(h=new Y$b,CVb(h,(n=new l_b,CVb(n,(o=new GYb(D8b),Iqc(o.b,'What is Offline?'),DVb(o,o.b,0),o)),n)),CVb(h,(p=new $$b,CVb(p,new vqc((q=new NKb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Xdb(q.a)).a)),p)),CVb(h,new i_b),h)),CVb(b,(i=new Y$b,CVb(i,(r=new l_b,CVb(r,(s=new GYb(D8b),Iqc(s.b,'How to configure?'),DVb(s,s.b,0),s)),r)),CVb(i,(t=new $$b,CVb(t,new Cqc((u=new NKb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Xdb(u.a)).a)),CVb(t,(v=new ZUc,W_b(v,(w=new NKb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Xdb(w.a)).a),bgb(v.eb,Csd,true),v)),CVb(t,new Cqc((A=new NKb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Xdb(A.a)).a)),CVb(t,(B=new ZUc,W_b(B,(C=new NKb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Xdb(C.a)).a),bgb(B.eb,Csd,true),B)),CVb(t,new Cqc((D=new NKb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Xdb(D.a)).a)),CVb(t,(F=new ZUc,W_b(F,(G=new NKb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Xdb(G.a)).a),bgb(F.eb,Csd,true),F)),t)),CVb(i,new i_b),i)),b));return a}\nYbb(396,226,Jqd,vqc);Ybb(918,48,qpd,KKc);var M2=cJb(ksd,'OfflinePresenter',918);Ybb(1156,51,rpd,QKc);var R2=cJb(ksd,'OfflineView',1156);Ybb(1392,1,{},RKc);var Q2=cJb(ksd,'OfflineView_BinderImpl',1392);Ybb(1393,1,{},TKc);var N2=cJb(ksd,'OfflineView_BinderImpl/Widgets',1393);Ybb(1723,1,{},VKc);var UKc;var P2=cJb(ksd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1723);Ybb(1724,1,{},XKc);_.a=false;var O2=cJb(ksd,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1724);Ybb(842,1,Hrd);_.Sb=function tPc(){qGb(this.b,WOc(this.a.a))};Xmd(Im)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
