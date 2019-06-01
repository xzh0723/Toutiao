
navigator = {
    // WT-JS_DEBUG v1.7.5 - NLiger2018
    appCodeName: "Mozilla",
    appMinorVersion: "0",
    appName: "Netscape",
    appVersion: "5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko",
    browserLanguage: "zh-CN",
    cookieEnabled: true,
    cpuClass: "x86",
    language: "zh-CN",
    maxTouchPoints: 0,
    msManipulationViewsEnabled: true,
    msMaxTouchPoints: 0,
    msPointerEnabled: true,
    onLine: true,
    platform: "Win32",
    pointerEnabled: true,
    product: "Gecko",
    systemLanguage: "zh-CN",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; InfoPath.3; rv:11.0) like Gecko",
    userLanguage: "zh-CN",
    vendor: "",
    vendorSub: "",
    webdriver: false
}, window = this, window.navigator = navigator;

(function anonymous() {
    function e(e, a, r) {
        return (b[e] || (b[e] = t("x,y", "return x " + e + " y")))(r, a)
    }
    function a(e, a, r) {
        return (k[r] || (k[r] = t("x,y", "return new x[y](" + Array(r + 1).join(",x[++y]").substr(1) + ")")))(e, a)
    }
    function r(e, a, r) {
        var n, t, s = {}, b = s.d = r ? r.d + 1 : 0;
        for (s["$" + b] = s,
        t = 0; t < b; t++)
            s[n = "$" + t] = r[n];
        for (t = 0,
        b = s.length = a.length; t < b; t++)
            s[t] = a[t];
        return c(e, 0, s)
    }
    function c(t, b, k) {
        function u(e) {
            v[x++] = e
        }
        function f() {
            return g = t.charCodeAt(b++) - 32,
            t.substring(b, b += g)
        }
        function l() {
            try {
                y = c(t, b, k)
            } catch (e) {
                h = e,
                y = l
            }
        }
        for (var h, y, d, g, v = [], x = 0; ; )
            switch (g = t.charCodeAt(b++) - 32) {
            case 1:
                u(!v[--x]);
                break;
            case 4:
                v[x++] = f();
                break;
            case 5:
                u(function(e) {
                    var a = 0
                      , r = e.length;
                    return function() {
                        var c = a < r;
                        return c && u(e[a++]),
                        c
                    }
                }(v[--x]));
                break;
            case 6:
                y = v[--x],
                u(v[--x](y));
                break;
            case 8:
                if (g = t.charCodeAt(b++) - 32,
                l(),
                b += g,
                g = t.charCodeAt(b++) - 32,
                y === c)
                    b += g;
                else if (y !== l)
                    return y;
                break;
            case 9:
                v[x++] = c;
                break;
            case 10:
                u(s(v[--x]));
                break;
            case 11:
                y = v[--x],
                u(v[--x] + y);
                break;
            case 12:
                for (y = f(),
                d = [],
                g = 0; g < y.length; g++)
                    d[g] = y.charCodeAt(g) ^ g + y.length;
                u(String.fromCharCode.apply(null, d));
                break;
            case 13:
                y = v[--x],
                h = delete v[--x][y];
                break;
            case 14:
                v[x++] = t.charCodeAt(b++) - 32;
                break;
            case 59:
                u((g = t.charCodeAt(b++) - 32) ? (y = x,
                v.slice(x -= g, y)) : []);
                break;
            case 61:
                u(v[--x][t.charCodeAt(b++) - 32]);
                break;
            case 62:
                g = v[--x],
                k[0] = 65599 * k[0] + k[1].charCodeAt(g) >>> 0;
                break;
            case 65:
                h = v[--x],
                y = v[--x],
                v[--x][y] = h;
                break;
            case 66:
                u(e(t[b++], v[--x], v[--x]));
                break;
            case 67:
                y = v[--x],
                d = v[--x],
                u((g = v[--x]).x === c ? r(g.y, y, k) : g.apply(d, y));
                break;
            case 68:
                u(e((g = t[b++]) < "<" ? (b--,
                f()) : g + g, v[--x], v[--x]));
                break;
            case 70:
                u(!1);
                break;
            case 71:
                v[x++] = n;
                break;
            case 72:
                v[x++] = +f();
                break;
            case 73:
                u(parseInt(f(), 36));
                break;
            case 75:
                if (v[--x]) {
                    b++;
                    break
                }
            case 74:
                g = t.charCodeAt(b++) - 32 << 16 >> 16,
                b += g;
                break;
            case 76:
                u(k[t.charCodeAt(b++) - 32]);
                break;
            case 77:
                y = v[--x],
                u(v[--x][y]);
                break;
            case 78:
                g = t.charCodeAt(b++) - 32,
                u(a(v, x -= g + 1, g));
                break;
            case 79:
                g = t.charCodeAt(b++) - 32,
                u(k["$" + g]);
                break;
            case 81:
                h = v[--x],
                v[--x][f()] = h;
                break;
            case 82:
                u(v[--x][f()]);
                break;
            case 83:
                h = v[--x],
                k[t.charCodeAt(b++) - 32] = h;
                break;
            case 84:
                v[x++] = !0;
                break;
            case 85:
                v[x++] = void 0;
                break;
            case 86:
                u(v[x - 1]);
                break;
            case 88:
                h = v[--x],
                y = v[--x],
                v[x++] = h,
                v[x++] = y;
                break;
            case 89:
                u(function() {
                    function e() {
                        return r(e.y, arguments, k)
                    }
                    return e.y = f(),
                    e.x = c,
                    e
                }());
                break;
            case 90:
                v[x++] = null;
                break;
            case 91:
                v[x++] = h;
                break;
            case 93:
                h = v[--x];
                break;
            case 0:
                return v[--x];
            default:
                u((g << 16 >> 16) - 16)
            }
    }
    var n = this
      , t = n.Function
      , s = Object.keys || function(e) {
        var a = {}
          , r = 0;
        for (var c in e)
            a[r++] = c;
        return a.length = r,
        a
    }
      , b = {}
      , k = {};
    return r
}
)

Function(function(l) {
    return 'e(e,a,r){(b[e]||(b[e]=t("x,y","x "+e+" y")(r,a)}a(e,a,r){(k[r]||(k[r]=t("x,y","new x[y]("+Array(r+1).join(",x[y]")(1)+")")(e,a)}r(e,a,r){n,t,s={},b=s.d=r?r.d+1:0;for(s["$"+b]=s,t=0;t<b;t)s[n="$"+t]=r[n];for(t=0,b=s=a;t<b;t)s[t]=a[t];c(e,0,s)}c(t,b,k){u(e){v[x]=e}f{g=,ting(bg)}l{try{y=c(t,b,k)}catch(e){h=e,y=l}}for(h,y,d,g,v=[],x=0;;)switch(g=){case 1:u(!)4:f5:u((e){a=0,r=e;{c=a<r;c&&u(e[a]),c}}(6:y=,u((y8:if(g=,lg,g=,y===c)b+=g;else if(y!==l)y9:c10:u(s(11:y=,u(+y)12:for(y=f,d=[],g=0;g<y;g)d[g]=y.charCodeAt(g)^g+y;u(String.fromCharCode.apply(null,d13:y=,h=delete [y]14:59:u((g=)?(y=x,v.slice(x-=g,y:[])61:u([])62:g=,k[0]=65599*k[0]+k[1].charCodeAt(g)>>>065:h=,y=,[y]=h66:u(e(t[b],,67:y=,d=,u((g=).x===c?r(g.y,y,k):g.apply(d,y68:u(e((g=t[b])<"<"?(b--,f):g+g,,70:u(!1)71:n72:+f73:u(parseInt(f,3675:if(){bcase 74:g=<<16>>16g76:u(k[])77:y=,u([y])78:g=,u(a(v,x-=g+1,g79:g=,u(k["$"+g])81:h=,[f]=h82:u([f])83:h=,k[]=h84:!085:void 086:u(v[x-1])88:h=,y=,h,y89:u({e{r(e.y,arguments,k)}e.y=f,e.x=c,e})90:null91:h93:h=0:;default:u((g<<16>>16)-16)}}n=this,t=n.Function,s=Object.keys||(e){a={},r=0;for(c in e)a[r]=c;a=r,a},b={},k={};r'.replace(/[-]/g, function(e) {
        return l[15 & e.charCodeAt(0)]
    })
}("v[x++]=v[--x]t.charCodeAt(b++)-32function return ))++.substrvar .length(),b+=;break;case ;break}".split("")))()('gr$Daten Иb/s!l y͒yĹg,(lfi~ah`{mv,-n|jqewVxp{rvmmx,&effkx[!cs"l".Pq%widthl"@q&heightl"vr*getContextx$"2d[!cs#l#,*;?|u.|uc{uq$fontl#vr(fillTextx$$龘ฑภ경2<[#c}l#2q*shadowBlurl#1q-shadowOffsetXl#$$limeq+shadowColorl#vr#arcx88802[%c}l#vr&strokex[ c}l"v,)}eOmyoZB]mx[ cs!0s$l$Pb<k7l l!r&lengthb%^l$1+s$jl  s#i$1ek1s$gr#tack4)zgr#tac$! +0o![#cj?o ]!l$b%s"o ]!l"l$b*b^0d#>>>s!0s%yA0s"l"l!r&lengthb<k+l"^l"1+s"jl  s&l&z0l!$ +["cs\'(0l#i\'1ps9wxb&s() &{s)/s(gr&Stringr,fromCharCodes)0s*yWl ._b&s o!])l l Jb<k$.aj;l .Tb<k$.gj/l .^b<k&i"-4j!+& s+yPo!]+s!l!l Hd>&l!l Bd>&+l!l <d>&+l!l 6d>&+l!l &+ s,y=o!o!]/q"13o!l q"10o!],l 2d>& s.{s-yMo!o!]0q"13o!]*Ld<l 4d#>>>b|s!o!l q"10o!],l!& s/yIo!o!].q"13o!],o!]*Jd<l 6d#>>>b|&o!]+l &+ s0l-l!&l-l!i\'1z141z4b/@d<l"b|&+l-l(l!b^&+l-l&zl\'g,)gk}ejo{cm,)|yn~Lij~em["cl$b%@d<l&zl\'l $ +["cl$b%b|&+l-l%8d<@b|l!b^&+ q$sign ', [l = {}]);


function get_signature(articleId){
    return (0, l.sign)(articleId);
} get_signature();

//console.log(get_signature(6324806984713372162))
//function get_signature(userId, max_behot_time) {
//    return e(userId + "" + max_behot_time)
//}

