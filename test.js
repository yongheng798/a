
const translate = (inputStr) => {
    let chineseNum = 'Yi Er San Si Wu Liu Qi Ba Jiu Ling'.split(' ')
      let englishNum = 'One Two Three Four Five Six Seven Eight Nine Zero'.split(' ')
      let cnObj = {
        'Yi': 'One',
        'Er': 'Two',
        'San': 'Three',
        'Si': 'Four',
        'Wu': 'Five',
        'Liu': 'Six',
        'Qi': 'Seven',
        'Ba': 'Eight',
        'Jiu': 'Nine',
        'Ling': 'Zero'
      }
      let enObj = {
        'One': 'Yi',
        'Two': 'Er',
        'Three': 'San',
        'Four': 'Si',
        'Five': 'Wu',
        'Six': 'Liu',
        'Seven': 'Qi',
        'Eight': 'Ba',
        'Nine': 'Jiu',
        'Zero': 'Ling'
      }
      // 0 3
      let resArr = []
      let strLen = inputStr.length
      let temi = 0
      for (let i = 0; i < strLen; i++) {
        if (/^[A-Z]/.test(inputStr[i])) {
          if (i > 0) {
            resArr.push(inputStr.substring(temi, i))
          }
          temi = i
        }
      }
      let lastChild = inputStr.substring(resArr.join('').length, strLen)
      let allArr = [...resArr, ...[lastChild]]
      let result = []

      for (let i = 0; i < allArr.length; i++) {
        if (allArr[i] === 'Double' && !allArr[i + 1]) {
          result.push(allArr[i + 1])
        } else {
          result.push(allArr[i])
        }
      }
      if(result.includes("Double")){
           return "ERROR"
       }
      let res = []
      result.forEach((item, index) => {
        res.push(enObj[item])
      })
      
    // 如果输入的是中文,并且是不合法的Double输入,并且有多个 DoubleDouble 
    if(inputStr.includes("DoubleDouble")){
       return "ERROR"
    }
    // 根据每个大写字母，进行字符串切割
    return res.join("");
};
