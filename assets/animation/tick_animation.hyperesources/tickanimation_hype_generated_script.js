//	HYPE.documents["tick_animation"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="tick_animation.hyperesources",f="tick_animation",g="tickanimation_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/tickanimation_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=null==navigator.userAgentData&&navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_740F||null!=window.HYPE_dtl_740F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-740.full.min.js":"HYPE-740.thin.min.js";c=!0==d?"F":"T";
d=d?"":"";if(false==!1&&(a=k("HYPE_740"+c,"HYPE_dtl_740"+c,a,d),true==!0&&(a=a||k("HYPE_w_740","HYPE_wdtl_740","HYPE-740.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_740","HYPE-740.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=
document.getElementsByTagName("div"),b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_740"+c](f,g,{"-1":{n:"PIE.htc"},"-2":{n:"blank.gif"}},
l,[],e,[{n:"Untitled Scene",o:"1",X:[0]}],[{o:"3",p:"600px",cA:false,Y:80,Z:80,L:[],c:"#F8F8F8",bY:1,d:80,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:0.22,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0.06,z:0.16,i:"dN",e:1,s:0,o:"13"},{y:0.22,i:"dN",s:1,z:0,o:"13",f:"c"}],f:30,b:[]}},bZ:180,O:["14","13"],n:"Untitled Layout","_":0,v:{"14":{c:72,d:72,I:"Solid",J:"Solid",K:"Solid",g:"rgba(232, 235, 237, 0.000)",L:"Solid",M:4,N:4,aI:"50%",A:"#25615B",x:"visible",j:"absolute",B:"#25615B",P:4,O:4,C:"#25615B",z:1,aJ:"50%",D:"#25615B",aK:"50%",k:"div",a:0,aL:"50%",b:0},"13":{g:"rgba(232, 235, 237, 0.000)",cW:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"2"}]},dF:"round",x:"visible",a:13,b:17,j:"absolute",z:3,dC:{path:[[4,28,4,28,18,42,18,42],[18,42,18,42,50,4,50,4]],closed:false},k:"div",d:46,c:54,dD:4,aP:"default",dN:0,dE:"#25615B",bD:"none"}}}],{},h,{},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
