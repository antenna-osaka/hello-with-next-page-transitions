
const debug = process.env.NODE_ENV !== 'production'

let assetPrefix="/hello-with-next-page-transitions/";

if(debug){
  assetPrefix="";
}
module.exports = {
  trailingSlash:true,
  assetPrefix,
  //参照用
  publicRuntimeConfig:{
    assetPrefix,
  }
}
