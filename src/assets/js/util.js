export  const isIOS=()=>{
  let u = navigator.userAgent, isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
}
export  const doDownload=(src)=>{
    var form = document.createElement('form');
    form.action = src;
    document.getElementsByTagName('body')[0].appendChild(form);
    form.submit();
}
