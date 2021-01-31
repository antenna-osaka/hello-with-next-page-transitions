
const isProd = process.env.NODE_ENV === 'production';
let basePath="";

if(process.env.GITHUB_PAGES){
  basePath="/hello-with-next-page-transitions";
}

module.exports = {
  trailingSlash:true,
  basePath,
  //参照用
  publicRuntimeConfig:{
    basePath,
  }
}
