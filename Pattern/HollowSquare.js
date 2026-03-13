function printHollowSquare(n){
    for(i=1;i<=n;i++){
        line=''

        for(j=1;j<=n;j++){
            if(i==1 || i==n || j==1 || j==n){
                line+='* '
            }else{
                line+='  '
            }
        }

        console.log(line)
    }
}

printHollowSquare(5)