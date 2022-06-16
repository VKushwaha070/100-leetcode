/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    let ans = 0;
for(let i = 0; i < sentences.length; i++){
     let sum = 1; 
    let sent = sentences[i];
    for(let j = 0; j < sent.length; j++){
        if(sent[j] == " "){
            sum++;
        }
    }
    ans = Math.max(ans, sum);
}
return ans;

};