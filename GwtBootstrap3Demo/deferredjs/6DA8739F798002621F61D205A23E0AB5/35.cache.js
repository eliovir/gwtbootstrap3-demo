function ykc(){}
function nkc(a,b,c){ekb.call(this,a,b,c,(QZb(),PZb))}
function Hkc(a){var b;if(!a.g){b=new wkc(new ykc);a.g=b}return a.g}
function Gkc(a){var b;if(!a.f){b=new nkc(njb(Kkb(a.a)),Hkc(a),Fkc(a));Fjb((Lkb(a.a),b),Wkb(Lkb(a.a)));a.f=b}return a.f}
function wkc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;ykb(this,(a=new _Eb,dyb(a,(b=new KAb(kAc),dyb(b,(c=new WDb,c.a='Project Setup',VDb(c),c.b='basic setup and using custom themes',VDb(c),c)),dyb(b,(d=new cEb,dyb(d,(i=new oEb,nEb(i,(j=new GBb(3),xFb(j.c,lAc),j)),i)),dyb(d,(k=new fEb,dyb(k,new tCb((n=new Tqb,Yn(n.a,'For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.'),new uZ(bo(n.a))).a)),dyb(k,(o=new Lpc,SEb(o,(p=new Tqb,Yn(p.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n'),new uZ(bo(p.a))).a),S_(o._,oAc,true),o)),k)),d)),dyb(b,(e=new cEb,dyb(e,(q=new oEb,nEb(q,(r=new GBb(3),xFb(r.c,'Bootstrap2 Look-a-like Setup'),r)),q)),dyb(e,(s=new fEb,dyb(s,new tCb((t=new Tqb,Yn(t.a,'For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.'),new uZ(bo(t.a))).a)),dyb(s,(u=new Lpc,SEb(u,(v=new Tqb,Yn(v.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n'),new uZ(bo(v.a))).a),S_(u._,oAc,true),u)),s)),e)),dyb(b,(f=new cEb,dyb(f,(w=new oEb,nEb(w,(x=new GBb(3),xFb(x.c,'Custom Theme'),x)),w)),dyb(f,(y=new fEb,dyb(y,new tCb((z=new Tqb,Yn(z.a,'1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.'),new uZ(bo(z.a))).a)),dyb(y,(A=new Lpc,SEb(A,(B=new Tqb,Yn(B.a,"&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n"),new uZ(bo(B.a))).a),S_(A._,oAc,true),A)),y)),f)),dyb(b,(g=new cEb,dyb(g,(C=new oEb,nEb(C,(D=new GBb(3),xFb(D.c,'Support for IE8'),D)),C)),dyb(g,(E=new fEb,dyb(E,new tCb((F=new Tqb,Yn(F.a,'For support for IE8 you need to inherit the Respond module into your *.gwt.xml.'),new uZ(bo(F.a))).a)),dyb(E,(G=new Lpc,SEb(G,(H=new Tqb,Yn(H.a,'&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.extras.respond.Respond"/&gt;\\n &lt;/module&gt;\\n'),new uZ(bo(H.a))).a),S_(G._,oAc,true),G)),E)),g)),b)),a))}
lY(1282,531,Fuc,nkc);lY(1285,536,Guc,wkc);lY(1286,1,{},ykc);lY(1293,1,gvc);_.vb=function Xkc(){nmb(this.b,Gkc(this.a.a))};var $T=hpb(Izc,'SetupPresenter',1282),aU=hpb(Izc,'SetupView',1285),_T=hpb(Izc,'SetupView_BinderImpl',1286);jvc(Em)(35);