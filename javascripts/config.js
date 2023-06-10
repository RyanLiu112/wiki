MathJax = {
  tex: {
    inlineMath: [ ['$', '$'], ['\\(', '\\)'] ],
    displayMath: [ ['$$', '$$'], ['\\[', '\\]'] ],
    processEscapes: true,      // use \$ to produce a literal dollar sign
    processEnvironments: true, // process \begin{xxx}...\end{xxx} outside math mode
    processRefs: true,         // process \ref{...} outside of math mode
    tags: 'ams',               // or 'ams' or 'all'
    tagSide: 'right',          // side for \tag macros
    tagIndent: '0.8em',        // amount to indent tags
    useLabelIds: false,        // use label name rather than tag for ids
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  // options: {
  //   skipHtmlTags: ['noscript', 'style', 'textarea', 'pre', 'code'],
  //   ignoreHtmlClass: 'tex2jax_ignore',
  //   renderActions: {
  //     find_script_mathtex: [10, function (doc) {
  //       for (const node of document.querySelectorAll('script[type^="math/tex"]')) {
  //         const display = !!node.type.match(/; *mode=display/);
  //         const math = new doc.options.MathItem(node.textContent, doc.inputJax[0], display);
  //         const text = document.createTextNode('');
  //         node.parentNode.replaceChild(text, node);
  //         math.start = { node: text, delim: '', n: 0 };
  //         math.end = { node: text, delim: '', n: 0 };
  //         doc.math.push(math);
  //       }
  //     }, '']
  //   }
  // },
  // chtml: {
  //   scale: 0.8
  // }
};