function printZigZag(n){
    let width = 2*n - 1

    for(i=1;i<=n;i++){
        line=''

        for(j=1;j<=width;j++){
            if(
                (i==1 && (j==n-2 || j==n+2)) ||
                (i==2 && (j==n-3 || j==n-1 || j==n+1 || j==n+3)) ||
                (i==3 && (j==n-4 || j==n || j==n+4)) 
            ){
                line+='*'
            }else{
                line+=' '
            }
        }

        console.log(line)
    }
}

printZigZag(5)