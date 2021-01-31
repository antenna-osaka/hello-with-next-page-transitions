

let assetPrefix="";

if(process.env.GITHUB_PAGES){
  assetPrefix="/hello-with-next-page-transitions";
}

module.exports = {
  trailingSlash:true,
  assetPrefix,
  //参照用
  publicRuntimeConfig:{
    assetPrefix,
  }
}
