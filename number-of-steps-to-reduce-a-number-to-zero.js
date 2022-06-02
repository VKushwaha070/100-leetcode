/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = (num)=> {
    let n =  num;
    let step = 0;
      while(n>0) {
          if(n%2==0) {
              n=n/2
              step+= 1
          } else {
              n = n-1
              step += 1
          }
      }
      return step;
  };