/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    
    let mag = magazine.split('');
    let ran = ransomNote.split('');

     for (let i = 0; i < ran.length; i++) {
      if(mag.includes(ran[i])){
       const magIndex = mag.indexOf(ran[i]);
        if (magIndex > -1) {
          mag.splice(magIndex, 1); 
    }
  }
         else {
    return false;
  }
}
return true;
    
};