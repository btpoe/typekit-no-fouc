# Installation

1. Add the following script to the head of your site:
```
<script>
    (function(t,k,f,a,c,e,s){
        t&&(e=k.createElement(f),s=k.getElementsByTagName(a)[0],
        e.innerHTML=t.getItem(c)&&s.parentNode.insertBefore(e,s))
    })(window.localStorage,document,'style','script','ts.fontFace');
</script>
```

2. Run `npm install fouckit --save` in your project.

3. Include `src/index.js` through your preferred method
 - Browserify: `require('fouckit');`
 - Babel / ES2015: `import 'fouckit';`
 - Old school: `<script src="path/to/files/fouckit/src/index.js"></script>`

Enjoy async typekit sans-FOUC!
