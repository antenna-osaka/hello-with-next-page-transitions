import getConfig from 'next/config'

export function getBasePath(path="/"){
  const {publicRuntimeConfig={}}=getConfig();
  const {assetPrefix=""}=publicRuntimeConfig;
  
  return assetPrefix+path;
}