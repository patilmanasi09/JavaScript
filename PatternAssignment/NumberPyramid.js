function printNumberPyramid(n){
    for(i=1;i<=n;i++){
        line=''

        for(j=1;j<=n-i;j++){
            line+=' '
        }

        for(k=1;k<=i;k++){
            line+= i + ' '
        }

        console.log(line)
    }
}

printNumberPyramid(4)