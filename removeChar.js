function removeChar(str){
    
    str1 = str.split('');
    str1.shift();
    str1.pop();
    return str1.join('');
        
};