$wnd.GwtBootstrap3Demo.runAsyncCallback40("function DJc(){}\nfunction HJc(){}\nfunction JJc(){}\nfunction KJc(){KJc=cbb;GJc=new JJc}\nfunction hpc(a){ksb.call(this,a);gpc(this)}\nfunction CJc(){zDb.call(this);xDb(this,EJc(new FJc))}\nfunction wJc(a,b,c){LCb();hDb.call(this,a,b,c,(Cpc(),Bpc))}\nfunction FJc(){this.a=(new HJc,KJc(),GJc);IJc(this.a)}\nfunction JNc(a){var b;if(!a.M){b=new CJc(new DJc);a.M=b}return a.M}\nfunction INc(a){var b;if(!a.L){b=new wJc(kCb(ODb(a.a)),JNc(a),HNc(a));DCb((RDb(a.a),b),bEb(RDb(a.a)));a.L=b}return a.L}\nfunction IJc(a){if(!a.a){a.a=true;ev((QA(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction EJc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new Y$b;BUb(a,(b=new TWb(mrd),BUb(b,(c=new KZb,c.a='Offline',JZb(c),c)),BUb(b,(d=new GVb,BUb(d,(e=new FXb((N7b(),K7b)),gfb(e.eb,'GPBYFDECM',true),upc(e.b,sxd),CUb(e,e.b,0),e)),BUb(d,new opc((j=new RJb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new adb(j.a)).a)),BUb(d,(f=new LTc,N$b(f,(k=new RJb,k.a+=txd,new adb(k.a)).a),gfb(f.eb,rrd,true),f)),BUb(d,new opc((l=new RJb,l.a+=uxd,new adb(l.a)).a)),BUb(d,(g=new LTc,N$b(g,(m=new RJb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new adb(m.a)).a),gfb(g.eb,rrd,true),g)),gfb(d.eb,'GPBYFDEBM',true),d)),BUb(b,(h=new XZb,BUb(h,(n=new k$b,BUb(n,(o=new FXb(J7b),upc(o.b,'What is Offline?'),CUb(o,o.b,0),o)),n)),BUb(h,(p=new ZZb,BUb(p,new hpc((q=new RJb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new adb(q.a)).a)),p)),BUb(h,new h$b),h)),BUb(b,(i=new XZb,BUb(i,(r=new k$b,BUb(r,(s=new FXb(J7b),upc(s.b,'How to configure?'),CUb(s,s.b,0),s)),r)),BUb(i,(t=new ZZb,BUb(t,new opc((u=new RJb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new adb(u.a)).a)),BUb(t,(v=new LTc,N$b(v,(w=new RJb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new adb(w.a)).a),gfb(v.eb,rrd,true),v)),BUb(t,new opc((A=new RJb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new adb(A.a)).a)),BUb(t,(B=new LTc,N$b(B,(C=new RJb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new adb(C.a)).a),gfb(B.eb,rrd,true),B)),BUb(t,new opc((D=new RJb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new adb(D.a)).a)),BUb(t,(F=new LTc,N$b(F,(G=new RJb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new adb(G.a)).a),gfb(F.eb,rrd,true),F)),t)),BUb(i,new h$b),i)),b));return a}\nbbb(398,226,ypd,hpc);bbb(919,48,god,wJc);var Q1=gIb(_qd,'OfflinePresenter',919);bbb(1157,51,hod,CJc);var V1=gIb(_qd,'OfflineView',1157);bbb(1393,1,{},DJc);var U1=gIb(_qd,'OfflineView_BinderImpl',1393);bbb(1394,1,{},FJc);var R1=gIb(_qd,'OfflineView_BinderImpl/Widgets',1394);bbb(1724,1,{},HJc);var GJc;var T1=gIb(_qd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1724);bbb(1725,1,{},JJc);_.a=false;var S1=gIb(_qd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1725);bbb(843,1,wqd);_.Sb=function fOc(){uFb(this.b,INc(this.a.a))};Old(Im)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")