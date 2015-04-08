$wnd.GwtBootstrap3Demo.runAsyncCallback38("function ozc(){}\nfunction szc(){}\nfunction uzc(){}\nfunction vzc(){vzc=n6;rzc=new uzc}\nfunction nzc(){ryb(this,pzc(new qzc))}\nfunction Lgc(a){gnb.call(this,a);Kgc(this)}\nfunction hzc(a,b,c){Ixb();cyb.call(this,a,b,c,(ehc(),dhc))}\nfunction qzc(){this.a=(new szc,vzc(),rzc);tzc(this.a)}\nfunction cCc(a){var b;if(!a.F){b=new nzc(new ozc);a.F=b}return a.F}\nfunction bCc(a){var b;if(!a.D){b=new hzc(hxb(Gyb(a.a)),cCc(a),aCc(a));Axb((Jyb(a.a),b),Vyb(Jyb(a.a)));a.D=b}return a.D}\nfunction tzc(a){if(!a.a){a.a=true;uu((wA(),'.GPBYFDEHL{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEIL{margin-top:0 !important;}.GPBYFDEJL{margin-left:5px;}'));return true}return false}\nfunction pzc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new NUb;UOb(a,(b=new cRb(E2c),UOb(b,(c=new GTb,c.a='Offline',FTb(c),c)),UOb(b,(d=new RPb,UOb(d,(e=new NRb((e1b(),b1b)),oab((Ihb(),e.db),'GPBYFDEIL',true),Ygc(e.b,v8c),VOb(e,e.b,0),e)),UOb(d,new Sgc((j=new yEb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new l8(j.a)).a)),UOb(d,(f=new WHc,EUb(f,(k=new yEb,k.a+=w8c,new l8(k.a)).a),oab(f.db,J2c,true),f)),UOb(d,new Sgc((l=new yEb,l.a+=x8c,new l8(l.a)).a)),UOb(d,(g=new WHc,EUb(g,(m=new yEb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new l8(m.a)).a),oab(g.db,J2c,true),g)),oab(d.db,'GPBYFDEHL',true),d)),UOb(b,(h=new STb,UOb(h,(n=new fUb,UOb(n,(o=new NRb(a1b),Ygc(o.b,'What is Offline?'),VOb(o,o.b,0),o)),n)),UOb(h,(p=new UTb,UOb(p,new Lgc((q=new yEb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new l8(q.a)).a)),p)),UOb(h,new cUb),h)),UOb(b,(i=new STb,UOb(i,(r=new fUb,UOb(r,(s=new NRb(a1b),Ygc(s.b,'How to configure?'),VOb(s,s.b,0),s)),r)),UOb(i,(t=new UTb,UOb(t,new Sgc((u=new yEb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new l8(u.a)).a)),UOb(t,(v=new WHc,EUb(v,(w=new yEb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new l8(w.a)).a),oab(v.db,J2c,true),v)),UOb(t,new Sgc((A=new yEb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new l8(A.a)).a)),UOb(t,(B=new WHc,EUb(B,(C=new yEb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new l8(C.a)).a),oab(B.db,J2c,true),B)),UOb(t,new Sgc((D=new yEb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new l8(D.a)).a)),UOb(t,(F=new WHc,EUb(F,(G=new yEb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new l8(G.a)).a),oab(F.db,J2c,true),F)),t)),UOb(i,new cUb),i)),b));return a}\nm6(364,234,Z0c,Lgc);m6(812,47,O_c,hzc);var z_=RCb(u2c,'OfflinePresenter',812);m6(1034,P_c,Q_c,nzc);var E_=RCb(u2c,'OfflineView',1034);m6(1237,1,{},ozc);var D_=RCb(u2c,'OfflineView_BinderImpl',1237);m6(1238,1,{},qzc);var A_=RCb(u2c,'OfflineView_BinderImpl/Widgets',1238);m6(1523,1,{},szc);var rzc;var C_=RCb(u2c,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1523);m6(1524,1,{},uzc);_.a=false;var B_=RCb(u2c,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1524);m6(738,1,W1c);_.Ob=function rDc(){dAb(this.b,bCc(this.a.a))};FZc(im)(38);\n//# sourceURL=GwtBootstrap3Demo-38.js\n")