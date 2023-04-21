
  export  function downloadFile(content,name){
    const blob = new Blob([content]);
    const link = document.createElement('a');
    link.download = name;
    link.style.display = 'none';
    const src = URL.createObjectURL(blob,{type:'application/octet-stream'});
    link.href = src;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(src);
  }
  export default {
    downloadFile
  }