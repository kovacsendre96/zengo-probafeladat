(this["webpackJsonpzengo-probafeladat"]=this["webpackJsonpzengo-probafeladat"]||[]).push([[0],{45:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),i=a(23),s=a.n(i),l=a(4),o=a(5),r=a.n(o),A=(a(45),a(9)),d=a(10),j=a(13);function u(e,t){r.a.post("http://probafeladat-api.zengo.eu/api/state_city",{state_id:e},{headers:{token:"6224922a57237ec294f5ef05a8a87b48"}}).then((function(e){t(e.data.data)})).catch((function(e){return console.log(e)}))}var f=a(0),b=function(e){var t=e.selectInput,a=e.cities,c=e.setCities,i=Object(n.useState)(),s=Object(l.a)(i,2),o=s[0],b=s[1],h=Object(n.useState)(),p=Object(l.a)(h,2),m=p[0],g=p[1],v=Object(n.useState)(),x=Object(l.a)(v,2),B=x[0],O=x[1],Q=Object(n.useState)(""),w=Object(l.a)(Q,2),F=w[0],N=w[1];function P(){for(var e=document.querySelectorAll("li"),t=0;t<e.length;t++)e[t].className="",e[t].nextElementSibling.className="selected-wrapper hide"}var X=function(e){P(),N(a.filter((function(t){return t.name===e.target.innerText}))[0].name),O(a.filter((function(t){return t.name===e.target.innerText}))[0].id),e.target.nextSibling.className="selected-wrapper",e.target.className="hide"},R=function(e){N(e.target.value)},k=function(){var e=a.findIndex((function(e){return e.id===B}));!function(e,t,a,n,c){r.a.patch("http://probafeladat-api.zengo.eu/api/city",{city_id:e,name:t},{headers:{token:"6224922a57237ec294f5ef05a8a87b48"}}).then((function(e){""!==e.data.data&&a([].concat(Object(j.a)(n),[n[c].name=e.data.data.name])),e.data.errorMessage&&alert(e.data.errorMessage.name[0])})).catch((function(e){return console.log(e)}))}(B,F,c,a,e),P()},L=function(){!function(e,t,a){r.a.delete("http://probafeladat-api.zengo.eu/api/city",{data:{city_id:e},headers:{token:"6224922a57237ec294f5ef05a8a87b48"}}).then((function(e){u(t,a)})).catch((function(e){return console.log(e)}))}(B,o,c),P()};return void 0!==t&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"form-container",children:[Object(f.jsx)("h2",{children:"Megye"}),Object(f.jsxs)("select",{onChange:function(e){var a=t.filter((function(t){return t.name===e.target.value}));b(a[0].id),u(a[0].id,c),P()},children:[Object(f.jsx)("option",{className:"default-option",selected:!0,disabled:!0,hidden:!0,children:"V\xe1lassz megy\xe9t!"}),t.map((function(e){return Object(f.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]}),null!==a&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"rectangle blue"}),Object(f.jsxs)("div",{className:"new-city-container",children:[Object(f.jsx)("h2",{children:"\xdaj v\xe1ros"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,t,a,n){r.a.put("http://probafeladat-api.zengo.eu/api/city",{name:e,state_id:t},{headers:{token:"6224922a57237ec294f5ef05a8a87b48"}}).then((function(e){a([].concat(Object(j.a)(n),[e.data.data])),e.data.errorMessage&&alert(e.data.errorMessage.name[0])})).catch((function(e){return console.log(e)}))}(m,o,c,a),g("")},children:[Object(f.jsx)("input",{placeholder:"Telep\xfcl\xe9s neve",value:m,onChange:function(e){g(e.target.value)},type:"text"}),Object(f.jsx)("button",{className:"new-city__button",type:"submit",children:"Felveszem"})]})]}),Object(f.jsx)("div",{className:"rectangle green"}),Object(f.jsxs)("div",{className:"cities-container",children:[Object(f.jsxs)("div",{className:"cities__top",children:[Object(f.jsx)("h6",{className:"cities__top-title",children:"Megye"}),Object(f.jsx)("h6",{className:"cities__top-county",children:t.filter((function(e){return e.id===o}))[0].name})]}),Object(f.jsxs)("div",{className:"cities__content",children:[Object(f.jsx)("h6",{className:"cities__content-title",children:"V\xe1rosok"}),Object(f.jsx)("ul",{className:"cities__content-list",children:a.map((function(e){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("li",{onClick:X,children:[" ",e.name]},e.id),Object(f.jsxs)("div",{className:"selected-wrapper hide",children:[Object(f.jsx)("input",{onChange:R,value:F,className:"selected-item"}),Object(f.jsx)("button",{onClick:L,className:"button delete",children:Object(f.jsx)(A.a,{icon:d.c})}),Object(f.jsx)("button",{onClick:k,className:"button modify",children:Object(f.jsx)(A.a,{icon:d.a})}),Object(f.jsx)("button",{onClick:P,className:"button cancel",children:Object(f.jsx)(A.a,{icon:d.b})})]})]})}))})]})]})]})]})};var h=function(){var e=Object(n.useState)([{}]),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),s=Object(l.a)(i,2),o=s[0],A=s[1];return Object(n.useEffect)((function(){r.a.get("https://probafeladat-api.zengo.eu/api/all_states",{headers:{token:"6224922a57237ec294f5ef05a8a87b48"}}).then((function(e){c(e.data.data)})).catch((function(e){return console.log(e)}))}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("header",{children:Object(f.jsx)("img",{className:"logo",src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAiAJQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDy238ZeKry4jgg1zWJ5pGCpHHdyszMegAB5NbH/Fyv+pq/8maw/AviuXwL400PxFBAl1NpV7FepDISFdo3DBSR2OK+q4/+CkvieR1RPBelu7HAVbiUkn0FfG0lTkv3k2n95/U2YzxtCaWCwsakbatyUbP5o+cP+Llf9TV/5M1k3ni7xdpt09td61rVrcR8PDNdTI68Z5BORxX6c+B/it42vPAbeL/HGlaH4K0rZ5wjuppTL5WM7iOxI6L1r89/2lvifpPxe+K1/wCItHsTZ20kMUDSN1uHRdvmkfw5AAA9FGea6MRh1RgpKbu+mx4uS5zVzTFzw88LFRjvKLUlfte1n8mfoP8AsZ39zqf7Nng+5vLiW7uX+2bpp3Lu2LycDJPJ4AH4V7XXhv7Ev/JsXgz/ALff/S2evcq+jw/8GHovyPwzOklmeKS/5+T/APSmFFeNa98J/iNqWuajd2PxSu9Psri5klgs1s0YQRsxKxg99oIH4V4548n+Kmj+PtI8DeF/iXeeIfE92Vlu0Fogh0+3zzLMw6H0Xqa3PGPsiivJfjt8TNb+HHh3w3pfh+KC/wDF/iLUItIsGuuIlkZTumcei4HH+1XNr8E/ivLbm5m+Md6mpk7jDDZoLUHB4APOM4/DNAHv1FeQfAr4keIte1zxf4J8Zpat4q8LTQLLeWY2xXkEyF4pQvY4HI9xXLar4m8d/Gr4n+LPDHhDX4/B/h7wtLHaXeoJCJLq5uHXLBM8Kq4I98UAfRFFfNvjjwv8WPg3oOo+L9K+IMnjCw0i3e9vNK1u3VfOgjG6TYyfdIUMfwr1vUfinY2PwZb4h+RI1h/Yq6ylv/GVaESKn1OQKAO3or5w8J+C/i78VdB0/wAUav8AEWTwmmp2y3dtpWi2ylYI3XdGrs3VsEZq54V8WePPhR8W/DfgfxtrFv4p0bxNHcjTNXEflTxTQpvaOUd8qRg+pHvQB9B0V458dviN4k0fxJ4O8C+Cjaw+J/FElwVvbxd0dnbwoHkkK9yQePoaxG+CHxVhtRPB8ZL99SBLeXPaIbbOOmAM4zn9KAPfqK8G+E/7Rn2rR9V03x80Nh4q0PU59KvPsq5imaMKRKo7AhuntRQB+Xem6fc6tqFrY2cLXF3dSrBDCnV3YhVUe5JAr7p+D/7Ofhz9nfw/D42+IkX9r+KGXzLHRbeMzNG452qg++/TJ6LXwpY3s+m3lvd20jQ3NvIssUinBRlOQR7ggV9L2f7eniq11R9Tfw/pNxqTjb9ql3FlX+6v90ewr5LCTo025VN+h/SvEuFzXGQhQwH8N359VFvyu+j8jC+P3xD+J/x21xmu/D2sWOgwOfsmlx2smxR2Z+Pmc+vbtXhusaDqXh+4SDU7C40+Z13rHcxGNiuSMgEdMg/lX1J/w8Y8b/8AQD0r/wAerxP45fG7Vvjv4lsda1e0t7O4tLQWapbZ2lQ7vk575c0sR7Kd5qbcvQvJo5lhnDC1MJClRXVSu/8Ag36s/Q39iX/k2LwZ/wBvv/pbPXuVeG/sS/8AJsXgz/t9/wDS2evcq+mw/wDBh6L8j8Azr/kaYr/r5P8A9KZ498a/jJd+H9QtPA3gyBdW+IWsLtt4esdhGeDcznsqjkA9cVu/Bf4O2Xwl0OdXupNY8RajJ9p1XWbjmW6mPXnsg7LXnmpfsgrcePPEXiuw+IGv6TqOtXLzzm2CfKrOWWIMedqggAegFT/8Mt63/wBFd8Wf99JXQeMZP7YGkz6n4q+DYj1ObQkfxEbb+1LfAe2kkQBGBPGflOM11X/CgfF3/RZvFn/fMP8AhXfeLvhjo3j7wPH4X8RJJqdmqRDz2bbN5kYGJVYfdfOTkeprzJf2Z/EVvbmytfjF4st9LwUFp+7bCntvI3fjQB0Hwf8Ag9Z+A/GXinX28YXni7XNSSC1vprxoy8ZiBChtnQ4IGD6Vy/7Nf8AyVn48f8AYxp/6A1emfCn4Q6F8H9GubHRhcTTXk32i8vbuUyTXMuMbmY0vgL4WWPgHxL4y1m1u5ribxNfi/njkACxMARtXHbnvQBF8e/+SF/EX/sXNR/9JZK8y1+N5f2ColRSzf8ACB2xwBngWcZP6V7f4z8Mw+NPB+u+HriV4LfVrCewkljGWRZY2QsPcBqp6L4XsvB/w3sPDhik1XTtL0mPTzGyBnuYooRHgr0JZV6e9AEPwmvoNS+Fvg+6tpFlgl0i0ZWU5B/crXkvx8uYv+GifgFb+YpnF/qLmPPzBTAgBx6ZB/I15V4MbwA1jJ/wivxj1/4YxF2Mvhu6dd1o2TlQJBwM9AKj8D+DtB8TftMeBb3wn4l1Xx5PpP2q813xFeMXhjTytsES8bQd5bIH94elAHrvxSYWv7XXwXnmIihlstWhSRzhWk8j7oPryOPevoGuK+Knwl0L4u6HDp+spLHLay+fZ31q5jntZR/GjDp7+tecN+zL4intfsNz8YvFk+l42Nafu1yvpvA3fjQB8+3nhfUvF3xI+Jd/o9s1/aDxRdRedCNy7lSLIyPSivtf4dfDrQ/hb4Xg0HQLY29lG7Ss0jF5JZG+9I7HlmPHPsKKAPyr/smx/wCfK3/79L/hR/ZNj/z5W/8A36X/AAoor44/qUP7Jsf+fK3/AO/S/wCFH9k2P/Plb/8Afpf8KKKAP0c/ZJhSD9nzwokaLGg+14VRgD/S5u1ev0UV9XR/hR9Efzfm3/IwxH+OX/pTCiiitjygooooAKKKKACiiigDy34peDdAvtQsp7nQ9NuJ5JVZ5ZbSNmY7+pJGTXc+E9F0/RdFt49PsLawR0UsttCsYJx1IUCiigDZooooAKKKKAP/2Q==",alt:"logo"})}),"                                              ",Object(f.jsx)("div",{className:"triangle-container"}),Object(f.jsx)(b,{selectInput:a,cities:o,setCities:A}),Object(f.jsx)("div",{className:null===o?"triangle-container bottom":"triangle-container bottom active"}),Object(f.jsx)("div",{className:null===o?"illustration-wrapper":"illustration-wrapper hide"})]})};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(h,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.b2648b85.chunk.js.map