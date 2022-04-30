module.exports = function (context, options) {
  return {
    name: 'docusaurus-baidu-analytics-plugin',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            innerHTML: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?126fd294e06357619f302bdbb1d94d9d";
              hm.defer = true;
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `,
          },
          {
            tagName: 'meta',
            attributes: {
              name: 'baidu-site-verification',
              content: 'code-5DhAOQCH79',
            },
          },
        ],
      };
    },
  };
};
