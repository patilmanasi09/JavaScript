function printHourglass(n){

    for(i=n;i>=1;i--){
        line=''

        for(j=1;j<=n-i;j++){
            line+=' '
        }

        for(k=1;k<=2*i-1;k++){
            line+='*'
        }

        console.log(line)
    }

    for(i=2;i<=n;i++){
        line=''

        for(j=1;j<=n-i;j++){
            line+=' '
        }

        for(k=1;k<=2*i-1;k++){
            line+='*'
        }

        console.log(line)
    }
}

printHourglass(4)