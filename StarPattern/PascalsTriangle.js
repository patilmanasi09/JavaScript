function printPascalsTriangle(n){
    for(i=0;i<n;i++){
        line=''
        num=1

        for(s=1;s<=n-i-1;s++){
            line+=' '
        }

        for(j=0;j<=i;j++){
            line+=num+' '
            num = num*(i-j)/(j+1)
        }

        console.log(line)
    }
}

printPascalsTriangle(5)

