$wnd.GwtBootstrap3Demo.runAsyncCallback40("function fNc(){}\nfunction jNc(){}\nfunction lNc(){}\nfunction mNc(){mNc=Qdb;iNc=new lNc}\nfunction usc(a){ivb.call(this,a);tsc(this)}\nfunction eNc(){tGb.call(this);rGb(this,gNc(new hNc))}\nfunction $Mc(a,b,c){FFb();bGb.call(this,a,b,c,(Qsc(),Psc))}\nfunction hNc(){this.a=(new jNc,mNc(),iNc);kNc(this.a)}\nfunction IRc(a){var b;if(!a.M){b=new eNc(new fNc);a.M=b}return a.M}\nfunction HRc(a){var b;if(!a.L){b=new $Mc(eFb(IGb(a.a)),IRc(a),GRc(a));xFb((LGb(a.a),b),XGb(LGb(a.a)));a.L=b}return a.L}\nfunction kNc(a){if(!a.a){a.a=true;bv((nB(),'.GPBYFDEBM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECM{margin-top:0 !important;}.GPBYFDEDM{margin-left:5px;}'));return true}return false}\nfunction gNc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new f2b;AXb(a,(b=new TZb(iBd),AXb(b,(c=new L0b,c.a='Offline',K0b(c),c)),AXb(b,(d=new GYb,AXb(d,(e=new F$b((Fac(),Cac)),Thb((npb(),e.eb),'GPBYFDECM',true),Isc(e.b,vHd),BXb(e,e.b,0),e)),AXb(d,new Csc((j=new NMb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new Kfb(j.a)).a)),AXb(d,(f=new KXc,W1b(f,(k=new NMb,k.a+=wHd,new Kfb(k.a)).a),Thb(f.eb,nBd,true),f)),AXb(d,new Csc((l=new NMb,l.a+=xHd,new Kfb(l.a)).a)),AXb(d,(g=new KXc,W1b(g,(m=new NMb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new Kfb(m.a)).a),Thb(g.eb,nBd,true),g)),Thb(d.eb,'GPBYFDEBM',true),d)),AXb(b,(h=new Y0b,AXb(h,(n=new l1b,AXb(n,(o=new F$b(Bac),Isc(o.b,'What is Offline?'),BXb(o,o.b,0),o)),n)),AXb(h,(p=new $0b,AXb(p,new usc((q=new NMb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new Kfb(q.a)).a)),p)),AXb(h,new i1b),h)),AXb(b,(i=new Y0b,AXb(i,(r=new l1b,AXb(r,(s=new F$b(Bac),Isc(s.b,'How to configure?'),BXb(s,s.b,0),s)),r)),AXb(i,(t=new $0b,AXb(t,new Csc((u=new NMb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new Kfb(u.a)).a)),AXb(t,(v=new KXc,W1b(v,(w=new NMb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new Kfb(w.a)).a),Thb(v.eb,nBd,true),v)),AXb(t,new Csc((A=new NMb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new Kfb(A.a)).a)),AXb(t,(B=new KXc,W1b(B,(C=new NMb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new Kfb(C.a)).a),Thb(B.eb,nBd,true),B)),AXb(t,new Csc((D=new NMb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new Kfb(D.a)).a)),AXb(t,(F=new KXc,W1b(F,(G=new NMb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new Kfb(G.a)).a),Thb(F.eb,nBd,true),F)),t)),AXb(i,new i1b),i)),b));return a}\nPdb(404,231,xzd,usc);Pdb(969,49,eyd,$Mc);var v3=bLb($Ad,'OfflinePresenter',969);Pdb(1210,53,fyd,eNc);var A3=bLb($Ad,'OfflineView',1210);Pdb(1447,1,{},fNc);var z3=bLb($Ad,'OfflineView_BinderImpl',1447);Pdb(1448,1,{},hNc);var w3=bLb($Ad,'OfflineView_BinderImpl/Widgets',1448);Pdb(1793,1,{},jNc);var iNc;var y3=bLb($Ad,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator',1793);Pdb(1794,1,{},lNc);_.a=false;var x3=bLb($Ad,'OfflineView_BinderImpl_GenBundle_fr_InlineClientBundleGenerator/1',1794);Pdb(893,1,wAd);_.Sb=function eSc(){oIb(this.b,HRc(this.a.a))};Dvd(Lm)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")