const run = str => {
    let maxLength = 0;
    str.forEach(item => maxLength = item.length > maxLength ? item.length : maxLength);
    //var item = function(){maxLength = item.length > maxLength ? item.length : maxLength}
    //maxLength = item.length > maxLength ? item.length : maxLength
    //item.length가 0보다 크면 item.length : 그렇지 않으면 0, maxLength 변수에 재할당
  
    let result = '';
    for (let i = 0; i < maxLength; i++) {
      for (let j = 0; j < 5; j++) {
        result += str[j].substring(i, i+1);
      }
    }

  
    console.log('result', result);
  };
  
  run(
  [ 'ABCDE',
    'abcde',
    '01234',
    'FGHIJ',
    'fghij' ]
  );
  
  run(
  [ 'AABCDD',
    'afzz',
    '09121',
    'a8EWg6',
    'P5h3kx' ]
  );